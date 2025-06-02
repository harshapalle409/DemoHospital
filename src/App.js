import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Reviews from './pages/Reviews';
import Ambulance from './pages/Ambulance';
import Contact from './pages/Contact';
import Location from './pages/Location';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app_wrapper">
          <Navbar />
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
