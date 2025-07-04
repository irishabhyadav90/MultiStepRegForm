export const ButtonConstants = {
    Variants: {
      PRIMARY: 'primary',
      SECONDARY: 'secondary',
      OUTLINE: 'outline',
      GHOST: 'ghost',
    } as const,
    Sizes: {
      SMALL: 'sm',
      MEDIUM: 'md',
      LARGE: 'lg',
    } as const,
  };
  
export type ButtonVariant = (typeof ButtonConstants.Variants)[keyof typeof ButtonConstants.Variants];
export type ButtonSize = (typeof ButtonConstants.Sizes)[keyof typeof ButtonConstants.Sizes];