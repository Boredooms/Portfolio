'use client';

import { useScrollStore } from '@/app/stores/scrollStore';
import { useProgress } from '@react-three/drei';
import { usePortalStore } from '@stores';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

const AwwardsBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const isPortalActive = usePortalStore((state) => !!state.activePortalId);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const { progress } = useProgress();

  const [startAnimation, setStartAnimation] = useState(false);
  const loaded = progress === 100;

  useEffect(() => {
    if (loaded) {
      gsap.to(badgeRef.current, {
        duration: 2,
        delay: 2,
        right: 0,
        onComplete: () => setStartAnimation(true),
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (isPortalActive) return;
    if (startAnimation && badgeRef.current) {
      gsap.to(badgeRef.current, {
        right: -scrollProgress * 1000,
        duration: 0,
        ease: 'power2.out',
      });
    }

    return () => {
      gsap.killTweensOf(badgeRef.current);
    }
  }, [startAnimation, scrollProgress]);

  useEffect(() => {
    if (!badgeRef.current) return;
    badgeRef.current.style.scale = isMobile ? '0.7' : '0.9';
  }, [isMobile]);

  return (
    <div
      id="devfolio-badge"
      ref={badgeRef}
      style={{
        position: 'fixed',
        zIndex: 999,
        transform: 'translateY(-50%)',
        transformOrigin: 'right top',
        top: '50%',
        right: -100,
      }}
    >
      <a href="https://devfolio.co/@DevarghoC" target="_blank" rel="noopener noreferrer">
        <svg width="53.08" height="171.358" viewBox="0 0 53.08 171.358">
          <path fill="#3770ff" d="M0 0h53.08v171.358H0z"></path>
          <g fill="white" transform="translate(11.54, 15) scale(0.497)">
            <path d="m60.3 36.4c0 15.6-11.7 28.3-26.5 29.6 0 0-19.1.5-25.4-.1-2.4-.3-4.4-1.8-5.3-4 .9.4 1.8.7 2.8.8 2.1.2 5.6.3 10.5.3 7.2 0 15.1-.2 15.1-.2h.1c7.9-.7 15.2-4.3 20.4-10.2 4.5-5 7.4-11.3 8.2-17.9.1.5.1 1.1.1 1.7z"/>
            <path d="m58 30c0 15.6-11.7 28.3-26.6 29.5 0 0-19.1.5-25.4-.1-3.4-.3-5.9-3.5-6-7.1l.1-45c.1-3.6 2.7-6.8 6.1-7.1 6.3-.5 25.4.1 25.4.1 14.8 1.3 26.4 14.1 26.4 29.7z"/>
          </g>
          <g fill="white" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="10" letterSpacing="0.05em" textAnchor="middle">
            <text x="26.54" y="70">D</text>
            <text x="26.54" y="83">E</text>
            <text x="26.54" y="96">V</text>
            <text x="26.54" y="109">F</text>
            <text x="26.54" y="122">O</text>
            <text x="26.54" y="135">L</text>
            <text x="26.54" y="148">I</text>
            <text x="26.54" y="161">O</text>
          </g>
        </svg>
      </a>
    </div>
  );
};

export default AwwardsBadge;