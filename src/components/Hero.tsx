import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 z-10"></div>
      <Image 
        className="w-full h-full object-cover" 
        src="/api/placeholder/1920/1080" 
        alt="Educational environment" 
      />
    </div>
    
    <div className="container mx-auto px-6 relative z-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transforming <span className="text-blue-400">Education</span> Through Expert Services
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Your trusted partner for educational consultancy, placement, training, and more
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-300">
            Explore Our Services
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-md font-medium transition-colors duration-300">
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default Hero