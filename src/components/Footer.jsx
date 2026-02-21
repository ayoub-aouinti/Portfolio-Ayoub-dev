import React from 'react'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-8 rtl:space-x-reverse">
          <a href="#" className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-gray-500 dark:text-gray-500 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Aouinti.A {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
