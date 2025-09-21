import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import AISection from '../AISection';

describe('AISection Component', () => {
  it('renders the section header correctly', () => {
    renderWithProviders(<AISection />);
    
    expect(screen.getByText('Intelligenza artificiale')).toBeInTheDocument();
    expect(screen.getByText('Integrazione AI per risultati concreti e misurabili')).toBeInTheDocument();
  });

  it('displays introductory paragraphs about AI experience', () => {
    renderWithProviders(<AISection />);
    
    expect(screen.getByText(/7\+ anni di esperienza nell'integrazione di servizi cognitivi/)).toBeInTheDocument();
    expect(screen.getByText(/Lead developer della piattaforma FEDRO CognitiveServices/)).toBeInTheDocument();
  });

  it('shows all three AI service bullet points', () => {
    renderWithProviders(<AISection />);
    
    // Check bullet point titles
    expect(screen.getByText('Azure Cognitive Services Integration')).toBeInTheDocument();
    expect(screen.getByText('OpenAI GPT & Assembly.AI')).toBeInTheDocument();
    expect(screen.getByText('NLP & Semantic Analysis')).toBeInTheDocument();
  });

  it('displays detailed descriptions for each AI service', () => {
    renderWithProviders(<AISection />);
    
    // Check for key terms in descriptions
    expect(screen.getByText(/Implementazione completa di Azure AI per speech-to-text/)).toBeInTheDocument();
    expect(screen.getByText(/Abstraction layer multi-provider per switch trasparente/)).toBeInTheDocument();
    expect(screen.getByText(/Sistemi avanzati di analisi semantica/)).toBeInTheDocument();
  });

  it('renders the code visualization window', () => {
    renderWithProviders(<AISection />);
    
    // Check for terminal-style window
    expect(screen.getByText('cognitive_services.cs')).toBeInTheDocument();
    
    // Check for code content
    expect(screen.getByText(/FEDRO CognitiveServices Integration/)).toBeInTheDocument();
    expect(screen.getByText(/public class AIOrchestrator/)).toBeInTheDocument();
  });

  it('displays window controls (red, yellow, green dots)', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for terminal window controls
    const redDot = container.querySelector('.bg-red-500');
    const yellowDot = container.querySelector('.bg-yellow-500');
    const greenDot = container.querySelector('.bg-green-500');
    
    expect(redDot).toBeInTheDocument();
    expect(yellowDot).toBeInTheDocument();
    expect(greenDot).toBeInTheDocument();
  });

  it('shows code with proper syntax highlighting structure', () => {
    renderWithProviders(<AISection />);
    
    // Check for key code elements
    expect(screen.getByText(/ProcessAsync/)).toBeInTheDocument();
    expect(screen.getByText(/TranscriptionResult/)).toBeInTheDocument();
    expect(screen.getByText(/EnableSentiment = true/)).toBeInTheDocument();
    expect(screen.getByText(/Elasticsearch indexing/)).toBeInTheDocument();
  });

  it('has proper responsive layout with grid', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for responsive grid layout
    const gridContainer = container.querySelector('.grid.lg\\:grid-cols-2');
    expect(gridContainer).toBeInTheDocument();
  });

  it('applies proper styling for dark mode', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for dark mode classes
    const section = container.querySelector('section');
    expect(section?.className).toContain('dark:bg-gray-900');
    
    // Check for dark mode text colors
    const darkTextElements = container.querySelectorAll('.dark\\:text-white');
    expect(darkTextElements.length).toBeGreaterThan(0);
  });

  it('displays icons for each bullet point', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for purple icon colors
    const purpleIcons = container.querySelectorAll('.text-purple-600');
    expect(purpleIcons.length).toBe(3); // Three bullet points with icons
  });

  it('has decorative background element', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for decorative purple blur element
    const decorativeElement = container.querySelector('.bg-purple-600.rounded-full.opacity-20.blur-2xl');
    expect(decorativeElement).toBeInTheDocument();
  });

  it('renders code block with proper formatting', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for code block elements
    const preElement = container.querySelector('pre');
    const codeElement = container.querySelector('code');
    
    expect(preElement).toBeInTheDocument();
    expect(codeElement).toBeInTheDocument();
    expect(codeElement?.className).toContain('text-gray-300');
  });

  it('shows proper file header in code window', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for file header styling
    const header = container.querySelector('.bg-gray-800.border-b.border-gray-700');
    expect(header).toBeInTheDocument();
  });

  it('displays technical metrics in descriptions', () => {
    renderWithProviders(<AISection />);
    
    // Check for specific metrics mentioned
    expect(screen.getByText(/1000\+ trascrizioni\/ora/)).toBeInTheDocument();
    expect(screen.getByText(/accuracy superiore al 95%/)).toBeInTheDocument();
  });

  it('uses proper spacing and typography', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for proper spacing classes
    const spacingElements = container.querySelectorAll('.space-y-6');
    expect(spacingElements.length).toBeGreaterThan(0);
    
    // Check for typography classes
    const headingElements = container.querySelectorAll('.text-4xl, .text-5xl');
    expect(headingElements.length).toBeGreaterThan(0);
  });

  it('has proper content structure with flex layouts', () => {
    const { container } = renderWithProviders(<AISection />);
    
    // Check for flex layouts in bullet points
    const flexElements = container.querySelectorAll('.flex.gap-4');
    expect(flexElements.length).toBe(3); // Three bullet points
  });
});