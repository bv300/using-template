import Button from "@/components/tem-seven/ui/Button";
import Reveal from "@/components/tem-seven/ui/Reveal";
import { site } from "@/components/tem-seven/data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      {/* Background elements */}
      <div className={styles.gridBackdrop} />
      <div className={styles.gradientBackdrop} />

      <div className={styles.heroContent}>
        <div className={styles.heroGrid}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <Reveal delay={200}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                {site.name}
              </div>
            </Reveal>

            <Reveal delay={400}>
              <h1 className={styles.title}>
                PROFESSIONAL TECHNICAL SERVICES
              </h1>
            </Reveal>

            <Reveal delay={600}>
              <h2 className={styles.subheading}>
                GENERAL MAINTENANCE &bull; INTERIOR DESIGN &bull; DECORATION &bull; TURNKEY FIT-OUT
              </h2>
            </Reveal>

            <Reveal delay={800}>
              <div className={styles.description}>
                <p>
                  Professional technical and interior solutions designed around your needs.
                </p>
                <p>
                  We provide quality-focused maintenance, interior design, decoration, technical and turnkey fit-out solutions for residential and commercial spaces.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1000}>
              <div className={styles.actions}>
                <Button href="#services" variant="primary">
                  EXPLORE SERVICES
                </Button>
                <Button href="#contact" variant="outline">
                  CONTACT US
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1200}>
              <div className={styles.smallText}>
                Design &bull; Build &bull; Maintain
              </div>
            </Reveal>
          </div>

          {/* Right: Accordion Gallery */}
          <Reveal delay={600}>
            <div className={styles.wrapper}>
              <div style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
              <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)" }}></div>
              <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80)" }}></div>
              <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1616046229478-9901c5536a45?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
