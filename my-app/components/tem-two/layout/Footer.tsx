import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoWrapper}>
            <span className={styles.logoIcon}>
              T
            </span>
            <span className={styles.logoText}>
              TERRA
            </span>
          </div>
          <p className={styles.description}>
            Crafting sustainable architecture, mindful landscapes, and organic
            spaces rooted in enduring natural materials.
          </p>
          <div className={styles.contactInfo}>
            <p>742 Evergreen Studio Way, Portland, OR</p>
            <p>studio@terra-design.com</p>
            <p>+1 (503) 842-1904</p>
          </div>
        </div>
        <div className={styles.links}>
          <h3 className={styles.linksTitle}>Quick Links</h3>
          <div className={styles.linksList}>
            <a href="#hero">
              Home
            </a>
            <a href="#about">
              About Us
            </a>
            <a href="#services">
              Our Services
            </a>
            <a href="#why-us">
              Why Terra
            </a>
            <a href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>Stay Rooted</h3>
          <p className={styles.newsletterDesc}>
            Receive curated essays on biophilic design, mindful engineering, and
            quarterly architecture notes.
          </p>
          {/* <form className={styles.form}>
            <input
              aria-label="Email address"
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button
              type="submit"
              className={styles.button}
            >
              Subscribe
            </button>
          </form> */}
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 TERRA Design Collective. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}

