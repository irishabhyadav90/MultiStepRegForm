import { useState } from 'react';
import PersonalInfoStep from '@components/registration/steps/PersonalInfoStep';
import OTPVerificationMethodStep from '@components/registration/steps/OTPVerificationMethodStep';
import OTPInputStep from '@components/registration/steps/OTPInputStep';

import { type PersonalInfoFormData } from '@utils/validationSchemas';

interface ISteps {
  PERSONAL_INFO: number;
  OTP_INPUT: number;
  OTP_VERIFICATION_METHOD: number;
}

const STEPS: ISteps = {
  PERSONAL_INFO: 1,
  OTP_INPUT: 2,
  OTP_VERIFICATION_METHOD: 3,
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(STEPS.PERSONAL_INFO);
  const [formData, setFormData] = useState<PersonalInfoFormData>({
    firstName: '',
    lastName: '',
    gender: '',
    residenceCountry: '',
    email: '',
    phoneNumber: '',
    agreedToTerms: false
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const updateFormData = (newData: Partial<PersonalInfoFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const renderStep = () => {
    switch (step) {
      case STEPS.PERSONAL_INFO:
        return (
          <PersonalInfoStep 
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case STEPS.OTP_INPUT:
        return (
          <OTPInputStep 
          prevStep={prevStep}
          nextStep={nextStep}
          />
        );
      case STEPS.OTP_VERIFICATION_METHOD:
          return (
          <OTPVerificationMethodStep 
            prevStep={prevStep}
            nextStep={onSubmit}
            email={formData.email}
            phone={formData.phoneNumber}
          />
        );
      default:
        return <div>Step not found</div>;
    }
  };
  
  return (
    <>
      {renderStep()}
    </>
  );
}

export default MultiStepForm;