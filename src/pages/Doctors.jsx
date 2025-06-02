import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import './doctorsStyles.css';

const doctors = [
  {
    nameKey: 'dr_ravi',
    specialtyKey: 'cardiologist',
    experience: '15+ years',
    languagesKey: 'lang_eng_tel'
  },
  {
    nameKey: 'dr_suman',
    specialtyKey: 'orthopedic_surgeon',
    experience: '12+ years',
    languagesKey: 'lang_eng_hin'
  },
  {
    nameKey: 'dr_latha',
    specialtyKey: 'neurologist',
    experience: '10+ years',
    languagesKey: 'lang_eng_tel_hin'
  }
];

const Doctors = () => {
  const { t } = useTranslation();

  return (
    <div className="doctors_unique_wrapper">
      <h2 className="doctors_unique_heading">{t('our_doctors')}</h2>
      <div className="doctors_unique_grid">
        {doctors.map((doc, index) => (
          <div key={index} className="doctors_unique_card">
            <div className="doctors_unique_avatar">{doc.nameKey.charAt(3)}</div>
            <h3 className="doctors_unique_name">{t(doc.nameKey)}</h3>
            <p className="doctors_unique_specialty">{t(doc.specialtyKey)}</p>
            <p className="doctors_unique_exp">{t('experience')}: {doc.experience}</p>
            <p className="doctors_unique_lang">{t('languages')}: {t(doc.languagesKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
