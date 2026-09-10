"use client";

import { useEffect, useState } from "react";

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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#faf6f0] overflow-hidden"
      style={{
        opacity: loadingState === "fading" ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {/* Decorative background SVG */}
      <div className="absolute opacity-5 text-[#4a7c59]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] stroke-[2] stroke-linecap-round stroke-linejoin-round">
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
        className="relative z-10 flex flex-col items-center"
        style={{
          opacity: opacity,
          transform: `scale(${scale})`,
          transition: "opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4a7c59] font-serif text-4xl font-bold text-white shadow-2xl mb-4">
          T
        </span>
        <span className="font-serif text-3xl font-semibold tracking-[0.22em] text-[#2e3230]">
          TERRA
        </span>
        <div className="mt-6 w-32 h-[2px] bg-[#c4c8bc]/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-[#4a7c59] w-full animate-[loadingBar_2s_ease-in-out_infinite]" style={{ transformOrigin: "left" }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          0% { transform: scaleX(0); opacity: 1; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
