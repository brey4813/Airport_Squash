import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import PriceCard from '../components/pricing/PriceCard';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();

  const membershipPrices = [
    {
      title: t('pricing.memberships.standard.title'),
      price: '9',
      period: t('pricing.memberships.standard.period'),
      features: [
        t('pricing.memberships.standard.feature1'),
      ]
    },
    {
      title: t('pricing.memberships.premium.title'),
      price: '36',
      period: t('pricing.memberships.premium.period'),
      features: [
        t('pricing.memberships.premium.feature1'),
        t('pricing.memberships.premium.feature2'),
      ],
      highlighted: true
    },
    {
      title: t('pricing.memberships.student.title'),
      price: '33',
      period: t('pricing.memberships.student.period'),
      features: [
        t('pricing.memberships.student.feature1'),
        t('pricing.memberships.student.feature2'),
        t('pricing.memberships.student.feature3'),
      ],
    }
  ];

  return (
    <>
      <PageHeader 
        title={t('pricing.title')}
        description={t('pricing.description')}
        imageSrc="https://i.imgur.com/YJyXfvT.jpeg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('pricing.memberships.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('pricing.memberships.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPrices.map((price, index) => (
              <PriceCard 
                key={index}
                title={price.title}
                price={price.price}
                period={price.period}
                features={price.features}
                note={price.note}
                highlighted={price.highlighted}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">{t('pricing.equipment.title')}</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-4 pr-4">{t('pricing.equipment.item')}</th>
                      <th className="pb-4 text-right">{t('pricing.equipment.price')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 pr-4">{t('pricing.equipment.racket')}</td>
                      <td className="py-4 text-right font-semibold">€5.00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4">{t('pricing.equipment.balls')}</td>
                      <td className="py-4 text-right font-semibold">€2.00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4">{t('pricing.equipment.shoes')}</td>
                      <td className="py-4 text-right font-semibold">€4.00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 pr-4">{t('pricing.equipment.towel')}</td>
                      <td className="py-4 text-right font-semibold">€3.00</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">{t('pricing.equipment.shower')}</td>
                      <td className="py-4 text-right font-semibold">€2.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
