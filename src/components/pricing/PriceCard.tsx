import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  note?: string;
  highlighted?: boolean;
  index: number;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  period,
  features,
  note,
  highlighted = false,
  index
}) => {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        highlighted 
          ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white ring-2 ring-primary-400 ring-offset-4' 
          : 'bg-white hover:shadow-xl border border-gray-100'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className="flex items-baseline mb-6">
          <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-primary-600'}`}>
            €{price}
          </span>
          <span className={`text-lg ml-2 ${highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
            /{period}
          </span>
        </div>
        {highlighted && (
          <span className="inline-block bg-accent-500 text-white text-sm font-semibold py-2 px-4 rounded-full mb-6">
            Most Popular
          </span>
        )}
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className={`h-5 w-5 ${highlighted ? 'text-accent-400' : 'text-accent-500'} mr-3 mt-0.5 flex-shrink-0`} />
              <span className={highlighted ? 'text-primary-50' : 'text-gray-600'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        {note && (
          <p className={`text-sm mt-4 ${highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
            {note}
          </p>
        )}
      </div>
      
      <div className={`px-8 pb-8 ${highlighted ? 'text-white' : ''}`}>
        <button
          className={`w-full py-4 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
            highlighted
              ? 'bg-accent-500 hover:bg-accent-600 text-white'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
        >
          Choose Plan
        </button>
      </div>
    </motion.div>
  );
};

export default PriceCard;