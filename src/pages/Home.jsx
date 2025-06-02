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
                <h3>Qualified Doctors</h3>
                <p>We have highly qualified doctors for various departments.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src={feature2} alt="feature" />
                <h3>Advanced Equipment</h3>
                <p>Our hospital is equipped with the latest medical technologies.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src={feature3} alt="feature" />
                <h3>Emergency Services</h3>
                <p>24/7 emergency services with ambulance and ICU support.</p>
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
                <h1>Welcome to Alavi Hospitals</h1>
                <p>
                  Alavi Hospitals provides compassionate healthcare with top-tier medical professionals and state-of-the-art equipment. We are committed to your health and well-being.
                </p>
                <a href="/services" className="template-btn mt-3">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="department-area section-padding">
        <div className="container">
          <div className="text-center">
            <h2>Our Departments</h2>
          </div>
          <div className="department-slider">
            {/* Repeat this block for each department */}
            <div className="single-slide">
              <div className="slide-img">
                <img src={car} alt="department" />
              </div>
              <div className="single-department">
                <h3>Cardiology</h3>
                <p>Advanced cardiac care for heart-related conditions.</p>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src={gyn} alt="department" />
              </div>
              <div className="single-department">
                <h3>GYNAECOLOGY & OBSTETRICS</h3>
                <p>Personalized care for women's health, from screenings to advanced reproductive treatments</p>
              </div>
            </div><div className="single-slide">
              <div className="slide-img">
                <img src={ped} alt="department" />
              </div>
              <div className="single-department">
                <h3>PAEDIATRIC</h3>
                <p>Comprehensive care for infants, children, and teens-from check-ups to specialized treatments.</p>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src={ort} alt="department" />
              </div>
              <div className="single-department">
                <h3>Orthopedics</h3>
                <p>Expert orthopedic surgeons for bones and joints health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
