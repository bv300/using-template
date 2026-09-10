"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
// import ParallaxGrid from "@/components/tem-two/ParallaxGrid";

const services = [
  {
    number: "01",
    title: "Regenerative Architecture",
    icon: "⌂",
    text: "Full-scale structural planning anchored in mass timber, passive solar orientation, and closed-loop water systems.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Biophilic Interior Curation",
    icon: "✿",
    text: "Living botanicals, moss acoustics, and daylight-synced lighting that make wellbeing part of the room.",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Carbon-Negative Retrofits",
    icon: "↻",
    text: "Transforming outdated concrete and steel shells into breathable, high-efficiency havens.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Sustainable Material R&D",
    icon: "◇",
    text: "Regional rammed earth, mycelium acoustic tiles, lime plasters, and reclaimed stonework.",
    image: "https://images.unsplash.com/photo-1600607688066-890987febe36?auto=format&fit=crop&w=800&q=80",
  },
];

const pillars = [
  [
    "I",
    "Circular Lifecycle Assessment",
    "Every beam, joist, and panel is indexed for deconstructability and circular reuse without landfill waste.",
  ],
  [
    "II",
    "Living Air & Circadian Optimization",
    "Botanical biofilters purge airborne particulates while circadian daylighting supports sleep-wake health.",
  ],
  [
    "III",
    "Verified Passive House & LEED Platinum",
    "Guaranteed airtightness and zero thermal bridge strategies cut heating and cooling energy dramatically.",
  ],
  [
    "IV",
    "Native Ecosystem Reintegration",
    "Each site replaces displaced flora with pollinator corridors, permeable surfaces, and natural perches.",
  ],
  [
    "V",
    "Transparent Material Provenance",
    "Wood, stone, and lime are sourced close to each build, supporting local stewards and lowering freight emissions.",
  ],
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.badge}>
      ✦ {children}
    </span>
  );
}

export default function Home() {
  const [activeCol, setActiveCol] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setActiveCol((current) => (current + 1) % 4);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isHovered, activeCol]);
  return (
    <div className={styles.layoutWrapper}>
      <section
        id="hero"
        className={styles.heroSection}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setIsHovered(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setIsHovered(false)}
      >
        {[
          {
            // title: "1",
            subtitle: "background-attachment: scroll;",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80')",
            bgFixed: false,
          },
          {
            // title: "2",
            subtitle: "background-attachment: fixed;",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80')",
            bgFixed: true,
          },
          {
            // title: "3",
            subtitle: "What is lorem ipsum",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')",
            bgFixed: true,
          },
          {
            // title: "8",
            subtitle: "What is lorem ipsum",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgImage: "url('https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&w=1600&q=80')",
            bgFixed: true,
          },
        ].map((col, idx) => (
          <div
            key={idx}
            className={`${styles.heroCol} ${activeCol === idx ? styles.heroColActive : styles.heroColInactive}`}
            onMouseEnter={() => setActiveCol(idx)}
            onClick={() => setActiveCol(idx)}
          >
            <div className={styles.heroContentWrapper}>
              <div
                className={`${styles.heroCard} ${activeCol === idx ? styles.heroCardActive : styles.heroCardInactive}`}
              >
                <h2 className={styles.heroCardTitle}>
                  {col.subtitle}
                </h2>
                <p className={styles.heroCardText}>
                  {col.text}
                </p>
              </div>
            </div>

            {/* Background Image */}
            <div
              className={`${styles.heroBg} ${col.bgFixed ? styles.heroBgFixed : ""} ${activeCol === idx ? styles.heroBgActive : styles.heroBgInactive}`}
              style={{ backgroundImage: col.bgImage }}
            />
          </div>
        ))}
      </section>

      {/* <ParallaxGrid /> */}

      <section
        id="about"
        className={styles.aboutSection}
      >
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImageCol}>
            <div className={styles.aboutImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                alt="Natural timber and indoor tree detail"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutQuote}>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.quoteText}>
                We build structures that breathe with nature, not against it.
              </p>
              <div className={styles.quoteAuthor}>
                <strong>Elena Lindqvist</strong>
                <br />
                <span>
                  Principal Architect & Founder
                </span>
              </div>
            </div>
          </div>
          <div className={styles.aboutTextCol}>
            <Badge>Our Organic Ethos</Badge>
            <h2 className={styles.sectionTitle}>
              Symbiosis Between Built Architecture & Forest Ecology
            </h2>
            <p className={styles.sectionDesc}>
              Founded in Portland and Stockholm, TERRA was born out of a stark
              realization: contemporary commercial construction accounts for
              nearly 40% of global emissions, while confining inhabitants within
              stagnant, artificial environments.
            </p>
            <p className={styles.sectionDesc}>
              Our multidisciplinary team unites structural timber engineers,
              horticultural scientists, and certified biophilic architects to
              curate spaces that restore human balance and regenerate the
              regional watershed.
            </p>
            <div className={styles.statsGrid}>
              <Stat value="100%" label="Certified FSC Timber" />
              <Stat value="Zero" label="Toxic VOC Finishes" />
              <Stat value="18 Yrs" label="Ecological R&D" />
            </div>
            <a
              href="#contact"
              className={styles.btnPrimary}
            >
              Read Our Manifesto →
            </a>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            <div>
              <Badge>Our Practice Areas</Badge>
              <h2 className={styles.servicesTitle}>
                Holistic Systems for Conscious Living
              </h2>
            </div>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article
                key={service.number}
                className={styles.serviceCard}
              >
                <div className={styles.serviceImageWrapper}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                </div>
                <div className={styles.serviceContent}>
                  <div>
                    <h3 className={styles.serviceTitle}>
                      {service.title}
                    </h3>
                    <p className={styles.serviceDesc}>
                      {service.text}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className={styles.serviceLink}
                  >
                    Explore the practice →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className={styles.whyUsSection}
      >
        <div className={styles.whyUsContainer}>
          <div className={styles.whyUsHeader}>
            <Badge>Uncompromising Integrity</Badge>
            <h2 className={styles.whyUsTitle}>
              Why Visionary Leaders Choose Terra
            </h2>
            <p className={styles.whyUsDesc}>
              Conventional construction settles for greenwashed checkboxes. We
              construct verifiable living ecosystems designed for a 150-year
              lifecycle.
            </p>
          </div>
          <div className={styles.whyUsGrid}>
            <div className={styles.pillarsCol}>
              {pillars.map(([number, title, text]) => (
                <div
                  key={number}
                  className={styles.pillarCard}
                >
                  <div className={styles.pillarNumber}>
                    {number}
                  </div>
                  <div>
                    <h3 className={styles.pillarTitle}>
                      {title}
                    </h3>
                    <p className={styles.pillarDesc}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.standardsCol}>
              <div className={styles.standardsCard}>
                <p className={styles.standardsSub}>
                  Performance Standards
                </p>
                <h3 className={styles.standardsTitle}>
                  Terra vs Conventional
                </h3>
                <div className={styles.standardsList}>
                  {[
                    "Net Negative Embodied Carbon",
                    "Grade 1 Indoor Air Quality",
                    "100% Biophilic Sightline Access",
                    "Zero Toxic VOC Chemicals",
                    "150+ Year Mass Timber",
                  ].map((item) => (
                    <div
                      key={item}
                      className={styles.standardItem}
                    >
                      <span className={styles.standardItemText}>{item}</span>
                      <span className={styles.standardItemCheck}>
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>
                  Our headquarters created by Terra transformed our workplace
                  culture. Employee retention rose 28% and clients are
                  mesmerized by the living interior forest.
                </p>
                <p className={styles.testimonialAuthor}>Marcus Vance</p>
                <p className={styles.testimonialRole}>
                  Chief Experience Officer, Nordic Horizons Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.ctaBox}>
            <Badge>Let&apos;s Co-Create</Badge>
            <h2 className={styles.ctaTitle}>
              Ready to Build a Living Sanctuary?
            </h2>
            <p className={styles.ctaDesc}>
              Let&apos;s design the future together with our master architects
              and biophilic scientists.
            </p>
            <a
              href="#inquiry-form"
              className={styles.ctaBtn}
            >
              Book Your Discovery Session →
            </a>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfoCol}>
              <h3 className={styles.contactTitle}>
                Connect With Our Studio
              </h3>
              <p className={styles.contactDesc}>
                We accept select residential, institutional, and commercial
                headquarters projects globally.
              </p>
              <div className={styles.contactCards}>
                <ContactCard
                  label="Toll-Free Consultation"
                  value="+1 (800) 492-TERRA"
                  detail="Mon - Fri, 8am - 6pm PST"
                />
                <ContactCard
                  label="Direct Correspondence"
                  value="studio@terra-arch.com"
                  detail="Average response within 24 hours"
                />
                <div className={styles.studiosCard}>
                  <p className={styles.studiosLabel}>
                    Primary Studios
                  </p>
                  <p className={styles.studioName}>Pacific Northwest Studio</p>
                  <p className={styles.studioAddress}>
                    450 Green Street, Portland, OR
                  </p>
                  <p className={styles.studioName}>European Atelier</p>
                  <p className={styles.studioAddress}>Skeppsbron 18, Stockholm</p>
                </div>
              </div>
            </div>
            <div
              id="map-container"
              className={styles.mapContainer}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179612.9238385617!2d-122.8016467332207!3d45.542811867086885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1716943825835!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.statCard}>
      <span className={styles.statValue}>
        {value}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function ContactCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactCardIcon}>
        ✦
      </div>
      <div>
        <div className={styles.contactCardLabel}>
          {label}
        </div>
        <div className={styles.contactCardValue}>{value}</div>
        <div className={styles.contactCardDetail}>{detail}</div>
      </div>
    </div>
  );
}
