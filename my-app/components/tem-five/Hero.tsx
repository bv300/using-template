"use client";
import React from 'react';
import Marquee from './Marquee';
import './Hero.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Hero: React.FC = () => {
  useScrollReveal();

  return (
    <section id="home" className="hero-section parallax-bg">
      <div className="graph-paper"></div>
      
      <div className="floating-badge pill-shape brutalist-border brutalist-shadow floating badge-1 reveal-up delay-100">
        24/7 Emergency
      </div>
      <div className="floating-badge pill-shape brutalist-border brutalist-shadow floating badge-2 reveal-up delay-200">
        Licensed & Insured
      </div>
      <div className="floating-badge pill-shape brutalist-border brutalist-shadow floating badge-3 reveal-up delay-300">
        Same Day Service
      </div>

      <h1 className="hero-title reveal-up delay-400">POWER<br/>THE<br/>UNSEEN</h1>

      <Marquee text="→ Wire. Install. Maintain. →" />
    </section>
  );
};

export default Hero;
