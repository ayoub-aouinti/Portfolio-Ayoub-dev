import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const { t, i18n } = useTranslation();

  const projects = [
    {
      title: "Personal website for chikh Ayoub",
      tech: "html, css, javascript, php",
      image: "/images/work_4_full.png",
      link: "https://ayoubaouinti-quran.netlify.app/?fbclid=IwAR3bdrOmv92B-TLyPKG3KNbbNVY4sKA5oavbrNmyh9gXKNnRuhAGGz4RYp4",
      type: "Personal"
    },
    {
      title: "Book Store Library",
      tech: "html, css, prestashop",
      image: "/images/work_5_full.png",
      link: "https://prestashop.web-data-expert.fr/fr/",
      type: "Web"
    },
    {
      title: "Website & platform for rabitaqurania of Tunisia",
      tech: "html, css, javascript, php, Laravel",
      image: "/images/work_6_full.png",
      link: "https://rabitaquran.alwaysdata.net/public/",
      type: "Platform"
    },
    {
      title: "Quizz Angular App",
      tech: "html, css, javascript, Angular",
      image: "/images/work_7_full.png",
      link: "https://quizz-app-8f621.web.app/welcom",
      video: "https://www.youtube.com/watch?v=IFoGAFuNqgA",
      type: "App"
    },
    {
      title: "News Application",
      tech: "html, css, javascript, Angular, API",
      image: "/images/work_8_full.png",
      video: "https://www.youtube.com/watch?v=9Om68who3kI",
      type: "App"
    },
    {
      title: "GYM Registration app",
      tech: "html, css, javascript, Angular",
      image: "/images/work_9_full.png",
      video: "https://www.youtube.com/watch?v=2nQLzMUvELI",
      type: "App"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-12 dark:text-white">{t('portfolio.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  {project.video && (
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                      <Play className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-3">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold dark:text-white mb-2 leading-tight">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.tech}</p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-900 dark:text-gray-200 hover:text-primary transition-colors flex items-center group/link"
                >
                  {t('portfolio.view')} <ExternalLink className={`ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
