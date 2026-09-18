import React from 'react';
import { FaStar, FaDiamond } from 'react-icons/fa6';
import './Marqueebar.css';

const LOGO = '/assets/carples logo.png';

interface MarqueeItem {
  icon: 'star' | 'diamond';
  text: string;
}

const items: MarqueeItem[] = [
  { icon: 'diamond', text: 'Android Upgrade' },
  { icon: 'star', text: '360° Camera' },
  { icon: 'diamond', text: 'Premium Seat Covers' },
  { icon: 'star', text: 'Car Tinting' },
  { icon: 'diamond', text: 'Upholstery Works' },
  { icon: 'star', text: 'Alloy Wheels & LED Lights' },
  { icon: 'diamond', text: 'Sound Horns' },
  { icon: 'star', text: 'Car Stereo Upgrade' },
  { icon: 'diamond', text: 'Smart Lock Systems' },
  { icon: 'star', text: 'Car Batteries' },
];

interface MarqueeLapProps {
  suffix?: string;
}

function MarqueeLap({ suffix = '' }: MarqueeLapProps) {
  return (
    <>
      <span className="marquee-logo-wrap">
        <img src={LOGO} alt="Carplex UAE" className="marquee-logo" />
      </span>

      {items.map(({ icon, text }, i) => (
        <span key={`${suffix}-${i}`} className="marquee-item">
          {icon === 'star'
            ? <FaStar className="marquee-icon" />
            : <FaDiamond className="marquee-icon" />}
          {text}
        </span>
      ))}
    </>
  );
}

const MarqueeBar: React.FC = () => {
  return (
    <div className="marquee-bar" aria-label="Promotions ticker">
      <div className="marquee-track">
        <MarqueeLap suffix="a" />
        <MarqueeLap suffix="b" />
      </div>
    </div>
  );
}

export default MarqueeBar;
