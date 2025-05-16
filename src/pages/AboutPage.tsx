import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Users, Award, Shield } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  const facilities = [
    { name: t(''), image: "https://i.ibb.co/DHGf8Jzg/foto-11.jpg" },
    { name: t(''), image: "https://i.ibb.co/pryJLjbG/foto-26.jpg" },
    { name: t(''), image: "https://i.ibb.co/FqYwdDHy/foto-5.jpg" },
    { name: t(''), image: "https://i.ibb.co/cKFfg6TH/foto-4.jpg" }
  ];
  
  const values = [
    { 
      icon: <Star className="h-8 w-8 text-red-600" />,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    { 
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    { 
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    { 
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: t('about.values.safety.title'),
      description: t('about.values.safety.description')
    }
  ];
  
  return (
    <>
      <PageHeader 
        title={t('about.title')}
        description={t('about.description')}
        imageSrc="https://i.ibb.co/7JWBSst8/foto-14.jpg"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.history.title')}</h2>
              <div className="space-y-4">
                <p>{t('about.history.paragraph1')}</p>
                <p>{t('about.history.paragraph2')}</p>
                <p>{t('about.history.paragraph3')}</p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i.ibb.co/ycrGWmg1/foto-40.jpg" 
                alt={t('about.history.imageAlt')} 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-bold">{t('about.history.since')} 2015</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.values.title')}</h2>
            <p className="text-lg text-gray-600">{t('about.values.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 p-3 bg-red-50 rounded-full w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.facilities.title')}</h2>
            <p className="text-lg text-gray-600">{t('about.facilities.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                className="group relative rounded-lg overflow-hidden shadow-md h-64"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">{facility.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.join.title')}</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto mb-12">{t('about.join.description')}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/booking"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('about.join.bookNow')}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('about.join.contactUs')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;