import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import './servicesStyles.css';

const servicesData = [
  { icon: '❤️', titleKey: 'cardiology', descriptionKey: 'cardiology_desc' },
  { icon: '🦴', titleKey: 'orthopedics', descriptionKey: 'orthopedics_desc' },
  { icon: '🧠', titleKey: 'neurology', descriptionKey: 'neurology_desc' },
  { icon: '👁️', titleKey: 'ophthalmology', descriptionKey: 'ophthalmology_desc' },
  { icon: '🦷', titleKey: 'dentistry', descriptionKey: 'dentistry_desc' },
  { icon: '🧪', titleKey: 'pathology', descriptionKey: 'pathology_desc' }
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services_unique_wrapper">
      <h2 className="services_unique_heading">{t('services')}</h2>
      <div className="services_unique_grid">
        {servicesData.map((service, index) => (
          <div key={index} className="services_unique_card">
            <div className="services_unique_icon">{service.icon}</div>
            <h3 className="services_unique_title">{t(service.titleKey)}</h3>
            <p className="services_unique_desc">{t(service.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
