import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const HoursPage: React.FC = () => {
  const { t } = useTranslation();

  const hours = [
    { day: t('hours.monday'), hours: '10:00 - 24:00' },
    { day: t('hours.tuesday'), hours: '10:00 - 24:00' },
    { day: t('hours.wednesday'), hours: '10:00 - 24:00' },
    { day: t('hours.thursday'), hours: '10:00 - 24:00' },
    { day: t('hours.friday'), hours: '10:00 - 24:00' },
    { day: t('hours.saturday'), hours: '10:00 - 17:00' },
    { day: t('hours.sunday'), hours: '10:00 - 21:00' },
  ];

  return (
    <>
      <PageHeader
        title={t('hours.title')}
        description={t('hours.description')}
        imageSrc="https://i.imgur.com/5FBm0Yf.jpeg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-red-600 text-white p-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3" />
                  <h2 className="text-2xl font-bold">{t('hours.regularHours')}</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hours.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between p-4 border-b border-gray-100 last:border-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={index >= 5 ? 'text-red-600 font-semibold' : ''}>
                        {item.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">{t('hours.notice.title')}</h3>
              <p className="text-gray-600 mb-4">{t('hours.notice.description1')}</p>
              <p className="text-gray-600">{t('hours.notice.description2')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HoursPage;
