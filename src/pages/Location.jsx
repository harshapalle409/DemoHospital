import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import './locationStyles.css';

const Location = () => {
  const { t } = useTranslation();

  return (
    <div className="location_unique_wrapper">
      <h2 className="location_unique_heading">{t('location_directions')}</h2>
      <p className="location_unique_address">{t('hospital_address')}</p>
      <div className="location_unique_map_container">
        <iframe
          title="Hospital Location"
          className="location_unique_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.333740346622!2d78.48668137482077!3d17.437462101357667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9734ae0ec9ef%3A0xb1696fa14ef55c1e!2sGVK%20One%20Mall!5e0!3m2!1sen!2sin!4v1684072182609!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
