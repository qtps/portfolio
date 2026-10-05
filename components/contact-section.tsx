'use client';

import { useLayoutEffect, useRef, useState, type SubmitEvent } from 'react';
import gsap from 'gsap';
import { SectionTitle } from './section-title';
import { SectionNumber } from './section-number';
import { AnimatedStagger } from './animations/animated-stagger';

// FAQ data
const faqs = [
  {
    question: 'What web development technologies do you specialize in?',
    answer:
      'I specialize in modern frontend and backend technologies including React, Next.js, JavaScript/TypeScript, Tailwind CSS, GSAP for animations, and Node.js with database integrations.',
  },
  {
    question: 'How long does a typical website project take to complete?',
    answer:
      'Timeline depends on project complexity. A landing page usually takes 3–5 days, while a full-stack web application may take 2 to 4 weeks from design to deployment.',
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer:
      'Yes, I provide post-launch technical support, performance optimization, and maintenance to keep your web application running smoothly.',
  },
];

type FaqItemProps = Readonly<{
  item: (typeof faqs)[number];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}>;

function FaqItem({ item, index, isActive, onToggle }: FaqItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const answer = answerRef.current;
    if (!answer) {
      return;
    }

    const animation = isActive
      ? gsap.fromTo(
          answer,
          { height: 0, opacity: 0 },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
          },
        )
      : gsap.to(answer, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: 'power2.inOut',
        });

    return () => {
      animation.kill();
    };
  }, [isActive]);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        aria-expanded={isActive}
        aria-controls={`faq-answer-${index}`}
        onClick={onToggle}
        className="text-ink flex w-full items-center justify-between py-5 text-left text-lg font-semibold transition hover:text-gray-700"
      >
        <span>{item.question}</span>
        <span className="ml-4 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isActive ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        ref={answerRef}
        id={`faq-answer-${index}`}
        aria-hidden={!isActive}
        className="h-0 overflow-hidden"
      >
        <p className="pb-5 leading-relaxed text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const submitContactForm = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');
    setFormError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      const result: { message?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        setFormError(result.error ?? 'We could not send your message.');
        return;
      }

      setFormMessage(result.message ?? 'Your message has been sent.');
      form.reset();
    } catch {
      setFormError('We could not send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <SectionNumber number="06" />
      <div className="relative z-10">
        <SectionTitle eyebrow="Personal Info" title="Contact Me">
          Have a project in mind? Let&apos;s talk about how we can make it
          happen.
        </SectionTitle>

        <div className="reveal mt-12 grid gap-16 md:grid-cols-2">
          {/* Left Side: FAQ Section */}
          <div>
            <AnimatedStagger stagger={0.12}>
              <h3 className="text-ink mb-6 text-3xl font-bold">
                Frequently Asked Questions
              </h3>
              <AnimatedStagger
                className="mt-6 border-t border-gray-200"
                stagger={0.1}
              >
                {faqs.map((item, index) => (
                  <FaqItem
                    item={item}
                    index={index}
                    isActive={activeFaq === index}
                    onToggle={() => toggleFaq(index)}
                    key={item.question}
                  />
                ))}
              </AnimatedStagger>
            </AnimatedStagger>
          </div>

          {/* Right Side: Contact Form Section */}
          <div>
            <AnimatedStagger>
              <h3 className="text-ink text-3xl leading-tight font-bold">
                Feel free to send me a message or any word of appreciation.
              </h3>
            </AnimatedStagger>

            <form onSubmit={submitContactForm} className="mt-8">
              <AnimatedStagger
                className="flex flex-col gap-4"
                delay={0.1}
                stagger={0.1}
                duration={0.55}
                distance={20}
              >
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your full name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your Full Name"
                    className="focus:border-ink text-ink w-full rounded-md border border-gray-300 p-4 transition outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your Email Address"
                    className="focus:border-ink text-ink w-full rounded-md border border-gray-300 p-4 transition outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Your message
                  </label>
                  <textarea
                    rows={5}
                    id="contact-message"
                    name="message"
                    placeholder="Your Message"
                    className="focus:border-ink text-ink w-full resize-y rounded-md border border-gray-300 p-4 transition outline-none"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-ink hover:bg-coral focus-visible:ring-coral w-full rounded-sm py-4 text-center font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </AnimatedStagger>
              <div className="mt-4 flex flex-col gap-4">
                {formMessage && (
                  <output className="text-sm text-green-600">
                    {formMessage}
                  </output>
                )}
                {formError && (
                  <p role="alert" className="text-sm text-red-600">
                    {formError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
