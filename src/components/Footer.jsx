import React from 'react'
import { Github, Twitter, Linkedin, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/ayoub.aouinti.75", hoverColor: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://x.com/hAJiiQhBCLgJzRd", hoverColor: "hover:bg-gray-800" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ayoub-aouinti-534631249/", hoverColor: "hover:bg-blue-700" },
    { icon: Github, href: "https://github.com/ayoub-aouinti", hoverColor: "hover:bg-gray-800" },
    { icon: Instagram, href: "https://www.instagram.com/aouintia90/", hoverColor: "hover:bg-pink-600" },
    { icon: MessageCircle, href: "https://wa.me/21651790223", hoverColor: "hover:bg-green-500" },
  ];

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Brand */}
        <a href="#home" className="inline-block text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Aouinti<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">.A</span>
        </a>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-500 dark:text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <p className="text-gray-400 dark:text-gray-500 text-sm font-medium tracking-wide flex items-center justify-center gap-1">
          &copy; {new Date().getFullYear()} Aouinti.A — {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
