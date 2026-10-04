import { AnimatedHeading } from './animations/animated-heading';
import { AnimatedStagger } from './animations/animated-stagger';

const services = [
  ['portfolio-thumbnail-1.jpg', 'Frontend development', 'React / Next.js'],
  ['portfolio-thumbnail-2.jpg', 'Responsive websites', 'Design to production'],
  [
    'portfolio-thumbnail-3.jpg',
    'Full-stack applications',
    'APIs and databases',
  ],
  ['portfolio-thumbnail-4.jpg', 'Interactive experiences', 'GSAP and motion'],
  [
    'portfolio-thumbnail-5.jpg',
    'Performance improvements',
    'Faster user journeys',
  ],
  ['portfolio-thumbnail-6.jpg', 'Ongoing support', 'Iteration and maintenance'],
] as const;

export function TeamSection() {
  return (
    <section className="min-h-screen py-24 md:py-32">
      <div className="mb-14">
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
          What I can help with
        </span>
        <AnimatedHeading
          as="h1"
          className="text-ink mt-4 text-6xl leading-none font-bold tracking-tight md:text-8xl"
        >
          Web development services
        </AnimatedHeading>
      </div>

      <AnimatedStagger className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([image, name, role]) => (
          <article key={name}>
            <div className="aspect-3/4 overflow-hidden bg-gray-200">
              <img
                src={`/images/${image}`}
                alt={`${name} service`}
                className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
            <p className="text-ink mt-3 text-xs">
              {name} <span className="text-gray-500">— {role}</span>
            </p>
          </article>
        ))}
      </AnimatedStagger>
    </section>
  );
}
