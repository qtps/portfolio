import { AboutSection } from '../../components/about-section';
import { PageShell } from '../../components/page-shell';

export default function AboutPage() {
  return (
    <PageShell focusId="about">
      <AboutSection />
    </PageShell>
  );
}
