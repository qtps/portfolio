'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatedHeading } from './animations/animated-heading';
import { AnimatedStagger } from './animations/animated-stagger';

const blogPosts = [
  {
    image: 'portfolio-image-1.jpg',
    title: 'Planning a maintainable Next.js portfolio',
    category: 'Frontend',
    excerpt:
      'A practical look at structuring pages, shared components, and content so a portfolio can grow without becoming difficult to maintain.',
  },
  {
    image: 'portfolio-image-2.jpg',
    title: 'Designing responsive interfaces from the start',
    category: 'UI engineering',
    excerpt:
      'Why responsive layouts should be part of the design and development process from the first component, not a final adjustment.',
  },
  {
    image: 'portfolio-image-3.jpg',
    title: 'Making animations useful with GSAP',
    category: 'Interaction',
    excerpt:
      'Using motion to guide attention, communicate state, and make an interface feel intentional without sacrificing performance.',
  },
  {
    image: 'portfolio-image-4.jpg',
    title: 'A practical approach to accessible forms',
    category: 'Accessibility',
    excerpt:
      'Small decisions around labels, focus states, validation, and feedback can make forms easier for everyone to complete.',
  },
  {
    image: 'portfolio-image-5.jpg',
    title: 'Choosing the right data flow for a web app',
    category: 'Full-stack',
    excerpt:
      'A concise guide to keeping client state, server data, and API responsibilities clear as an application grows.',
  },
  {
    image: 'portfolio-thumbnail-1.jpg',
    title: 'Frontend performance details that matter',
    category: 'Performance',
    excerpt:
      'Practical improvements that help users reach useful content faster, from image handling to component boundaries.',
  },
  {
    image: 'portfolio-thumbnail-2.jpg',
    title: 'Turning a design into reusable components',
    category: 'React',
    excerpt:
      'How consistent naming, composition, and spacing rules make a React codebase easier to extend.',
  },
  {
    image: 'portfolio-thumbnail-3.jpg',
    title: 'What makes a good developer handoff',
    category: 'Workflow',
    excerpt:
      'The notes, states, and decisions that keep design and development aligned from the first screen to launch.',
  },
];

const pageSize = 4;
const totalPages = Math.ceil(blogPosts.length / pageSize);

function getPaginationItems(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const items: Array<number | 'ellipsis-left' | 'ellipsis-right'> = [1];

  if (currentPage > 4) {
    items.push('ellipsis-left');
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let page = start; page <= end; page += 1) {
    items.push(page);
  }

  if (currentPage < totalPages - 3) {
    items.push('ellipsis-right');
  }

  items.push(totalPages);
  return items;
}

export function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageOffset = (currentPage - 1) * pageSize;
  const pagePosts = blogPosts
    .slice(pageOffset, pageOffset + pageSize)
    .map((post, index) => ({
      ...post,
      key: `${currentPage}-${index}-${post.image}`,
    }));
  const paginationItems = getPaginationItems(currentPage, totalPages);

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen py-24 md:py-32">
      <header className="mx-auto max-w-xl text-center">
        <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">
          Recent posts
        </span>
        <AnimatedHeading
          as="h1"
          className="text-ink mt-4 text-6xl leading-none font-bold tracking-tight md:text-8xl"
        >
          Developer Notes
        </AnimatedHeading>
        <p className="mt-7 text-sm leading-6 text-gray-600">
          Notes on frontend development, product interfaces, performance,
          accessibility, and building better experiences for the web.
        </p>
      </header>

      <AnimatedStagger
        key={currentPage}
        className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-14 md:grid-cols-2"
        stagger={0.1}
      >
        {pagePosts.map((post) => (
          <article key={post.key}>
            <div className="flex gap-6 text-xs text-gray-600">
              <span>▱ {post.category}</span>
              <span>◷ Web development</span>
            </div>
            <img
              src={`/images/${post.image}`}
              alt={post.title}
              className="mt-4 aspect-1.75/1 w-full object-cover"
            />
            <h2 className="text-ink mt-4 text-2xl leading-tight font-bold">
              {post.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {post.excerpt}
            </p>
            <Link
              href="/post/maintainable-nextjs-portfolio"
              className="text-ink hover:text-coral mt-4 inline-block text-sm underline underline-offset-4 transition"
            >
              Read More
            </Link>
          </article>
        ))}
      </AnimatedStagger>

      <nav
        className="mt-16 flex items-center justify-center gap-2 text-sm"
        aria-label="Blog pagination"
      >
        <button
          type="button"
          aria-label="Previous blog page"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
          className="text-ink hover:text-coral flex h-8 min-w-8 items-center justify-center px-2 transition disabled:cursor-not-allowed disabled:opacity-30"
        >
          ←
        </button>
        {paginationItems.map((item) =>
          typeof item === 'string' ? (
            <span
              className="flex h-8 w-8 items-center justify-center text-gray-400"
              key={item}
            >
              …
            </span>
          ) : (
            <button
              type="button"
              key={item}
              aria-current={currentPage === item ? 'page' : undefined}
              onClick={() => changePage(item)}
              className={`flex h-8 min-w-8 items-center justify-center px-2 ${
                currentPage === item
                  ? 'bg-ink text-white'
                  : 'text-ink hover:text-coral transition'
              }`}
            >
              {item}
            </button>
          ),
        )}
        <button
          type="button"
          aria-label="Next blog page"
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
          className="text-ink hover:text-coral flex h-8 min-w-8 items-center justify-center px-2 transition disabled:cursor-not-allowed disabled:opacity-30"
        >
          →
        </button>
      </nav>
    </main>
  );
}
