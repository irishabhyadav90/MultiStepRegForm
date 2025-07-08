import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';
import { FOOTER } from '@/constants/appTexts';
import { FOOTER_LINKS } from '@/utils/appConstants';

describe('Footer', () => {
  it('renders footer location and contact details', () => {
    render(<Footer />);

    expect(screen.getByText(FOOTER.LOCATION)).toBeInTheDocument();
    expect(screen.getByText(FOOTER.ADDRESS)).toBeInTheDocument();
    expect(screen.getByText(FOOTER.PHONE)).toBeInTheDocument();
  });

  it('renders all footer links from FOOTER_LINKS array', () => {
    render(<Footer />);

    FOOTER_LINKS.flat().forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders social media icons by checking wrapper spans', () => {
    render(<Footer />);
    const iconWrappers = screen.getAllByText((_, element) => {
      return element?.tagName.toLowerCase() === 'span' && element.className.includes('rounded-full');
    });
    expect(iconWrappers).toHaveLength(5);
  });

  it('renders bottom text section', () => {
    render(<Footer />);

    expect(screen.getByText(FOOTER.DO_NOT_SELL)).toBeInTheDocument();
    expect(screen.getByText(FOOTER.COPYRIGHT)).toBeInTheDocument();
  });
});
