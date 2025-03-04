
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders correctly with logo and theme toggle', () => {
    renderWithProviders(<Navbar />);
    
    // Check if the logo text is rendered
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    
    // Check if theme toggle button exists
    expect(screen.getByLabelText(/Attiva modalità/)).toBeInTheDocument();
  });

  it('opens dropdown menu when clicked', async () => {
    renderWithProviders(<Navbar />);
    const user = userEvent.setup();
    
    // Find and click the dropdown trigger
    const menuButton = screen.getByText('Menu');
    await user.click(menuButton);
    
    // Check if menu items are displayed
    expect(screen.getByText('Chi Sono')).toBeInTheDocument();
    expect(screen.getByText('Competenze')).toBeInTheDocument();
    expect(screen.getByText('Contatti')).toBeInTheDocument();
  });
});
