import { useState, useRef } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

export const useOtp = (length: number) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return {
    otp,
    inputRefs,
    handleChange,
    handleKeyDown,
  };
};