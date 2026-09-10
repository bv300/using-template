"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const [loadingState, setLoadingState] = useState<"loading" | "fading" | "hidden">("loading");
  const [scale, setScale] = useState(0.8);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Initial entrance animation
    const entranceTimer = setTimeout(() => {
      setScale(1);
      setOpacity(1);
    }, 100);

    // Fade out screen
    const fadeTimer = setTimeout(() => {
      setLoadingState("fading");
      // Notify the app that initial loading is complete
      window.dispatchEvent(new Event("app-loaded"));
    }, 2000); // Show loading for 2 seconds

    // Completely unmount
    const unmountTimer = setTimeout(() => {
      setLoadingState("hidden");
    }, 2800); // 800ms for the fade-out transition

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (loadingState === "hidden") return null;

  return (
    <div 
      className={styles.overlay}
      style={{
        opacity: loadingState === "fading" ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {/* Decorative background SVG */}
      <div className={styles.backgroundSvg}>
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={styles.svgIcon}>
          <path d="M 50 46 Q 32 25 50 5 Q 68 25 50 46 Z"></path>
          <path d="M 50 54 Q 32 75 50 95 Q 68 75 50 54 Z"></path>
          <path d="M 46 50 Q 25 32 5 50 Q 25 68 46 50 Z"></path>
          <path d="M 54 50 Q 75 32 95 50 Q 75 68 54 50 Z"></path>
          <circle cx="28" cy="28" r="4"></circle>
          <circle cx="72" cy="28" r="4"></circle>
          <circle cx="28" cy="72" r="4"></circle>
          <circle cx="72" cy="72" r="4"></circle>
        </svg>
      </div>

      {/* Central Logo */}
      <div 
        className={styles.content}
        style={{
          opacity: opacity,
          transform: `scale(${scale})`,
          transition: "opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className={styles.logoCircle}>
          T
        </span>
        <span className={styles.logoText}>
          TERRA
        </span>
        <div className={styles.loadingBarContainer}>
          <div className={styles.loadingBarProgress} />
        </div>
      </div>
    </div>
  );
}

