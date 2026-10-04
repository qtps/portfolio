import { skills } from "../lib/portfolio-data";
import { SectionTitle } from "./section-title";

export function ExperienceSection() {
  const details = [
    ["Age", "22"],
    ["Residence", "United States"],
    ["Address", "A City, Florida, 32104"],
    ["E-mail", "hello@yourwebsite.com"],
    ["Phone", "+2345 344 678 563"],
  ];
  return (
    <section id="experience" className="py-28">
      <SectionTitle eyebrow="Introduction" title="Experienced Creative mind">
        Curious, collaborative and always looking for a better way to make
        things.
      </SectionTitle>
      <div className="reveal grid gap-16 md:grid-cols-2">
        <table className="w-full text-left">
          <tbody>
            {details.map(([key, value]) => (
              <tr className="border-b border-gray-300" key={key}>
                <th className="py-4 font-bold text-ink">{key}</th>
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
                  className="skill-progress h-full origin-left bg-coral"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
