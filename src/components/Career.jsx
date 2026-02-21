import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Career = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const milestones = [
    { id: 'exp_revampr', type: 'work' },
    { id: 'exp_digizone', type: 'work' },
    { id: 'exp1', type: 'work' },
    { id: 'exp2', type: 'work' },
    { id: 'exp3', type: 'work' },
    { id: 'edu1', type: 'education' },
    { id: 'edu2', type: 'education' },
  ];

  return (
    <section id="career" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 dark:text-white">{t('career.title')}</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 dark:bg-gray-800 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-5/12">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {t(`career.timeline.${item.id}.date`)}
                      </span>
                      {item.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold dark:text-white mb-1">
                      {t(`career.timeline.${item.id}.role`)}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-3">
                      {t(`career.timeline.${item.id}.company`)}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {t(`career.timeline.${item.id}.desc`)}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 bg-primary z-10 hidden md:block"></div>

                {/* Empty Side (for balance) */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
