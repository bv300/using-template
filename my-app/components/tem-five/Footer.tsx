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
              <li><a href="#" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Silicon Valley HQ</h4>
            <p className="footer-text">
              1 Infinite Loop Way<br/>
              Cupertino, CA 95014<br/>
              USA
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Tokyo Branch</h4>
            <p className="footer-text">
              Akihabara Tech Dist.<br/>
              Chiyoda City, Tokyo<br/>
              101-0021, Japan
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Information</h4>
            <p className="footer-text">
              Mon–Fri: 09:00 — 19:00<br/>
              Sat–Sun: Closed
            </p>
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
