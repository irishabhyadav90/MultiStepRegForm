import { useState } from 'react';
import PersonalInfoStep from '@components/registration/steps/PersonalInfoStep';
import OTPVerificationMethodStep from '@components/registration/steps/OTPVerificationMethodStep';
import OTPInputStep from '@components/registration/steps/OTPInputStep';

import { type PersonalInfoFormData } from '@utils/validationSchemas';


const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PersonalInfoFormData>({
    firstName: '',
    lastName: '',
    gender: '',
    residenceCountry: '',
    email: '',
    phoneNumber: '',
    phoneCode: '',
    agreedToTerms: false
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const updateFormData = (newData: Partial<PersonalInfoFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep 
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <OTPVerificationMethodStep 
            nextStep={nextStep}
            prevStep={prevStep}
            email={formData.email}
            phone={formData.phoneNumber}
          />
        );
      case 3:
        return (
          <OTPInputStep 
            prevStep={prevStep}
            nextStep={onSubmit}
          />
        );
      default:
        return <div>Step not found</div>;
    }
  };

  return (
    <div>
    {renderStep()}
    </div>
  );
}

export default MultiStepForm;