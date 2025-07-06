import React, { type ChangeEvent, type KeyboardEvent } from 'react';
import RegistrationLayout from '@components/layout/Registration';
import { useOtp } from '@hooks/useOtp';
import Input from '@common/Input';
import SectionHeading from '@common/SectionHeading/SectionHeading';
import { BUTTONS, OTP_VERIFICATION } from '@constants/appTexts';

type OtpInputFormProps = {
  email: string;
  phone: string;
  nextStep: () => void;
  prevStep: () => void;
};

const OTP_LENGTH = 4;

const OtpInputForm: React.FC<OtpInputFormProps> = ({ email, nextStep, prevStep }) => {

  const { otp, inputRefs, handleChange, handleKeyDown } = useOtp(OTP_LENGTH);

  return (
    <RegistrationLayout
      step="Step 3 of 3"
      title="Registration"
      subtitle="Please enter below information to create your account."
      onNext={nextStep}
      onPrev={prevStep}
    >
      <SectionHeading text="OTP Verification" className='text-left' />
      <div className="p-8 rounded-lg shadow-sm w-full text-center">
        <h3 className="text-xl text-gray-800 mb-2">{OTP_VERIFICATION.ENTER_CODE}</h3>
        <p className="text-gray-500 mb-8">
          We've sent a code to <span className="text-gray-700 font-medium">{email}</span>
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                if (el) {
                  inputRefs.current[index] = el;
                }
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e)}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
              className="w-16 h-20 text-center text-4xl border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
            />
          ))}
        </div>

        <p className="text-gray-500">
          {OTP_VERIFICATION.DIDNT_RECEIVE}{' '}
          <button className="text-teal-600 hover:underline">
            {BUTTONS.RESEND_CODE}
          </button>
        </p>
      </div>
    </RegistrationLayout>
  );
};

export default OtpInputForm;