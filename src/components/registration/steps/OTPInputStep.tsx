import React, { useState } from 'react';
import SectionHeading from '@components/common/SectionHeading/SectionHeading';
import { OTP_VERIFICATION, TITLES } from '@constants/appTexts';
import RegistrationLayout from '@/components/layout/Registration';

interface OTPInputStepProps {
  prevStep: () => void;
  nextStep: (otpOption: 'phone' | 'email') => void;
}
const OtpInputStep: React.FC<OTPInputStepProps> = ({ prevStep, nextStep }) => {
  const [otpOption, setOtpOption] = useState<'phone' | 'email'>('email');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtpOption(event.target.value as 'phone' | 'email');
  };

  return (
    <RegistrationLayout
      step="Step 2 of 3"
      title="Registration"
      subtitle="Please enter below information to create your account."
      onNext={() => nextStep(otpOption)}
      onPrev={prevStep}
    >
      <main>
        <SectionHeading text={TITLES.PERSONAL_INFO} className='text-left' />
        <div className="bg-white p-8 rounded-lg shadow-sm w-full">
          <h3 className="text-center text-xl text-gray-800 mb-2">
            {OTP_VERIFICATION.SEND_CODE}
          </h3>
          <p className="text-center text-gray-500 mb-8">
            {OTP_VERIFICATION.VERIFICATION_PROMPT}
          </p>

          <div className="flex justify-center space-x-12">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="otpOption"
                value="phone"
                checked={otpOption === 'phone'}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-teal-600"
              />
              <span className="ml-3 text-gray-700">
                {OTP_VERIFICATION.OPTIONS.PHONE}
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="otpOption"
                value="email"
                checked={otpOption === 'email'}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-teal-600"
              />
              <span className="ml-3 text-gray-700">
                {OTP_VERIFICATION.OPTIONS.EMAIL}
              </span>
            </label>
          </div>
        </div>
      </main>
    </RegistrationLayout>
  );
};

export default OtpInputStep;