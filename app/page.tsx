import { ContactSection } from '../components/contact-section';
import { ExperienceSection } from '../components/experience-section';
import { HeroSection } from '../components/hero-section';
import { PortfolioSection } from '../components/portfolio-section';
import Biodata from '../components/Biodata';
import About from '../components/About';

export default function Page() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <PortfolioSection />
      <About />
      <Biodata />
      <ContactSection />
    </>
  );
}
