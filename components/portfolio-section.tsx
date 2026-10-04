import { portfolio } from "../lib/portfolio-data";
import { SectionTitle } from "./section-title";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28">
      <SectionTitle eyebrow="Some of my recent works" title="Portfolio">
        A selection of recent work across branding, digital products and
        illustration.
      </SectionTitle>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <article
            className="portfolio-card reveal overflow-hidden"
            key={`${item.image}-${item.title}-${item.format}`}
          >
            <div className="overflow-hidden">
              <a href="#contact">
                <img
                  src={`/images/${item.image}`}
                  alt={item.title}
                  className="aspect-[4/5] w-full object-cover"
                />
              </a>
            </div>
            <div className="flex items-center justify-between gap-3 pt-4">
              <span className="text-sm font-bold capitalize text-ink">
                {item.title}
              </span>
              <span className="bg-coral px-2 py-1 text-xs uppercase text-white">
                {item.format}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
