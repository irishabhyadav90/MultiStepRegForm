import { labelTextStyles, errorMessageStyles } from '../Input/inputStyles';

export const baseNativeCheckboxStyles = 'absolute opacity-0 w-5 h-5 cursor-pointer z-10';

export const baseCustomCheckboxStyles = 'w-5 h-5 border rounded flex items-center justify-center flex-shrink-0 relative';

export const checkedVisualStyles = 'bg-[var(--color-primary)] border-[var(--color-primary)]';
export const uncheckedVisualStyles = 'bg-white border-[var(--color-wynn-border)]';
export const errorVisualStyles = 'border-[var(--color-wynn-error)]';

/* Todo: Move this to svg folder */
export const CheckmarkSvg = (
  <svg
    className="w-4 h-4 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export { labelTextStyles, errorMessageStyles };