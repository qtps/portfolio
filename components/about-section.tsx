import { SectionTitle } from "./section-title";

export function AboutSection() {
  return (
    <section id="about" className="py-28">
      <SectionTitle eyebrow="About me" title="Creative Designer">
        I am a creative designer and developer focused on crafting memorable
        digital experiences with thoughtful design and clean code.
      </SectionTitle>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-ink">My approach</h3>
          <p className="mt-4 leading-8 text-gray-600">
            Every project starts with a conversation. I turn ideas into clear,
            expressive visual systems that people love to use.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-ink">What I do</h3>
          <p className="mt-4 leading-8 text-gray-600">
            Brand identity, UI/UX design, illustration and front-end development
            for ambitious people and teams.
          </p>
        </div>
      </div>
    </section>
  );
}
