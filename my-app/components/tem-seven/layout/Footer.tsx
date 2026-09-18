import { navLinks, site } from "@/components/tem-seven/data/site";
import Container from "@/components/tem-seven/ui/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              {site.logo && (
                <img src={site.logo} alt={`${site.name} Logo`} className={styles.logoImg} />
              )}
              <div className={styles.logoText}>
                {/* <div className={styles.brandTitle}>{site.name}</div> */}
              </div>
            </div>
            <p className={styles.tagline}>
              {site.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className={styles.heading}>QUICK LINKS</div>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href} className={styles.listItem}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Associate Company */}
          <div className={styles.associateContainer}>
            <div className={styles.heading}>OUR ASSOCIATE COMPANY</div>
            <p className={styles.legalName}>
              Example Company L.L.C.
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}