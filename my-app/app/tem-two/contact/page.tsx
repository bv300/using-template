import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Contact</p>
      <h1 className={styles.title}>
        Have a good problem?
      </h1>
      <p className={styles.copy}>
        Tell us what you are working on and where you want to go.
      </p>
      <form className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            type="email"
            required
            className={styles.field}
          />
        </label>
        <label className={styles.label}>
          Message
          <textarea
            required
            rows={5}
            className={styles.field}
          />
        </label>
        <button
          type="submit"
          className={styles.button}
        >
          Send message
        </button>
      </form>
    </section>
  );
}
