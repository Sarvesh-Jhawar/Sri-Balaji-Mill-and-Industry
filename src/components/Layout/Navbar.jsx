import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

import { useTranslation } from '../../context/i18n';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { t, langCode, setLanguage } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const languages = ['English', 'Telugu', 'Hindi'];

  const navLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.divisions', path: '/divisions' },
    { key: 'nav.process', path: '/process' },
    { key: 'nav.quality', path: '/quality' },
    { key: 'nav.gallery', path: '/gallery' },
    { key: 'nav.contact', path: '/contact' }
  ];

  // close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // track scroll to change header style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // prevent background scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <nav
      className="fixed w-full z-50"
      style={{
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        padding: scrolled ? '10px 0' : '14px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        {/* Left - empty spacer for centering logo on mobile */}
        <div style={{ width: 40 }} aria-hidden />

        {/* Logo centered */}
        <Link to="/" className="flex flex-col group" aria-label="Sri Balaji Group Home" style={{ textAlign: 'center' }}>
          <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif', color: scrolled ? 'var(--text-primary)' : 'var(--text-primary)' }}>
            SRI BALAJI
          </span>
          <span className="text-xs tracking-widest font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
            GROUP
          </span>
        </Link>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              title="Change language"
              aria-label="Change language"
              style={{
                color: 'var(--text-primary)',
                background: 'transparent',
                border: '1px solid var(--border-color)',
                minWidth: 44,
                minHeight: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Globe size={14} />
              <span style={{ fontSize: 12, fontWeight: 700 }}>{langCode.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 rounded-lg shadow-xl overflow-hidden min-w-[120px]"
                  style={{
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {languages.map(lang => {
                    const isActive = (lang === 'English' && langCode === 'en') || (lang === 'Telugu' && langCode === 'te') || (lang === 'Hindi' && langCode === 'hi');
                    return (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setIsLangOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm transition-colors"
                        style={{
                          backgroundColor: 'transparent',
                          color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                          fontWeight: isActive ? 700 : 500,
                          borderLeft: isActive ? '3px solid var(--accent-primary)' : '3px solid transparent',
                          paddingLeft: isActive ? 12 : 16
                        }}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ color: 'var(--text-primary)', background: 'transparent', border: '1px solid transparent', minWidth: 44, minHeight: 36 }}
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
            title={isOpen ? 'Close Menu' : 'Open Menu'}
            style={{ color: 'var(--text-primary)', background: 'transparent', border: '1px solid transparent', minWidth: 44, minHeight: 36 }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="nav-overlay"
          >
            <div className="nav-overlay-inner container">
              <div className="nav-overlay-close-wrapper">
                <button
                  className="nav-overlay-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  title="Close menu"
                >
                  <X size={22} />
                </button>

                <div className="nav-overlay-list" style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'stretch' }}>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.key}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="nav-link"
                      style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
                    >
                      {t(link.key)}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
