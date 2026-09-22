
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

    // Check for job titles (updated to match CV)
    expect(screen.getByText('SOLUTION ARCHITECT & TECHNICAL LEAD')).toBeInTheDocument();
    expect(screen.getByText('FRONTEND DEVELOPER')).toBeInTheDocument();

    // C.I.S.A. and the current Virtuard collaboration are both framed as
    // independent work with the client named separately, the same shape as
    // ALTEN/Expedia and SOFTWARELAB/ERSU. The organization label is
    // localised; the client name is not - so "Attività in proprio" now
    // labels two entries.
    expect(screen.getAllByText('Attività in proprio')).toHaveLength(2);
    expect(screen.getByText('SOLUTION ARCHITECT & FULL-STACK DEVELOPER')).toBeInTheDocument();
    expect(screen.getByText(/C\.I\.S\.A\./)).toBeInTheDocument();
    expect(screen.getByText('AI & 3D RECONSTRUCTION CONSULTANT')).toBeInTheDocument();

    // Check that timeline shows current positions (FEDRO and Epicode are both current)
    const presenteElements = screen.getAllByText(/Presente/);
    expect(presenteElements.length).toBeGreaterThanOrEqual(1);
  });
});
