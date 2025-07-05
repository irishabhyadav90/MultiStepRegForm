import type { ButtonVariant, ButtonSize } from './constants';

const baseButtonStyles = 'rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

/**
 * Returns Tailwind CSS classes for button variants.
 * @param variant The desired button variant.
 * @returns A string of Tailwind CSS classes.
 */
export const getButtonVariantStyles = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary': // Referencing literals from `ButtonVariant` type directly
      return 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] focus:ring-[var(--color-primary)]';
    case 'secondary':
      return 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)] focus:ring-[var(--color-secondary)]';
    case 'outline':
      return 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]';
    case 'ghost':
      return 'text-[var(--color-primary)] hover:bg-gray-100 focus:ring-gray-300';
    default:
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  }
};

/**
 * Returns Tailwind CSS classes for button sizes.
 * @param size The desired button size.
 * @returns A string of Tailwind CSS classes.
 */
export const getButtonSizeStyles = (size: ButtonSize): string => {
  switch (size) {
    case 'sm':
      return 'px-4 py-2 text-sm w-36';
    case 'md':
      return 'px-6 py-3 text-base w-40';
    case 'lg':
      return 'px-8 py-4 text-lg w-48';
    default:
      return 'px-6 py-3 text-base w-48';
  }
};

export { baseButtonStyles };