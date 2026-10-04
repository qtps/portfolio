import { SectionTitle } from './section-title';
import { SectionNumber } from './section-number';
import { AnimatedStagger } from './animations/animated-stagger';

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <SectionNumber number="02" />
      <div className="relative z-10">
        <SectionTitle eyebrow="About me" title="Web Developer">
          I am a web developer who builds fast, responsive, and maintainable
          digital products with modern JavaScript technologies and thoughtful
          user experiences.
        </SectionTitle>
        <AnimatedStagger className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-ink text-2xl font-bold">My approach</h3>
            <p className="mt-4 leading-8 text-gray-600">
              I start by understanding the product, its users, and the outcome
              it needs to achieve. Then I turn that understanding into clear,
              scalable, and accessible interfaces.
            </p>
          </div>
          <div>
            <h3 className="text-ink text-2xl font-bold">What I do</h3>
            <p className="mt-4 leading-8 text-gray-600">
              I work across frontend development, full-stack applications, API
              integrations, performance improvements, and smooth GSAP
              interactions.
            </p>
          </div>
        </AnimatedStagger>
      </div>
    </section>
  );
}
