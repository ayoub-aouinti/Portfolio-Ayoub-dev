import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "Prestashop/WordPress", level: 80 },
    { name: "Java/SpringBoot", level: 55 },
    { name: "PHP/Laravel", level: 65 },
    { name: "Angular & React", level: 90 },
    { name: "NestJs", level: 70 },
    { name: "Tailwind CSS/ Bootstrap/ primeNg", level: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 dark:text-white">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-flex items-center justify-center mb-6">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-100 dark:text-gray-800"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={364.4}
                    initial={{ strokeDashoffset: 364.4 }}
                    whileInView={{ strokeDashoffset: 364.4 - (364.4 * skill.level) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-black dark:text-white">{skill.level}%</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
