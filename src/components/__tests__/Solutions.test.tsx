import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Solutions from '../Solutions';

describe('Solutions Component', () => {
  it('renders the section header correctly', () => {
    renderWithProviders(<Solutions />);
    
    expect(screen.getByText('Soluzioni')).toBeInTheDocument();
    expect(screen.getByText('Soluzioni Enterprise che posso realizzare')).toBeInTheDocument();
    expect(screen.getByText(/Focus su architetture scalabili/)).toBeInTheDocument();
  });

  it('displays all three main solution cards', () => {
    renderWithProviders(<Solutions />);
    
    // Check solution titles
    expect(screen.getByText('Piattaforme Enterprise Scalabili')).toBeInTheDocument();
    expect(screen.getByText('Integrazione AI & Cognitive Services')).toBeInTheDocument();
    expect(screen.getByText('Sistemi Mission-Critical ad Alta Disponibilità')).toBeInTheDocument();
  });

  it('shows detailed descriptions for each solution', () => {
    renderWithProviders(<Solutions />);
    
    // Check for key terms in descriptions
    expect(screen.getByText(/Sviluppo di soluzioni enterprise con architetture DDD/)).toBeInTheDocument();
    expect(screen.getByText(/Implementazione di servizi cognitivi Azure/)).toBeInTheDocument();
    expect(screen.getByText(/Progettazione di sistemi con 99.9% uptime/)).toBeInTheDocument();
  });

  it('renders solution icons correctly', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for icon containers with purple styling
    const iconContainers = container.querySelectorAll('.bg-purple-100');
    expect(iconContainers.length).toBeGreaterThanOrEqual(3); // At least three main solutions
  });

  it('displays the custom solutions highlight card', () => {
    renderWithProviders(<Solutions />);
    
    expect(screen.getByText('Ottimizzazione Performance & Legacy Code')).toBeInTheDocument();
    expect(screen.getByText(/Riduzione dell'85% del codice legacy/)).toBeInTheDocument();
  });

  it('shows CTA button with correct link', () => {
    renderWithProviders(<Solutions />);
    
    const ctaButton = screen.getByRole('link', { name: /Parliamo del tuo progetto/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', 'https://calendly.com/riccardo-perniciano/free-call');
    expect(ctaButton).toHaveAttribute('target', '_blank');
    expect(ctaButton).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has proper section id for navigation', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    const solutionsSection = container.querySelector('#solutions');
    expect(solutionsSection).toBeInTheDocument();
  });

  it('applies proper background styling', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gray-50');
    expect(section?.className).toContain('dark:bg-gray-900');
  });

  it('has responsive grid layout for solutions', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for responsive grid
    const gridContainer = container.querySelector('.grid.md\\:grid-cols-3');
    expect(gridContainer).toBeInTheDocument();
  });

  it('applies hover effects to solution cards', () => {
    const { container } = renderWithProviders(<Solutions />);

    // Check for hover effects (updated to shadow-xl)
    const hoverCards = container.querySelectorAll('.hover\\:shadow-xl');
    expect(hoverCards.length).toBe(4); // Three main solution cards + custom solutions card
  });

  it('displays the custom solutions card with special styling', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for gradient background
    const gradientCard = container.querySelector('.bg-gradient-to-br.from-purple-50.to-indigo-50');
    expect(gradientCard).toBeInTheDocument();
    
    // Check for special border
    const purpleBorder = container.querySelector('.border-purple-200');
    expect(purpleBorder).toBeInTheDocument();
  });

  it('shows Settings icon for custom solutions', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for Settings icon with white text
    const settingsIcon = container.querySelector('.bg-purple-600 .text-white');
    expect(settingsIcon).toBeInTheDocument();
  });

  it('applies proper text styling for readability', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for proper text colors
    const whiteTextElements = container.querySelectorAll('.dark\\:text-white');
    expect(whiteTextElements.length).toBeGreaterThan(0);
    
    const grayTextElements = container.querySelectorAll('.text-gray-600');
    expect(grayTextElements.length).toBeGreaterThan(0);
  });

  it('has proper heading hierarchy', () => {
    renderWithProviders(<Solutions />);
    
    // Main section heading (h2)
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toBeInTheDocument();
    
    // Solution headings (h3)
    const solutionHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(solutionHeadings.length).toBe(4); // 3 main solutions + 1 custom solution
  });

  it('centers content appropriately', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for centered text classes
    const centeredElements = container.querySelectorAll('.text-center');
    expect(centeredElements.length).toBeGreaterThan(0);
  });

  it('displays purple accent badge', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for purple badge styling
    const purpleBadge = container.querySelector('.bg-purple-100.text-purple-700');
    expect(purpleBadge).toBeInTheDocument();
  });

  it('handles dark mode styling properly', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for dark mode badge styling
    const darkBadge = container.querySelector('.dark\\:bg-purple-900\\/50');
    expect(darkBadge).toBeInTheDocument();
    
    // Check for dark mode text colors
    const darkText = container.querySelector('.dark\\:text-purple-300');
    expect(darkText).toBeInTheDocument();
  });

  it('shows proper card spacing and padding', () => {
    const { container } = renderWithProviders(<Solutions />);
    
    // Check for proper padding classes
    const paddedCards = container.querySelectorAll('.p-6');
    expect(paddedCards.length).toBe(3); // Three main solution cards
    
    // Check for special padding on custom solution
    const specialPadding = container.querySelector('.p-8');
    expect(specialPadding).toBeInTheDocument();
  });
});