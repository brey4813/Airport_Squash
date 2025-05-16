import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/TgIHUTk.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Airport Squash & Fitness
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            for Squash... only Squash
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/booking"
              className="bg-white hover:bg-gray-100 text-gray-900 text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book a Court
            </Link>
            <Link
              to="/pricing"
              className="bg-black/20 hover:bg-black/30 text-white text-lg font-semibold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              View Memberships
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
      >
        <div className="w-8 h-14 border-2 border-white/30 rounded-full p-2">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-bounce-slow"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;