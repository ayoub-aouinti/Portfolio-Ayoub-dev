import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CheckCircle, Download } from 'lucide-react'

const About = () => {
  const { t, i18n } = useTranslation();

  const strengths = [
    t('about.strength1'),
    t('about.strength2'),
    t('about.strength3'),
    t('about.strength4'),
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative gradient blob */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl skew-y-2 -z-10"></div>
              <img 
                src="/images/cover_bg_1.png" 
                alt="Ayoub Aouinti — Full-Stack Developer" 
                className="rounded-2xl shadow-2xl w-full object-cover ring-1 ring-gray-200 dark:ring-gray-700"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">4+</span>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1">{t('about.years')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('about.label')}</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 dark:text-white">
              {t('about.title')}
            </h2>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{strength}</span>
                </motion.div>
              ))}
            </div>

            <a 
              href={`/documents/cv-Ayoub-dev-2026-NV-${i18n.language === 'fr' ? 'fr' : 'en'}.pdf`}
              target="_blank" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              {t('about.cv')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
