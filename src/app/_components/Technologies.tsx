import styles from "./Technologies.module.css";

const Technologies = () => {
  const proficientSkills = ["Java", "React", "Python", "C++", "HTML", "CSS", "JavaScript", "Node.js", "Next.js", "Express", "Tailwind", "Git", "GitHub"];
  const familiarSkills = ["Firebase", "SQL", "Appian", "RESTful APIs", "AngularJS", "Flask", "Typescript"];

  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="section-container">
  <h2 className="section-heading">Technologies &amp; Skills</h2>
        <div className={styles.gridWrapper}>
          <div className={styles.card}>
            <h3 className={`${styles.subheading} text-neonBlue`}>Proficient</h3>
            <div className={styles.skillGroup}>
              {proficientSkills.map(skill => (
                <span key={skill} className={styles.badge}>{skill}</span>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={`${styles.subheading} text-neonPurple`}>Familiar</h3>
            <div className={styles.skillGroup}>
              {familiarSkills.map(skill => (
                <span key={skill} className={styles.badge}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
