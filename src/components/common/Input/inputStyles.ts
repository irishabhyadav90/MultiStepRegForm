
export const baseInputStyles = 'block w-full px-4 py-2 rounded-md border text-base transition-colors duration-200';

/**
 * Returns Tailwind CSS classes for input border and focus states based on error prop.
 * @param hasError Boolean indicating if there's an error.
 * @returns A string of Tailwind CSS classes.
 */
export const getInputBorderStyles = (hasError?: string): string => {
  const defaultBorder = 'border-[var(--color-wynn-border)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]';
  const errorBorder = 'border-[var(--color-wynn-error)] focus:border-[var(--color-wynn-error)] focus:ring-[var(--color-wynn-error)]';

  return hasError ? errorBorder : defaultBorder;
};

export const labelTextStyles = 'block text-sm font-medium mb-1 text-left';

export const errorMessageStyles = 'text-sm mt-1';