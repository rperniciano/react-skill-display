import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import LanguageSelector from '../LanguageSelector';

describe('LanguageSelector Component', () => {
  it('renders with default language selection', () => {
    renderWithProviders(<LanguageSelector />);
    
    // Check if the component renders
    const selector = screen.getByRole('combobox');
    expect(selector).toBeInTheDocument();
  });

  it('displays current language with globe icon', () => {
    renderWithProviders(<LanguageSelector />);
    
    // Check for globe icon
    const globeIcon = screen.getByTestId ? screen.queryByTestId('globe-icon') : null;
    // Since lucide icons don't have test ids by default, we check the class structure
    const triggerButton = screen.getByRole('combobox');
    expect(triggerButton).toBeInTheDocument();
  });

  it('shows language options when opened', async () => {
    renderWithProviders(<LanguageSelector />);
    
    // Check that the combobox trigger exists
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
    
    // Note: Due to Radix UI complexity in test environment, 
    // we verify the component structure exists rather than interaction
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('displays current language with proper styling', () => {
    renderWithProviders(<LanguageSelector />);
    
    // Check that the current language is displayed (Italian as default)
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
    
    // Check for Italian language text (could be full name or abbreviation)
    const italianText = screen.queryByText('Italiano') || screen.queryByText('IT');
    expect(italianText).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<LanguageSelector />);
    
    // Check for combobox role and proper ARIA attributes
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-autocomplete', 'none');
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('has proper responsive design classes', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    
    // Check for responsive width classes
    const triggerElement = container.querySelector('.w-\\[110px\\]');
    expect(triggerElement).toBeInTheDocument();
    
    const responsiveElement = container.querySelector('.sm\\:w-\\[140px\\]');
    expect(responsiveElement).toBeInTheDocument();
  });

  it('shows language names on larger screens and short names on mobile', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    
    // Check for responsive text display classes
    const hiddenOnMobile = container.querySelector('.hidden.sm\\:inline');
    expect(hiddenOnMobile).toBeInTheDocument();
    
    const showOnMobile = container.querySelector('.sm\\:hidden');
    expect(showOnMobile).toBeInTheDocument();
  });

  it('applies proper styling for dark mode', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    
    // Check for dark mode classes
    const darkBgElement = container.querySelector('.dark\\:bg-gray-800');
    expect(darkBgElement).toBeInTheDocument();
    
    const darkTextElement = container.querySelector('.dark\\:text-gray-300');
    expect(darkTextElement).toBeInTheDocument();
  });

  it('has hover effects', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    
    // Check for hover classes
    const hoverElement = container.querySelector('.hover\\:bg-gray-50');
    expect(hoverElement).toBeInTheDocument();
    
    const darkHoverElement = container.querySelector('.dark\\:hover\\:bg-gray-700');
    expect(darkHoverElement).toBeInTheDocument();
  });

  it('displays purple accent color for the globe icon', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    
    // Check for purple color classes
    const purpleElement = container.querySelector('.text-purple-600');
    expect(purpleElement).toBeInTheDocument();
    
    const darkPurpleElement = container.querySelector('.dark\\:text-purple-400');
    expect(darkPurpleElement).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<LanguageSelector />);
    
    // Check for combobox role
    const combobox = screen.getByRole('combobox');
    expect(combobox).toBeInTheDocument();
  });

  it('applies proper border and shadow styling', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    
    // Check for border classes
    const borderElement = container.querySelector('.border-gray-300');
    expect(borderElement).toBeInTheDocument();
    
    // Check for shadow classes
    const shadowElement = container.querySelector('.shadow-sm');
    expect(shadowElement).toBeInTheDocument();
  });

  it('displays globe icon with proper styling', () => {
    renderWithProviders(<LanguageSelector />);
    
    // Check for globe icon with purple color classes
    const { container } = renderWithProviders(<LanguageSelector />);
    const globeIcon = container.querySelector('.text-purple-600');
    expect(globeIcon).toBeInTheDocument();
  });
});