"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../layout.module.css";

const navigation = [
  ["Home", "#hero"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Why Terra", "#why-us"],
  ["Contact", "#contact"],
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link
          href="#hero"
          onClick={() => setIsOpen(false)}
          className={styles.logoLink}
        >
          <span className={styles.logoIcon}>
            T
          </span>
          <span className={styles.logoText}>
            TERRA
          </span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className={styles.desktopNav}
        >
          {navigation.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${index === 0 ? styles.navLinkActive : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Link
            href="#contact"
            className={styles.ctaButton}
          >
            Start Your Project
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuToggle}
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div>
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileLogoText}>
              TERRA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className={styles.closeMenuBtn}
            >
              ×
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className={styles.mobileCta}
        >
          Start Your Project
        </Link>
      </div>
    </header>
  );
}

