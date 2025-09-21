import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders the main title correctly', () => {
    renderWithProviders(<Hero />);
    
    // Check if the main title is rendered
    expect(screen.getByText('Mid-Senior Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText(/7\+ anni di esperienza in/)).toBeInTheDocument();
    expect(screen.getByText('soluzioni enterprise')).toBeInTheDocument();
  });

  it('renders the tagline and description', () => {
    renderWithProviders(<Hero />);
    
    // Check tagline
    expect(screen.getByText('Il partner per lo sviluppo delle tue idee enterprise.')).toBeInTheDocument();
    
    // Check description (partial match due to long text)
    expect(screen.getByText(/Esperto nell'integrazione di servizi cognitivi/)).toBeInTheDocument();
  });

  it('renders all CTA buttons with correct links', () => {
    renderWithProviders(<Hero />);
    
    // Check Calendly button
    const calendlyButton = screen.getByRole('link', { name: /Prenota una call gratuita/i });
    expect(calendlyButton).toBeInTheDocument();
    expect(calendlyButton).toHaveAttribute('href', 'https://calendly.com/riccardo-perniciano/free-call');
    expect(calendlyButton).toHaveAttribute('target', '_blank');

    // Check LinkedIn button
    const linkedinButton = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute('target', '_blank');

    // Check CV download button
    const cvButton = screen.getByRole('link', { name: /Download CV/i });
    expect(cvButton).toBeInTheDocument();
    expect(cvButton).toHaveAttribute('href', '/CV-Riccardo-Perniciano.pdf');
    expect(cvButton).toHaveAttribute('download');
  });

  it('renders trust badges', () => {
    renderWithProviders(<Hero />);
    
    expect(screen.getByText('Senza impegno')).toBeInTheDocument();
    expect(screen.getByText('Call di 30 minuti')).toBeInTheDocument();
  });

  it('renders stats section with correct metrics', () => {
    renderWithProviders(<Hero />);
    
    // Check stats values
    expect(screen.getByText('7+')).toBeInTheDocument();
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();

    // Check stats labels
    expect(screen.getByText('anni di esperienza')).toBeInTheDocument();
    expect(screen.getByText('Riduzione Code Legacy')).toBeInTheDocument();
    expect(screen.getByText('Uptime Sistemi')).toBeInTheDocument();
    expect(screen.getByText('Tenant Gestiti')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<Hero />);
    
    // Check if main heading has proper heading role
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toBeInTheDocument();

    // Check if external links have proper security attributes
    const externalLinks = screen.getAllByRole('link');
    const externalLinksWithTarget = externalLinks.filter(link => 
      link.getAttribute('target') === '_blank'
    );
    
    externalLinksWithTarget.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders with proper section id for navigation', () => {
    const { container } = renderWithProviders(<Hero />);
    
    const heroSection = container.querySelector('#hero');
    expect(heroSection).toBeInTheDocument();
  });
});