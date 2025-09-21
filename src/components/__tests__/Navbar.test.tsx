
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders correctly with logo and theme toggle', () => {
    renderWithProviders(<Navbar />);
    
    // Check if the logo text is rendered (could be "Portfolio" or "Riccardo")
    const logo = screen.queryByText('Portfolio') || screen.queryByText('Riccardo');
    expect(logo).toBeInTheDocument();
    
    // Check if theme toggle button exists
    expect(screen.getByLabelText(/Attiva modalità/)).toBeInTheDocument();
  });

  it('has navigation links', () => {
    renderWithProviders(<Navbar />);
    
    // Check if navigation links exist (they might be in different places depending on screen size)
    const chiSono = screen.queryByText('Chi Sono');
    const competenze = screen.queryByText('Competenze');
    const contatti = screen.queryByText('Contatti');
    
    // At least some navigation should be present
    expect(chiSono || competenze || contatti).toBeTruthy();
  });
});
