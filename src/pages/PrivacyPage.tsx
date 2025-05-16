import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  
  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-red-600" />,
      title: t('legal.privacy.sections.declaration.title'),
      content: t('legal.privacy.sections.declaration.content')
    },
    {
      icon: <Lock className="w-6 h-6 text-red-600" />,
      title: t('legal.privacy.sections.responsible.title'),
      content: t('legal.privacy.sections.responsible.content')
    },
    {
      icon: <Eye className="w-6 h-6 text-red-600" />,
      title: t('legal.privacy.sections.collection.title'),
      content: t('legal.privacy.sections.collection.content')
    },
    {
      icon: <UserCheck className="w-6 h-6 text-red-600" />,
      title: t('legal.privacy.sections.rights.title'),
      content: t('legal.privacy.sections.rights.content')
    }
  ];

  return (
    <>
      <PageHeader 
        title={t('legal.privacy.title')}
        description={t('legal.privacy.description')}
        imageSrc="https://i.ibb.co/XxZgJfh6/foto-28.jpg"
      />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8 bg-red-600 text-white">
                <h2 className="text-3xl font-bold">{t('legal.privacy.title')}</h2>
                <p className="mt-2 text-red-100">{t('legal.privacy.intro')}</p>
              </div>

              <div className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  {sections.map((section, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-red-50 rounded-lg mr-4">
                          {section.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                      </div>
                      <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;