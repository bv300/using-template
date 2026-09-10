"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // If we've already done the initial load this session, skip the delay
    if (sessionStorage.getItem("app-loaded")) {
      setHasLoaded(true);
      return;
    }

    const handleLoaded = () => {
      setHasLoaded(true);
      sessionStorage.setItem("app-loaded", "true");
    };

    window.addEventListener("app-loaded", handleLoaded);
    
    // Fallback timeout just in case the event is missed
    const timer = setTimeout(handleLoaded, 2000);

    return () => {
      window.removeEventListener("app-loaded", handleLoaded);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={hasLoaded ? "animate-fade-in-up" : "opacity-0"}>
      {children}
    </div>
  );
}
