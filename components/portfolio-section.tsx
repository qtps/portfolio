import { portfolio } from '../utils/portfolio-data';
import { SectionTitle } from './section-title';
import { SectionNumber } from './section-number';
import { AnimatedStagger } from './animations/animated-stagger';
import { PortfolioCarousel } from './portfolio-carousel';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-28">
      <SectionNumber number="03" />
      <div className="relative z-10">
        <SectionTitle eyebrow="Some of my recent works" title="Portfolio">
          A selection of web interfaces, product experiences, and technical case
          studies built with modern frontend and full-stack tools.
        </SectionTitle>
        <AnimatedStagger>
          <PortfolioCarousel items={portfolio} />
        </AnimatedStagger>
      </div>
    </section>
  );
}
