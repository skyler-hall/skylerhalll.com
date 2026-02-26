import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Skyler Hall
            </h1>
            <div className={styles.smallTitle}>
              <span className={styles.gradient}>Fullstack Developer / Inventor</span>
            </div>
            <p className={styles.subtitle}>
              Computer Science student at Florida International 
              University, graduating December 2026.
            </p>
            <p className={styles.subtitle}>
              Student who enjoys creating fun and engaging projects that contribute to social good,
              apart of Google Tech Exchange, Management Leadership for Tomorrow, Colorstack, and Codepath.
              Passionate about impactful software and diverse teams. Outside of work he enjoys watching video essays,
              going to the gym, and traveling!
            </p>
          </div>

          <div className={styles.photoWrapper}>
            <img src="/Headshot.png" alt="Skyler Hall headshot" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}
