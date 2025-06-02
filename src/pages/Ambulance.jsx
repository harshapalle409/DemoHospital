import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import './ambulanceStyles.css';

const Ambulance = () => {
  const { t } = useTranslation();

  return (
    <div className="ambulance_unique_wrapper">
      <h2 className="ambulance_unique_heading">{t('ambulance_services')}</h2>
      <p className="ambulance_unique_text">{t('ambulance_message')}</p>
      <p className="ambulance_unique_number">{t('emergency_number')}: <a href="tel:108" className="ambulance_unique_link">108</a></p>
      <a href="tel:108" className="ambulance_unique_callnow">{t('call_now')}</a>
    </div>
  );
};

export default Ambulance;
