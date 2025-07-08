import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select Component', () => {
  it('renders with label and options', () => {
    render(
      <Select 
        id="test-select" 
        label="Test Select"
        options={options}
      />
    );
    
    const select = screen.getByLabelText('Test Select');
    expect(select).toBeInTheDocument();
    
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(options.length);
  });

  it('handles selection change', () => {
    const handleChange = vi.fn();
    render(
      <Select 
        id="test-select" 
        label="Test Select"
        options={options}
        onChange={handleChange}
      />
    );
    
    const select = screen.getByLabelText('Test Select');
    fireEvent.change(select, { target: { value: 'option2' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe('option2');
  });

  it('shows error message when error prop is provided', () => {
    render(
      <Select 
        id="test-select" 
        label="Test Select"
        options={options}
        error="This field is required"
      />
    );
    
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle('color: var(--color-wynn-error)');
  });

  it('applies custom className', () => {
    render(
      <Select 
        id="test-select" 
        label="Test Select"
        options={options}
        className="custom-class"
      />
    );
    
    const container = screen.getByTestId('select');
    expect(container).toHaveClass('custom-class');
  });

  it('displays the default value when provided', () => {
    render(
      <Select 
        id="test-select" 
        label="Test Select"
        options={options}
        defaultValue="option2"
      />
    );
    
    const select = screen.getByLabelText('Test Select') as HTMLSelectElement;
    expect(select.value).toBe('option2');
  });
});
