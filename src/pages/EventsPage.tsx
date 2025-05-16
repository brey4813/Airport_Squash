import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const EventsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const eventImages = [
    {
      src: "https://i.imgur.com/dw0hVG6.png",
      title: t('events.eventsList.social.title'),
      description: t('events.eventsList.social.description'),
      schedule: t('events.eventsList.social.schedule')
    },
    {
      src: "https://www.airportsquash.de/wp-content/uploads/Squash-Social-Airport-Abend-724x1024.png",
      title: t('events.eventsList.youth.title'),
      description: t('events.eventsList.youth.description'),
      schedule: t('events.eventsList.youth.schedule')
    },
    {
      src: "https://www.airportsquash.de/wp-content/uploads/we.are_.hiring-768x960.png",
      title: t('events.eventsList.inclusive.title'),
      description: t('events.eventsList.inclusive.description'),
      schedule: t('events.eventsList.inclusive.schedule')
    },
    {
      src: "https://i.imgur.com/7AK5s58.png",
      title: t('events.eventsList.friday.title'),
      description: t('events.eventsList.friday.description'),
      schedule: t('events.eventsList.friday.schedule')
    }
  ];

  return (
    <>
      <PageHeader 
        title={t('events.title')}
        description={t('events.description')}
        imageSrc="https://i.imgur.com/z5AAAHp.jpeg"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('events.joinCommunity')}</h2>
            <p className="text-lg text-gray-600">{t('events.communityDescription')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventImages.map((event, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={event.src} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                      <div className="flex items-center text-sm text-white/80 mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{event.schedule}</span>
                      </div>
                      <p className="text-xs text-white/70 line-clamp-3">{event.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedImage !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative">
                      <div className="aspect-[3/4]">
                        <img
                          src={eventImages[selectedImage].src}
                          alt={eventImages[selectedImage].title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 bg-white">
                      <h3 className="text-2xl font-bold mb-2">{eventImages[selectedImage].title}</h3>
                      <div className="flex items-center text-gray-500 mb-4">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{eventImages[selectedImage].schedule}</span>
                      </div>
                      <p className="text-gray-600">{eventImages[selectedImage].description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{t('events.getInvolved.title')}</h3>
            <p className="text-gray-600 mb-8">{t('events.getInvolved.description')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('events.getInvolved.contactButton')}
              </Link>
              <Link
                to="/booking"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('events.getInvolved.bookButton')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;