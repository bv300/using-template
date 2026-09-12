"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { ScrollReveal } from "@/components/tem-one/ScrollReveal";
// import ParallaxGrid from "@/components/tem-two/ParallaxGrid";

const services = [
  {
    number: "01",
    title: "Design & Planning",
    icon: "⌂",
    text: "Comprehensive design and planning services tailored to your specific project requirements.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Interior Construction",
    icon: "✿",
    text: "High-quality interior construction focusing on modern aesthetics and functional spaces.",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Renovation Services",
    icon: "↻",
    text: "Expert renovation services to transform your existing properties into modern spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Project Management",
    icon: "◇",
    text: "End-to-end project management ensuring your construction projects are completed on time.",
    image: "https://images.unsplash.com/photo-1788929899432-7753a8a42e1e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const pillars = [
  [
    "I",
    "Quality Assurance",
    "We maintain strict quality control standards throughout every phase of your project.",
  ],
  [
    "II",
    "Timely Delivery",
    "Our team is committed to meeting deadlines without compromising on the final quality.",
  ],
  [
    "III",
    "Transparent Pricing",
    "We provide clear, detailed estimates and maintain transparent communication about costs.",
  ],
  [
    "IV",
    "Client Satisfaction",
    "Your satisfaction is our primary goal, and we work closely with you to realize your vision.",
  ],
];

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
        <ScrollReveal variant="fade-up">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutImageCol}>
              <div className={styles.aboutImageWrapper}>
                <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                alt="Construction detail"
                className={styles.aboutImage}
              />
            </div>
          </div>
          <div className={styles.aboutTextCol}>
            <h2 className={styles.sectionTitle}>
              About Our Company
            </h2>
            <p className={styles.sectionDesc}>
              We are a dedicated team of professionals with years of experience in delivering high-quality construction and design services. Our goal is to provide exceptional results for our clients.
            </p>
            <p className={styles.sectionDesc}>
              From initial planning to final execution, we handle every aspect of your project with care and precision, ensuring that the end result meets your exact specifications.
            </p>
            <div className={styles.statsGrid}>
              <Stat value="15+" label="Years Experience" />
              <Stat value="200+" label="Projects Completed" />
              <Stat value="100%" label="Client Satisfaction" />
            </div>
            <a
              href="#contact"
              className={styles.btnPrimary}
            >
              Learn More →
            </a>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <section id="services" className={styles.servicesSection}>
        <ScrollReveal variant="fade-up">
          <div className={styles.servicesContainer}>
            <div className={styles.servicesHeader}>
              <div>
                <h2 className={styles.servicesTitle}>
                  Our Core Services
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
        </ScrollReveal>
      </section>

      <section
        id="why-us"
        className={styles.whyUsSection}
      >
        <ScrollReveal variant="fade-up">
          <div className={styles.whyUsContainer}>
            <div className={styles.whyUsHeader}>
              <h2 className={styles.whyUsTitle}>
                Why Choose Us
              </h2>
              <p className={styles.whyUsDesc}>
                We combine industry expertise with a commitment to excellence, ensuring your project is handled by the best in the business.
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
                  Our Standards
                </h3>
                <div className={styles.standardsList}>
                  {[
                    "Expert Craftsmanship",
                    "Premium Materials",
                    "Dedicated Support",
                    "Innovative Solutions",
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
                  "The team delivered outstanding results for our commercial project. Their attention to detail and professionalism was evident throughout the entire process."
                </p>
                <p className={styles.testimonialAuthor}>John Doe</p>
                <p className={styles.testimonialRole}>
                  Operations Director, ABC Corp
                </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <section id="contact" className={styles.contactSection}>
        <ScrollReveal variant="fade-up">
          <div className={styles.contactContainer}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Get In Touch
              </h2>
              <p className={styles.ctaDesc}>
                Ready to start your next project? Contact us today to discuss your requirements.
              </p>
              <a
                href="#inquiry-form"
                className={styles.ctaBtn}
              >
                Contact Us →
              </a>
            </div>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfoCol}>
                <h3 className={styles.contactTitle}>
                  Contact Information
                </h3>
                <p className={styles.contactDesc}>
                  Reach out to us via phone or email, or visit our office.
                </p>
              <div className={styles.contactCards}>
                <ContactCard
                  label="Toll-Free Consultation"
                  value="(91+) 492-TERRA"
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
        </ScrollReveal>
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
