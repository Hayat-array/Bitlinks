'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import LoginSignupModal from './LoginSignupModal';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('login');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const openLogin  = () => { setModalMode('login');  setShowModal(true); setIsMobileMenuOpen(false); };
  const openSignup = () => { setModalMode('signup'); setShowModal(true); setIsMobileMenuOpen(false); };
  
  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/',        label: 'Home' },
    { href: '/about',   label: 'About' },
    { href: '/shorten', label: 'Shorten' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`
          sticky top-0 z-40 w-full transition-all duration-300
          ${scrolled || isMobileMenuOpen
            ? 'bg-purple-900/95 backdrop-blur-md shadow-lg shadow-purple-900/30'
            : 'bg-gradient-to-r from-purple-900 via-purple-800 to-violet-700'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group flex-shrink-0 z-50">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-black text-sm group-hover:bg-white/30 transition-colors">
              B
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight group-hover:text-purple-200 transition-colors">
              Bit<span className="text-purple-300">Links</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-4 py-2 text-sm font-medium text-purple-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right Side / Mobile Menu Toggle ── */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 z-50">
            
            {/* Try Now pill (hidden on smallest screens to save space) */}
            <Link href="/shorten">
              <button className="hidden sm:flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 border border-white/20 hover:border-white/40 cursor-pointer">
                ⚡ Try Now
              </button>
            </Link>

            {/* Desktop Auth Buttons (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2">
              {currentUser ? (
                <>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                      {(currentUser.name || currentUser.email || '?')[0].toUpperCase()}
                    </div>
                    <span className="text-white text-sm font-medium max-w-[120px] truncate">
                      {currentUser.name || currentUser.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500/80 hover:bg-red-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer border border-red-400/40 shadow-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={openLogin}
                    className="text-white text-sm font-semibold px-5 py-1.5 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 cursor-pointer"
                  >
                    Login
                  </button>
                  <button
                    onClick={openSignup}
                    className="bg-white text-purple-800 text-sm font-bold px-5 py-1.5 rounded-full hover:bg-purple-50 transition-all duration-200 cursor-pointer shadow-md shadow-purple-900/30"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* ── Mobile Menu Overlay ── */}
        <div 
          className={`
            md:hidden fixed top-16 left-0 right-0 bottom-0 bg-purple-950/95 backdrop-blur-xl z-50 transition-all duration-300 ease-in-out border-t border-purple-800
            ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
          `}
        >
          <div className="h-full w-full bg-purple-900/95 flex flex-col p-6 overflow-y-auto shadow-inner">
            
            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-3 mb-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-center text-lg font-bold text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10 bg-purple-800/40"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="w-full h-px bg-purple-700 mb-8 shadow-sm"></div>

            {/* Mobile Auth Section */}
            <div className="flex flex-col gap-4 mt-auto">
              {currentUser ? (
                <div className="bg-purple-800/50 rounded-2xl p-5 border border-purple-600/50 shadow-md">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex flex-shrink-0 items-center justify-center text-white text-xl font-bold ring-4 ring-purple-700">
                      {(currentUser.name || currentUser.email || '?')[0].toUpperCase()}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-purple-300 text-sm font-medium mb-0.5">Logged in as</p>
                      <p className="text-white font-bold truncate">
                        {currentUser.name || currentUser.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg cursor-pointer flex justify-center items-center gap-2 border border-red-400/50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <button
                    onClick={openSignup}
                    className="w-full py-4 bg-white text-purple-900 text-lg font-bold rounded-xl shadow-xl transition-all duration-200 cursor-pointer hover:bg-purple-50"
                  >
                    Create Free Account
                  </button>
                  <button
                    onClick={openLogin}
                    className="w-full py-4 bg-purple-800 text-white text-lg font-bold rounded-xl border border-purple-600 hover:bg-purple-700 transition-all duration-200 cursor-pointer shadow-md"
                  >
                    Log In
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>

      {/* Auth Modal Overlay */}
      {showModal && (
        <LoginSignupModal
          initialMode={modalMode}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Navbar;

