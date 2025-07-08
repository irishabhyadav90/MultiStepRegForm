import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input Component', () => {
  it('renders with label and placeholder', () => {
    render(
      <Input 
        id="test-input" 
        label="Test Label" 
        placeholder="Enter text" 
      />
    );
    
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('handles different input types', () => {
    const { rerender } = render(
      <Input 
        id="test-input" 
        label="Email" 
        type="email" 
      />
    );
    
    let input = screen.getByLabelText('Email') as HTMLInputElement;
    expect(input.type).toBe('email');
    
    rerender(
      <Input 
        id="test-input" 
        label="Password" 
        type="password" 
      />
    );
    
    input = screen.getByLabelText('Password') as HTMLInputElement;
    expect(input.type).toBe('password');
  });

  it('updates value on change', () => {
    const handleChange = vi.fn();
    render(
      <Input 
        id="test-input" 
        label="Test Input" 
        onChange={handleChange} 
      />
    );
    
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'test value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe('test value');
  });

  it('shows error message when error prop is provided', () => {
    render(
      <Input 
        id="test-input" 
        label="Test Input" 
        error="This field is required" 
      />
    );
    
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle('color: var(--color-wynn-error)');
  });

  it('applies custom className', () => {
    render(
      <Input 
        id="test-input" 
        label="Test Input" 
        className="custom-class" 
      />
    );
    
    const container = screen.getByTestId('input');
    expect(container).toHaveClass('custom-class');
  });
});
