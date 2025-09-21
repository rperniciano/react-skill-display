import { describe, it, expect, beforeEach, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import ThemeToggle from '../ThemeToggle';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    
    // Reset document classes
    document.documentElement.classList.remove('dark');
  });

  it('renders the theme toggle button', () => {
    renderWithProviders(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('displays moon icon in light mode by default', () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    renderWithProviders(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità scura');
    expect(button).toHaveAttribute('title', 'Attiva modalità scura');
  });

  it('displays sun icon in dark mode', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    
    renderWithProviders(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità chiara');
    expect(button).toHaveAttribute('title', 'Attiva modalità chiara');
  });

  it('toggles theme when clicked', async () => {
    localStorageMock.getItem.mockReturnValue('light');
    
    renderWithProviders(<ThemeToggle />);
    const user = userEvent.setup();
    
    const button = screen.getByRole('button');
    
    // Initially should be light mode
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità scura');
    
    // Click to toggle
    await user.click(button);
    
    // Should save dark theme to localStorage
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('loads saved theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    
    renderWithProviders(<ThemeToggle />);
    
    // Should call localStorage.getItem on mount
    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
  });

  it('applies dark class to document root when in dark mode', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    
    renderWithProviders(<ThemeToggle />);
    
    // Should add dark class to document element
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('removes dark class from document root when in light mode', () => {
    // First set dark mode
    document.documentElement.classList.add('dark');
    localStorageMock.getItem.mockReturnValue('light');
    
    renderWithProviders(<ThemeToggle />);
    
    // Should remove dark class from document element
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('detects system dark mode preference when no saved theme', () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    // Mock system dark mode preference
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    
    renderWithProviders(<ThemeToggle />);
    
    // Should check for system preference
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
  });

  it('has proper button styling', () => {
    renderWithProviders(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    
    // Should be a ghost variant icon button with proper size
    expect(button).toHaveClass('h-10'); // icon size styling from Button component
  });

  it('saves theme preference to localStorage when toggled', async () => {
    localStorageMock.getItem.mockReturnValue('light');
    
    renderWithProviders(<ThemeToggle />);
    const user = userEvent.setup();
    
    const button = screen.getByRole('button');
    
    // Toggle from light to dark
    await user.click(button);
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
    
    // Toggle back to light
    await user.click(button);
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
  });

  it('updates aria-label and title when theme changes', async () => {
    localStorageMock.getItem.mockReturnValue('light');
    
    renderWithProviders(<ThemeToggle />);
    const user = userEvent.setup();
    
    const button = screen.getByRole('button');
    
    // Initially light mode
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità scura');
    expect(button).toHaveAttribute('title', 'Attiva modalità scura');
    
    // Click to toggle to dark
    await user.click(button);
    
    // Should update to light mode labels
    expect(button).toHaveAttribute('aria-label', 'Attiva modalità chiara');
    expect(button).toHaveAttribute('title', 'Attiva modalità chiara');
  });

  it('handles multiple rapid toggles correctly', async () => {
    localStorageMock.getItem.mockReturnValue('light');
    
    renderWithProviders(<ThemeToggle />);
    const user = userEvent.setup();
    
    const button = screen.getByRole('button');
    
    // Rapidly toggle multiple times
    await user.click(button); // light -> dark
    await user.click(button); // dark -> light
    await user.click(button); // light -> dark
    
    // Should end up in dark mode
    expect(localStorageMock.setItem).toHaveBeenLastCalledWith('theme', 'dark');
  });
});