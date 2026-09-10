import React from 'react';
import './Marquee.css';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  // Duplicate text to ensure smooth infinite scrolling
  const repeatedText = `${text} \u00A0\u00A0\u00A0 `.repeat(10);
  
  return (
    <div className="marquee-container brutalist-border">
      <div className="marquee-content">
        {repeatedText}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {repeatedText}
      </div>
    </div>
  );
};

export default Marquee;
