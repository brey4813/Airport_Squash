import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/common/PageHeader';

const ShopPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader 
        title={t('shop.title')}
        description={t('shop.description')}
        imageSrc="https://i.ibb.co/YTp5F4fP/foto-27.jpg"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://shop.airportsquash.de/"
              className="w-full h-[800px] border-0"
              title="Airport Squash Shop"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;