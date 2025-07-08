import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationLayout from '@/components/layout/Registration';
import { BUTTONS } from '@/constants/appTexts';

describe('RegistrationLayout', () => {
  const props = {
    step: 'Step 1 of 3',
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    onPrev: vi.fn(),
    onNext: vi.fn(),
  };

  it('renders title, subtitle, and step', () => {
    render(
      <RegistrationLayout {...props}>
        <div>Child Content</div>
      </RegistrationLayout>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('renders navigation buttons when showButtons is true', () => {
    render(
      <RegistrationLayout {...props}>
        <div />
      </RegistrationLayout>
    );

    expect(screen.getByRole('button', { name: BUTTONS.BACK })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: BUTTONS.NEXT })).toBeInTheDocument();
  });

  it('calls onPrev and onNext when buttons are clicked', () => {
    render(
      <RegistrationLayout {...props}>
        <div />
      </RegistrationLayout>
    );

    fireEvent.click(screen.getByRole('button', { name: BUTTONS.BACK }));
    fireEvent.click(screen.getByRole('button', { name: BUTTONS.NEXT }));

    expect(props.onPrev).toHaveBeenCalled();
    expect(props.onNext).toHaveBeenCalled();
  });

  it('does not render buttons when showButtons is false', () => {
    render(
      <RegistrationLayout {...props} showButtons={false}>
        <div />
      </RegistrationLayout>
    );

    expect(screen.queryByRole('button', { name: BUTTONS.BACK })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: BUTTONS.NEXT })).not.toBeInTheDocument();
  });
});
