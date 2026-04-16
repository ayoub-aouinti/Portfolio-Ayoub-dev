import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Palette, MousePointer2, Code2, Globe, Database } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.digital_strategy'),
      desc: t('services.digital_strategy_desc'),
      icon: Layout,
      gradient: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
      delay: 0
    },
    {
      title: t('services.web_design'),
      desc: t('services.web_design_desc'),
      icon: Palette,
      gradient: 'linear-gradient(135deg, #f97316, #fbbf24)',
      delay: 0.1
    },
    {
      title: t('services.ux'),
      desc: t('services.ux_desc'),
      icon: MousePointer2,
      gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
      delay: 0.2
    },
    {
      title: t('services.web_dev'),
      desc: t('services.web_dev_desc'),
      icon: Code2,
      gradient: 'linear-gradient(135deg, #10b981, #4ade80)',
      delay: 0
    },
    {
      title: t('services.cms'),
      desc: t('services.cms_desc'),
      icon: Globe,
      gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
      delay: 0.1
    },
    {
      title: t('services.database'),
      desc: t('services.database_desc'),
      icon: Database,
      gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
      delay: 0.2
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('services.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 dark:text-white">{t('services.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, duration: 0.5 }}
                className="group"
              >
                <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 h-full flex flex-col">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: service.gradient }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
