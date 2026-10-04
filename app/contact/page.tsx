import { ContactSection } from '../../components/contact-section';
import { PageShell } from '../../components/page-shell';

export default function ContactPage() {
  return (
    <PageShell includeHero={false} includeContact={false}>
      <ContactSection />
    </PageShell>
  );
}
