import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGooglePlay,
  FaApple,
} from 'react-icons/fa6';
import { FOOTER_LINKS } from '@utils/appConstants';
import { FOOTER } from '@/constants/appTexts';


const Footer: React.FC = () => {
  return (
    <footer className="text-white px-6 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm mb-8">
          {FOOTER_LINKS.map((column, idx) => (
            <div key={idx} className={idx === 3 ? 'col-span-2 sm:col-span-1' : ''}>
              <ul className="space-y-2">
                {column.map((link) => (
                  <li key={link} className="whitespace-nowrap">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-1 col-span-2 text-sm flex flex-col gap-2">
            <p className="font-medium">{FOOTER.LOCATION}</p>
            <p>{FOOTER.ADDRESS}</p>
            <p>{FOOTER.PHONE}</p>

            <p className="mt-4 mb-2">Connect with us.</p>
            <div className="flex gap-3 text-[#5a3521]">
              {[FaFacebookF, FaGooglePlay, FaApple, FaInstagram, FaXTwitter].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="bg-white rounded-full p-2 text-sm hover:opacity-80 transition"
                  >
                    <Icon />
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-white mt-10 space-y-1">
          <p>{FOOTER.DO_NOT_SELL}</p>
          <p>{FOOTER.COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
