import { render, screen, fireEvent } from '@testing-library/react';
import { vi, expect, it, describe, beforeEach } from 'vitest';
import OTPInputStep from '../OTPInputStep';
import OtpInputStep from '../OTPInputStep';

const mockPrevStep = vi.fn();
const mockNextStep = vi.fn();

describe('OTPInputStep', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders radio options and selects default option (email)', () => {
    render(<OTPInputStep prevStep={mockPrevStep} nextStep={mockNextStep} />);

    const phoneRadio = screen.getByLabelText(/Phone/i) as HTMLInputElement;
    const emailRadio = screen.getByLabelText(/Email/i) as HTMLInputElement;

    expect(phoneRadio).toBeInTheDocument();
    expect(emailRadio).toBeInTheDocument();
    expect(emailRadio.checked).toBe(true);
    expect(phoneRadio.checked).toBe(false);
  });

  it('allows changing selection to phone', () => {
    render(<OTPInputStep prevStep={mockPrevStep} nextStep={mockNextStep} />);

    const phoneRadio = screen.getByLabelText(/Phone/i) as HTMLInputElement;
    fireEvent.click(phoneRadio);

    expect(phoneRadio.checked).toBe(true);
  });

  it('calls nextStep with correct selected option on Next', () => {
    render(<OTPInputStep prevStep={mockPrevStep} nextStep={mockNextStep} />);

    // Email is selected by default
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    expect(mockNextStep).toHaveBeenCalledWith('email');
  });

  it('calls nextStep with phone when selected', () => {
    render(<OtpInputStep prevStep={mockPrevStep} nextStep={mockNextStep} />);

    fireEvent.click(screen.getByLabelText(/Phone/i));
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    expect(mockNextStep).toHaveBeenCalledWith('phone');
  });

  it('calls prevStep when Prev is clicked', () => {
    render(<OTPInputStep prevStep={mockPrevStep} nextStep={mockNextStep} />);

    const prevButton = screen.getByRole('button', { name: /Back/i });
    fireEvent.click(prevButton);

    expect(mockPrevStep).toHaveBeenCalled();
  });
});
