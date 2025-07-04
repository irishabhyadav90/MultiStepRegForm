import React, { type InputHTMLAttributes } from 'react';
import {
  baseInputStyles,
  getInputBorderStyles,
  labelTextStyles,
  errorMessageStyles,
} from './inputStyles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className,
  ...props
}) => {
  const inputId = id || props.name || `input-${Math.random().toString(36).substring(2, 9)}`;

  const inputClasses = `${baseInputStyles} ${getInputBorderStyles(error)} ${className || ''}`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={inputId} className={labelTextStyles} style={{ color: 'var(--color-wynn-text-dark)' }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className={errorMessageStyles} style={{ color: 'var(--color-wynn-error)' }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;