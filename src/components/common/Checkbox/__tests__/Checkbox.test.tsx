import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe('Checkbox Component', () => {
  it('renders with label', () => {
    render(<Checkbox id="test" label="Test Checkbox" />);
    const checkbox = screen.getByLabelText('Test Checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('handles checked state', () => {
    const { rerender } = render(<Checkbox id="test" label="Test Checkbox" checked={false} />);
    let checkbox = screen.getByLabelText('Test Checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    
    rerender(<Checkbox id="test" label="Test Checkbox" checked={true} />);
    checkbox = screen.getByLabelText('Test Checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(
      <Checkbox 
        id="test" 
        label="Test Checkbox" 
        onChange={handleChange} 
      />
    );
    
    const checkbox = screen.getByLabelText('Test Checkbox');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Checkbox id="test" label="Test Checkbox" className="custom-class" />);
    const container = screen.getByTestId('checkbox-container');
    expect(container).toHaveClass('custom-class');
  });

  it('shows error message when error prop is provided', () => {
    render(
      <Checkbox 
        id="test" 
        label="Test Checkbox" 
        error="This field is required" 
      />
    );
    
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle('color: var(--color-wynn-error)');
  });
});
