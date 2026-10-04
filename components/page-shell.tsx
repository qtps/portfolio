'use client';

import { useEffect, type ReactNode } from 'react';
import { ContactSection } from './contact-section';
import { HeroSection } from './hero-section';

type PageShellProps = Readonly<{
  children: ReactNode;
  includeHero?: boolean;
  includeContact?: boolean;
  focusId?: string;
}>;

export function PageShell({
  children,
  includeHero = true,
  includeContact = true,
  focusId,
}: PageShellProps) {
  useEffect(() => {
    if (!focusId) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(focusId)?.scrollIntoView({
        block: 'start',
        behavior: 'auto',
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [focusId]);

  return (
    <>
      {includeHero && <HeroSection />}
      {children}
      {includeContact && <ContactSection />}
    </>
  );
}
