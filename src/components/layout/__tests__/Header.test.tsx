import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/layout/Header';

const NAV_LINKS = [
  'Rooms & Suites',
  'Wynn Rewards',
  'Offers',
  'Dining',
  'Entertainment',
  'Meetings & Events',
];

describe('Header', () => {
  it('renders logo and desktop nav links', () => {
    render(<Header />);

    NAV_LINKS.forEach((link) => {
      expect(screen.getByText(link.toUpperCase())).toBeInTheDocument();
    });
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button');

    // Initially mobile menu should not be visible
    NAV_LINKS.forEach((link) => {
      expect(screen.queryByText(link.toUpperCase())).toBeInTheDocument(); // Desktop nav is visible
    });

    // Open mobile menu
    fireEvent.click(toggleButton);

    NAV_LINKS.forEach((link) => {
      expect(screen.getAllByText(link.toUpperCase()).length).toBeGreaterThan(1); // Both desktop + mobile
    });

    // Close mobile menu
    fireEvent.click(toggleButton);

    NAV_LINKS.forEach((link) => {
      expect(screen.getAllByText(link.toUpperCase()).length).toBe(1); // Only desktop
    });
  });
});
