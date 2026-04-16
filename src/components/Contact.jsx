import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(t('contact.form.sending'));
    const formData = new FormData(event.target);

    formData.append("access_key", "f9f7a7a1-8d4e-4e1a-8c1a-7b8c9d0e1f20"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(t('contact.form.success'));
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const contactCards = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      value: "ayoubaouinti1990@gmail.com",
      href: "mailto:ayoubaouinti1990@gmail.com",
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      value: "+216 51 790 223",
      href: "tel:+21651790223",
      extra: (
        <a href="https://wa.me/21651790223" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-500 hover:text-green-600 transition-colors mt-1">
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="text-xs font-bold">WhatsApp</span>
        </a>
      )
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      value: "Dar Chaabene el fehri, Nabeul, Tunisia",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t('contact.label')}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 dark:text-white">{t('contact.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={onSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                    placeholder={t('contact.form.name_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                    placeholder={t('contact.form.email_placeholder')}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.message')}</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none"
                  placeholder={t('contact.form.message_placeholder')}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>{t('contact.form.send')}</span>
                <Send className={`w-4 h-4 ${i18n.language === 'ar' ? '-scale-x-100' : ''}`} />
              </button>
              
              {result && (
                <div className={`mt-4 p-4 rounded-xl text-center font-semibold ${result === t('contact.form.success') ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400' : 'bg-primary/10 text-primary'}`}>
                  {result}
                </div>
              )}
            </form>
          </motion.div>
          
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-6"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex items-start gap-4 rtl:gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <card.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{card.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm break-all" dir="ltr">{card.value}</p>
                  {card.extra}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
