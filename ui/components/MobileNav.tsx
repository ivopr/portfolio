/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import Link from "next/link";
import { NavItem } from "types";

import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

interface MobileNavProps {
  items: NavItem[];
  children?: React.ReactNode;
  segment?: string | null;
  closeNavbar: () => void;
}

export function MobileNav({
  closeNavbar,
  items,
  children,
  segment
}: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "animate-in slide-in-from-bottom-80 fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-black p-6 shadow-md md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md shadow-md">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeNavbar}
        >
          <Icons.logo />
          <span className="font-bold">Ivo Vieira</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noreferrer" : undefined}
              href={item.disabled ? "#" : item.href}
              onClick={closeNavbar}
              className={cn(
                "flex w-full p-2 items-center font-inter text-sm font-medium text-[#888] transition-all duration-75 ease-linear hover:text-zinc-50",
                item.href.startsWith(`/${segment}`) && "text-white",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
