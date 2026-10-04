'use client';

import { AnimatedHeading } from './animations/animated-heading';
import { AnimatedStagger } from './animations/animated-stagger';

export function SinglePost() {
  return (
    <article className="py-24 md:py-32">
      <header className="mx-auto max-w-5xl">
        <div className="flex gap-5 text-xs text-gray-600">
          <span>▱ Web development</span>
          <span>◷ Developer notes</span>
        </div>
        <AnimatedHeading
          as="h1"
          className="text-ink mt-8 max-w-3xl text-5xl leading-tight font-bold tracking-tight md:text-7xl"
        >
          Planning a maintainable Next.js portfolio
        </AnimatedHeading>
        <img
          src="/images/portfolio-image-1.jpg"
          alt="Planning a maintainable Next.js portfolio"
          className="mt-10 aspect-[2.3/1] w-full object-cover"
        />
      </header>

      <AnimatedStagger className="mx-auto mt-12 max-w-5xl space-y-6 text-sm leading-7 text-gray-600">
        <p>
          A portfolio is more than a collection of screenshots. It should make
          your work easy to understand, show how you think, and give the right
          people a clear way to start a conversation.
        </p>
        <p>
          For that reason, I prefer a small set of reusable page and content
          primitives over a collection of one-off layouts. The result is easier
          to update as new projects, notes, and services are added.
        </p>
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-start">
          <div className="space-y-6">
            <p>
              The structure starts with a shared shell, a predictable navigation
              system, and components that can be composed on every route.
            </p>
            <h2 className="text-ink text-2xl font-bold">
              What makes the structure useful
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Content stays separate from layout and can be updated quickly.
              </li>
              <li>Responsive behavior is considered at the component level.</li>
              <li>
                Accessible states and clear interactions are part of the build.
              </li>
            </ul>
            <p>
              This approach also keeps the codebase ready for future work,
              whether that means adding a case study, a blog post, or a contact
              flow.
            </p>
          </div>
          <img
            src="/images/portfolio-image-2.jpg"
            alt="Article detail"
            className="w-full object-cover"
          />
        </div>
        <h2 className="text-ink text-2xl font-bold">Build for clarity first</h2>
        <p>
          Good visual design helps, but a fast, understandable, and maintainable
          experience is what makes a portfolio work over time.
        </p>
        <p>
          Every project deserves a structure that supports its content instead
          of hiding it behind unnecessary decoration.
        </p>
      </AnimatedStagger>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-between gap-4 border-t border-gray-200 pt-5 text-xs text-gray-600">
        <div className="flex gap-2">
          <span className="bg-gray-100 px-3 py-2">Next.js</span>
          <span className="bg-gray-100 px-3 py-2">React</span>
          <span className="bg-gray-100 px-3 py-2">Accessibility</span>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-2">SHARE:</span>
          <span className="bg-gray-100 px-3 py-2">Frontend</span>
          <span className="bg-gray-100 px-3 py-2">Performance</span>
          <span className="bg-gray-100 px-3 py-2">Components</span>
        </div>
      </div>

      <AnimatedStagger className="mx-auto mt-14 grid max-w-5xl grid-cols-2 border-y border-gray-200 py-5">
        <div>
          <span className="text-xs text-gray-500">Previous</span>
          <h3 className="text-ink mt-1 text-xl font-bold">
            Responsive UI patterns that scale
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500">Next</span>
          <h3 className="text-ink mt-1 text-xl font-bold">
            Making animation useful in product UI
          </h3>
        </div>
      </AnimatedStagger>

      <section className="mx-auto mt-12 max-w-5xl">
        <div className="flex gap-5 border-b border-gray-200 pb-7">
          <img
            src="/images/portfolio-thumbnail-4.jpg"
            alt="Murad Hossain"
            className="h-28 w-28 rounded-full object-cover"
          />
          <div>
            <h3 className="text-ink text-xl font-bold">Murad Hossain</h3>
            <p className="text-sm text-gray-500 italic">Web Developer</p>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              I build responsive interfaces and full-stack web experiences with
              a focus on clarity, performance, and maintainable code.
            </p>
          </div>
        </div>

        <h2 className="text-ink mt-12 text-2xl font-bold">Discussion</h2>
        <p className="mt-6 text-sm leading-6 text-gray-600">
          No discussion yet. Share your thoughts or ask a question about the
          approach described in this note.
        </p>

        <div className="mt-14">
          <h2 className="text-ink text-2xl font-bold">Leave a Comment</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="comment-message" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment-message"
              name="message"
              required
              rows={6}
              placeholder="Write your comment here *"
              className="focus:border-ink w-full border border-gray-300 p-4 outline-none"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="comment-name" className="sr-only">
                  Your full name
                </label>
                <input
                  id="comment-name"
                  name="name"
                  required
                  placeholder="Write your full name here *"
                  className="focus:border-ink w-full border border-gray-300 p-4 outline-none"
                />
              </div>
              <div>
                <label htmlFor="comment-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="comment-email"
                  name="email"
                  required
                  type="email"
                  placeholder="Write your e-mail address *"
                  className="focus:border-ink w-full border border-gray-300 p-4 outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-coral hover:bg-ink w-full py-4 font-bold text-white transition"
            >
              POST COMMENT
            </button>
          </form>
        </div>
      </section>
    </article>
  );
}
