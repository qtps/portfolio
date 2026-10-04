import { notFound } from 'next/navigation';
import { AnimatedHeading } from '../../../components/animations/animated-heading';
import { AnimatedStagger } from '../../../components/animations/animated-stagger';
import { PageShell } from '../../../components/page-shell';
import { portfolio } from '../../../utils/portfolio-data';

type PortfolioDetailPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export function generateStaticParams() {
  return portfolio.map(({ slug }) => ({ slug }));
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const item = portfolio.find((portfolioItem) => portfolioItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <PageShell focusId="portfolio-detail">
      <section id="portfolio-detail" className="py-24 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
              Biodata
            </span>
            <AnimatedHeading
              as="h1"
              className="text-ink mt-4 text-5xl leading-none font-bold tracking-tight md:text-7xl"
            >
              {item.title}
            </AnimatedHeading>
          </div>
          <AnimatedHeading
            as="p"
            className="max-w-xl text-lg leading-8 text-gray-600"
            animateOnLoad
            delay={0.2}
          >
            {item.description}
          </AnimatedHeading>
        </div>

        <AnimatedStagger className="mb-16 grid gap-8 border-y border-gray-300 py-6 sm:grid-cols-3">
          <div>
            <p className="text-ink font-bold">Client</p>
            <p className="mt-2 text-sm text-gray-600">{item.client}</p>
          </div>
          <div>
            <p className="text-ink font-bold">Date</p>
            <p className="mt-2 text-sm text-gray-600">{item.date}</p>
          </div>
          <div>
            <p className="text-ink font-bold">Project link</p>
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-coral mt-2 block text-sm break-all text-gray-600 transition"
            >
              {item.projectUrl}
            </a>
          </div>
        </AnimatedStagger>

        <AnimatedStagger className="grid gap-8 md:grid-cols-2">
          {item.gallery.map((image, index) => (
            <figure
              className={
                index === item.gallery.length - 1 ? 'md:col-span-2' : ''
              }
              key={image}
            >
              <img
                src={`/images/${image}`}
                alt={`${item.title} preview ${index + 1}`}
                className="h-full max-h-168 w-full object-cover"
              />
              <figcaption className="mt-3 text-sm text-gray-600">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </AnimatedStagger>
      </section>
    </PageShell>
  );
}
