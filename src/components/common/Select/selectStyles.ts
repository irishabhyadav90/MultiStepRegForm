// src/components/common/Select/selectStyles.ts
// Reusing common label and error message styles from Input component
export { labelTextStyles, errorMessageStyles } from '../Input/inputStyles';

// Base styles for the select field
export const baseSelectStyles = 'block w-full px-4 py-2 rounded-md border text-base transition-colors duration-200 appearance-none bg-white cursor-pointer';

/**
 * Returns Tailwind CSS classes for select border and focus states based on error prop.
 * @param hasError Boolean indicating if there's an error.
 * @returns A string of Tailwind CSS classes.
 */
export const getSelectBorderStyles = (hasError?: string): string => {
  const defaultBorder = 'border-[var(--color-wynn-border)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]';
  const errorBorder = 'border-[var(--color-wynn-error)] focus:border-[var(--color-wynn-error)] focus:ring-[var(--color-wynn-error)]';

  return hasError ? errorBorder : defaultBorder;
};