"use client";

import Link from "next/link";

export default function FloatingBackButton() {
  return (
    <Link 
      href="/" 
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '0.75rem 1.5rem',
        borderRadius: '9999px',
        fontWeight: '500',
        zIndex: 9999,
        textDecoration: 'none',
        boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.39)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(0, 0, 0, 0.39)';
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back to Hub
    </Link>
  );
}
