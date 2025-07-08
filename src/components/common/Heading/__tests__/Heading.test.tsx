import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heading from '@/components/common/Heading';

describe('Heading', () => {
  it('renders the correct heading level', () => {
    for (let level = 1; level <= 6; level++) {
      const text = `Heading Level ${level}`;
      render(<Heading level={level as 1 | 2 | 3 | 4 | 5 | 6}>{text}</Heading>);
      const heading = screen.getByText(text);
      expect(heading.tagName.toLowerCase()).toBe(`h${level}`);
    }
  });

  it('applies custom className', () => {
    render(
      <Heading level={2} className="custom-class">
        Custom Heading
      </Heading>
    );
    const heading = screen.getByText('Custom Heading');
    expect(heading).toHaveClass('custom-class');
  });

  it('renders children content correctly', () => {
    render(<Heading level={3}>Hello World</Heading>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});