import Link from 'next/link';
import styles from './page.module.css';

const projects = [
  { id: 'tem-one', name: 'Template-one', desc: 'Modern Digital Solutions & Strategy' },
  { id: 'tem-two', name: 'Template-two', desc: 'Unlock insights from your data' },
  { id: 'tem-three', name: 'Template-three', desc: 'Showcase your creative work' },
  { id: 'tem-four', name: 'Template-four', desc: 'The future of online shopping' },
  { id: 'tem-five', name: 'Template-five', desc: 'Scale your business globally' }
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background elements */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Project <span className={styles.highlight}>Hub</span>
          </h1>
          <p className={styles.subtitle}>
            Explore the cutting-edge collection of modern templates.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((proj, index) => (
            <Link href={`/${proj.id}`} key={proj.id} className={styles.card} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2>{proj.name}</h2>
                <p>{proj.desc}</p>
                <div className={styles.arrow}>
                  <span>View Project</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
