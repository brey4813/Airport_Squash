import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Airport Squash</h3>
            <p className="mb-4 text-gray-300">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/AirportSquashFitness/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-red-500 transition-colors duration-200" />
              </a>
              <a href="https://www.instagram.com/airportsquash/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-red-500 transition-colors duration-200" />
              </a>
              <a href="https://twitter.com/airportsquash?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-red-500 transition-colors duration-200" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                  {t('nav.booking')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/hours" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                  {t('nav.hours')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Rue Charles Calmette 11D,<br />
                  13405 Berlin, Germany<br />
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <a href="tel:+4969696969" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                 +49 (030) 32 51 26 36
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3" />
                <a href="mailto:info@airport-squash.de" className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                  info@airport-squash.de
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Airport Squash. {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
              {t('legal.privacy.title')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
              {t('legal.terms.title')}
            </Link>
            <Link to="/imprint" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
              {t('legal.imprint.title')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;