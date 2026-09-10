"use client";

import { useRef, useState, MouseEvent, useEffect } from "react";
import { services } from "@/data/services";
import styles from "./page.module.css";

function AnimatedCard({
  service,
  index,
}: {
  service: { title: string; description: string; image?: string };
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Simple staggered fade in
    const timer = setTimeout(() => setIsMounted(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Cursor position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage for glare
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    setGlarePosition({ x: xPct, y: yPct });

    // Calculate rotation (-10 to 10 degrees)
    const rotateX = ((y / rect.height) - 0.5) * -20;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.card}
      style={{
        position: "relative",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        opacity: isMounted ? 1 : 0,
        transform: isMounted 
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}) translateY(${isHovered ? "-0.25rem" : "0"})` 
          : "translateY(2rem)",
        transition: isHovered 
          ? "transform 0.1s ease-out" 
          : "transform 0.5s ease-out, opacity 0.8s ease-out",
        willChange: "transform",
      }}
    >
      {/* Dynamic Glare Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />
      
      <div style={{ position: "relative", zIndex: 2, transform: "translateZ(30px)", display: "flex", flexDirection: "column", height: "100%" }}>
        {service.image && (
          <div style={{ marginBottom: "1.5rem", height: "12rem", width: "100%", overflow: "hidden", borderRadius: "0.75rem" }}>
            <img 
              src={service.image} 
              alt={service.title} 
              style={{ 
                height: "100%", 
                width: "100%", 
                objectFit: "cover", 
                transition: "transform 0.5s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)"
              }}
            />
          </div>
        )}
        <h2 className={styles.cardTitle}>{service.title}</h2>
        <p className={styles.cardCopy}>{service.description}</p>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Services</p>
      <h1 className={styles.title}>
        A focused team for meaningful work.
      </h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <AnimatedCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
