"use client";
import React, { useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  // Simple scroll reveal logic could also be extracted to a hook, doing it inline for now
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section py-section">
      <div className="container">
        <h2 className="title-massive text-center reveal-up about-headline">
          Next-Gen<br/>
          Tech &amp;<br/>
          Innovation
        </h2>
        
        <div className="about-grid mt-20">
          <div className="about-block reveal-up delay-100">
            <h3 className="about-subtitle">01 / Innovation</h3>
            <p className="text-lead">
              We believe technology is the purest intersection of art and utility. Our curated selection is grounded in extreme performance, bringing you the essential tools for working, creating, and living in a digital world.
            </p>
          </div>
          
          <div className="about-block reveal-up delay-200">
            <h3 className="about-subtitle">02 / Performance</h3>
            <p className="text-lead">
              Future-proofing your daily workflow through cutting-edge hardware, premium materials, and deep integration with your ecosystem. Every device we offer empowers your lifestyle rather than complicating it.
            </p>
          </div>
          
          <div className="about-block reveal-up delay-300">
            <h3 className="about-subtitle">03 / Categories</h3>
            <ul className="about-list text-lead">
              <li>High-Performance Laptops</li>
              <li>Professional Audio Gear</li>
              <li>Smart Home Devices</li>
              <li>Next-Gen Wearables</li>
            </ul>
          </div>
        </div>

        <div className="about-image-wrapper mt-20 reveal-up">
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop" 
            alt="Electronics gadgets" 
            className="img-fluid about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
