"use client";

import { useState } from "react";
import Link from "next/link";
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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#faf6f0]/90 shadow-[0_1px_8px_rgba(46,50,48,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
        <Link
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4a7c59] font-serif text-lg font-bold text-white">
            T
          </span>
          <span className="font-serif text-2xl font-semibold tracking-[0.22em] text-[#2e3230]">
            TERRA
          </span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide transition-colors hover:text-[#4a7c59] ${index === 0 ? "font-semibold text-[#4a7c59]" : "text-[#646b66]"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-xl bg-[#4a7c59] px-6 py-2.5 text-sm font-medium tracking-wide text-white shadow-[0_4px_20px_rgba(46,50,48,0.08)] transition hover:bg-[#375d42] sm:inline-flex"
          >
            Start Your Project
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0ece4] text-xl text-[#2e3230] lg:hidden"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-80 max-w-[85vw] flex-col justify-between bg-[#f5f1ea] p-6 shadow-2xl transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-[#c4c8bc]/40 pb-4">
            <span className="font-serif text-xl font-semibold tracking-[0.18em] text-[#2e3230]">
              TERRA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="h-9 w-9 rounded-lg bg-[#eae6de] text-xl text-[#4a4e4a]"
            >
              ×
            </button>
          </div>
          <nav className="mt-6 flex flex-col gap-2">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-[#646b66] transition hover:bg-[#eae6de] hover:text-[#2e3230]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="flex w-full justify-center rounded-xl bg-[#4a7c59] py-3.5 text-sm font-medium tracking-wide text-white"
        >
          Start Your Project
        </Link>
      </div>
    </header>
  );
}
