"use client";

import { useState } from "react";
import "./Header.css";

export function WireframeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        {/* Large heading */}
        <h1 className="header-title">
          Demo 1
        </h1>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-toggle ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>

        {/* Navigation breadcrumb */}
        <nav className={`header-nav ${isOpen ? "open" : ""}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About us</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#services" onClick={() => setIsOpen(false)}>service</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>contact</a>
        </nav>
      </div>
    </header>
  );
}
