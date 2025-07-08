// src/components/common/Button/Button.tsx
import React, { type ButtonHTMLAttributes } from 'react';

import { type ButtonVariant, type ButtonSize, ButtonConstants } from './constants';
import { baseButtonStyles, getButtonVariantStyles, getButtonSizeStyles } from './buttonStyles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize ;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = ButtonConstants.Variants.PRIMARY,
  size = ButtonConstants.Sizes.MEDIUM,
  children,
  className,
  ...props
}) => {

  return (
    <button
      data-testid="button"
      className={`${baseButtonStyles} ${getButtonVariantStyles(variant)} ${getButtonSizeStyles(size)} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;