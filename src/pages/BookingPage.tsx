import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const BookingPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageHeader 
        title={t('booking.title')}
        description={t('booking.description')}
        imageSrc="https://i.imgur.com/BMSR58L.jpeg"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">{t('booking.bookingSystem')}</h2>
            <p className="text-gray-600 mb-8">{t('booking.bookingInstructions')}</p>
            
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('booking.howToBook.title')}</h3>
              <ol className="space-y-4 list-decimal pl-5">
                <li>{t('booking.howToBook.step1')}</li>
                <li>{t('booking.howToBook.step2')}</li>
                <li>{t('booking.howToBook.step3')}</li>
                <li>{t('booking.howToBook.step4')}</li>
              </ol>
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.airportsquash.de/squash-court-buchen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('booking.openBookingSystem')}
              </a>
              <p className="mt-4 text-sm text-gray-500">{t('booking.openInNewTab')}</p>
            </div>
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">{t('booking.rules.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{t('booking.rules.courtRules.title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t('booking.rules.courtRules.rule1')}
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t('booking.rules.courtRules.rule2')}
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t('booking.rules.courtRules.rule3')}
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t('booking.rules.courtRules.rule4')}
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{t('booking.rules.cancellation.title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t('booking.rules.cancellation.rule1')}
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t('booking.rules.cancellation.rule2')}
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {t('booking.rules.cancellation.rule3')}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;