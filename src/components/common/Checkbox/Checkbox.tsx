import React, { type InputHTMLAttributes } from 'react';
import {
  baseNativeCheckboxStyles,
  baseCustomCheckboxStyles,
  checkedVisualStyles,
  uncheckedVisualStyles,
  errorVisualStyles,
  CheckmarkSvg,
  labelTextStyles,
  errorMessageStyles,
} from './checkboxStyles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
  id: string; // ID is required for linking label to input for accessibility
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  id,
  className,
  ...props
}) => {

  const customCheckboxClasses = `${baseCustomCheckboxStyles}
    ${props.checked ? checkedVisualStyles : uncheckedVisualStyles}
    ${error ? errorVisualStyles : ''}
  `;

  console.log("props", props) 
  return (
    <div className={`flex items-start mb-4 ${className || ''}`}>
      <div className="relative flex items-center h-5 mr-3">
        {/* Hidden native checkbox for functionality and accessibility */}
        <input
          type="checkbox"
          id={id}
          className={baseNativeCheckboxStyles}
          {...props}
        />
        {/* Custom visual checkbox */}
        <div
          className={customCheckboxClasses}
          style={{
            boxShadow: !props.checked && !error ? 'inset 0 0 0 1px var(--color-wynn-border)' : 'none',
          }}
        >
          {CheckmarkSvg}
        </div>
      </div>
      <label htmlFor={id} className={`flex-grow ${labelTextStyles}`} style={{ color: 'var(--color-wynn-text-dark)' }}>
        {label}
      </label>
      {error && (
        <p className={errorMessageStyles} style={{ color: 'var(--color-wynn-error)' }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;