import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { COUNTRY_OPTIONS } from '@utils/appConstants';

import PhoneDropdown from '../PhoneDropdown';

// Mock the countries array for testing
vi.mock('../PhoneDropdown', async () => {
  const actual = await vi.importActual('../PhoneDropdown');
  return {
    ...actual,
    countryOptions: COUNTRY_OPTIONS
  };
});

describe('PhoneDropdown Component', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
    error: undefined,
    countryOptions: COUNTRY_OPTIONS
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<PhoneDropdown {...defaultProps} />);
    
    // Check container and label
    const container = screen.getByTestId('phone-dropdown-container');
    const label = screen.getByText('Phone Number');
    const input = screen.getByTestId('phone-input');
    const countrySelector = container.querySelector('div[data-testid="country-option"]') || 
                           container.querySelector('div[class*="flex items-center cursor-pointer"]');
    
    expect(container).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(countrySelector).toBeInTheDocument();
    expect(screen.getByText('🇦🇪')).toBeInTheDocument(); // Check for UAE flag
    expect(input).toHaveAttribute('placeholder', '+971 50 123 4567'); // Default UAE placeholder
  });

  it('opens country dropdown when clicked', async () => {
    render(<PhoneDropdown {...defaultProps} />);

    const container = screen.getByTestId('phone-dropdown-container');
    const dropdownButton =  container.querySelector('div[data-testid="country-option"]') || 
                            container.querySelector('div[class*="flex items-center cursor-pointer"]');
    fireEvent.click(dropdownButton as Element);
    
    // Check if dropdown is open
    const searchInput = screen.getByTestId('phone-search-input');
    expect(searchInput).toBeInTheDocument();
    
    // Check if countries are listed
    const countryOptions = screen.getAllByTestId('country-option');
    expect(countryOptions.length).toBeGreaterThan(0);
  });

  it('filters countries based on search input', async () => {
    render(<PhoneDropdown {...defaultProps} />);
    
    const container = screen.getByTestId('phone-dropdown-container');
    const dropdownButton =  container.querySelector('div[data-testid="country-option"]') || 
                            container.querySelector('div[class*="flex items-center cursor-pointer"]');
    fireEvent.click(dropdownButton as Element);
    
    // Type in search
    const searchInput = screen.getByTestId('phone-search-input');
    fireEvent.change(searchInput, { target: { value: 'united' } });
    
    // Check filtered results
    const countryOptions = screen.getAllByTestId('country-option');
    expect(countryOptions).toHaveLength(2); // Should show UK and US
    expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();
  });

  it('selects a country and updates the input', async () => {
    render(<PhoneDropdown {...defaultProps} />);
    
    const container = screen.getByTestId('phone-dropdown-container');
    const dropdownButton =  container.querySelector('div[data-testid="country-option"]') || 
                            container.querySelector('div[class*="flex items-center cursor-pointer"]');
    fireEvent.click(dropdownButton as Element);
    
    // Select UK
    const ukOption = screen.getByText('United Kingdom');
    fireEvent.click(ukOption);
    
    // Check if input placeholder is updated
    const input = screen.getByTestId('phone-input');
    expect(input).toHaveAttribute('placeholder', '+44 7400 123456');
    
    // Type in phone number
    fireEvent.change(input, { target: { value: '7400123456' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith('7400123456');
  });
//     render(<PhoneDropdown {...defaultProps} />);
    
//     // Check default flag
//     const flag = screen.getByText('🇦🇪');
//     expect(flag).toBeInTheDocument();
    
//     // Open dropdown and select UK
//     const dropdownButton = screen.getByRole('button', { name: /select country/i });
//     fireEvent.click(dropdownButton);
//     const ukOption = screen.getByText('United Kingdom');
//     fireEvent.click(ukOption);
    
//     // Check if flag updated
//     const updatedFlag = screen.getByText('🇬🇧');
//     expect(updatedFlag).toBeInTheDocument();
//   });
});