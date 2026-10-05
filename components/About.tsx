import { AnimatedHeading } from './animations/animated-heading';
import { AnimatedStagger } from './animations/animated-stagger';
import { SectionNumber } from './section-number';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-gray-300 py-32"
    >
      <SectionNumber number="04" />
      <div className="relative z-10">
        <AnimatedStagger
          className="mb-10 flex items-center gap-4 text-sm tracking-[0.2em] text-gray-500 uppercase"
          animateOnLoad
        >
          <span className="bg-coral h-2 w-2 rounded-full" />
          <span>About me</span>
        </AnimatedStagger>

        <AnimatedHeading
          as="h2"
          className="text-ink max-w-5xl text-6xl leading-[0.92] font-bold tracking-tight md:text-9xl"
          delay={0.1}
        >
          I make the web
          <br />
          <span className="text-coral">worth exploring.</span>
        </AnimatedHeading>

        <div className="mt-20 grid gap-12 border-t border-gray-300 pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <AnimatedStagger className="space-y-8" delay={0.2}>
            <div>
              <p className="text-sm tracking-[0.15em] text-gray-500 uppercase">
                What I do
              </p>
              <p className="text-ink mt-3 max-w-xs text-xl leading-7 font-bold">
                Design and develop digital products for the modern web.
              </p>
            </div>
            <div>
              <p className="text-sm tracking-[0.15em] text-gray-500 uppercase">
                Focus
              </p>
              <p className="text-ink mt-3 max-w-xs text-xl leading-7 font-bold">
                Frontend development, full-stack solutions, and thoughtful UI.
              </p>
            </div>
          </AnimatedStagger>

          <div>
            <AnimatedHeading
              as="p"
              className="max-w-2xl text-xl leading-8 text-gray-600 md:text-2xl md:leading-9"
              delay={0.25}
            >
              I help turn complex ideas into clear, responsive, and reliable web
              experiences. From the first component to the final interaction, I
              care about the details that make a product feel simple and natural
              to use.
            </AnimatedHeading>
            <AnimatedStagger className="mt-10" delay={0.35} animateOnLoad>
              <a
                href="/contact"
                className="text-ink border-ink hover:bg-ink inline-flex border-b-2 px-1 pb-2 font-bold transition-colors hover:text-white"
              >
                Let&apos;s work together <span className="ml-3">↗</span>
              </a>
            </AnimatedStagger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
