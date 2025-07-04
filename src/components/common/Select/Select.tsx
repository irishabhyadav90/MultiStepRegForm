// src/components/common/Select/Select.tsx
import React, { type SelectHTMLAttributes } from 'react';
import {
  baseSelectStyles,
  getSelectBorderStyles,
  labelTextStyles,
  errorMessageStyles,
} from './selectStyles'; // Import styling functions

/**
 * Defines the structure for each option in a select dropdown.
 * This interface is now co-located with the Select component.
 */
export interface SelectOption {
  value: string;
  label: string;
}

// Define the props interface for our Select component
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  id,
  options,
  placeholder,
  className,
  ...props
}) => {
  const selectId = id || props.name || `select-${Math.random().toString(36).substring(2, 9)}`;
  const selectClasses = `${baseSelectStyles} ${getSelectBorderStyles(error)} ${className || ''}`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={selectId} className={labelTextStyles} style={{ color: 'var(--color-wynn-text-dark)' }}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={selectClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled selected={!props.value}>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className={errorMessageStyles} style={{ color: 'var(--color-wynn-error)' }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;