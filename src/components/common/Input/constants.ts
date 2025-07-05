export const InputValidationRegex = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+\d{10,}$/,
};

export const InputConstants = {
  Variants: {
    DEFAULT: 'default',
    SEARCH: 'search',
    NUMERIC: 'numeric',
  } as const,
};

export type InputVariant = (typeof InputConstants.Variants)[keyof typeof InputConstants.Variants];