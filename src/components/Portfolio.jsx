import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Play, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const { t, i18n } = useTranslation();

  const projects = [
    {
      title: t('portfolio.projects.quran.title'),
      desc: t('portfolio.projects.quran.desc'),
      impact: t('portfolio.projects.quran.impact'),
      tech: ["React", "Tailwind CSS", "Lucide"],
      image: "/images/work_4_full.png",
      link: "https://www.ayoubquran.com/",
      type: "Personal"
    },
    {
      title: t('portfolio.projects.bookstore.title'),
      desc: t('portfolio.projects.bookstore.desc'),
      impact: t('portfolio.projects.bookstore.impact'),
      tech: ["Prestashop", "HTML", "CSS"],
      image: "/images/work_5_full.png",
      link: "https://prestashop.web-data-expert.fr/fr/",
      type: "E-Commerce"
    },
    {
      title: t('portfolio.projects.rabita.title'),
      desc: t('portfolio.projects.rabita.desc'),
      impact: t('portfolio.projects.rabita.impact'),
      tech: ["Laravel", "PHP", "JavaScript"],
      image: "/images/work_6_full.png",
      link: "http://rabitaquran.tn/",
      type: "Platform"
    },
    {
      title: t('portfolio.projects.quizz.title'),
      desc: t('portfolio.projects.quizz.desc'),
      impact: t('portfolio.projects.quizz.impact'),
      tech: ["Angular", "TypeScript", "CSS"],
      image: "/images/work_7_full.png",
      link: "https://quizz-app-8f621.web.app/welcom",
      video: "https://www.youtube.com/watch?v=IFoGAFuNqgA",
      type: "App"
    },
    {
      title: t('portfolio.projects.news.title'),
      desc: t('portfolio.projects.news.desc'),
      impact: t('portfolio.projects.news.impact'),
      tech: ["Angular", "REST API", "RxJS"],
      image: "/images/work_8_full.png",
      video: "https://www.youtube.com/watch?v=9Om68who3kI",
      type: "App"
    },
    {
      title: t('portfolio.projects.gym.title'),
      desc: t('portfolio.projects.gym.desc'),
      impact: t('portfolio.projects.gym.impact'),
      tech: ["Angular", "TypeScript", "CSS"],
      image: "/images/work_9_full.png",
      video: "https://www.youtube.com/watch?v=2nQLzMUvELI",
      type: "App"
    },
    {
      title: t('portfolio.projects.qr.title'),
      desc: t('portfolio.projects.qr.desc'),
      impact: t('portfolio.projects.qr.impact'),
      tech: ["React", "Tailwind CSS", "Canvas API"],
      image: "/images/work_10_full.png",
      link: "https://qr-generatora.netlify.app/",
      type: "Web App"
    },
    {
      title: t('portfolio.projects.hydro.title'),
      desc: t('portfolio.projects.hydro.desc'),
      impact: t('portfolio.projects.hydro.impact'),
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/images/work_11_full.png",
      link: "https://hydro-quip.netlify.app/",
      type: "Web"
    },
    {
      title: t('portfolio.projects.barakode.title'),
      desc: t('portfolio.projects.barakode.desc'),
      impact: t('portfolio.projects.barakode.impact'),
      tech: ["React", "Tailwind CSS", "i18n"],
      image: "/images/work_12_full.png",
      link: "https://barakodesite.netlify.app/",
      type: "Web"
    },
    {
      title: t('portfolio.projects.red_website.title'),
      desc: t('portfolio.projects.red_website.desc'),
      impact: t('portfolio.projects.red_website.impact'),
      tech: ["React", "Tailwind CSS", "CMS"],
      image: "/images/work_red_full.png",
      link: "https://selimwebsite.netlify.app/",
      type: "Web App"
    },
    {
      title: t('portfolio.projects.badgi.title'),
      desc: t('portfolio.projects.badgi.desc'),
      impact: t('portfolio.projects.badgi.impact'),
      tech: ["Next.js", "MongoDB", "Event Platform"],
      image: "/images/work_badgi_full.png",
      link: "https://badgi.net/",
      type: "Platform"
    },
    {
      title: t('portfolio.projects.unimed.title'),
      desc: t('portfolio.projects.unimed.desc'),
      impact: t('portfolio.projects.unimed.impact'),
      tech: ["APIs", "BPMN", "Camunda", "Workflow"],
      image: "/images/work_unimed_full.png",
      type: "Enterprise App"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('portfolio.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 dark:text-white">{t('portfolio.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform hover:scale-110 backdrop-blur-sm">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.video && (
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-secondary hover:text-white transition-all transform hover:scale-110 backdrop-blur-sm">
                      <Play className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-3 self-start">
                  {project.type}
                </span>
                <h3 className="text-lg font-bold dark:text-white mb-2 leading-tight">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                  {project.desc}
                </p>
                
                {/* Impact badge */}
                {project.impact && (
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg mb-4 inline-block self-start">
                    ⚡ {project.impact}
                  </p>
                )}

                <div className="mt-auto">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors flex items-center group/link"
                    >
                      {t('portfolio.view')} <ArrowUpRight className={`ml-1 w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
