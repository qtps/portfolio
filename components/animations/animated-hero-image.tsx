'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

type AnimatedHeroImageProps = Readonly<{
  src: string;
  alt: string;
  className?: string;
}>;

export function AnimatedHeroImage({
  src,
  alt,
  className,
}: AnimatedHeroImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const image = imageRef.current;

    if (
      !image ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const animation = gsap.fromTo(
      image,
      { xPercent: -110, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1.25,
        delay: 0.1,
        ease: 'power3.out',
      },
    );

    return () => {
      animation.kill();
    };
  }, []);

  return <img ref={imageRef} src={src} alt={alt} className={className} />;
}
