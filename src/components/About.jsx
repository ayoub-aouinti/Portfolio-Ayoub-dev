import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl skew-y-3 -z-10"></div>
              <img 
                src="/images/cover_bg_1.png" 
                alt="About Ayoub" 
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black mb-6 dark:text-white flex items-center">
              {t('about.title')}
              <span className={`mx-4 block h-1 w-20 bg-primary`}></span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <a 
              href="/documents/cv-Ayoub-dev-2026-NV-fr.pdf" 
              target="_blank" 
              className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('about.cv')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
