// __tests__/RegistrationForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, expect, it, describe, beforeEach } from 'vitest';
import RegistrationForm from '@/components/registration/steps/PersonalInfoStep';
import type { PersonalInfoFormData } from '@utils/validationSchemas';

const mockFormData: PersonalInfoFormData = {
  firstName: '',
  lastName: '',
  gender: '',
  residenceCountry: '',
  email: '',
  phoneNumber: '',
  agreedToTerms: false,
};

describe('RegistrationForm', () => {
  const updateFormData = vi.fn();
  const nextStep = vi.fn();

  beforeEach(() => {
    render(
      <RegistrationForm
        formData={mockFormData}
        updateFormData={updateFormData}
        nextStep={nextStep}
      />
    );
  });

  it('renders all form fields', () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Residence Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/I agree to the terms and conditions and privacy policy./i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('shows validation errors on empty submit', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/is required/i).length).toBeGreaterThan(0);
    });
  });

  it('submits form with valid data', async () => {
    fireEvent.input(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' },
    });
    fireEvent.input(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Gender/i), {
      target: { value: 'male' },
    });
    fireEvent.change(screen.getByLabelText(/Residence Country/i), {
      target: { value: 'UAE' },
    });
    fireEvent.input(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.click(screen.getByLabelText(/I agree to the terms and conditions and privacy policy./i));

    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    await waitFor(() => {
      expect(updateFormData).toHaveBeenCalled();
    });
  });
});
