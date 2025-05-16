import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'de', name: 'Deutsch' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const changeLanguage = async (langCode: string) => {
    try {
      await i18n.changeLanguage(langCode);
      document.documentElement.lang = langCode;
      closeDropdown();
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-sm font-medium text-gray-800 hover:text-primary-600 focus:outline-none transition-colors duration-200"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} className="mr-1" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown size={16} className="ml-1" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={closeDropdown}
            aria-hidden="true"
          ></div>
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-20">
            {languages.map((language) => (
              <button
                key={language.code}
                className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-primary-600 flex items-center justify-between"
                onClick={() => changeLanguage(language.code)}
              >
                {language.name}
                {language.code === i18n.language && (
                  <Check size={16} className="text-primary-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;