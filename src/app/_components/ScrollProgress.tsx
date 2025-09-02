'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (position / documentHeight) * 100;
    setScroll(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.scrollContainerLeft}>
        <div className={styles.scrollProgress} style={{ height: `${scroll}%` }}></div>
      </div>
      <div className={styles.scrollContainerRight}>
        <div className={styles.scrollProgress} style={{ height: `${scroll}%` }}></div>
      </div>
    </>
  );
};

export default ScrollProgress;
