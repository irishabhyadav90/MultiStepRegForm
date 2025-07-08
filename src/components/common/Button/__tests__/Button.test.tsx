import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import { ButtonConstants } from '../constants';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('rounded-md');
    expect(button).toHaveClass('px-6 py-3');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(
      <Button variant={ButtonConstants.Variants.PRIMARY}>Primary</Button>
    );
    
    const button = screen.getByRole('button', { name: /primary/i });
    expect(button).toHaveClass('bg-[var(--color-primary)]'); // Primary variant style
    
    rerender(
      <Button variant={ButtonConstants.Variants.SECONDARY}>Secondary</Button>
    );
    
    expect(button).toHaveClass('bg-[var(--color-secondary)]'); // Secondary variant style
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <Button size={ButtonConstants.Sizes.SMALL}>Small</Button>
    );
    
    let button = screen.getByRole('button', { name: /small/i });
    expect(button).toHaveClass('text-sm w-36'); // Small size style
    
    rerender(
      <Button size={ButtonConstants.Sizes.LARGE}>Large</Button>
    );
    
    button = screen.getByRole('button', { name: /large/i });
    expect(button).toHaveClass('text-lg w-48'); // Large size style
  });

  it('passes through other props', () => {
    render(<Button data-testid="test-button" aria-label="Test Button">Test</Button>);
    
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('aria-label', 'Test Button');
  });
});
