'use client';

import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import type { PortfolioItem } from '../utils/portfolio-data';

type MasonryItem = PortfolioItem & {
  category: 'Frontend' | 'UI/UX' | 'Full-stack' | 'Interaction';
};

const masonryItems: MasonryItem[] = [
  {
    slug: 'masonry-portfolio-ui',
    image: 'port-item1.jpg',
    title: 'Portfolio interface',
    format: 'UI',
    category: 'UI/UX',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-dashboard',
    image: 'port-item2.jpg',
    title: 'Product dashboard',
    format: 'UI',
    category: 'Frontend',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-api-product',
    image: 'port-item3.jpg',
    title: 'API product flow',
    format: 'Web',
    category: 'Full-stack',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-interaction',
    image: 'port-item4.jpg',
    title: 'Interactive landing page',
    format: 'Web',
    category: 'Interaction',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-ui-system',
    image: 'portfolio-thumbnail-9.jpg',
    title: 'UI system study',
    format: 'UI',
    category: 'UI/UX',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-component-library',
    image: 'portfolio-thumbnail-10.jpg',
    title: 'Component library',
    format: 'UI',
    category: 'Frontend',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-motion',
    image: 'portfolio-thumbnail-11.jpg',
    title: 'Motion and transitions',
    format: 'Web',
    category: 'Interaction',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-app-flow',
    image: 'portfolio-thumbnail-12.jpg',
    title: 'Application user flow',
    format: 'Web',
    category: 'Full-stack',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-responsive',
    image: 'port-item1.jpg',
    title: 'Responsive layout',
    format: 'UI',
    category: 'Frontend',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-design-tokens',
    image: 'port-item2.jpg',
    title: 'Design tokens',
    format: 'UI',
    category: 'UI/UX',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-product-campaign',
    image: 'port-item4.jpg',
    title: 'Product launch page',
    format: 'Web',
    category: 'Interaction',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-web-app',
    image: 'port-item3.jpg',
    title: 'Web app concept',
    format: 'Web',
    category: 'Full-stack',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-frontend',
    image: 'portfolio-thumbnail-1.jpg',
    title: 'Frontend case study',
    format: 'UI',
    category: 'Frontend',
    client: 'Personal project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
  {
    slug: 'masonry-product-ui',
    image: 'portfolio-thumbnail-2.jpg',
    title: 'Product UI direction',
    format: 'UI',
    category: 'UI/UX',
    client: 'Concept project',
    date: 'Recent',
    projectUrl: '#',
    description: '',
    gallery: [],
  },
];

const categories = ['Frontend', 'UI/UX', 'Full-stack', 'Interaction'] as const;

export function PortfolioMasonry() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [zoomedImage, setZoomedImage] = useState<MasonryItem | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? masonryItems
        : masonryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  useLayoutEffect(() => {
    if (!gridRef.current) {
      return;
    }

    const cards = Array.from(gridRef.current.children);
    const animation = gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 40, scale: 0.9, rotation: -2 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'back.out(1.4)',
      },
    );

    return () => {
      animation.kill();
    };
  }, [filteredItems]);

  useLayoutEffect(() => {
    if (!zoomedImage) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [zoomedImage]);

  return (
    <main className="min-h-screen py-24 md:py-32">
      <header className="mx-auto max-w-xl text-center">
        <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">
          Recent works
        </span>
        <h1 className="text-ink mt-4 text-6xl leading-none font-bold tracking-tight md:text-8xl">
          Portfolio
        </h1>
        <p className="mt-7 text-sm leading-6 text-gray-600">
          Selected interface explorations and web-development case studies,
          organised by the kind of problem they solve.
        </p>
      </header>

      <nav className="my-12 flex flex-wrap justify-center gap-6 text-xs text-gray-600 uppercase">
        <button
          type="button"
          onClick={() => setActiveCategory('All')}
          className={
            activeCategory === 'All' ? 'text-coral' : 'hover:text-coral'
          }
        >
          All
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category ? 'text-coral' : 'hover:text-coral'
            }
          >
            {category}
          </button>
        ))}
      </nav>

      <div
        ref={gridRef}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
      >
        {filteredItems.map((item) => (
          <article key={item.slug} className="overflow-hidden">
            <button
              type="button"
              className="group block w-full cursor-zoom-in text-left"
              onClick={() => setZoomedImage(item)}
              aria-label={`Zoom ${item.title}`}
            >
              <img
                src={`/images/${item.image}`}
                alt={item.title}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          </article>
        ))}
      </div>

      {zoomedImage && (
        <dialog
          open
          className="fixed inset-0 z-60 m-0 flex h-full w-full items-center justify-center overflow-auto border-0 bg-black/90 p-6 md:p-10"
          aria-label={`${zoomedImage.title} enlarged preview`}
          onCancel={() => setZoomedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setZoomedImage(null)}
          >
            ×
          </button>
          <img
            src={`/images/${zoomedImage.image}`}
            alt={zoomedImage.title}
            className="max-h-[92vh] max-w-[92vw] object-contain"
          />
        </dialog>
      )}
    </main>
  );
}
