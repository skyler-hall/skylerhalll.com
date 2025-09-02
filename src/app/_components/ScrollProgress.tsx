'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  // Set the path length once the component mounts and the ref is available
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      pathRef.current.style.strokeDasharray = `${length} ${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = position / documentHeight;
    
    if (pathRef.current) {
        const drawLength = pathLength * scrollPercentage;
        pathRef.current.style.strokeDashoffset = (pathLength - drawLength).toString();
    }
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    if (pathLength > 0) {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathLength]); // Rerun when pathLength is set

  return (
    <div className={styles.wavyContainer}>
      <svg width="30" height="100%" viewBox="0 0 30 1080" preserveAspectRatio="xMinYMin slice">
         <defs>
          <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="20%" stopColor="#b0b0b0" />
            <stop offset="50%" stopColor="#d0d0d0" />
            <stop offset="80%" stopColor="#a0a0a0" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
        </defs>
        {/* A simple wavy path that spans the full view height */}
        <path
          ref={pathRef}
          d="M 15,0 C -15,180 45,360 15,540 S -15,900 15,1080"
          stroke="url(#metallicGradient)"
          strokeWidth="3"
          fill="none"
          className={styles.wavyPath}
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;
