import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Brain, Rocket, Users } from 'lucide-react'

const WhyHireMe = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Brain,
      title: t('whyhire.reason1_title'),
      desc: t('whyhire.reason1_desc'),
      gradient: 'from-primary to-cyan-400',
      bg: 'bg-primary/10',
    },
    {
      icon: Rocket,
      title: t('whyhire.reason2_title'),
      desc: t('whyhire.reason2_desc'),
      gradient: 'from-secondary to-amber-400',
      bg: 'bg-secondary/10',
    },
    {
      icon: Users,
      title: t('whyhire.reason3_title'),
      desc: t('whyhire.reason3_desc'),
      gradient: 'from-accent to-purple-400',
      bg: 'bg-accent/10',
    },
  ];

  return (
    <section id="whyhire" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('whyhire.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 dark:text-white">{t('whyhire.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t('whyhire.subtitle')}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 ${reason.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-r ${reason.gradient}`} style={{ stroke: 'url(#gradient)' }} />
                  <reason.icon className={`w-7 h-7 ${reason.gradient === 'from-primary to-cyan-400' ? 'text-primary' : reason.gradient === 'from-secondary to-amber-400' ? 'text-secondary' : 'text-accent'} absolute`} />
                </div>

                <h3 className="text-xl font-bold dark:text-white mb-4">{reason.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{reason.desc}</p>

                {/* Bottom accent line */}
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${reason.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe
