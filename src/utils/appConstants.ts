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


export const FOOTER_LINKS = [
  [
    'Shop Home Collection',
    'Gift Cards',
    'Wynn Stories',
    'Wynn Slots App',
    'Mobile App',
    'Responsible Gaming',
  ],
  [
    'About Us',
    'Careers',
    'Investor Relations',
    'Privacy Notice',
    'Cookie Notice',
    'Terms of Use',
    'Hotel Information & Directory',
  ],
  ['Wynn Palace Cotai', 'Encore Boston Harbor', 'Wynn Macau'],
];


export const COUNTRY_OPTIONS = [
  { name: "UAE", code: "AE", dialCode: "+971", flag: "🇦🇪", format: "50 123 4567" },
  { name: "Albania", code: "AL", dialCode: "+355", flag: "🇦🇱", format: "69 123 4567" },
  { name: "Andorra", code: "AD", dialCode: "+376", flag: "🇦🇩", format: "612 345" },
  { name: "Angola", code: "AO", dialCode: "+244", flag: "🇦🇴", format: "923 456 789" },
  { name: "Antigua", code: "AG", dialCode: "+1", flag: "🇦🇬", format: "268 123 4567" },
  { name: "Argentina", code: "AR", dialCode: "+54", flag: "🇦🇷", format: "9 11 1234 5678" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺", format: "412 345 678" },
  { name: "Austria", code: "AT", dialCode: "+43", flag: "🇦🇹", format: "664 1234567" },
  { name: "Bahamas", code: "BS", dialCode: "+1", flag: "🇧🇸", format: "242 123 4567" },
  { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭", format: "3600 1234" },
  { name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩", format: "1812 345678" },
  { name: "Barbados", code: "BB", dialCode: "+1", flag: "🇧🇧", format: "246 123 4567" },
  { name: "Belgium", code: "BE", dialCode: "+32", flag: "🇧🇪", format: "470 12 34 56" },
  { name: "Belize", code: "BZ", dialCode: "+501", flag: "🇧🇿", format: "622 1234" },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷", format: "11 98765 4321" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦", format: "613 555 0123" },
  { name: "China", code: "CN", dialCode: "+86", flag: "🇨🇳", format: "131 2345 6789" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷", format: "6 12 34 56 78" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪", format: "151 12345678" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳", format: "98765 43210" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵", format: "90 1234 5678" },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾", format: "12 345 6789" },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿", format: "21 123 4567" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬", format: "8123 4567" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦", format: "71 123 4567" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧", format: "7400 123456" },
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸", format: "201 555 0123" },
];