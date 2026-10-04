import { Roboto } from 'next/font/google';
import "./globals.css";
//font configure
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto', 
});


import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Murad Hossain| Creative Portfolio",
  description: "Murad Hossain — designer and developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
