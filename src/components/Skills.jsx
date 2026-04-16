import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Monitor, Server, Wrench, Palette } from 'lucide-react'

const Skills = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('skills.frontend'),
      Icon: Monitor,
      gradient: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
      bgColor: 'rgba(14, 165, 233, 0.1)',
      iconColor: '#0ea5e9',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5 / CSS3', level: 95 },
      ]
    },
    {
      title: t('skills.backend'),
      Icon: Server,
      gradient: 'linear-gradient(135deg, #f97316, #fbbf24)',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      iconColor: '#f97316',
      skills: [
        { name: 'Spring Boot', level: 55 },
        { name: 'Laravel / PHP', level: 65 },
        { name: 'NestJS', level: 70 },
        { name: 'Node.js', level: 70 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      title: t('skills.uiframeworks'),
      Icon: Palette,
      gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      iconColor: '#8b5cf6',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'PrimeNG', level: 85 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Framer Motion', level: 75 },
        { name: 'Material UI', level: 70 },
      ]
    },
    {
      title: t('skills.tools'),
      Icon: Wrench,
      gradient: 'linear-gradient(135deg, #10b981, #4ade80)',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      iconColor: '#10b981',
      skills: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'CI/CD', level: 65 },
        { name: 'Prestashop', level: 80 },
        { name: 'WordPress', level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('skills.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 dark:text-white">{t('skills.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t('skills.subtitle')}</p>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => {
            const IconComponent = category.Icon;
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: category.bgColor }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: category.iconColor }} />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: category.gradient }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: catIndex * 0.15 + skillIndex * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
