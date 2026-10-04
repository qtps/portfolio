import { SectionNumber } from './section-number';
import { AnimatedHeading } from './animations/animated-heading';
import { AnimatedHeroImage } from './animations/animated-hero-image';
import { AnimatedStagger } from './animations/animated-stagger';

export function HeroSection() {
  const services = [
    [
      '01',
      'Frontend Development',
      'Building responsive and interactive user interfaces with modern web technologies.',
    ],
    [
      '02',
      'Backend & API Integration',
      'Developing robust backend systems and integrating APIs for seamless data flow.',
    ],
    [
      '03',
      'Full-Stack Solutions',
      'Creating complete web applications from the frontend to the backend.',
    ],
  ];
  return (
    <section
      id="home"
      className="relative flex min-h-auto flex-col justify-center overflow-hidden py-20"
    >
      <SectionNumber number="01" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center">
          <AnimatedHeroImage
            src="/images/banner-image.png"
            alt="Murad Hossain"
            className="mx-auto w-full max-w-lg"
          />
        </div>
        <div>
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
            Web Developer
          </span>
          <AnimatedHeading
            as="h1"
            className="text-ink mt-5 text-7xl leading-none font-bold tracking-tight md:text-9xl"
            animateOnLoad
            delay={0.45}
          >
            Murad
            <br />
            Hossain
          </AnimatedHeading>
        </div>
      </div>
      <AnimatedStagger
        className="relative z-10 mt-20 grid gap-8 md:grid-cols-4"
        delay={0.05}
        stagger={0}
        duration={0.45}
        distance={24}
        animateOnLoad
      >
        {services.map(([number, title, description]) => (
          <div key={number}>
            <span className="text-sm text-gray-500">{number}</span>
            <h3 className="text-ink mt-3 text-xl font-bold">{title}</h3>
            <p className="mt-3 text-gray-600">{description}</p>
          </div>
        ))}
        <div className="flex items-end">
          <a
            href="/portfolio"
            className="bg-ink hover:bg-coral w-full px-8 py-5 text-center font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            View my works
          </a>
        </div>
      </AnimatedStagger>
    </section>
  );
}
