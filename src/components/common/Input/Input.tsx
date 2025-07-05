import { forwardRef, type InputHTMLAttributes } from 'react';
import {
  baseInputStyles,
  getInputBorderStyles,
  labelTextStyles,
  errorMessageStyles,
} from './inputStyles';
import InfoIcon from '@/components/svg/InfoIcon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  infoTooltip?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  id,
  className,
  infoTooltip,
  ...props  
}, ref) => {
  const inputId = id || props.name || `input-${Math.random().toString(36).substring(2, 9)}`;

  const inputClasses = `${baseInputStyles} ${getInputBorderStyles(error)} ${className || ''}`;

  return (
    <div className="mb-4">
      {label && (
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor={inputId} className={`${labelTextStyles} flex-1`} style={{ color: 'var(--color-wynn-text-dark)' }}>
            {label}
          </label>
          {infoTooltip && (
            <InfoIcon className="flex-shrink-0" />
          )}
        </div>
      )}
      <input
        id={inputId}
        ref={ref}
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
});


export default Input;