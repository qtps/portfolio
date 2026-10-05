export type PortfolioItem = {
  slug: string;
  image: string;
  title: string;
  format: string;
  client: string;
  date: string;
  projectUrl: string;
  description: string;
  gallery: string[];
};
export type Skill = { name: string; value: number };

export const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['portfolio', 'Works'],
  ['contact', 'Contact'],
] as const;

export const pageLinks = [
  { label: 'Single Post', href: '/post/maintainable-nextjs-portfolio' },
  { label: 'Portfolio Masonry', href: '/portfolio-masonry' },
  { label: 'Contact', href: '/contact' },
  { label: 'My Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
] as const;

export const portfolio: PortfolioItem[] = [
  {
    slug: 'responsive-portfolio',
    image: 'port-item1.png',
    title: 'Comprehensive Digital Solutions',
    format: 'web',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: 'https://nexgen-theta-seven.vercel.app',
    description:
      'A comprehensive digital solutions approach that combines modern design with functional development.',
    gallery: [
      'portfolio-image-1.png',
      'portfolio-thumbnail-1.png',
      'portfolio-thumbnail-2.png',
    ],
  },
  {
    slug: 'product-dashboard',
    image: 'port-item2.png',
    title: 'Financial Future With Savi',
    format: 'web',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: 'https://savi-roan.vercel.app',
    description:
      'A financial dashboard concept that provides users with a clear overview of their financial health and future planning.',
    gallery: [
      'portfolio-image-2.png',
      'portfolio-thumbnail-3.png',
      'portfolio-thumbnail-4.png',
    ],
  },
  {
    slug: 'api-web-experience',
    image: 'port-item3.jpg',
    title: 'API-driven web experience',
    format: 'web',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description:
      'A full-stack direction combining a focused frontend with structured API and database integration.',
    gallery: [
      'portfolio-image-3.jpg',
      'portfolio-thumbnail-5.jpg',
      'portfolio-thumbnail-6.jpg',
    ],
  },
  {
    slug: 'motion-study',
    image: 'port-item1.jpg',
    title: 'Interaction and motion study',
    format: 'web',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: '#',
    description:
      'An interaction study exploring purposeful transitions and GSAP-powered motion for a more engaging web experience.',
    gallery: [
      'portfolio-image-4.jpg',
      'portfolio-thumbnail-7.jpg',
      'portfolio-thumbnail-8.jpg',
    ],
  },
  {
    slug: 'component-system',
    image: 'port-item2.jpg',
    title: 'Component system exploration',
    format: 'web',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description:
      'A reusable component direction for keeping layouts, spacing, and interface states consistent across pages.',
    gallery: [
      'portfolio-image-5.jpg',
      'portfolio-thumbnail-9.jpg',
      'portfolio-thumbnail-10.jpg',
    ],
  },
];

export const skills: Skill[] = [
  { name: 'React.js / Next.js', value: 90 },
  { name: 'JavaScript / TypeScript', value: 85 },
  { name: 'GSAP Animations / Tailwind CSS', value: 80 },
  { name: 'Node.js / Express.js', value: 95 },
  { name: 'PostgreSQL & MongoDB', value: 75 },
];
