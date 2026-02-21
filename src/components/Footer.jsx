import React from 'react'
import { Github, Twitter, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/ayoub.aouinti.75" },
    { icon: Twitter, href: "https://x.com/hAJiiQhBCLgJzRd" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ayoub-aouinti-534631249/" },
    { icon: Github, href: "https://github.com/ayoub-aouinti" },
    { icon: Instagram, href: "https://www.instagram.com/aouintia90/" },
    { icon: MessageCircle, href: "https://wa.me/21651790223" },
  ];

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center flex-wrap gap-6 mb-8 rtl:space-x-reverse">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white transition-all transform hover:scale-110 ${social.icon === MessageCircle ? 'hover:bg-green-500' : 'hover:bg-primary'}`}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        
        <p className="text-gray-500 dark:text-gray-500 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Aouinti.A {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
