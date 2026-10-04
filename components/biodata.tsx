type BiodataItem = {
  period: string;
  title: string;
  description?: string;
};

const education: BiodataItem[] = [
  {
    period: '2019-2023',
    title: 'Diploma in Computer Science and Engineering',
    description:
      'National Polytechnic Institute of Faridpur, Dhaka, Bangladesh.',
  },
  {
    period: '2024-Present',
    title: 'Bachelor of Science in Computer Science and Engineering',
    description:
      'Southeast University, Dhaka, Bangladesh. Focused on software development, algorithms, and system design.',
  },
];

const experience: BiodataItem[] = [
  {
    period: '01',
    title: 'Websites and landing pages',
    description:
      'Clear, responsive websites designed to communicate your product and turn visitors into customers.',
  },
  {
    period: '02',
    title: 'Product UI development',
    description:
      'Reusable components and polished interactions for dashboards, SaaS products, and digital services.',
  },
];

const interests: BiodataItem[] = [
  {
    period: 'Always learning',
    title: 'Performance and accessibility',
    description:
      'Making interfaces faster, more inclusive, and more pleasant to use on every screen.',
  },
  {
    period: 'Beyond the UI',
    title: 'Creative coding and animation',
    description:
      'Exploring GSAP, interaction design, and visual details that give products a memorable feel.',
  },
];

const references: BiodataItem[] = [
  {
    period: 'How I work',
    title: 'Clear communication',
    description:
      'I keep requirements, progress, and decisions visible throughout the project.',
  },
  {
    period: 'Project principle',
    title: 'Useful before flashy',
    description:
      'Every visual or technical choice should support the user and the product goal.',
  },
];

function BiodataColumn({
  title,
  items,
}: Readonly<{ title: string; items: BiodataItem[] }>) {
  return (
    <AnimatedStagger className="relative z-10 space-y-8" stagger={0.14}>
      {title === 'Focus' && (
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
          Biodata
        </span>
      )}
      <h2 className="text-ink text-5xl leading-none font-bold tracking-tight md:text-6xl">
        {title}
      </h2>
      {items.map(({ period, title: itemTitle, description }) => (
        <article key={`${period}-${itemTitle}`}>
          <p className="text-sm text-gray-500">{period}</p>
          <h3 className="text-ink mt-2 max-w-md text-2xl leading-tight font-bold">
            {itemTitle}
          </h3>
          {description && (
            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              {description}
            </p>
          )}
        </article>
      ))}
    </AnimatedStagger>
  );
}

export function Biodata() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="relative z-10 grid gap-20 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
        <BiodataColumn title="Education" items={education} />
        <BiodataColumn title="Experience" items={experience} />
        <BiodataColumn title="Interests" items={interests} />
        <BiodataColumn title="References" items={references} />
      </div>
    </div>
  );
}
import { AnimatedStagger } from './animations/animated-stagger';
