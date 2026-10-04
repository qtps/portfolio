import { Roboto } from 'next/font/google';
import './globals.css';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
//font configure
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Murad Hossain | Web Developer',
  description:
    'Murad Hossain is a web developer from Dhaka, Bangladesh, focused on React, Next.js, TypeScript, and full-stack web experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.classList.toggle("dark", prefersDark);
              })();
            `,
          }}
        />
      </head>
      <body className={roboto.variable}>
        <SiteHeader />
        <main className="lg:ml-[20%]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">{children}</div>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
