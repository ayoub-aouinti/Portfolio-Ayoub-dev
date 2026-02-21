import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/cover_bg_13.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            Ayoub<span className="text-primary"> AOUINTI</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 font-light">
            I’m Ayoub Aouinti, A Fullstack web developer Based In Tunisia
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#portfolio" className="flex flex-col items-center text-white opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
