import React from 'react';
import Heading from '../common/Heading';
import Button from '../common/Button';
import { ButtonConstants } from '../common/Button/constants';

type RegistrationLayoutProps = {
  step: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const RegistrationLayout: React.FC<RegistrationLayoutProps> = ({ step, title, subtitle, children }) => {
  return (
    <div className="bg-[#F8F9F7] min-h-screen flex flex-col items-center justify-center font-serif">
      <div className="w-full max-w-2xl mx-auto px-4">
        <header className="flex justify-between items-baseline mb-8">
          <div>
            <Heading level={1} className='text-left'>{title}</Heading>
            <Heading level={6}>{subtitle}</Heading>
          </div>
          <Heading level={6}>{step}</Heading>
        </header>
        <main>{children}</main>   
        <footer className="mt-12 flex justify-between">
        <Button type="submit" variant={ButtonConstants.Variants.SECONDARY} size={ButtonConstants.Sizes.MEDIUM} className='float-left w-xs mr-5'>BACK</Button>
        <Button type="submit" variant={ButtonConstants.Variants.PRIMARY} size={ButtonConstants.Sizes.MEDIUM} className='float-left w-xs ml-5'>NEXT</Button>
        </footer>
      </div>
    </div>
  );
};

export default RegistrationLayout;