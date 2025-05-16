import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader 
        title={t('contact.title')}
        description={t('contact.description')}
        imageSrc="https://i.pinimg.com/736x/34/95/7a/34957a82d32d7e6d0a9e41b7ba70c520.jpg"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">{t('contact.getInTouch')}</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.address.title')}</h3>
                    <p className="text-gray-600">
                      Rue Charles Calmette 11D,<br />
                      13405 Berlin, Germany<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.phone.title')}</h3>
                    <p className="text-gray-600">
                      <a href="tel:+4969696969" className="hover:text-red-600 transition-colors duration-200">
                        +49 (030) 32 51 26 36
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.email.title')}</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@airport-squash.de" className="hover:text-red-600 transition-colors duration-200">
                        info@airport-squash.de
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('contact.hours.title')}</h3>
                    <p className="text-gray-600">
                      {t('contact.hours.weekdays')}<br />
                      {t('contact.hours.weekend')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-4">{t('contact.directions.title')}</h3>
                <p className="text-gray-600 mb-4">{t('contact.directions.description')}</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    {t('contact.directions.public')}
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    {t('contact.directions.car')}
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 h-[24rem]">
                {/* Mapa */}
                <div className="rounded-lg overflow-hidden h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1520.4761467004168!2d13.303310411318293!3d52.55664841357685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a853fef3c85929%3A0x7a8da166cfbcde2d!2sAirport%20Squash%20%26%20Fitness%20Berlin!5e1!3m2!1ses-419!2sus!4v1747150969336!5m2!1ses-419!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contact.map')}
                  />
                </div>

                {/* Tour Virtual */}
                <div className="rounded-lg overflow-hidden h-full">
                  <iframe
                    src="https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=31&y=449&p=6&tz=100&r=-0.42;0.02&l=0.00;0.00&mz=-23.63&d=0&m=0"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Virtual Tour"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
