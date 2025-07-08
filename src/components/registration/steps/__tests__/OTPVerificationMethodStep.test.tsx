import { render, screen, fireEvent } from '@testing-library/react';
import { vi, expect, it, describe, beforeEach } from 'vitest';
import OTPVerificationMethodStep from '../OTPVerificationMethodStep';

const mockEmail = 'test@example.com';
const mockPhone = '+971123456789';
const mockNextStep = vi.fn();
const mockPrevStep = vi.fn();

describe('OTPVerificationMethodStep', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const setup = () => {
    render(
      <OTPVerificationMethodStep
        email={mockEmail}
        phone={mockPhone}
        nextStep={mockNextStep}
        prevStep={mockPrevStep}
      />
    );
  };

  it('renders OTP input fields and email message', () => {
    setup();
    expect(screen.getByText(/We've sent a code to/i)).toBeInTheDocument();
    expect(screen.getByText(mockEmail)).toBeInTheDocument();

    const otpInputs = screen.getAllByRole('textbox');
    expect(otpInputs).toHaveLength(4);
  });

  it('allows typing digits into OTP fields', () => {
    setup();

    const otpInputs = screen.getAllByRole('textbox');
    fireEvent.change(otpInputs[0], { target: { value: '1' } });
    fireEvent.change(otpInputs[1], { target: { value: '2' } });
    fireEvent.change(otpInputs[2], { target: { value: '3' } });
    fireEvent.change(otpInputs[3], { target: { value: '4' } });

    expect(otpInputs[0]).toHaveValue('1');
    expect(otpInputs[1]).toHaveValue('2');
    expect(otpInputs[2]).toHaveValue('3');
    expect(otpInputs[3]).toHaveValue('4');
  });

  it('calls nextStep with correct OTP when onNext is triggered', () => {
    setup();

    const otpInputs = screen.getAllByRole('textbox');
    fireEvent.change(otpInputs[0], { target: { value: '1' } });
    fireEvent.change(otpInputs[1], { target: { value: '2' } });
    fireEvent.change(otpInputs[2], { target: { value: '3' } });
    fireEvent.change(otpInputs[3], { target: { value: '4' } });

    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    expect(mockNextStep).toHaveBeenCalledWith('1234');
  });

  it('renders resend code text', () => {
    setup();
    expect(screen.getByText(/Resend Code/i)).toBeInTheDocument();
  });
});
