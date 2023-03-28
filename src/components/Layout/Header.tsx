import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Icons } from "@app/components/Icons";
import { cn } from "@app/lib/utils";

import { SelectTheme } from "../SelectTheme";

import { MobileNav } from "./MobileNav";

interface MainNavProps {
  items: NavItem[];
  children?: React.ReactNode;
  setTheme: (theme: string) => void;
  theme: string;
}

export function Header({ items, children, setTheme, theme }: MainNavProps) {
  const [top, setTop] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { pathname } = useRouter();

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
              <Icons.Logo />

              <span className="hidden font-bold sm:inline-block">
                Ivo Vieira
              </span>
            </Link>

            <button
              className="flex items-center space-x-2 md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <Icons.Close /> : <Icons.Logo />}
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
                  item.href.startsWith(`/${pathname.split("/")[1]}`) &&
                    pathname !== "/" &&
                    "text-white",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-x-1">
            <SelectTheme
              setTheme={setTheme}
              theme={theme}
            />
            <Link
              href="https://github.com/ivopr"
              target="_blank"
              rel="noreferrer"
              className="group rounded bg-gray-1000 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001"
            >
              <Icons.Github className="text-zinc-400 transition-colors duration-100 ease-linear group-hover:text-gray-100" />
            </Link>
          </div>
        </div>
        {showMobileMenu && (
          <MobileNav
            closeNavbar={() => setShowMobileMenu(false)}
            items={items}
            segment={pathname.split("/")[1]}
          >
            {children}
          </MobileNav>
        )}
      </div>
    </header>
  );
}
