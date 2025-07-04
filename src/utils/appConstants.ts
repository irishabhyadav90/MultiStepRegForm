
import type { SelectOption } from '../components/common/Select';

/**
 * Static optiosns for Gender dropdown.
 */
export const GENDER_OPTIONS: SelectOption[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }, 
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' },
];

/**
 * Static options for Residence Country dropdown.
 */
export const RESIDENCE_COUNTRY_OPTIONS: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ae', label: 'United Arab Emirates' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
];

/**
 * Preliminary static options for Phone Number Country Codes.
 */
export const PHONE_COUNTRY_CODES: SelectOption[] = [
  { value: '971', label: '🇦🇪 +971 (United Arab Emirates)' },
  { value: '1', label: '🇺🇸 +1 (United States)' },
  { value: '44', label: '🇬🇧 +44 (United Kingdom)' },
  { value: '91', label: '🇮🇳 +91 (India)' },
  { value: '86', label: '🇨🇳 +86 (China)' },
];