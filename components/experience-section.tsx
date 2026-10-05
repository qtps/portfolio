import { skills } from '../utils/portfolio-data';
import { SectionTitle } from './section-title';
import { SectionNumber } from './section-number';
import { AnimatedStagger } from './animations/animated-stagger';

export function ExperienceSection() {
  const details = [
    ['Role', 'Web Developer'],
    ['Based in', 'Dhaka, Bangladesh'],
    ['Speciality', 'Frontend & full-stack development'],
    ['E-mail', 'murad8617@gmail.com'],
    ['Availability', 'Open to selected freelance projects'],
  ];
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <SectionNumber number="02" />
      <div className="relative z-10">
        <SectionTitle
          eyebrow="Experience & skills"
          title="Building for the web"
        >
          I combine product thinking, clean code, and motion to create digital
          experiences that are useful, reliable, and easy to use.
        </SectionTitle>
        <AnimatedStagger className="reveal grid gap-16 md:grid-cols-2">
          <table className="w-full text-left">
            <tbody>
              {details.map(([key, value]) => (
                <tr className="border-b border-gray-300" key={key}>
                  <th className="text-ink py-4 font-bold">{key}</th>
                  <td className="py-4 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="space-y-7">
            {skills.map(({ name, value }) => (
              <div key={name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{name}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-1 bg-gray-300">
                  <div
                    className="skill-progress bg-coral h-full origin-left"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimatedStagger>
      </div>
    </section>
  );
}
