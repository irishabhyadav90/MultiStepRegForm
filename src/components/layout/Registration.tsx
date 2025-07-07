import React from 'react';
import Heading from '../common/Heading';
import Button from '../common/Button';
import { ButtonConstants } from '../common/Button/constants';
import { BUTTONS } from '@/constants/appTexts';

type RegistrationLayoutProps = {
  step: string;
  title: string;
  subtitle: string;
  showButtons?: boolean;
  children: React.ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
};

const RegistrationLayout: React.FC<RegistrationLayoutProps> = ({ step, title, subtitle, showButtons = true, children, onPrev, onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-serif w-full px-4 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-2xl mx-auto rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 bg-[--color-wynn-background]">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-6 sm:mb-8 md:mb-10">
          <div className="mb-4 sm:mb-0">
            <Heading level={1} className='text-2xl sm:text-3xl md:text-4xl text-gray-900'>{title}</Heading>
            <Heading level={6} className='text-sm sm:text-base text-gray-600 mt-1 md:mt-2'>{subtitle}</Heading>
          </div>
          <span className="text-sm font-medium text-gray-500 px-3 py-1 rounded-full">{step}</span>
        </header>  
        <main className="mb-8 sm:mb-10 md:mb-12">
          {children}
        </main>       
        {showButtons && (
          <footer className="mt-8 sm:mt-10 md:mt-12 flex justify-between gap-4 w-full bg-red-500">
            <Button
              variant={ButtonConstants.Variants.SECONDARY}
              size={ButtonConstants.Sizes.MEDIUM}
              className="w-1/3 sm:w-32 px-4 py-2.5 text-sm sm:text-base bg-[--color-secondary]"
              onClick={onPrev}
            >
              {BUTTONS.BACK}
            </Button>
            <Button
              variant={ButtonConstants.Variants.PRIMARY}
              size={ButtonConstants.Sizes.MEDIUM}
              className="w-2/3 sm:w-48 px-4 py-2.5 text-sm sm:text-base bg-[--color-primary]"
              onClick={onNext}
            >
              {BUTTONS.NEXT}
            </Button>
          </footer>
        )}
      </div>
    </div>
  );
};

export default RegistrationLayout;