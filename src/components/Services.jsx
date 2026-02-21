import React from 'react'
import { Layout, Palette, MousePointer2, Code2, Globe, Database } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.digital_strategy'),
      icon: Layout,
      delay: 0
    },
    {
      title: t('services.web_design'),
      icon: Palette,
      delay: 0.1
    },
    {
      title: t('services.ux'),
      icon: MousePointer2,
      delay: 0.2
    },
    {
      title: t('services.web_dev'),
      icon: Code2,
      delay: 0
    },
    {
      title: t('services.cms'),
      icon: Globe,
      delay: 0.1
    },
    {
      title: t('services.database'),
      icon: Database,
      delay: 0.2
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 dark:text-white">{t('services.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white transition-colors">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
