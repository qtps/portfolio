"use client";

import { useState } from "react";
import { SectionTitle } from "./section-title";

// FAQ data
const faqs = [
  {
    question: "What web development technologies do you specialize in?",
    answer:
      "I specialize in modern frontend and backend technologies including React, Next.js, JavaScript/TypeScript, Tailwind CSS, GSAP for animations, and Node.js with database integrations.",
  },
  {
    question: "How long does a typical website project take to complete?",
    answer:
      "Timeline depends on project complexity. A landing page usually takes 3–5 days, while a full-stack web application may take 2 to 4 weeks from design to deployment.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes, I provide post-launch technical support, performance optimization, and maintenance to keep your web application running smoothly.",
  },
];

export function ContactSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-28">
      <SectionTitle eyebrow="Personal Info" title="Contact Me">
        Have a project in mind? Let&apos;s talk about how we can make it happen.
      </SectionTitle>

      <div className="reveal grid gap-16 md:grid-cols-2 mt-12">
        {/* Left Side: FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-ink mb-6">
            Frequently Asked Questions
          </h3>
          <div className="mt-6 border-t border-gray-200">
            {faqs.map((item, index) => (
              <div className="border-b border-gray-200" key={index}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full justify-between items-center py-5 text-left text-lg font-semibold text-ink transition hover:text-gray-700"
                >
                  <span>{item.question}</span>
                  <span className="ml-4 text-gray-500">
                    {activeFaq === index ? (
                      /* Chevron Up Icon */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      /* Chevron Down Icon */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    )}
                  </span>
                </button>
                {activeFaq === index && (
                  <p className="pb-5 text-gray-600 leading-relaxed transition-all">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form Section */}
        <div>
          <h3 className="text-3xl font-bold text-ink leading-tight">
            Feel free to send me a message or any word of appreciation.
          </h3>
          
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="mt-8 flex flex-col gap-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full rounded-md border border-gray-300 p-4 text-gray-800 outline-none focus:border-ink transition"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full rounded-md border border-gray-300 p-4 text-gray-800 outline-none focus:border-ink transition"
                required
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-md border border-gray-300 p-4 text-gray-800 outline-none focus:border-ink transition resize-y"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#1e232a] py-4 text-center font-semibold text-white transition hover:bg-black rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}