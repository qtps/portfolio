import { SiteHeader } from "./site-header";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ExperienceSection } from "./experience-section";
import { PortfolioSection } from "./portfolio-section";
import { ContactSection } from "./contact-section";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="lg:ml-[20%]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
