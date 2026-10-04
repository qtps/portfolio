import { about as About } from '../components/about';
import { ContactSection } from '../components/contact-section';
import { ExperienceSection } from '../components/experience-section';
import { HeroSection } from '../components/hero-section';
import { PortfolioSection } from '../components/portfolio-section';

export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
