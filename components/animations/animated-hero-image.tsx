'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type AnimatedHeroImageProps = Readonly<{
  src: string;
  alt: string;
  className?: string;
  replayOnScroll?: boolean;
}>;

export function AnimatedHeroImage({
  src,
  alt,
  className,
  replayOnScroll = false,
}: AnimatedHeroImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const image = imageRef.current;

    if (!image) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const animation = gsap.fromTo(
        image,
        { xPercent: -110, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.25,
          delay: 0.1,
          ease: 'power3.out',
          ...(replayOnScroll
            ? {
                scrollTrigger: {
                  trigger: image,
                  start: 'top 88%',
                  toggleActions: 'restart none restart reset',
                },
              }
            : {}),
        },
      );

      return () => animation.kill();
    }, image);

    return () => context.revert();
  }, [replayOnScroll]);

  return <img ref={imageRef} src={src} alt={alt} className={className} />;
}
