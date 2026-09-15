"use client";
import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const stats = [
  { value: "10k+", label: "Happy Customers" },
  { value: "500+", label: "Premium Gadgets" },
  { value: "24/7", label: "Support" }
];

const WhyChooseUs: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrollPosition = window.scrollY;
        // Simple rotation based on scroll
        galleryRef.current.style.transform = `rotate(${scrollPosition * 0.05}deg)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="studio" className="why-section theme-dark py-section">
      <div className="container">
        
        {/* Studio Gallery */}
        <div className="studio-gallery-container reveal-up">
          <div className="studio-gallery" ref={galleryRef}>
            {/* Using placeholders for polaroids */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`polaroid p-${i}`}>
                <img 
                  src={`https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=400&auto=format&fit=crop&sig=${i}`} 
                  alt="Tech gadget" 
                />
              </div>
            ))}
          </div>
          <div className="gallery-center-text">
            <h2 className="title-large">Gallery</h2>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats-grid mt-20">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-item reveal-up delay-${(index + 1) * 100}`}>
              <div className="stat-value title-massive">{stat.value}</div>
              <div className="stat-label text-lead">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Trust */}
        <div className="client-trust mt-20 reveal-up">
          <h3 className="text-lead trust-headline">The World's Most Ambitious Brands Choose to Work With Us</h3>
          <div className="logos-cluster">
            <span className="logo-placeholder">Apple</span>
            <span className="logo-placeholder">Samsung</span>
            <span className="logo-placeholder">Sony</span>
            <span className="logo-placeholder">Dell</span>
            <span className="logo-placeholder">Bose</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
