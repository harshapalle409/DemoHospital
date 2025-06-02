import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './languageSwitcherStyles.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language_switcher_unique">
      <button onClick={() => setLanguage('en')} disabled={language === 'en'}>English</button>
      <button onClick={() => setLanguage('te')} disabled={language === 'te'}>తెలుగు</button>
      <button onClick={() => setLanguage('hi')} disabled={language === 'hi'}>हिन्दी</button>
    </div>
  );
};

export default LanguageSwitcher;
