import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
  <Link href="#hero" className={styles.brand}>
          Home
        </Link>
        <div className={styles.links}>
          <Link href="#skills" className={styles.navLink}>Skills</Link>
          <Link href="#experience" className={styles.navLink}>Experience</Link>
          <Link href="#projects" className={styles.navLink}>Projects</Link>
          <div className={styles.iconContainer}>
            <a href="https://github.com/skyler-hall" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.icon}>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.306.762-1.606-2.665-.3-5.467-1.332-5.467-5.932 0-1.312.468-2.382 1.235-3.222-.123-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.044.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.654.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.222 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.823.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/skylerhalll/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.icon}>
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24 108 0 84 0 56.65 0 25.38 25.38 0 56.65 0S113.31 25.38 113.31 56.65c0 27.35-24 51.35-59.47 51.35zM447.9 448h-92.7V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.9 13.5-2.9 21.4V448h-92.7V148.9h92.7v40.8c12.3-19 34.3-46.3 83.5-46.3 61 0 106.8 39.9 106.8 125.7V448z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
