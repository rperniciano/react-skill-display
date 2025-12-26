import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Skills from '../Skills';

describe('Skills Component', () => {
  it('renders the section header correctly', () => {
    renderWithProviders(<Skills />);
    
    expect(screen.getByText('Competenze Tecniche')).toBeInTheDocument();
    expect(screen.getByText('Stack Tecnologico Completo')).toBeInTheDocument();
    expect(screen.getByText(/7\+ anni di esperienza con tecnologie enterprise/)).toBeInTheDocument();
  });

  it('displays all technology categories', () => {
    renderWithProviders(<Skills />);

    // Check all technology category titles (updated to match CV)
    expect(screen.getByText('Languages & Frameworks')).toBeInTheDocument();
    expect(screen.getByText('Database & Search')).toBeInTheDocument();
    expect(screen.getByText('AI & Speech Processing')).toBeInTheDocument();
    expect(screen.getByText('Cloud & Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Architecture & Patterns')).toBeInTheDocument();
    expect(screen.getByText('Testing & Metodologie')).toBeInTheDocument();
  });

  it('shows detailed technology descriptions', () => {
    renderWithProviders(<Skills />);

    // Check some key technology descriptions (updated to match CV)
    expect(screen.getByText(/Frontend: React, Angular, TypeScript/)).toBeInTheDocument();
    expect(screen.getByText(/Backend: C# \(\.NET 9\), Node\.js, REST APIs, GraphQL, Fastify, Swagger/)).toBeInTheDocument();
    expect(screen.getByText(/SQL Server, MySQL, Elasticsearch, Supabase/)).toBeInTheDocument();
    expect(screen.getByText(/Azure Cognitive Services, OpenAI GPT/)).toBeInTheDocument();
  });

  it('displays technology details for Italian language', () => {
    renderWithProviders(<Skills />);

    // Check Italian-specific details (updated to match CV)
    expect(screen.getByText(/Query optimization, indicizzazione full-text/)).toBeInTheDocument();
    expect(screen.getByText(/Metodologie: Agile \(Scrum, Kanban\), Jira/)).toBeInTheDocument();
  });

  it('renders the methodologies and tools section', () => {
    renderWithProviders(<Skills />);
    
    expect(screen.getByText('Metodologie & Tools')).toBeInTheDocument();
    
    // Check for some key methodologies and tools
    expect(screen.getByText('Agile')).toBeInTheDocument();
    expect(screen.getByText('Scrum')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('ABP.io')).toBeInTheDocument();
    expect(screen.getByText('Hangfire')).toBeInTheDocument();
    expect(screen.getByText('Azure DevOps')).toBeInTheDocument();
    expect(screen.getByText('Unity')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    const { container } = renderWithProviders(<Skills />);
    
    const skillsSection = container.querySelector('#skills');
    expect(skillsSection).toBeInTheDocument();
  });

  it('renders with proper gradient background', () => {
    const { container } = renderWithProviders(<Skills />);
    
    const section = container.querySelector('section');
    expect(section?.className).toContain('from-purple-600');
    expect(section?.className).toContain('to-purple-700');
  });

  it('displays cards with proper styling and hover effects', () => {
    const { container } = renderWithProviders(<Skills />);
    
    // Check for card elements with backdrop blur and hover effects
    const cards = container.querySelectorAll('.backdrop-blur');
    expect(cards.length).toBeGreaterThan(0);
    
    // Check for hover transition classes
    const hoverCards = container.querySelectorAll('.hover\\:bg-white\\/20');
    expect(hoverCards.length).toBeGreaterThan(0);
  });

  it('renders technology icons correctly', () => {
    const { container } = renderWithProviders(<Skills />);
    
    // Check for icon containers with gradient backgrounds
    const iconContainers = container.querySelectorAll('.bg-gradient-to-br');
    expect(iconContainers.length).toBeGreaterThanOrEqual(6); // One for each technology category
  });

  it('has proper responsive grid layout', () => {
    const { container } = renderWithProviders(<Skills />);
    
    // Check for responsive grid classes
    const gridContainer = container.querySelector('.lg\\:grid-cols-3');
    expect(gridContainer).toBeInTheDocument();
    
    const mdGridContainer = container.querySelector('.md\\:grid-cols-2');
    expect(mdGridContainer).toBeInTheDocument();
  });

  it('displays skill badges with proper styling', () => {
    const { container } = renderWithProviders(<Skills />);
    
    // Check for skill badge elements
    const skillBadges = container.querySelectorAll('.bg-white\\/10');
    expect(skillBadges.length).toBeGreaterThan(15); // Should have many skill badges
  });

  it('has proper heading hierarchy', () => {
    renderWithProviders(<Skills />);
    
    // Main section heading (h2)
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toBeInTheDocument();
    
    // Technology category headings (h3)
    const categoryHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(categoryHeadings.length).toBe(7); // 6 tech categories + 1 methodologies section
  });

  it('applies proper text colors for readability on dark background', () => {
    const { container } = renderWithProviders(<Skills />);
    
    // Check for white text elements on purple background
    const whiteTextElements = container.querySelectorAll('.text-white');
    expect(whiteTextElements.length).toBeGreaterThan(0);
    
    // Check for purple-100 text elements
    const purpleTextElements = container.querySelectorAll('.text-purple-100');
    expect(purpleTextElements.length).toBeGreaterThan(0);
  });
});