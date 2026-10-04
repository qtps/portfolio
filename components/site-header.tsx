'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { navigation, pageLinks } from '../utils/portfolio-data';
import { ThemeToggle } from './theme-toggle';

type AnimatedNavItemProps = {
  children: ReactNode;
  className: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
};

function AnimatedNavItem({
  children,
  className,
  href,
  active = false,
  onClick,
}: AnimatedNavItemProps) {
  const underline = useRef<HTMLSpanElement>(null);
  const underlineTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!underline.current) return;

    underlineTween.current = gsap.fromTo(
      underline.current,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 0.45,
        ease: 'power3.out',
        paused: true,
      },
    );

    return () => {
      if (underline.current) {
        gsap.killTweensOf(underline.current);
      }
      underlineTween.current?.kill();
      underlineTween.current = null;
    };
  }, []);

  useEffect(() => {
    if (active) {
      underlineTween.current?.play();
    } else {
      underlineTween.current?.reverse();
    }
  }, [active]);

  const showUnderline = () => {
    underlineTween.current?.play();
  };

  const hideUnderline = () => {
    if (!active) {
      underlineTween.current?.reverse();
    }
  };

  const itemProps = {
    onClick,
    onMouseEnter: showUnderline,
    onMouseLeave: hideUnderline,
    className: `relative ${className}`,
  };

  const itemContent = (
    <>
      {children}
      <span
        ref={underline}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0"
        style={{ backgroundColor: 'var(--color-ink)' }}
      />
    </>
  );

  return href ? (
    <Link href={href} {...itemProps}>
      {itemContent}
    </Link>
  ) : (
    <button type="button" {...itemProps}>
      {itemContent}
    </button>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);
  const isActivePath = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="bg-ink fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white lg:hidden"
      >
        <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
      </button>
      <ThemeToggle />
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
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white px-10 py-8 transition-transform duration-300 lg:w-1/5 lg:translate-x-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div>
              <Link href="/" onClick={closeMenu} className="sidebar-item block">
                <h2 className="text-ink font-verdana text-6xl font-extrabold">
                  Murad.
                </h2>
              </Link>
            </div>
            <nav className="mt-14">
              <ul className="space-y-2">
                {navigation.map(([id, label]) => (
                  <li className="sidebar-item" key={id}>
                    <AnimatedNavItem
                      href={id === 'home' ? '/' : `/${id}`}
                      active={isActivePath(id === 'home' ? '/' : `/${id}`)}
                      onClick={closeMenu}
                      className="text-ink hover:text-coral block border-b border-gray-200 py-3 text-lg transition"
                    >
                      {label}
                    </AnimatedNavItem>
                  </li>
                ))}
                <li className="sidebar-item">
                  <AnimatedNavItem
                    onClick={() => setPagesOpen(!pagesOpen)}
                    className="text-ink flex w-full justify-between border-b border-gray-200 py-3 text-lg"
                  >
                    Pages <span>{pagesOpen ? '−' : '+'}</span>
                  </AnimatedNavItem>
                  {pagesOpen && (
                    <ul className="space-y-2 py-3 pl-4 text-sm text-gray-600">
                      {pageLinks.map(({ label, href }) => (
                        <li key={href}>
                                <AnimatedNavItem
                                  href={href}
                                  active={isActivePath(href)}
                                  onClick={closeMenu}
                                  className="block"
                                >
                                  {label}
                                </AnimatedNavItem>
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
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://x.com/Murad_Hossain20">
                <Image
                  src="/images/x.png"
                  alt="Twitter"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://www.linkedin.com/in/muradsheakh/">
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://github.com/qtps">
                <Image
                  src="/images/github.svg"
                  alt="GitHub"
                  width={25}
                  height={25}
                />
              </a>
            </div>
            <p className="border-t border-gray-200 pt-5 text-sm text-gray-500">
              Built by <span className="text-ink">Murad Hossain</span>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
