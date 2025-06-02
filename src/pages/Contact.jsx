import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import './contactStyles.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact_unique_wrapper">
      <h2 className="contact_unique_heading">{t('contact_us')}</h2>
      <div className="contact_unique_info">
        <p><span className="contact_unique_label">{t('phone')}:</span> <a href="tel:+919999999999" className="contact_unique_link">+91 99999 99999</a></p>
        <p><span className="contact_unique_label">{t('email')}:</span> <a href="mailto:info@hospital.com" className="contact_unique_link">info@hospital.com</a></p>
        <p><span className="contact_unique_label">{t('whatsapp')}:</span> <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="contact_unique_link">+91 99999 99999</a></p>
      </div>
    </div>
  );
};

export default Contact;
