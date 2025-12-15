'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [kyivTime, setKyivTime] = useState('');

  useEffect(() => {
    const updateKyivTime = () => {
      const now = new Date();
      const kyivTimeString = now.toLocaleString('en-US', {
        timeZone: 'Europe/Kyiv',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setKyivTime(kyivTimeString);
    };

    updateKyivTime();
    const interval = setInterval(updateKyivTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-yellow-400">
      {/* Top Bar with Kyiv Time and Social */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Kyiv time: {kyivTime}</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com/ukrainesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/ukrainesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Ukraine Solutions"
              width={153}
              height={66}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
              About Us
            </Link>
            <Link href="/projects" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
              Projects
            </Link>
            <Link href="/contact-us" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
              Contact
            </Link>
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="text-gray-800 hover:text-blue-600 font-semibold flex items-center transition-colors">
                More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <Link href="/advocacy-for-ukraine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Advocacy for Ukraine
                  </Link>
                  <Link href="/human-trafficking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Human Trafficking
                  </Link>
                  <Link href="/defense-needs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Defense Needs
                  </Link>
                  <Link href="/partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Partners
                  </Link>
                  <Link href="/financial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Financial
                  </Link>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 ml-6">
              <Link
                href="#"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                Donate
              </Link>
              <Link
                href="/advocacy-for-ukraine"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Advocacy
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-800 hover:text-blue-600 font-semibold py-2">
                Home
              </Link>
              <Link href="/about-us" className="text-gray-800 hover:text-blue-600 font-semibold py-2">
                About Us
              </Link>
              <Link href="/projects" className="text-gray-800 hover:text-blue-600 font-semibold py-2">
                Projects
              </Link>
              <Link href="/contact-us" className="text-gray-800 hover:text-blue-600 font-semibold py-2">
                Contact
              </Link>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-gray-800 hover:text-blue-600 font-semibold py-2 text-left flex items-center justify-between"
              >
                More
                <svg className={`h-4 w-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMoreOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/advocacy-for-ukraine" className="block text-gray-600 hover:text-blue-600 py-1">
                    Advocacy for Ukraine
                  </Link>
                  <Link href="/human-trafficking" className="block text-gray-600 hover:text-blue-600 py-1">
                    Human Trafficking
                  </Link>
                  <Link href="/defense-needs" className="block text-gray-600 hover:text-blue-600 py-1">
                    Defense Needs
                  </Link>
                  <Link href="/partners" className="block text-gray-600 hover:text-blue-600 py-1">
                    Partners
                  </Link>
                  <Link href="/financial" className="block text-gray-600 hover:text-blue-600 py-1">
                    Financial
                  </Link>
                </div>
              )}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Link
                  href="#"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2.5 rounded-lg font-bold text-sm"
                >
                  Donate
                </Link>
                <Link href="/advocacy-for-ukraine" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm">
                  Advocacy
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
