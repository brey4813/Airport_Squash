import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Dumbbell, Target, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const FitnessPage: React.FC = () => {
  const { t } = useTranslation();

  const activities = [
    {
      icon: <Dumbbell className="h-8 w-8 text-red-600" />,
      title: t('fitness.activities.general.title'),
      description: t('fitness.activities.general.description')
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: t('fitness.activities.kickboxing.title'),
      description: t('fitness.activities.kickboxing.description')
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: t('fitness.activities.circuit.title'),
      description: t('fitness.activities.circuit.description')
    }
  ];

  return (
    <>
      <PageHeader 
        title={t('fitness.title')}
        description={t('fitness.description')}
        imageSrc="https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto,w_1125/media_venue/h6tfdxjvcwle7b5yr5oi.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('fitness.welcome.title')}</h2>
            <p className="text-lg text-gray-600">{t('fitness.welcome.description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FitnessPage;