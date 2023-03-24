import React, { Suspense } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavItem } from "types";

import { Footer } from "@/ui/Footer";
import Header from "@/ui/Header";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ivo Vieira",
    template: "%s | Ivo Vieira"
  },
  description: "NextJS TailwindCSS Starter Template",
  openGraph: {
    type: "website",
    images: ["https://kaminari.vercel.app/og.png"],
    url: "https://ivo.vist.gg"
  }
};

const inter = Inter({
  variable: "--font-inter",
  weight: "900",
  preload: false
});

const navItems: NavItem[] = [
  {
    title: "Blog",
    isExternal: false,
    href: "/blog"
  },
  {
    title: "Projetos",
    isExternal: false,
    href: "/projects"
  }
];

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.className} bg-black`}
    >
      <head />
      <body className="flex h-screen flex-1 flex-col font-inter text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <Header items={navItems} />
          {/* <Palette /> */}
          <section className="mt-12 flex flex-1">{children}</section>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
