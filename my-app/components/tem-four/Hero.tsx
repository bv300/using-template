import React from 'react';
import styles from './Hero.module.css';
import ScrollReveal from './ScrollReveal';

const galleryImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80",
  "https://media.istockphoto.com/id/1484758499/photo/indian-rupee-symbol-with-business-chart-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=ey87a2z5d1pAErsTCyQgzi14NHso-pDLsFk6Q1w0oUQ=",
  "https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80",
  "https://media.istockphoto.com/id/2187991365/photo/financial-investment-and-success-market-stock-technology-currency-report-money-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=0oplhGalSnw4hsnSbjg7UtgHS7cnaBcUh9bmQ2Hqzio=",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
];

// Helper to calculate the 3D panoramic transform for each card
const getCardStyle = (index: number, total: number) => {
  const middle = (total - 1) / 2;
  const offset = index - middle;

  // For a concave curve (like the reference), the outer cards are closer to the viewer
  // so translateZ is positive for outer cards.
  const translateZ = Math.abs(offset) * 50;

  // Left cards rotate positively (left edge comes forward)
  // Right cards rotate negatively (right edge comes forward)
  const rotateY = -offset * 12;

  return {
    transform: `translateZ(${translateZ}px) rotateY(${rotateY}deg)`
  };
};

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <ScrollReveal delay={100} direction="up">
        <div className={styles.headerArea}>
          <h1 className={styles.title}>
            <span className={styles.titleSerif}>Secure Your Financial Future,</span>
            Grow Your Wealth
          </h1>
          <p className={styles.subtitle}>
            Expert wealth management, strategic investing, and personalized financial planning to help you achieve your goals.
          </p>
          {/* <button className={styles.ctaBtn}>
            Get started for Free
            <span className={styles.arrowCircle}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button> */}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200} direction="up">
        <div className={styles.carouselContainer}>
          <div className={styles.gallery}>
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className={styles.card}
                style={getCardStyle(idx, galleryImages.length)}
              >
                <img src={src} alt={`Team member ${idx + 1}`} className={styles.cardImage} />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300} direction="up">
        <div className={styles.featuresArea}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Wealth Management</h3>
            <p className={styles.featureDesc}>
              Comprehensive strategies designed to protect, grow, and responsibly transfer your wealth across generations.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Investment Advisory</h3>
            <p className={styles.featureDesc}>
              Data-driven and diversified investment portfolios tailored specifically to your risk tolerance and objectives.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Financial Planning</h3>
            <p className={styles.featureDesc}>
              Holistic planning to navigate retirement, tax strategies, and life's major financial milestones with confidence.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
