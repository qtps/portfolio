"use client";

import { useState } from "react";
import { faq } from "../lib/portfolio-data";
import { SectionTitle } from "./section-title";

export function ContactSection() {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <section id="contact" className="py-28">
      <SectionTitle eyebrow="Personal Info" title="Contact Me">
        Have a project in mind? Let&apos;s talk about how we can make it happen.
      </SectionTitle>
      <div className="reveal grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-ink">
            Frequently Asked Questions
          </h3>
          <div className="mt-6">
            {faq.map(([question, answer], index) => (
              <div className="border-b border-gray-300" key={question}>
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="flex w-full justify-between py-5 text-left font-bold text-ink"
                >
                  {question}
                  <span>{activeFaq === index ? "−" : "+"}</span>
                </button>
                {activeFaq === index && (
                  <p className="pb-5 leading-7 text-gray-600">{answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-ink">
            Let&apos;s create together
          </h3>
          <p className="mt-4 leading-8 text-gray-600">
            Send a message and tell me about your next project.
          </p>
          <a
            href="mailto:contact@yoursite.com"
            className="mt-8 inline-block bg-coral px-8 py-5 font-bold text-white transition hover:bg-ink"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
