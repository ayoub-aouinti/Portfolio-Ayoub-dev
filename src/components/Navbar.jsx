import React from 'react'
import { Sun, Moon, Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.about'), href: '#about' },
    { name: t('career.title'), href: '#career' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' },
    { code: 'ar', name: 'AR' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
          Aouinti<span className="text-primary">.A</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 border-l pl-8 border-gray-200 dark:border-gray-700">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => i18n.changeLanguage(lng.code)}
                  className={`px-2 py-1 text-xs font-bold rounded ${
                    i18n.language === lng.code 
                    ? 'bg-primary text-white' 
                    : 'text-gray-500 hover:text-primary'
                  } transition-all`}
                >
                  {lng.name}
                </button>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`text-sm font-bold ${
                    i18n.language === lng.code ? 'text-primary' : 'text-gray-500'
                  }`}
                >
                  {lng.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
