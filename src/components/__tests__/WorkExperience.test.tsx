
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import WorkExperience from '../WorkExperience';

describe('WorkExperience Component', () => {
  it('renders section title correctly', () => {
    renderWithProviders(<WorkExperience />);
    
    expect(screen.getByText('Esperienze Lavorative')).toBeInTheDocument();
  });
  
  it('displays all work experiences', () => {
    renderWithProviders(<WorkExperience />);
    
    // Check for company names
    expect(screen.getByText('ALTEN, Roma')).toBeInTheDocument();
    expect(screen.getByText('SOFTWARELAB, Cagliari')).toBeInTheDocument();
    expect(screen.getByText('Virtuard LTD, Cagliari')).toBeInTheDocument();
    
    // Check for job titles
    expect(screen.getByText('REACT DEVELOPER')).toBeInTheDocument();
    expect(screen.getByText('SOFTWARE ENGINEER / FULL-STACK DEVELOPER')).toBeInTheDocument();
    expect(screen.getByText('SVILUPPATORE MOBILE')).toBeInTheDocument();
    
    // Check for time periods
    expect(screen.getByText('2021 - 2023')).toBeInTheDocument();
    expect(screen.getByText('2018 - 2021')).toBeInTheDocument();
    expect(screen.getByText('Marzo 2018 – Giugno 2018')).toBeInTheDocument();
  });
});
