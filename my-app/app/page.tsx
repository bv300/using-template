"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import styles from './page.module.css';

const projects = [
  { id: 'tem-seven', name: 'Template-one', desc: 'Unlock insights from your data' },
  { id: 'tem-six', name: 'Template-two', desc: 'Luxury automotive modifications' },
  { id: 'tem-one', name: 'Template-three', desc: 'Modern Digital Solutions & Strategy' },
  { id: 'tem-three', name: 'Template-four', desc: 'Showcase your creative work' },
  { id: 'tem-four', name: 'Template-five', desc: 'The future of online shopping' },
  { id: 'tem-five', name: 'Template-six', desc: 'Scale your business globally' },
  { id: 'tem-two', name: 'Template-seven', desc: 'Unlock insights from your data' },
];

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('hub-theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('hub-theme', newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) return null;

  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.darkTheme : ''}`}>
      {/* Theme Toggle Button */}
      <button 
        className={styles.themeToggle} 
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Dynamic Animated Background */}
      <div className={styles.background}></div>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Template <span className={styles.highlight}>Hub</span>
          </h1>
          <p className={styles.subtitle}>
            Explore our curated collection of highly polished, production-ready templates. Start your next big project with a beautiful foundation.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((proj, index) => (
            <Link 
              href={`/${proj.id}`} 
              key={proj.id} 
              className={styles.card} 
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2>{proj.name}</h2>
                <p>{proj.desc}</p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.arrow}>
                    <span>View Project</span>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
