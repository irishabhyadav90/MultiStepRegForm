import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@components/common/Input';
import Select from '@components/common/Select';
import Button from '@components/common/Button';
import { GENDER_OPTIONS, RESIDENCE_COUNTRY_OPTIONS } from '@utils/appConstants';
import { personalInfoSchema, type PersonalInfoFormData } from '@utils/validationSchemas';
import SectionHeading from '@common/SectionHeading/SectionHeading';
import PhoneDropdown from '@common/PhoneDropdown/PhoneDropdown';
import { ButtonConstants } from '@common/Button/constants';
import { BUTTONS, FORM_LABELS } from '@constants/appTexts';
import RegistrationLayout from '@/components/layout/Registration';


const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data: PersonalInfoFormData) => {
    console.log(data);
  };

  console.log("errors", errors)
  return (
    <RegistrationLayout
      step="Step 1 of 3"
      title="Registration"
      subtitle="Please enter below information to create your account."

    >
      <form className="w-full max-w-2xl bg-white p-8 rounded" onSubmit={handleSubmit(onSubmit)} noValidate>
        <SectionHeading text="Personal Information" className='text-left' />
        <Input
          label={FORM_LABELS.FIRST_NAME}
          {...register('firstName')}
          error={errors.firstName?.message}
          infoTooltip
        />
        <Input
          label={FORM_LABELS.LAST_NAME}
          {...register('lastName')}
          error={errors.lastName?.message}
          infoTooltip
        />
        <Select
          label={FORM_LABELS.GENDER}
          options={GENDER_OPTIONS}
          placeholder="Select gender..."
          {...register('gender')}
          error={errors.gender?.message}
          infoTooltip
        />
        <Select
          label={FORM_LABELS.RESIDENCE_COUNTRY}
          options={RESIDENCE_COUNTRY_OPTIONS}
          placeholder="Select residence country..."
          {...register('residenceCountry')}
          error={errors.residenceCountry?.message}
          infoTooltip
        />
        <SectionHeading text="Contact Details" className='text-left' />
        <Input
          label={FORM_LABELS.EMAIL}
          {...register('email')}
          error={errors.email?.message}
          infoTooltip
        />
        <PhoneDropdown />
        <Button type="submit" variant={ButtonConstants.Variants.PRIMARY} size={ButtonConstants.Sizes.SMALL} className='float-left mt-6'>{BUTTONS.NEXT}</Button>
      </form>
    </RegistrationLayout>
  );
};

export default RegistrationForm;