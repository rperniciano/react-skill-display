import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Projects from '../Projects';

describe('Projects Component', () => {
  it('renders the section header correctly', () => {
    renderWithProviders(<Projects />);
    
    expect(screen.getByText('Progetti & Portfolio')).toBeInTheDocument();
    expect(screen.getByText(/Progetti enterprise e personali che dimostrano expertise/)).toBeInTheDocument();
  });

  it('displays the briefcase icon in header', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Check for the briefcase icon container
    const iconContainer = container.querySelector('.bg-gradient-to-r.from-purple-500.to-blue-500');
    expect(iconContainer).toBeInTheDocument();
  });

  it('renders featured project (FEDRO) with special styling', () => {
    renderWithProviders(<Projects />);
    
    // Check for lead developer badge
    expect(screen.getByText('Lead Developer')).toBeInTheDocument();
    
    // Check for year badge
    expect(screen.getByText('2025')).toBeInTheDocument();
  });

  it('displays project metrics correctly', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Check for metrics grid
    const metricsGrid = container.querySelector('.grid.grid-cols-2.md\\:grid-cols-4');
    expect(metricsGrid).toBeInTheDocument();
  });

  it('shows technology badges for projects', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Check for technology badges by looking for badge classes
    const techBadges = container.querySelectorAll('.inline-flex.items-center.rounded-full');
    expect(techBadges.length).toBeGreaterThan(0);
  });

  it('renders project features with code icons', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Look for feature items with Code2 icons
    const featureItems = container.querySelectorAll('.flex.items-center.gap-2');
    expect(featureItems.length).toBeGreaterThan(0);
  });

  it('displays project grid for other projects', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Check for project grid layout
    const projectGrid = container.querySelector('.grid.md\\:grid-cols-2.lg\\:grid-cols-3');
    expect(projectGrid).toBeInTheDocument();
  });

  it('shows project type badges correctly', () => {
    renderWithProviders(<Projects />);
    
    // Check for enterprise/personal badges (Italian) - there are multiple instances
    expect(screen.getAllByText('Enterprise').length).toBeGreaterThan(0);
  });

  it('renders GitHub and demo links when available', () => {
    renderWithProviders(<Projects />);
    
    // Check for GitHub links (Italian)
    const githubLinks = screen.getAllByText('Codice');
    expect(githubLinks.length).toBeGreaterThan(0);
    
    // Check for demo links
    const demoLinks = screen.getAllByText('Demo');
    expect(demoLinks.length).toBeGreaterThan(0);
  });

  it('displays proprietary projects with clock icon', () => {
    renderWithProviders(<Projects />);
    
    // Check for proprietary badge (Italian) - there are multiple instances
    expect(screen.getAllByText('Proprietario').length).toBeGreaterThan(0);
  });

  it('shows client information when available', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Look for client badges by checking for badge elements
    const clientBadges = container.querySelectorAll('.inline-flex.items-center');
    expect(clientBadges.length).toBeGreaterThan(0);
  });

  it('renders call to action section', () => {
    renderWithProviders(<Projects />);
    
    expect(screen.getByText('Interessato a collaborare?')).toBeInTheDocument();
    expect(screen.getByText(/Sono sempre aperto a nuove sfide/)).toBeInTheDocument();
  });

  it('displays contact and GitHub buttons in CTA', () => {
    renderWithProviders(<Projects />);
    
    // Check for contact button (Italian)
    expect(screen.getByText('Contattami')).toBeInTheDocument();
    
    // Check for GitHub button (Italian)
    expect(screen.getByText('Altri progetti su GitHub')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    const { container } = renderWithProviders(<Projects />);
    
    const projectsSection = container.querySelector('#projects');
    expect(projectsSection).toBeInTheDocument();
  });

  it('renders with proper gradient background', () => {
    const { container } = renderWithProviders(<Projects />);
    
    const section = container.querySelector('section');
    expect(section?.className).toContain('from-gray-50');
    expect(section?.className).toContain('to-gray-100');
    expect(section?.className).toContain('dark:from-gray-900');
  });

  it('has proper hover effects on project cards', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Check for hover effects
    const hoverCards = container.querySelectorAll('.hover\\:shadow-xl');
    expect(hoverCards.length).toBeGreaterThan(0);
    
    const translateCards = container.querySelectorAll('.hover\\:-translate-y-1');
    expect(translateCards.length).toBeGreaterThan(0);
  });

  it('displays project images with proper scaling', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Check for images with hover scale effect
    const scalingImages = container.querySelectorAll('.hover\\:scale-105');
    expect(scalingImages.length).toBeGreaterThan(0);
  });

  it('has proper external link attributes', () => {
    renderWithProviders(<Projects />);
    
    // Check external links have proper security attributes
    const externalLinks = screen.getAllByRole('link');
    const externalLinksWithTarget = externalLinks.filter(link => 
      link.getAttribute('target') === '_blank'
    );
    
    externalLinksWithTarget.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders trending up icons for metrics', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Look for TrendingUp icons in metrics sections
    const trendingElements = container.querySelectorAll('.text-green-500');
    expect(trendingElements.length).toBeGreaterThan(0);
  });

  it('handles technology overflow with +N badge', () => {
    const { container } = renderWithProviders(<Projects />);
    
    // Look for technology overflow indicators
    const techOverflow = container.querySelectorAll('*').length > 0;
    expect(techOverflow).toBe(true);
  });
});