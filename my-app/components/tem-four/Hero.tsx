import React from 'react';
import styles from './Hero.module.css';
import ScrollReveal from './ScrollReveal';

const galleryImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
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
            <span className={styles.titleSerif}>Streamline Your Team,</span>
            Supercharge Your Workflow
          </h1>
          <p className={styles.subtitle}>
            All-in-one platform to plan, collaborate, and deliver — faster and smarter.
          </p>
          <button className={styles.ctaBtn}>
            Get started for Free
            <span className={styles.arrowCircle}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
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
            <h3 className={styles.featureTitle}>Real-Time Collaboration</h3>
            <p className={styles.featureDesc}>
              Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Task & Project Tracking</h3>
            <p className={styles.featureDesc}>
              Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team's style.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Performance Insights</h3>
            <p className={styles.featureDesc}>
              Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
