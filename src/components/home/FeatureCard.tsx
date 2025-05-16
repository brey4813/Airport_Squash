import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, index }) => {
  return (
    <motion.div 
      className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      
      <div className="mb-6 p-4 bg-primary-50 rounded-2xl w-fit group-hover:bg-primary-100 transition-colors duration-300">
        <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 flex-grow">
        {description}
      </p>
      
      <Link
        to={link}
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300 group-hover:translate-x-2"
      >
        <span className="mr-2">Learn More</span>
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
      </Link>
    </motion.div>
  );
};

export default FeatureCard;