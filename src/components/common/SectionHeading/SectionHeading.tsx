import React, { type HTMLAttributes } from 'react';
import {
  headingTextClasses,
} from './sectionHeadingStyles';
import Heading from '../Heading';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, className, ...props }) => {
  return (
    <div className={`mb-6 ${className || ''}`} {...props}>
     <Heading level={3} className={headingTextClasses}>{text}</Heading> 
    </div>
  );
};

export default SectionHeading;