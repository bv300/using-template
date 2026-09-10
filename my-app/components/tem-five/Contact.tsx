"use client";
import React from 'react';
import './Contact.css';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title reveal-up">JOIN THE EXPEDITION</h2>
        
        <div className="contact-grid">
          <div className="contact-left">
            
            {/* Phone Card */}
            <a href="tel:+1234567890" className="contact-card brutalist-border brutalist-shadow brutalist-interactive reveal-up delay-100">
              <div className="contact-card-icon brutalist-border">
                <PhoneIcon />
              </div>
              <div className="contact-card-content">
                <h4>CALL US DIRECTLY</h4>
                <p>+1 (234) 567-890</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-card brutalist-border brutalist-shadow brutalist-interactive reveal-up delay-200">
              <div className="contact-card-icon brutalist-border">
                <WhatsAppIcon />
              </div>
              <div className="contact-card-content">
                <h4>WHATSAPP US</h4>
                <p>Fast replies 24/7</p>
              </div>
            </a>

            {/* Working Hours Card */}
            <div className="contact-card brutalist-border brutalist-shadow reveal-up delay-300">
              <div className="contact-card-icon brutalist-border">
                <ClockIcon />
              </div>
              <div className="contact-card-content">
                <h4>WORKING HOURS</h4>
                <p>Mon-Fri: 8AM - 6PM<br/>Sat-Sun: Emergency Only</p>
              </div>
            </div>

          </div>

          <div className="contact-right">
            <div className="map-container brutalist-border brutalist-shadow reveal-up delay-400">
              {/* Google Maps Embed using a placeholder location */}
              <iframe 
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1718820000000!5m2!1sen!2sus" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
