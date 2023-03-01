import React, { forwardRef, ReactNode } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useTranslation } from "next-i18next";

type NavLink = {
  label: string;
  href?: string;
  links?: {
    label: string;
    description: string;
    href: string;
  }[];
};

const navLinks: NavLink[] = [
  {
    label: "navigation:about-me",
    href: "/"
  },
  {
    label: "navigation:projects",
    links: [
      {
        label: "projects:all-projects.title",
        description: "projects:all-projects.description",
        href: "/projects"
      },
      {
        label: "projects:ictiobiometria.title",
        description: "projects:ictiobiometria.description",
        href: "/projects/ictiobiometria"
      },
      {
        label: "projects:visualdynamics.title",
        description: "projects:visualdynamics.description",
        href: "/projects/visualdynamics"
      },
      {
        label: "projects:prism.title",
        description: "projects:prism.description",
        href: "/projects/prism"
      }
    ]
  },
  {
    label: "navigation:github",
    href: "https://github.com/ivopr"
  }
];

const MakeLinkItem = ({ label, href, links }: NavLink) => {
  const { t } = useTranslation(["navigation", "common", "projects"]);
  if (links) {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="text-primary-200 hover:bg-primary-800 focus:shadow-primary-700 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          {t(label)}
          <ChevronDown
            className="text-primary-200 relative w-3.5 h-3.5 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="bg-primary-800 w-full sm:w-auto">
          <ul className="m-0 grid list-none gap-x-3 p-5 sm:grid-flow-col sm:grid-rows-2">
            {links.map((link) => (
              <ListItem
                key={link.href}
                title={t(link.label)}
                href={link.href}
              >
                {t(link.description)}
              </ListItem>
            ))}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        className="text-primary-200 hover:bg-primary-800 focus:shadow-primary-700 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
        href={href}
      >
        {t(label)}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-center">
      <NavigationMenu.List className="items-center shadow-primary-600 m-0 flex list-none rounded-[6px] bg-primary-900 p-1 shadow-[0_2px_5px]">
        {navLinks.map((l) => (
          <MakeLinkItem
            key={l.label}
            {...l}
          />
        ))}

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-primary-800" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-11/12 origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = forwardRef<
  HTMLAnchorElement,
  LinkProps & { title: string; children: ReactNode; className?: string }
>(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <Link
        className={`focus:shadow-[0_0_0_2px] focus:shadow-primary-700 hover:bg-primary-900 block select-none rounded-md p-3 text-base w-64 leading-none no-underline outline-none transition-colors ${className}`}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-primary-200 mb-[5px] font-medium leading-[1.2]">
          {title}
        </div>
        <p className="text-zinc-300 leading-[1.4] line-clamp-2">{children}</p>
      </Link>
    </NavigationMenu.Link>
  </li>
));

ListItem.displayName = "Item";

export default NavigationMenuDemo;
