import React from 'react';
import { getHeadingClasses, defaultHeadingColor } from './headingStyles';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children, className, ...props }) => {
const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <Tag className={`${getHeadingClasses(level)} ${defaultHeadingColor} ${className || ''}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;