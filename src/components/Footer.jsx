import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import './footerStyles.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer_unique_container">
      <div className="footer_unique_text">
        © {new Date().getFullYear()} | {t('contact_us')} 📞 {t('phone')}: +91-9876543210
      </div>
    </footer>
  );
};

export default Footer;
