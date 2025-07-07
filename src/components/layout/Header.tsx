import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Logo from '../svg/logo';

const navLinks = [
  'Rooms & Suites',
  'Wynn Rewards',
  'Offers',
  'Dining',
  'Entertainment',
  'Meetings & Events',
];

const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-black font-medium">
          {navLinks.map((item) => (
            <a href="#" key={item} className="hover:opacity-70 transition text-[var(--color-wynn-text-dark)]">
              {item.toUpperCase()}
            </a>
          ))}
          <div className="ml-4 cursor-pointer flex items-center gap-1">
            <span>EN</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-sm font-medium">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a key={item} href="#" className="text-black">
                {item.toUpperCase()}
              </a>
            ))}
            <div className="flex items-center gap-1 mt-2">
              <span>EN</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
