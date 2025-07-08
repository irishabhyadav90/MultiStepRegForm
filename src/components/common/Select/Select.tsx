import React, { type SelectHTMLAttributes } from 'react';
import {
  baseSelectStyles,
  getSelectBorderStyles,
  labelTextStyles,
  errorMessageStyles,
} from './selectStyles';
import DropdownIcon from '../../svg/Dropdown';
import InfoIcon from '../../svg/InfoIcon';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  infoTooltip?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  id,
  options,
  placeholder,
  className,
  infoTooltip,
  ...props
}) => {
  const selectId = id || props.name || `select-${Math.random().toString(36).substring(2, 9)}`;
  const selectClasses = `${baseSelectStyles} ${getSelectBorderStyles(error)} ${className || ''}`;

  return (
    <div className="mb-4" data-testid="select-container">
      {label && (
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor={selectId} className={`${labelTextStyles} flex-1`} style={{ color: 'var(--color-wynn-text-dark)' }}>
            {label}
          </label>
          {infoTooltip && (
            <InfoIcon className="flex-shrink-0" />
          )}
        </div>
      )}
      <div className="relative">
        <select
          data-testid="select"
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
       <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        <DropdownIcon />
       </div>
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