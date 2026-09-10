import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <h2 className="about-title reveal-up">MEET YOUR<br/>MASTER ELECTRICIAN</h2>
        <p className="about-bio reveal-up delay-100">
          Precision. Power. Perfection. We don't just fix wires, we orchestrate the currents that bring your space to life. With decades of hands-on experience, we tackle the toughest electrical challenges with industrial-grade reliability.
        </p>
        <div className="experience-badge brutalist-border brutalist-shadow floating reveal-up delay-200">
          20+<br/>YEARS<br/>EXPERIENCE
        </div>
      </div>
      <div className="about-right">
        <div className="graph-paper"></div>
        <div className="image-container brutalist-border brutalist-shadow">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Master Electrician" 
            className="electrician-img img-zoom"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
