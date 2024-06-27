
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from './images/Logo.png'; // Adjust the path if necessary
import './HomeNav.css';

const HomeNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="top-bar">
      <div className="logo1">
        <img src={logo1} alt="Vishwa Transport" />
      </div>
      <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/">HOME</Link>
        <Link to="/Vehicles">VEHICLE LISTING</Link>
        <Link to="/blog">BLOGS</Link>
        <Link to="/contact">CONTACT</Link>
        <button className='btn'><Link to="/login">GET STARTED</Link></button>
        <button className='btn'><Link to="/signup">SIGN UP</Link></button>
      </nav>
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        &#9776; {/* Hamburger menu icon */}
      </div>
    </div>
  );
};

export default HomeNav;
