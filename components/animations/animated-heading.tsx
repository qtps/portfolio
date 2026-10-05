'use client';

import {
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type AnimatedHeadingProps = Readonly<{
  as?: ElementType;
  children: ReactNode;
  className?: string;
  animateOnLoad?: boolean;
  delay?: number;
  replayOnScroll?: boolean;
}>;

export function AnimatedHeading({
  as: Tag = 'h2',
  children,
  className,
  animateOnLoad = false,
  delay = 0,
  replayOnScroll = false,
}: AnimatedHeadingProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const heading = wrapper?.firstElementChild;

    if (!wrapper || !heading) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const context = gsap.context(() => {
      const animation = gsap.fromTo(
        heading,
        { yPercent: 110, opacity: animateOnLoad ? 0 : 1 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: 'power4.out',
          scrollTrigger:
            replayOnScroll || !animateOnLoad
              ? {
                  trigger: wrapper,
                  start: 'top 88%',
                  toggleActions: replayOnScroll
                    ? 'restart none restart reset'
                    : 'play none none reset',
                }
              : undefined,
        },
      );

      return () => animation.kill();
    }, wrapper);

    return () => context.revert();
  }, [animateOnLoad, delay, replayOnScroll]);

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <Tag className={className}>{children}</Tag>
    </div>
  );
}
