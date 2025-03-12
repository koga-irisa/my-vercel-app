'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white bg-opacity-70 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-5">
        <Link href="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity duration-200">IRISA</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm">
            {['HOME', 'COMPANY', 'SERVICE', 'NEWS', 'CONTACT'].map(link => (
              <li key={link}>
                <Link
                  href={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors duration-200 tracking-wide font-medium relative py-2 group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu (Toggleable) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['HOME', 'COMPANY', 'SERVICE', 'NEWS', 'CONTACT'].map(link => (
            <Link
              key={link}
              href={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}