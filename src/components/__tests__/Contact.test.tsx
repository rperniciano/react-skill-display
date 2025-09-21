import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Contact Component', () => {
  it('renders the contact section title and subtitle', () => {
    renderWithProviders(<Contact />);
    
    // There are multiple "Contattami" elements (badge and heading)
    expect(screen.getAllByText('Contattami')).toHaveLength(2);
    expect(screen.getByText(/Disponibile per opportunità full-time/)).toBeInTheDocument();
  });

  it('displays contact information correctly', () => {
    renderWithProviders(<Contact />);
    
    // Check contact info section
    expect(screen.getByText('Informazioni di Contatto')).toBeInTheDocument();
    
    // Check email (there are multiple "Email" elements)
    expect(screen.getAllByText('Email')).toHaveLength(2);
    expect(screen.getByText('ricki.perniciano.work@gmail.com')).toBeInTheDocument();
    
    // Check phone
    expect(screen.getByText('Telefono')).toBeInTheDocument();
    expect(screen.getByText('+39 351 8745889')).toBeInTheDocument();
    
    // Check location
    expect(screen.getByText('Posizione')).toBeInTheDocument();
    expect(screen.getByText('Cagliari, Italia')).toBeInTheDocument();
  });

  it('renders social media links with proper attributes', () => {
    renderWithProviders(<Contact />);
    
    // Check LinkedIn link
    const linkedinLinks = screen.getAllByLabelText('LinkedIn');
    expect(linkedinLinks.length).toBeGreaterThan(0);
    linkedinLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    // Check GitHub link
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Check Email link
    const emailLinks = screen.getAllByLabelText('Email');
    expect(emailLinks.length).toBeGreaterThan(0);
    emailLinks.forEach(link => {
      expect(link.getAttribute('href')).toContain('mailto:');
    });
  });

  it('renders the booking call CTA section', () => {
    renderWithProviders(<Contact />);
    
    // Look for call-related content (there might be multiple instances)
    const callTexts = screen.queryAllByText(/call/i);
    const prenotaTexts = screen.queryAllByText(/Prenota/i);
    expect(callTexts.length > 0 || prenotaTexts.length > 0).toBe(true);
    
    // Check for Calendly links (regardless of button text)
    const calendlyLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('href')?.includes('calendly.com')
    );
    expect(calendlyLinks.length).toBeGreaterThan(0);
  });

  it('displays call benefits with checkmarks', () => {
    renderWithProviders(<Contact />);
    
    expect(screen.getByText('Senza impegno')).toBeInTheDocument();
    expect(screen.getByText('Call di 30 minuti')).toBeInTheDocument();
    expect(screen.getByText('Consulenza gratuita')).toBeInTheDocument();
  });

  it('renders response time information', () => {
    renderWithProviders(<Contact />);
    
    expect(screen.getByText('Tempo di risposta')).toBeInTheDocument();
    expect(screen.getByText(/Generalmente rispondo entro 24-48 ore/)).toBeInTheDocument();
  });

  it('displays alternative contact methods', () => {
    renderWithProviders(<Contact />);
    
    // Check if contact preference text exists (could vary based on translation)
    const contactPreference = screen.queryByText('Preferisci scrivere?') || 
                             screen.queryByText(/contatt/i);
    expect(contactPreference).toBeTruthy();
    
    // Check that email and LinkedIn options are available
    const emailLinks = screen.getAllByLabelText(/Email/i);
    const linkedinLinks = screen.getAllByLabelText(/LinkedIn/i);
    
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });

  it('has proper section id for navigation', () => {
    const { container } = renderWithProviders(<Contact />);
    
    const contactSection = container.querySelector('#contact');
    expect(contactSection).toBeInTheDocument();
  });

  it('renders with proper responsive layout classes', () => {
    const { container } = renderWithProviders(<Contact />);
    
    // Check if grid layout classes are present
    const gridContainer = container.querySelector('.lg\\:grid-cols-2');
    expect(gridContainer).toBeInTheDocument();
  });

  it('has proper accessibility structure', () => {
    renderWithProviders(<Contact />);
    
    // Check for proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 2, name: /Contattami/i });
    expect(mainHeading).toBeInTheDocument();
    
    const subHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(subHeadings.length).toBeGreaterThan(0);
  });
});