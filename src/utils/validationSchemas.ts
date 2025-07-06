import { z } from 'zod';

/**
 * Zod schema for Personal Information Step.
 */
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  gender: z.string().min(1, { message: 'Gender is required.' }),
  residenceCountry: z.string().min(1, { message: 'Residence Country is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phoneNumber: z.string().min(1, { message: 'Phone Number is required.' }),
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions.'
  }),
  phoneCode: z.string().min(1, { message: 'Phone Code is required.' }),
});

/**
 * Infer the TypeScript type from the schema for type safety.
 */
export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;