"use client";

import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { NavItem } from "types";

import { cn } from "@/lib/utils";
import { Icons } from "@/ui/components/icons";
import { MobileNav } from "@/ui/components/MobileNav";

interface MainNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

export default function Header({ items, children }: MainNavProps) {
  const [top, setTop] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const segment = useSelectedLayoutSegment();

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed top-0 h-12 z-40 w-full border-b border-zinc-900 ${
        !top && "bg-transparent shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex h-12 items-center justify-between py-2 px-2">
          <div className="flex justify-between gap-6 md:gap-10">
            <Link
              className="hidden items-center space-x-2 md:flex"
              href="/"
            >
              <Icons.logo />

              <span className="hidden font-bold sm:inline-block">
                Ivo Vieira
              </span>
            </Link>

            <button
              className="flex items-center space-x-2 md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <Icons.close /> : <Icons.logo />}
              <span className="font-bold">
                {showMobileMenu ? "Close" : "Menu"}
              </span>
            </button>
          </div>
          <nav className="hidden gap-6 md:flex">
            {items.map((item: NavItem, index: number) => (
              <Link
                key={index}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noreferrer" : undefined}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center font-inter text-sm font-medium text-[#888] transition-all duration-75 ease-linear hover:text-zinc-50",
                  item.href.startsWith(`/${segment}`) && "text-white",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <Link
            href="https://github.com/ivopr"
            target="_blank"
            rel="noreferrer"
            className="group rounded bg-gray-1000 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001"
          >
            <FiGithub className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
          </Link>
        </div>
        {showMobileMenu && (
          <MobileNav
            segment={segment}
            items={items}
          >
            {children}
          </MobileNav>
        )}
      </div>
    </header>
  );
}
