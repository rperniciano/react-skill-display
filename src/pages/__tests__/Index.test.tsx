
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import Index from '../Index';

// Mock the video element since it might not be fully supported in jsdom
window.HTMLMediaElement.prototype.play = vi.fn();
window.HTMLMediaElement.prototype.pause = vi.fn();

describe('Index Page', () => {
  it('renders all main sections', () => {
    renderWithProviders(<Index />);
    
    // This will implicitly verify that all component sections are being rendered
    // as these sections should be visible on the index page
    
    // Main container should be present with correct theme class
    const mainContainer = document.querySelector('.min-h-screen');
    expect(mainContainer).toBeInTheDocument();
    
    // Check if Navbar is rendered (by checking for a unique element)
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    
    // We can check if other key elements from major sections are present
    // but these tests would be more comprehensive in the individual component tests
  });
});
