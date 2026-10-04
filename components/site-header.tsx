"use client";

import { useState } from "react";
import Image from "next/image";
import { navigation } from "../lib/portfolio-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-2xl text-white lg:hidden"
      >
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
        />
      )}
      <aside
        id="site-navigation"
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white px-10 py-8 transition-transform duration-300 lg:w-1/5 lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <a href="#home" onClick={closeMenu} className="sidebar-item block">
    
          <h2 className="text-6xl  text-ink font-verdana font-extrabold">Murad.</h2>
            </a>
            <nav className="mt-14">
              <ul className="space-y-2">
                {navigation.map(([id, label]) => (
                  <li className="sidebar-item" key={id}>
                    <a
                      href={`#${id}`}
                      onClick={closeMenu}
                      className="block border-b border-gray-200 py-3 text-lg text-ink transition hover:text-coral"
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li className="sidebar-item">
                  <button
                    onClick={() => setPagesOpen(!pagesOpen)}
                    className="flex w-full justify-between border-b border-gray-200 py-3 text-lg text-ink"
                  >
                    Pages <span>{pagesOpen ? "−" : "+"}</span>
                  </button>
                  {pagesOpen && (
                    <ul className="space-y-2 py-3 pl-4 text-sm text-gray-600">
                      {[
                        "Single Post",
                        "Single Portfolio",
                        "Contact",
                        "My Team",
                        "Blog",
                      ].map((item) => (
                        <li key={item}>
                          <a href="#contact" onClick={closeMenu}>
                            {item}{" "}
                            <span className="rounded bg-coral px-1 text-white">
                              PRO
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div className="sidebar-item">
            <a
              href="mailto:murad8617@gmail.com"
              className="block border-b border-gray-200 py-4 text-sm"
            >
              murad8617@gmail.com
            </a>
            <div className="flex gap-4 py-5 font-bold">
              <a href="https://www.facebook.com/murad2077">
                <Image src="/images/facebook.svg" alt="Facebook" width={25} height={25} />
              </a>
              <a href="https://x.com/Murad_Hossain20">
                <Image src="/images/x.png" alt="Twitter" width={25} height={25} />
              </a>
              <a href="https://www.linkedin.com/in/muradsheakh/">

                <Image src="/images/linkedin.png" alt="LinkedIn" width={25} height={25} />

              </a>
              <a href="https://github.com/qtps">

              <Image src="/images/github.svg" alt="GitHub" width={25} height={25} />
              
              
              </a>
            </div>
            <p className="border-t border-gray-200 pt-5 text-sm text-gray-500">
              HTML by{" "}
              <a
                href="https://templatesjungle.com/"
                target="_blank"
                rel="noreferrer"
                className="text-ink"
              >
                TemplatesJungle
              </a>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
