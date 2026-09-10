/* ================================================================== */
/*  Demo 1 — full wireframe recreation of the reference image         */
/*  Hero drawn on a 1008×406 grid mapped from the reference.          */
/* ================================================================== */

import "./page.css";
import { WireframeHeader } from "@/components/tem-one/Header";
import { WireframeHero } from "@/components/tem-one/Hero";
import { AboutSection } from "@/components/tem-one/About";
import { ServicesSection } from "@/components/tem-one/Services";
import { WhyChooseUsSection } from "@/components/tem-one/WhyChooseUs";
import { ContactSection } from "@/components/tem-one/Contact";
import { Footer } from "@/components/tem-one/Footer";
import { TopButton } from "@/components/tem-one/shared";
import { ScrollReveal } from "@/components/tem-one/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <main className="main-layout">
      <div className="main-wrapper">
        <WireframeHeader />

        <section id="hero" className="hero-section">
          <ScrollReveal
            className="hero-reveal"
            variant="fade-down"
            duration="slow"
          >
            <WireframeHero />
          </ScrollReveal>
        </section>

        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
        <Footer />
        <TopButton />
      </div>
    </main>
  );
}

