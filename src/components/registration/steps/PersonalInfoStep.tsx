import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@components/common/Input';
import Select from '@components/common/Select';
import Button from '@components/common/Button';
import { GENDER_OPTIONS, RESIDENCE_COUNTRY_OPTIONS } from '@utils/appConstants';
import { personalInfoSchema, type PersonalInfoFormData } from '@utils/validationSchemas';
import SectionHeading from '@common/SectionHeading/SectionHeading';
import PhoneDropdown from '@common/PhoneDropdown/PhoneDropdown';
import { ButtonConstants } from '@common/Button/constants';
import { BUTTONS, FORM_LABELS, FORM_PLACEHOLDERS } from '@constants/appTexts';
import RegistrationLayout from '@/components/layout/Registration';
import Checkbox from '@/components/common/Checkbox';

interface PersonalInfoStepProps {
  formData: PersonalInfoFormData;
  updateFormData: (newData: Partial<PersonalInfoFormData>) => void;
  nextStep: () => void;
}

const RegistrationForm: React.FC<PersonalInfoStepProps> = ({ formData, updateFormData, nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: formData
  });

  const onSubmit = (data: PersonalInfoFormData) => {
    updateFormData(data);
    nextStep();
  };

  console.log("errors", errors)
  return (
    <RegistrationLayout
      step="Step 1 of 3"
      title="Registration"
      subtitle="Please enter below information to create your account."
      showButtons={false}
    >
      <form className="w-full max-w-2xl rounded" onSubmit={handleSubmit(onSubmit)} noValidate>
        <SectionHeading text="Personal Information" className='text-left' />
        <Input
          label={FORM_LABELS.FIRST_NAME}
          placeholder={FORM_PLACEHOLDERS.FIRST_NAME}
          {...register('firstName')}
          error={errors.firstName?.message}
          infoTooltip
        />
        <Input
          label={FORM_LABELS.LAST_NAME}
          placeholder={FORM_PLACEHOLDERS.LAST_NAME}
          {...register('lastName')}
          error={errors.lastName?.message}
          infoTooltip
        />
        <Select
          label={FORM_LABELS.GENDER}
          options={GENDER_OPTIONS}
          placeholder={FORM_PLACEHOLDERS.GENDER}
          {...register('gender')}
          error={errors.gender?.message}
          infoTooltip
        />
        <Select
          label={FORM_LABELS.RESIDENCE_COUNTRY}
          options={RESIDENCE_COUNTRY_OPTIONS}
          placeholder={FORM_PLACEHOLDERS.RESIDENCE_COUNTRY}
          {...register('residenceCountry')}
          error={errors.residenceCountry?.message}
          infoTooltip
        />
        <SectionHeading text="Contact Details" className='text-left' />
        <Input
          label={FORM_LABELS.EMAIL}
          placeholder={FORM_PLACEHOLDERS.EMAIL}
          {...register('email')}
          error={errors.email?.message}
          infoTooltip
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <PhoneDropdown
              value={value}
              onChange={onChange}
              error={errors.phoneNumber?.message}
            />
          )}
        />
        <div className="mt-8">
          <Checkbox
            id="agreedToTerms"
            label={FORM_LABELS.ACCEPT_TERMS}
            {...register('agreedToTerms')}
            error={errors.agreedToTerms?.message}
            checked={formData.agreedToTerms}
            onChange={(e) => {
              console.log(e.target.checked)
              updateFormData({
                ...formData,
                agreedToTerms: e.target.checked
              });
            }}
          />
        </div>
        <Button 
          type="submit" 
          variant={ButtonConstants.Variants.PRIMARY} 
          size={ButtonConstants.Sizes.SMALL} 
          className='float-left mt-6'>
          {BUTTONS.NEXT}
        </Button>
      </form>
    </RegistrationLayout>
  );
};

export default RegistrationForm;