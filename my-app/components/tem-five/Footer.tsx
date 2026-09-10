import React from 'react';
import Marquee from './Marquee';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-marquee-wrapper">
         {/* Reusing the Marquee component for the footer transition */}
        <Marquee text="* QUALITY GUARANTEED * 24/7 SUPPORT *" />
      </div>
      
      <div className="footer-split">
        {/* Left Side: Branding */}
        <div className="footer-left">
          <h2 className="footer-logo">ELECTRO<br/>MODERN</h2>
          <p className="footer-description">
            Precision. Power. Perfection. We orchestrate the currents that bring your space to life.
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} ELECTRO-MODERN SHOP.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="footer-right">
          
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>SOCIALS</h4>
            <ul className="footer-links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
