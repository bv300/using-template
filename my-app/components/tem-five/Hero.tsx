"use client";
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-overlay"></div>
      
      <div className="container-fluid hero-container">
        <h1 className="hero-brand reveal-up">
          NEXUS<br/>
          Electronics<br/>
          Store
        </h1>
      </div>
    </section>
  );
};

export default Hero;
