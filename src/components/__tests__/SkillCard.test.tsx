
import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import SkillCard from '../SkillCard';
import '@testing-library/jest-dom';
import { Code } from 'lucide-react';

describe('SkillCard Component', () => {
  const mockProps = {
    title: 'Test Skill',
    description: 'Test Description',
    icon: <Code className="h-6 w-6" data-testid="skill-icon" />,
    image: 'https://example.com/test-image.jpg',
    detailedInfo: 'Detailed information about this skill',
    category: 'test-category'
  };

  it('renders card with correct content', () => {
    renderWithProviders(<SkillCard {...mockProps} />);
    
    expect(screen.getByText('Test Skill')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByTestId('skill-icon')).toBeInTheDocument();
    expect(screen.getByText('test-category')).toBeInTheDocument();
  });

  it('opens dialog with detailed info when button is clicked', async () => {
    renderWithProviders(<SkillCard {...mockProps} />);
    const user = userEvent.setup();
    
    const moreInfoButton = screen.getByRole('button', { name: /Maggiori Informazioni/i });
    await user.click(moreInfoButton);
    
    await waitFor(() => {
      expect(screen.getByText('Detailed information about this skill')).toBeInTheDocument();
    });
  });
});
