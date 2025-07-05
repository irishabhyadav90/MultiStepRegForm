export const getHeadingClasses = (level: 1 | 2 | 3 | 4 | 5 | 6): string => {
  switch (level) {
    case 1:
      return 'text-4xl';
    case 2:
      return 'text-3xl';
    case 3:
      return 'text-2xl';
    case 4:
      return 'text-xl';
    case 5:
      return 'text-lg';
    case 6:
      return 'text-base';
    default:
      return 'text-base';
  }
};

export const defaultHeadingColor = 'text-[var(--color-wynn-text-dark)]';