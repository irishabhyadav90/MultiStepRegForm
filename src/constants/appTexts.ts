export const BUTTONS = {
  BACK: 'Back',
  NEXT: 'Next',
  SUBMIT: 'Submit',
  VERIFY: 'Verify',
  SEND_CODE: 'Send Code',
  RESEND_CODE: 'Resend Code'
};

// Form field labels
export const FORM_LABELS = {
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  GENDER: 'Gender',
  RESIDENCE_COUNTRY: 'Residence Country',
  EMAIL: 'Email Address',
  PHONE_NUMBER: 'Phone Number',
  ACCEPT_TERMS: 'I agree to the Terms and Conditions'
};

// Validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: (field: string) => `${field} is required.`,
  INVALID_EMAIL: 'Invalid email address.',
  TERMS_REQUIRED: 'You must agree to the terms and conditions.'
};

// Gender options
export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' }
];

// Country options
export const COUNTRY_OPTIONS = [
  { value: 'us', label: 'United States' },
  { value: 'ae', label: 'United Arab Emirates' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' }
];

// Phone country codes
export const PHONE_COUNTRY_CODES = [
  { value: '971', label: '🇦🇪 +971 (United Arab Emirates)' },
  { value: '1', label: '🇺🇸 +1 (United States)' },
  { value: '44', label: '🇬🇧 +44 (United Kingdom)' },
  { value: '91', label: '🇮🇳 +91 (India)' },
  { value: '86', label: '🇨🇳 +86 (China)' }
];

// OTP Verification
export const OTP_VERIFICATION = {
  TITLE: 'Verify Your Identity',
  SEND_CODE: 'Send Code',
  VERIFICATION_PROMPT: 'How would you like to receive the code?',
  OPTIONS: {
    PHONE: 'Send to Phone',
    EMAIL: 'Send to Email'
  },
  ENTER_CODE: 'Enter the 6-digit code sent to',
  DIDNT_RECEIVE: 'Didn\'t receive the code?',
  VERIFICATION_SUCCESS: 'Verification successful!',
  VERIFICATION_FAILED: 'Verification failed. Please try again.',
  INVALID_CODE: 'Invalid code. Please try again.'
};

// Section titles
export const TITLES = {
  PERSONAL_INFO: 'Personal Information',
  VERIFICATION_METHOD: 'Verification Method'
};
