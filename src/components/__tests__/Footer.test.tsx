
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders contact information correctly', () => {
    renderWithProviders(<Footer />);
    
    // Check if the contact section heading is rendered (there might be multiple instances)
    expect(screen.getAllByText('Contatti')).toHaveLength(2);
    
    // Check if email is present
    expect(screen.getByText('ricki.perniciano.work@gmail.com')).toBeInTheDocument();
    
    // Check if phone number is present
    expect(screen.getByText('+39 351 8745889')).toBeInTheDocument();
  });
  
  it('renders navigation links', () => {
    renderWithProviders(<Footer />);
    
    // Check if navigation links are present
    expect(screen.getByText('Chi Sono')).toBeInTheDocument();
    expect(screen.getByText('Competenze')).toBeInTheDocument();
    expect(screen.getByText('Progetti')).toBeInTheDocument();
    
    // Check for contact links (email, phone)
    const emailLink = screen.getByRole('link', { name: /ricki.perniciano.work@gmail.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:ricki.perniciano.work@gmail.com');
    
    const phoneLink = screen.getByRole('link', { name: /\+39 351 8745889/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+39 351 8745889');
  });
  
  it('displays copyright information', () => {
    renderWithProviders(<Footer />);
    
    // Check for the copyright text (with dynamic year)
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });
});
