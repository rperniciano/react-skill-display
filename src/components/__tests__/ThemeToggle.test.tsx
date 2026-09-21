import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '../ThemeToggle';

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

/** ThemeToggle only needs the theme provider — no router/query/language. */
function renderToggle() {
  return render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
    document.documentElement.className = '';
    document.documentElement.style.colorScheme = '';
    mockSystemPrefersDark(false);
  });

  it('renders the theme toggle button', () => {
    renderToggle();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays moon icon in light mode by default', () => {
    renderToggle();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità scura');
    expect(button).toHaveAttribute('title', 'Attiva modalità scura');
  });

  it('displays sun icon in dark mode', () => {
    seedSavedTheme('dark');

    renderToggle();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità chiara');
    expect(button).toHaveAttribute('title', 'Attiva modalità chiara');
  });

  it('toggles theme when clicked', async () => {
    seedSavedTheme('light');
    renderToggle();
    const user = userEvent.setup();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità scura');

    await user.click(button);

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('loads the saved theme from localStorage', () => {
    seedSavedTheme('dark');

    renderToggle();

    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
  });

  it('applies the dark class to the document root when in dark mode', () => {
    seedSavedTheme('dark');

    renderToggle();

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('removes the dark class from the document root when in light mode', () => {
    document.documentElement.classList.add('dark');
    seedSavedTheme('light');

    renderToggle();

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('follows the system dark mode preference when nothing is saved', () => {
    mockSystemPrefersDark(true);

    renderToggle();

    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Attiva modalità chiara'
    );
  });

  it('has proper button styling', () => {
    renderToggle();

    // Ghost variant icon button sizing from the Button component.
    expect(screen.getByRole('button')).toHaveClass('h-10');
  });

  it('saves the theme preference to localStorage when toggled', async () => {
    seedSavedTheme('light');
    renderToggle();
    const user = userEvent.setup();

    const button = screen.getByRole('button');

    await user.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');

    await user.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
  });

  it('updates aria-label and title when the theme changes', async () => {
    seedSavedTheme('light');
    renderToggle();
    const user = userEvent.setup();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità scura');
    expect(button).toHaveAttribute('title', 'Attiva modalità scura');

    await user.click(button);

    expect(button).toHaveAttribute('aria-label', 'Attiva modalità chiara');
    expect(button).toHaveAttribute('title', 'Attiva modalità chiara');
  });

  it('handles multiple rapid toggles correctly', async () => {
    seedSavedTheme('light');
    renderToggle();
    const user = userEvent.setup();

    const button = screen.getByRole('button');

    await user.click(button); // light -> dark
    await user.click(button); // dark -> light
    await user.click(button); // light -> dark

    expect(localStorageMock.setItem).toHaveBeenLastCalledWith('theme', 'dark');
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità chiara');
  });

  describe('hydration safety', () => {
    // The server cannot know the visitor's theme, so the pre-mount markup must
    // not depend on it. Effects do not run during a server render, so `mounted`
    // is false and the same placeholder must come out either way.
    function serverMarkupWithSystem(prefersDark: boolean) {
      mockSystemPrefersDark(prefersDark);
      return renderToStaticMarkup(
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      );
    }

    it('renders theme-independent markup before mount', () => {
      seedSavedTheme('dark');
      const darkMarkup = serverMarkupWithSystem(true);

      localStorageMock.clear();
      const lightMarkup = serverMarkupWithSystem(false);

      expect(darkMarkup).toEqual(lightMarkup);
    });

    it('renders neither icon before mount', () => {
      const markup = serverMarkupWithSystem(false);
      const button = markup.slice(markup.indexOf('<button'));

      expect(button).toContain('aria-label="Cambia tema"');
      expect(button).not.toContain('lucide-moon');
      expect(button).not.toContain('lucide-sun');
    });
  });
});
