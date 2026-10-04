import type { ReactNode } from 'react';
import { AnimatedHeading } from './animations/animated-heading';

type SectionTitleProps = Readonly<{
  eyebrow: string;
  title: string;
  children?: ReactNode;
}>;

export function SectionTitle({ eyebrow, title, children }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl">
      <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
        {eyebrow}
      </span>
      <AnimatedHeading className="text-ink mt-4 text-6xl leading-none font-bold tracking-tight md:text-8xl">
        {title}
      </AnimatedHeading>
      {children && (
        <AnimatedHeading
          as="p"
          className="mt-6 text-lg leading-8 text-gray-600"
          delay={0.15}
        >
          {children}
        </AnimatedHeading>
      )}
    </div>
  );
}
