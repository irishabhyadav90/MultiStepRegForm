import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';

describe('SectionHeading', () => {
  it('renders the heading text with correct tag', () => {
    render(<SectionHeading text="My Section" />);
    const heading = screen.getByText('My Section');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h3');
  });

  it('applies custom className to outer div', () => {
    render(<SectionHeading text="Test" className="custom-section" />);
    const wrapper = screen.getByText('Test').parentElement;
    expect(wrapper).toHaveClass('custom-section');
  });

});
