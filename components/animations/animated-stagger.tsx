'use client';

import {
  Children,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type AnimatedStaggerProps = Readonly<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  distance?: number;
  animateOnLoad?: boolean;
}>;

export function AnimatedStagger({
  children,
  className,
  style,
  delay = 0,
  stagger = 0.12,
  duration = 0.75,
  distance = 32,
  animateOnLoad = false,
}: AnimatedStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (
      !container ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const items = Array.from(container.children);
    if (!items.length) {
      return;
    }

    const context = gsap.context(() => {
      gsap.set(items, {
        y: distance,
        autoAlpha: 0,
        force3D: true,
      });

      const animation = gsap.to(items, {
        y: 0,
        autoAlpha: 1,
        duration,
        delay,
        stagger,
        ease: 'power2.out',
        overwrite: 'auto',
        ...(animateOnLoad
          ? {}
          : {
              scrollTrigger: {
                trigger: container,
                start: 'top 86%',
                toggleActions: 'play none none reset',
                invalidateOnRefresh: true,
              },
            }),
      });

      if (!animateOnLoad) {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      }

      return () => {
        animation.kill();
      };
    }, container);

    return () => context.revert();
  }, [animateOnLoad, delay, distance, duration, stagger]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {Children.map(children, (child) => child)}
    </div>
  );
}
