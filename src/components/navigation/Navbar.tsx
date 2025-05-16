import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/booking', label: t('nav.booking') },
    { path: '/teams', label: 'Teams' },
    { path: '/virtual-tour', label: 'Virtual Tour' },
    { path: '/fitness', label: t('nav.fitness') },
    { path: '/events', label: t('nav.events') },
    { path: '/shop', label: t('nav.shop') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/hours', label: t('nav.hours') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/about', label: t('nav.about') }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center group" onClick={closeMenu}>
            <img 
              src="https://i.imgur.com/VBxOYq3.png" 
              alt="Airport Squash" 
              className="h-12 w-auto"
            />
          </NavLink>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-all duration-300 hover:text-primary-500 ${
                    scrolled
                      ? isActive ? 'text-primary-600' : 'text-gray-700'
                      : isActive ? 'text-primary-400' : 'text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </nav>

          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button 
              className={`ml-4 focus:outline-none transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden fixed inset-0 bg-primary-900/95 backdrop-blur-lg z-40 transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <nav className="flex flex-col items-center space-y-8 py-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-xl font-medium transition-colors duration-300 hover:text-primary-400 ${
                  isActive ? 'text-primary-400' : 'text-white'
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;