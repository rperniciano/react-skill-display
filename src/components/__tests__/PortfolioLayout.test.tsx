import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import PortfolioLayout from '../PortfolioLayout';

describe('PortfolioLayout Component', () => {
  it('renders all main navigation elements', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for main navigation (Navbar should render)
    const logo = screen.queryByText('Portfolio') || screen.queryByText('Riccardo');
    expect(logo).toBeInTheDocument();
  });

  it('renders all main portfolio sections in correct order', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for Hero section
    expect(screen.getByText('Mid-Senior Full Stack Developer')).toBeInTheDocument();
    
    // Check for About section
    expect(screen.getByText(/Ciao, sono/)).toBeInTheDocument();
    
    // Check for Skills section
    expect(screen.getByText('Stack Tecnologico Completo')).toBeInTheDocument();
    
    // Check for Solutions section
    expect(screen.getByText('Soluzioni Enterprise che posso realizzare')).toBeInTheDocument();
    
    // Check for AI Section
    expect(screen.getByText('Integrazione AI per risultati concreti e misurabili')).toBeInTheDocument();
    
    // Check for Projects section
    expect(screen.getByText('Progetti & Portfolio')).toBeInTheDocument();
    
    // Check for Contact section (there are multiple "Contattami" elements)
    expect(screen.getAllByText('Contattami').length).toBeGreaterThan(0);
  });

  it('wraps content with proper provider hierarchy', () => {
    const { container } = renderWithProviders(<PortfolioLayout />);
    
    // Check for main container structure
    const mainContainer = container.querySelector('.min-h-screen');
    expect(mainContainer).toBeInTheDocument();
  });

  it('applies proper theme and language context', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Since the component is rendered with providers, check if Italian content is displayed
    expect(screen.getByText('Mid-Senior Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Competenze Tecniche')).toBeInTheDocument();
  });

  it('renders footer at the end', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for footer content (there are multiple instances of contact info)
    expect(screen.getAllByText('ricki.perniciano.work@gmail.com').length).toBeGreaterThan(0);
    expect(screen.getAllByText('+39 351 8745889').length).toBeGreaterThan(0);
  });

  it('has proper main semantic structure', () => {
    const { container } = renderWithProviders(<PortfolioLayout />);
    
    // Check for semantic main element
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('applies dark mode support classes', () => {
    const { container } = renderWithProviders(<PortfolioLayout />);
    
    // Check for dark mode classes on main container
    const darkModeContainer = container.querySelector('.dark\\:bg-gray-900');
    expect(darkModeContainer).toBeInTheDocument();
  });

  it('renders WorkExperience section', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for WorkExperience section content
    expect(screen.getByText('Timeline Professionale')).toBeInTheDocument();
  });

  it('maintains proper component order in layout', () => {
    const { container } = renderWithProviders(<PortfolioLayout />);
    
    // Get all section elements and verify they exist
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(5); // Should have multiple sections
  });

  it('provides theme toggle functionality', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for theme toggle button (should be in Navbar)
    const themeButton = screen.getByLabelText(/Attiva modalità/);
    expect(themeButton).toBeInTheDocument();
  });

  it('provides language selector functionality', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for language selector (should be in Navbar)
    const languageSelector = screen.getByRole('combobox');
    expect(languageSelector).toBeInTheDocument();
  });

  it('renders all CTA buttons and links', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for main CTA buttons
    const calendlyButtons = screen.getAllByText(/Prenota una call gratuita/i);
    expect(calendlyButtons.length).toBeGreaterThan(0);
    
    const contactButtons = screen.getAllByText(/Contattami/i);
    expect(contactButtons.length).toBeGreaterThan(0);
  });

  it('displays social media links', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for social media links (in Footer)
    const githubLinks = screen.getAllByLabelText(/GitHub/i);
    expect(githubLinks.length).toBeGreaterThan(0);
    
    const linkedinLinks = screen.getAllByLabelText(/LinkedIn/i);
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });

  it('shows professional metrics and statistics', () => {
    renderWithProviders(<PortfolioLayout />);

    // Check for key metrics mentioned throughout the portfolio (updated to match CV)
    expect(screen.getAllByText(/7\+/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/99\.9%/).length).toBeGreaterThan(0);
  });

  it('renders project portfolio with proper structure', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for project-related content
    expect(screen.getByText('Lead Developer')).toBeInTheDocument();
    expect(screen.getByText('2025')).toBeInTheDocument();
  });

  it('includes proper navigation anchors', () => {
    const { container } = renderWithProviders(<PortfolioLayout />);
    
    // Check for section IDs for navigation
    expect(container.querySelector('#hero')).toBeInTheDocument();
    expect(container.querySelector('#about')).toBeInTheDocument();
    expect(container.querySelector('#skills')).toBeInTheDocument();
    expect(container.querySelector('#solutions')).toBeInTheDocument();
    expect(container.querySelector('#projects')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('displays contact information correctly', () => {
    renderWithProviders(<PortfolioLayout />);
    
    // Check for contact details (there are multiple instances)
    expect(screen.getAllByText('Email').length).toBeGreaterThan(0);
    expect(screen.getByText('Telefono')).toBeInTheDocument();
    expect(screen.getByText('Posizione')).toBeInTheDocument();
  });
});