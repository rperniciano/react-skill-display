
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders contact information correctly', () => {
    renderWithProviders(<Footer />);
    
    // Check if the contact section heading is rendered
    expect(screen.getByText('Contattami')).toBeInTheDocument();
    
    // Check if email is present
    expect(screen.getByText('ricki.perniciano.work@gmail.com')).toBeInTheDocument();
    
    // Check if phone number is present
    expect(screen.getByText('+39 351 874 5889')).toBeInTheDocument();
  });
  
  it('renders social media links', () => {
    renderWithProviders(<Footer />);
    
    // Check if social icons are present
    expect(screen.getByLabelText('Visita il mio profilo GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('Visita il mio profilo LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Seguimi su Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Seguimi su Instagram')).toBeInTheDocument();
  });
  
  it('displays copyright information', () => {
    renderWithProviders(<Footer />);
    
    // Check for the copyright text (with dynamic year)
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });
});
