// import React from 'react';
// import { useTranslation } from '../context/LanguageContext';
// import './homeStyles.css';

// const Home = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="home_unique_wrapper">
//       <section className="home_unique_banner">
//         <h2 className="home_unique_title">{t('welcome_message')}</h2>
//         <p className="home_unique_subtext">We provide quality healthcare with compassion.</p>
//       </section>

//       <section className="home_unique_carousel">
//         <div className="home_unique_slider">
//           <img src="https://via.placeholder.com/800x300?text=Hospital+1" alt="Hospital 1" />
//           <img src="https://via.placeholder.com/800x300?text=Hospital+2" alt="Hospital 2" />
//           <img src="https://via.placeholder.com/800x300?text=Hospital+3" alt="Hospital 3" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
// HomePage.js
import React from "react";
import "./homeStyles.css";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useTranslation } from '../context/LanguageContext';
import image1 from '../images/image1.jpg';
import image4 from '../images/image4.jpg';
import image3 from '../images/image3.jpg';
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';
import welcome from '../images/welcome.png';
import car from '../images/car-img.jpg';
import gyn from '../images/gyn-img.jpg';
import ort from '../images/ort-img.jpg';
import ped from '../images/ped-img.jpg';
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="home_unique_wrapper">
      {/* WhatsApp Button */}
      <a href="https://wa.me/917013718111" className="float1" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-whatsapp my-float"></i>
      </a>

      {/* Carousel */}
<section className="home_unique_carousel">
  <Carousel interval={3000} pause={false}> {/* 3000ms = 3 seconds between slides */}
    <Carousel.Item>
      <img className="d-block w-100" src={image4} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image3} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image1} alt="Third slide" />
    </Carousel.Item>
  </Carousel>
</section>


      {/* Features */}
      <section className="feature-area section-padding">
        <div className="container">
          <div className="row">
            {/* Repeat this block for each feature */}
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src={feature1} alt="feature" />
                <h3>{t('qualified_doctors_heading')}</h3>
                <p>{t('qualified_doctors_text')}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src={feature2} alt="feature" />
                <h3>{t('advanced_equipment_heading')}</h3>
                <p>{t('advanced_equipment_text')}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src={feature3} alt="feature" />
                <h3>{t('emergency_services_heading')}</h3>
                <p>{t('emergency_services_heading')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="welcome-img" src={welcome} alt="hospital" />
            </div>
            <div className="col-md-6">
              <div className="welcome-text">
                <h1>{t('welcome_heading')}</h1>
                <p>{t('welcome_text')}</p>
                <a href="/services" className="template-btn mt-3">{t('explore_services_button')}</a>
              </div>
            </div>  
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="department-area section-padding">
        <div className="container">
          <div className="text-center">
            <h2>{t('our_departments_heading')}</h2>
          </div>
          <div className="department-slider">
            {/* Repeat this block for each department */}
            <div className="single-slide">
              <div className="slide-img">
                <img src={car} alt="department" />
              </div>
              <div className="single-department">
                <h3>{t('cardiology_heading')}</h3>
                <p>{t('cardiology_desc')}</p>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src={gyn} alt="department" />
              </div>
              <div className="single-department">
                <h3>{t('gynaecology_obstetrics_heading')}</h3>
                <p>{t('gynaecology_obstetrics_desc')}</p>
              </div>
            </div><div className="single-slide">
              <div className="slide-img">
                <img src={ped} alt="department" />
              </div>
              <div className="single-department">
                <h3>{t('paediatric_heading')}</h3>
                <p>{t('paediatric_desc')}</p>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src={ort} alt="department" />
              </div>
              <div className="single-department">
                <h3>{t('orthopedics_heading')}</h3>
                <p>{t('orthopedics_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
