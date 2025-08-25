import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>
            </h1>
            <h1 className={styles.smallTitle}>
              <span className={styles.gradient}>Fullstack Developer / Inventor</span>
            </h1>
            <p className={styles.subtitle}>
              Computer Science student at Florida International University (Dec 2026) with a passion for building beautiful, functional, and user-centric web applications.
            </p>
          </div>

          <div className={styles.photoWrapper}>
            <img src="/Headshot.png" alt="Skyler Hall headshot" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
