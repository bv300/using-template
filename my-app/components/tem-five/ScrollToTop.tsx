"use client";
import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position to show or hide the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button 
      className={`scroll-to-top brutalist-border brutalist-shadow ${isVisible ? 'visible' : ''}`} 
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      <ArrowUpIcon />
    </button>
  );
};

export default ScrollToTop;
