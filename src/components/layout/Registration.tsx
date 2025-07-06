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
    <div className="min-h-screen flex flex-col items-center justify-center font-serif w-full">
      <div className="w-full max-w-2xl mx-auto">
        <header className="flex justify-between items-baseline mb-8">
          <div>
            <Heading level={1} className='text-left'>{title}</Heading>
            <Heading level={6}>{subtitle}</Heading>
          </div>
          <Heading level={6}>{step}</Heading>
        </header>
        <main>{children}</main>
        {showButtons && <footer className="mt-12 flex justify-between">
          <Button
            variant={ButtonConstants.Variants.SECONDARY} 
            size={ButtonConstants.Sizes.MEDIUM} 
            className='float-left w-xs mr-5'
            onClick={onPrev}
            >
             {BUTTONS.BACK}
          </Button>
          <Button
            variant={ButtonConstants.Variants.PRIMARY} 
            size={ButtonConstants.Sizes.MEDIUM} 
            className='float-left w-xs ml-5'
            onClick={onNext}
            >
             {BUTTONS.NEXT}
          </Button>
        </footer>}
      </div>
    </div>
  );
};

export default RegistrationLayout;