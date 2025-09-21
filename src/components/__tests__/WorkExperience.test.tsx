
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import WorkExperience from '../WorkExperience';
import '@testing-library/jest-dom';

describe('WorkExperience Component', () => {
  it('renders section title correctly', () => {
    renderWithProviders(<WorkExperience />);
    
    expect(screen.getByText('Timeline Professionale')).toBeInTheDocument();
  });
  
  it('displays work experiences', () => {
    renderWithProviders(<WorkExperience />);
    
    // Check for main organization names
    expect(screen.getByText('FEDRO Software SRL')).toBeInTheDocument();
    expect(screen.getByText('ALTEN Italia')).toBeInTheDocument();
    
    // Check for job titles
    expect(screen.getByText('SOFTWARE ENGINEER - LEAD DEVELOPER')).toBeInTheDocument();
    expect(screen.getByText('REACT DEVELOPER')).toBeInTheDocument();
    
    // Check that timeline shows current position
    expect(screen.getByText(/Presente/)).toBeInTheDocument();
  });
});
