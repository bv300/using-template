"use client";
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">

        {/* 5-Column Grid */}
        <div className="footer-grid grid grid-cols-5">
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Social</h4>
            <ul className="footer-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">X Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Information</h4>
            <p className="footer-text">
              Mon–Fri: 09:00 — 19:00<br />
              Sat–Sun: Closed
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Tokyo Branch</h4>
            <p className="footer-text">
              Akihabara Tech Dist.<br />
              Chiyoda City, Tokyo<br />
              101-0021, Japan
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Silicon Valley HQ</h4>
            <a 
              href="https://www.google.com/maps/place/1+Infinite+Loop,+Cupertino,+CA+95014" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none' }}
              title="View on Google Maps"
            >
              <div style={{ width: '100%', height: '80px', overflow: 'hidden', borderRadius: '4px', margin: '5px 0', position: 'relative' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.328328634861!2d-122.03222532439546!3d37.33182877209935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b6e94ebb33%3A0x6b4421b44b62d856!2s1%20Infinite%20Loop%2C%20Cupertino%2C%20CA%2095014%2C%20USA!5e1!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0, position: 'absolute', top: '-60px', left: 0, pointerEvents: 'none' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Silicon Valley HQ Map"
                ></iframe>
              </div>
            </a>
            <div className="footer-legal mt-4">
              <p>&copy; {new Date().getFullYear()} NEXUS</p>
              <p><a href="#">Privacy Policy</a></p>
            </div>
          </div>
        </div>

      </div>

      {/* Massive Acronym */}
      <div className="footer-brand-wrapper">
        <h1 className="footer-massive-brand">NEXUS</h1>
      </div>
    </footer>
  );
};

export default Footer;
