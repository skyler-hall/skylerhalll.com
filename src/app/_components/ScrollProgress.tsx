'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (position / documentHeight);
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drips = [
    { size: 30, speed: 1.1 },
    { size: 25, speed: 1.3 },
    { size: 20, speed: 1.5 },
    { size: 35, speed: 0.9 },
    { size: 28, speed: 1.2 },
  ];

  return (
    <div className={styles.gooContainer}>
      {drips.map((drip, index) => (
        <div
          key={index}
          className={styles.drip}
          style={{
            width: `${drip.size}px`,
            height: `${drip.size}px`,
            top: `calc(${scrollTop * 100 * drip.speed}% - ${drip.size}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default ScrollProgress;
