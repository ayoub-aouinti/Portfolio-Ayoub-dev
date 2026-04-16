import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Sparkles } from 'lucide-react'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/cover_bg_13.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-primary/30"></div>
      
      {/* Animated floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-16 w-32 h-32 rounded-full bg-secondary/10 blur-xl"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Ayoub<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> AOUINTI</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-4 leading-relaxed">
            {t('hero.subheading')}
          </p>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto mb-10">
            {t('hero.tagline')}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
          >
            {t('hero.cta_portfolio')}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all transform hover:-translate-y-1"
          >
            {t('hero.cta_contact')}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#portfolio" className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors">
            <span className="text-xs uppercase tracking-widest mb-3 font-medium">{t('hero.scroll')}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
