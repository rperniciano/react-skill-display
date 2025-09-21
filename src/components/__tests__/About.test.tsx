import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import About from '../About';

describe('About Component', () => {
  it('renders the main title with name', () => {
    renderWithProviders(<About />);
    
    expect(screen.getByText(/Ciao, sono/)).toBeInTheDocument();
    expect(screen.getByText('Riccardo Perniciano')).toBeInTheDocument();
    expect(screen.getByText(/Piacere di conoscerti/)).toBeInTheDocument();
  });

  it('displays profile image with correct attributes', () => {
    renderWithProviders(<About />);
    
    const profileImage = screen.getByAltText('Riccardo Perniciano');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800');
  });

  it('renders biography content in Italian by default', () => {
    renderWithProviders(<About />);
    
    // Check Italian bio content
    expect(screen.getByText(/Mid-Senior Full Stack Developer con 7\+ anni di esperienza/)).toBeInTheDocument();
    expect(screen.getByText(/Esperto nell'integrazione di servizi cognitivi/)).toBeInTheDocument();
    expect(screen.getByText(/Ho ridotto l'85% del codice legacy/)).toBeInTheDocument();
    expect(screen.getByText(/Ho lavorato con team internazionali per clienti come Expedia/)).toBeInTheDocument();
  });

  it('displays soft skills section correctly', () => {
    renderWithProviders(<About />);
    
    expect(screen.getByText('Competenze Trasversali')).toBeInTheDocument();
    
    // Check individual soft skills
    expect(screen.getByText('Comunicazione')).toBeInTheDocument();
    expect(screen.getByText('Eccellenti doti comunicative e di public speaking')).toBeInTheDocument();
    
    expect(screen.getByText('Teamwork')).toBeInTheDocument();
    expect(screen.getByText('Forte attitudine al lavoro in team e leadership')).toBeInTheDocument();
    
    expect(screen.getByText('Gestione Stress')).toBeInTheDocument();
    expect(screen.getByText('Capacità di gestione dello stress e delle priorità')).toBeInTheDocument();
    
    expect(screen.getByText('Pianificazione')).toBeInTheDocument();
    expect(screen.getByText('Pianificazione strategica e monitoraggio dei risultati')).toBeInTheDocument();
  });

  it('shows language skills section', () => {
    renderWithProviders(<About />);
    
    expect(screen.getByText('Competenze Linguistiche')).toBeInTheDocument();
    
    // Check language entries
    expect(screen.getByText('Italiano:')).toBeInTheDocument();
    expect(screen.getByText('Madrelingua')).toBeInTheDocument();
    
    expect(screen.getByText('Inglese:')).toBeInTheDocument();
    expect(screen.getByText('Spagnolo:')).toBeInTheDocument();
    
    // Both English and Spanish have B2 level, so there should be 2 instances
    expect(screen.getAllByText('B2 - Intermedio superiore')).toHaveLength(2);
  });

  it('has proper section id for navigation', () => {
    const { container } = renderWithProviders(<About />);
    
    const aboutSection = container.querySelector('#about');
    expect(aboutSection).toBeInTheDocument();
  });

  it('renders with proper responsive layout', () => {
    const { container } = renderWithProviders(<About />);
    
    // Check for responsive grid classes
    const gridContainer = container.querySelector('.lg\\:grid-cols-2');
    expect(gridContainer).toBeInTheDocument();
    
    const skillsGrid = container.querySelector('.lg\\:grid-cols-4');
    expect(skillsGrid).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    renderWithProviders(<About />);
    
    // Main heading (h2)
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toBeInTheDocument();
    
    // Section headings (h3)
    const sectionHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(sectionHeadings.length).toBeGreaterThanOrEqual(2);
    
    // Skill headings (h4)
    const skillHeadings = screen.getAllByRole('heading', { level: 4 });
    expect(skillHeadings.length).toBe(4); // 4 soft skills
  });

  it('applies proper styling classes for theme support', () => {
    const { container } = renderWithProviders(<About />);
    
    // Check for dark mode classes
    const section = container.querySelector('section');
    expect(section?.className).toContain('dark:bg-gray-900');
    
    // Check for purple accent colors
    const purpleElements = container.querySelectorAll('.text-purple-600');
    expect(purpleElements.length).toBeGreaterThan(0);
  });

  it('renders prose content with proper styling', () => {
    const { container } = renderWithProviders(<About />);
    
    const proseContainer = container.querySelector('.prose');
    expect(proseContainer).toBeInTheDocument();
    expect(proseContainer?.className).toContain('dark:prose-invert');
  });
});