import React from 'react';
import './WhyChooseUs.css';

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-section parallax-bg">
      <div className="why-left">
        <div className="graph-paper"></div>
        <div className="floating-panel brutalist-border brutalist-shadow floating">
          <img 
            src="https://images.unsplash.com/photo-1758101755915-462eddc23f57?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Electrical Panel"
            className="img-zoom" 
          />
        </div>
      </div>
      
      <div className="why-right">
        <h2 className="why-title reveal-up">REALMS OF<br/>RELIABILITY</h2>
        
        <ul className="why-list">
          <li className="why-item reveal-up delay-100">
            <div className="why-item-icon brutalist-border">
              <ShieldCheckIcon />
            </div>
            <div className="why-item-content">
              <h4>LIFETIME WARRANTY</h4>
              <p>We stand by our craftsmanship. Every installation is backed by an iron-clad guarantee.</p>
            </div>
          </li>
          
          <li className="why-item reveal-up delay-200">
            <div className="why-item-icon brutalist-border">
              <TagIcon />
            </div>
            <div className="why-item-content">
              <h4>UPFRONT PRICING</h4>
              <p>No hidden fees. No surprises. You know the exact cost before we strip the first wire.</p>
            </div>
          </li>
          
          <li className="why-item reveal-up delay-300">
            <div className="why-item-icon brutalist-border">
              <ClockIcon />
            </div>
            <div className="why-item-content">
              <h4>ON-TIME PROMISE</h4>
              <p>Your time is valuable. We arrive when we say we will, equipped and ready to execute.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
