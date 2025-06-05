import React from 'react';
import './footerStyles.css';
import { useTranslation } from '../context/LanguageContext';


const Footer = () => {
    const { t } = useTranslation();
  
  return (
    <div className="demo_hospital_footer___root_container">
      <div className="demo_hospital_footer___content_wrapper">
        <div className="demo_hospital_footer___section demo_hospital_footer___about_container">
        <h3 className="demo_hospital_footer___section_title">
          {t('footer_about_title')}
        </h3>
        <p className="demo_hospital_footer___description_text">
          {t('footer_about_desc1')}
        </p>
        <p className="demo_hospital_footer___description_text">
          {t('footer_about_desc2')}
        </p>
      </div>
      
      <div className="demo_hospital_footer___section demo_hospital_footer___services_container">
        <h3 className="demo_hospital_footer___section_title">
          {t('footer_services_title')}
        </h3>
        <ul className="demo_hospital_footer___services_list">
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_general_medicine')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_gynaecology_obstetrics')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_laparoscopic_surgery')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_pediatrics_neonatology')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_orthopedics')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_cardiology')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_neurology')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_pulmonology')}
          </li>
          <li className="demo_hospital_footer___service_item">
            {t('footer_service_physiotherapy')}
          </li>
        </ul>
      </div>
      
      <div className="demo_hospital_footer___section demo_hospital_footer___address_container">
        <h3 className="demo_hospital_footer___section_title">
          {t('footer_address_title')}
        </h3>
        <div className="demo_hospital_footer___location_entry">
          <span className="demo_hospital_footer___location_icon">📍</span>
          <p className="demo_hospital_footer___address_text">
            {t('footer_address_branch1')}
          </p>
        </div>
        <div className="demo_hospital_footer___location_entry">
          <span className="demo_hospital_footer___location_icon">📍</span>
          <p className="demo_hospital_footer___address_text">
            {t('footer_address_branch2')}
          </p>
        </div>
          
          <div className="demo_hospital_footer___phone_container">
            <p className="demo_hospital_footer___phone_entry">
              <span className="demo_hospital_footer___phone_icon">📞</span> D095331 21257
            </p>
            <p className="demo_hospital_footer___phone_entry">
              <span className="demo_hospital_footer___phone_icon">📞</span> D9160 606 108
            </p>
            <p className="demo_hospital_footer___phone_entry">
              <span className="demo_hospital_footer___phone_icon">📞</span> D040-49 99 49 49
            </p>
          </div>
        </div>
      </div>
      
      <div className="demo_hospital_footer___copyright_container">
        <p className="demo_hospital_footer___copyright_text">
          {t('footer_copyright')}
        </p>
      </div>
    </div>
  );
};

export default Footer;