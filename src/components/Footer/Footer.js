
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-category">
        <h3>Company</h3>
        <ul>
          <li>About us</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="footer-category">
        <h3>Contact</h3>
        <ul>
          <li>0716616725</li>
          <li>abc@gmail.com</li>
          <li>MALKEY RENT A CAR (PVT.) LTD. NO 58 PAMANKADA ROAD, COLOMBO 06, SRI LANKA.</li>
        </ul>
      </div>
      <div className="footer-category">
        <h3>Support</h3>
        <ul>
          <li><a href="#">Chat box</a></li>
          <li><a href="#">Help center</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
