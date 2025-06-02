import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import './navbarStyles.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar_unique_wrapper">
      <div className="navbar_unique_logo">🏥</div>
      <div
        className="navbar_unique_toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      <ul className={`navbar_unique_links ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/">{t('home')}</Link></li>
        <li><Link to="/services">{t('services')}</Link></li>
        <li><Link to="/doctors">{t('doctors')}</Link></li>
        <li><Link to="/ambulance">{t('ambulance')}</Link></li>
        <li><Link to="/reviews">{t('reviews')}</Link></li>
        <li><Link to="/location">{t('location')}</Link></li>
        <li><Link to="/contact">{t('contact')}</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
