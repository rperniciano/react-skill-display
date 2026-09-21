import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { useTheme } from '../useTheme';

// Store-backed localStorage so next-themes can round-trip a preference.
const store: Record<string, string> = {};
const localStorageMock = {
  getItem: vi.fn((key: string) => (key in store ? store[key] : null)),
  setItem: vi.fn((key: string, value: string) => {
    store[key] = String(value);
  }),
  removeItem: vi.fn((key: string) => {
    delete store[key];
  }),
  clear: vi.fn(() => {
    for (const key of Object.keys(store)) delete store[key];
  }),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  configurable: true,
  writable: true,
});

/** Seed a saved preference without going through the spied setItem. */
function seedSavedTheme(value: string) {
  store.theme = value;
}

function mockSystemPrefersDark(prefersDark: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: prefersDark && query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

const wrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('useTheme adapter', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
    document.documentElement.className = '';
    document.documentElement.style.colorScheme = '';
    mockSystemPrefersDark(false);
  });

  it('exposes exactly the { theme, toggleTheme } contract', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(Object.keys(result.current).sort()).toEqual([
      'theme',
      'toggleTheme',
    ]);
    expect(typeof result.current.toggleTheme).toBe('function');
  });

  it('resolves to light when nothing is saved and the system prefers light', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe('light');
  });

  it("maps the 'system' default to a concrete dark when the OS prefers dark", () => {
    mockSystemPrefersDark(true);

    const { result } = renderHook(() => useTheme(), { wrapper });

    // Never leaks 'system' through the adapter.
    expect(result.current.theme).toBe('dark');
  });

  it('honours a previously saved dark preference', () => {
    seedSavedTheme('dark');

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe('dark');
  });

  it('honours a saved light preference over a dark system preference', () => {
    seedSavedTheme('light');
    mockSystemPrefersDark(true);

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe('light');
  });

  it('reads the saved preference from the legacy "theme" key', () => {
    renderHook(() => useTheme(), { wrapper });

    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
  });

  it('toggles between light and dark', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('light');
  });

  it('persists the toggled theme under the legacy "theme" key', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorageMock.setItem).toHaveBeenLastCalledWith('theme', 'light');
  });

  it('pins a concrete theme when toggling away from the system preference', () => {
    mockSystemPrefersDark(true);

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
  });

  it('drives the `dark` class on <html>', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    act(() => {
      result.current.toggleTheme();
    });
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    act(() => {
      result.current.toggleTheme();
    });
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('falls back to light instead of throwing when there is no provider', () => {
    // Behaviour change from the hand-rolled context, which threw. next-themes
    // returns an inert default, so the adapter must still honour its type.
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(() => result.current.toggleTheme()).not.toThrow();
  });
});
