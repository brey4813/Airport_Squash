import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Euro, MapPin, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeatureCard from '../components/home/FeatureCard';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      title: t('home.features.book.title'),
      description: t('home.features.book.description'),
      link: '/booking'
    },
    {
      icon: <Euro className="h-8 w-8 text-red-600" />,
      title: t('home.features.prices.title'),
      description: t('home.features.prices.description'),
      link: '/pricing'
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: t('home.features.hours.title'),
      description: t('home.features.hours.description'),
      link: '/hours'
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title: t('home.features.location.title'),
      description: t('home.features.location.description'),
      link: '/contact'
    }
  ];

  return (
    <>
      <Hero />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.welcome.title')}</h2>
            <p className="text-lg text-gray-600">{t('home.welcome.description')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i.ibb.co/SX7gjKKw/foto-13.jpg" 
                alt={t('home.promotion.imageAlt')} 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.promotion.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">{t('home.promotion.description')}</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-red-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>{t('home.promotion.point1')}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-red-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>{t('home.promotion.point2')}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-red-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>{t('home.promotion.point3')}</p>
                </div>
              </div>
              <Link
                to="/booking"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('home.promotion.cta')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;