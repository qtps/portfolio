export type PortfolioItem = { image: string; title: string; format: string };
export type Skill = { name: string; value: number };

export const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["experience", "Experience"],
  ["portfolio", "Works"],
  ["contact", "Contact"],
] as const;

export const portfolio: PortfolioItem[] = [
  { image: "port-item1.jpg", title: "Nostalgia portrait copy", format: "svg" },
  { image: "port-item2.jpg", title: "Workaholic city design", format: "svg" },
  { image: "port-item3.jpg", title: "Zoo keeper envelope", format: "psd" },
  { image: "port-item1.jpg", title: "Nostalgia portrait", format: "png" },
  { image: "port-item2.jpg", title: "Nostalgia portrait copy", format: "svg" },
];

export const skills: Skill[] = [
  { name: "Adobe Photoshop", value: 90 },
  { name: "Adobe Illustrator", value: 75 },
  { name: "Figma", value: 80 },
  { name: "Adobe After Effect", value: 70 },
  { name: "Photography", value: 95 },
];

export const faq = [
  [
    "What experience do you have in my industry?",
    "I work with a wide range of clients and bring a flexible, research-led approach to every industry.",
  ],
  [
    "How many clients do you typically work with at once?",
    "I keep a focused client roster so every project gets the attention and care it deserves.",
  ],
  [
    "How do you charge for your services?",
    "Projects are scoped individually based on goals, timeline and deliverables.",
  ],
] as const;
