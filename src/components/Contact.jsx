import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
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

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 dark:text-white">{t('contact.title')}</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <form onSubmit={onSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all dark:text-white"
                    placeholder={t('contact.form.name_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all dark:text-white"
                    placeholder={t('contact.form.email_placeholder')}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.message')}</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary outline-none transition-all dark:text-white resize-none"
                  placeholder={t('contact.form.message_placeholder')}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t('contact.form.send')}</span>
                <Send className={`w-4 h-4 ${i18n.language === 'ar' ? '-scale-x-100' : ''}`} />
              </button>
              
              {result && (
                <div className={`mt-4 p-3 rounded-lg text-center font-bold ${result === t('contact.form.success') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {result}
                </div>
              )}
            </form>
          </div>
          
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start space-x-4 rtl:space-x-reverse">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">{t('contact.info.email')}</h4>
                <p className="text-gray-600 dark:text-gray-400">ayoubaouinti1990@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start space-x-4 rtl:space-x-reverse">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">{t('contact.info.phone')}</h4>
                <p className="text-gray-600 dark:text-gray-400" dir="ltr">+216 51 790 223</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start space-x-4 rtl:space-x-reverse">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">{t('contact.info.address')}</h4>
                <p className="text-gray-600 dark:text-gray-400">Rue El Hana, 8011 Dar Chaabene el fehri, Nabeul, Tunisia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
