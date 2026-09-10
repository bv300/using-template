import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <section className={styles.page}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>
            About Terra
          </p>
          <h1 className={styles.title}>
            Building in harmony with the earth.
          </h1>
          <p className={styles.copy}>
            We pair architectural mastery with ecological science to design spaces that give back more than they take. Every structure we create is a living system.
          </p>
        </div>
        
        {/* Image with continuous zoom in/out animation */}
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Biophilic Architecture"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

