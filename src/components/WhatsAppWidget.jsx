import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const WhatsAppWidget = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      className={`fixed bottom-8 ${isRtl ? 'left-8' : 'right-8'} z-50`}
    >
      <a
        href="https://wa.me/21651790223"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
        
        <MessageCircle className="w-8 h-8 fill-current" />
        
        {/* Tooltip */}
        <div className={`absolute ${isRtl ? 'right-full mr-4' : 'left-full ml-4'} hidden group-hover:block bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-bold border border-gray-100 dark:border-gray-700`}>
          {isRtl ? 'تحدث معي على واتساب' : 'Chat with me on WhatsApp'}
          <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? '-right-2' : '-left-2'} border-8 border-transparent ${isRtl ? 'border-l-white dark:border-l-gray-800' : 'border-r-white dark:border-r-gray-800'}`}></div>
        </div>
      </a>
    </motion.div>
  )
}

export default WhatsAppWidget
