import { PortfolioSection } from '../../components/portfolio-section';
import { PageShell } from '../../components/page-shell';

export default function PortfolioPage() {
  return (
    <PageShell focusId="portfolio">
      <PortfolioSection />
    </PageShell>
  );
}
