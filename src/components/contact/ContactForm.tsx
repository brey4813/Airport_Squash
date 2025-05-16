import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.name');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }
    
    if (!formData.subject) {
      newErrors.subject = t('contact.form.errors.subject');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.message');
    } else if (formData.message.length < 10) {
      newErrors.message = t('contact.form.errors.messageTooShort');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center">
        <svg 
          className="w-16 h-16 text-primary-500 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 className="text-2xl font-bold text-primary-800 mb-2">{t('contact.form.success.title')}</h3>
        <p className="text-primary-700 mb-6">{t('contact.form.success.message')}</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200"
        >
          {t('contact.form.success.button')}
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              {t('contact.form.name')} <span className="text-primary-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? 'border-primary-500 focus:ring-primary-200' : 'border-gray-300 focus:ring-primary-100'
              }`}
            />
            {errors.name && <p className="mt-1 text-primary-600 text-sm">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              {t('contact.form.email')} <span className="text-primary-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'border-primary-500 focus:ring-primary-200' : 'border-gray-300 focus:ring-primary-100'
              }`}
            />
            {errors.email && <p className="mt-1 text-primary-600 text-sm">{errors.email}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 font-medium">
              {t('contact.form.subject')} <span className="text-primary-600">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.subject ? 'border-primary-500 focus:ring-primary-200' : 'border-gray-300 focus:ring-primary-100'
              }`}
            >
              <option value="">{t('contact.form.selectSubject')}</option>
              <option value="booking">{t('contact.form.subjects.booking')}</option>
              <option value="membership">{t('contact.form.subjects.membership')}</option>
              <option value="facilities">{t('contact.form.subjects.facilities')}</option>
              <option value="other">{t('contact.form.subjects.other')}</option>
            </select>
            {errors.subject && <p className="mt-1 text-primary-600 text-sm">{errors.subject}</p>}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-medium">
            {t('contact.form.message')} <span className="text-primary-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.message ? 'border-primary-500 focus:ring-primary-200' : 'border-gray-300 focus:ring-primary-100'
            }`}
          ></textarea>
          {errors.message && <p className="mt-1 text-primary-600 text-sm">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
        </button>
        
        <p className="mt-4 text-sm text-gray-500">
          <span className="text-primary-600">*</span> {t('contact.form.required')}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;