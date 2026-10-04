import { about as About } from '../../components/about';
import { PageShell } from '../../components/page-shell';

export default function AboutPage() {
  return (
    <PageShell focusId="about">
      <About />
    </PageShell>
  );
}
