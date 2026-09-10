import React from 'react';
import './Services.css';

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
);

const PenToolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">FROM THE WORKBENCH</h2>
      <div className="services-grid">
        
        {/* Service 1 */}
        <div className="service-card brutalist-border brutalist-shadow brutalist-interactive reveal-up delay-100">
          <div className="service-card-top">
            <ZapIcon />
          </div>
          <div className="service-card-bottom">
            <h3 className="service-card-title">WIRING & PANELS</h3>
            <p className="service-card-desc">
              Heavy-duty electrical panel upgrades and complete structural wiring. We bring raw power safely to where you need it most.
            </p>
            <button className="service-btn pill-shape brutalist-interactive">Learn More</button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-card brutalist-border brutalist-shadow brutalist-interactive reveal-up delay-200">
          <div className="service-card-top">
            <LightbulbIcon />
          </div>
          <div className="service-card-bottom">
            <h3 className="service-card-title">LIGHTING DESIGN</h3>
            <p className="service-card-desc">
              Architectural and ambient lighting installations. Let us illuminate your industrial or modern space with precision.
            </p>
            <button className="service-btn pill-shape brutalist-interactive">Learn More</button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-card brutalist-border brutalist-shadow brutalist-interactive reveal-up delay-300">
          <div className="service-card-top">
            <PenToolIcon />
          </div>
          <div className="service-card-bottom">
            <h3 className="service-card-title">MAINTENANCE & REPAIR</h3>
            <p className="service-card-desc">
              Rapid response fault finding and preventative maintenance. When the grid fails, we are your first line of defense.
            </p>
            <button className="service-btn pill-shape brutalist-interactive">Learn More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
