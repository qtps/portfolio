import { SectionTitle } from "./section-title";

export function AboutSection() {
  return (
    <section id="about" className="py-28">
      <SectionTitle eyebrow="About me" title="Web Developer">
        I am a dedicated web developer focused on crafting fast, responsive, 
        and interactive digital experiences with modern web technologies and clean code.
      </SectionTitle>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-ink">My approach</h3>
          <p className="mt-4 leading-8 text-gray-600">
            Every project starts with understanding user needs. I turn complex ideas 
            into scalable, efficient, and user-friendly web solutions that deliver results.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-ink">What I do</h3>
          <p className="mt-4 leading-8 text-gray-600">
            Frontend development, full-stack web applications, smooth GSAP animations, 
            and API integrations for ambitious businesses and brands.
          </p>
        </div>
      </div>
    </section>
  );
}