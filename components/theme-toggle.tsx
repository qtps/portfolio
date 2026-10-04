'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const knobRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  useLayoutEffect(() => {
    const toggle = toggleRef.current;
    const knob = knobRef.current;

    if (!toggle || !knob) {
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const duration = reducedMotion ? 0 : 0.45;
    const knobAnimation = gsap.to(knob, {
      x: darkMode ? 30 : 0,
      rotate: darkMode ? 180 : 0,
      duration,
      ease: 'back.out(1.7)',
      overwrite: 'auto',
    });

    gsap.to(toggle, {
      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
      borderColor: darkMode ? '#374151' : '#e5e7eb',
      duration,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    return () => {
      knobAnimation.kill();
    };
  }, [darkMode]);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;
    document.documentElement.classList.toggle('dark', nextDarkMode);
    localStorage.setItem('portfolio-theme', nextDarkMode ? 'dark' : 'light');
    setDarkMode(nextDarkMode);
  };

  return (
    <button
      ref={toggleRef}
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={darkMode}
      className="fixed top-6 right-24 z-50 flex h-10 w-18 items-center rounded-full border bg-[#ffffff] p-1 shadow-[0_8px_24px_rgba(17,17,17,0.12)] transition-shadow hover:shadow-[0_10px_28px_rgba(255,83,74,0.25)] lg:right-8"
    >
      <span
        ref={knobRef}
        aria-hidden="true"
        className="bg-coral relative flex h-8 w-8 items-center justify-center rounded-full text-sm text-white shadow-md"
      >
        <span className={darkMode ? 'opacity-0' : 'opacity-100'}>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </span>
        <span className={darkMode ? 'opacity-100' : 'opacity-0'}>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M21 15.5A9 9 0 0 1 8.5 3 9 9 0 1 0 21 15.5Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
