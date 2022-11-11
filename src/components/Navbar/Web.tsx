import { Popover } from "@headlessui/react";
import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FC } from "react";

import { links } from "./data";

const LanguageToggler = dynamic(() => import("../LanguageToggler"), {
  suspense: true,
});

const WebNavbar: FC = () => {
  const location = useRouter();
  const { t } = useTranslation(["common", "navigation"]);

  return (
    <div className="flex h-16 items-center px-6 shadow-md md:px-12">
      <div className="flex flex-1 items-center justify-between py-2 md:space-x-10">
        <div className="flex justify-start lg:flex-1">
          <Link
            className="text-xl font-semibold text-primary-100 subpixel-antialiased"
            href="/"
          >
            {t("common:app-name")}
          </Link>
        </div>
        <div className="md:hidden">
          <Popover.Button className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary-800 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <nav className="hidden space-x-10 md:flex">
          {links.map(({ Icon, ...rest }) => (
            <Link
              className={`${
                location.pathname === rest.href
                  ? "text-primary-50 hover:text-primary-100"
                  : "text-primary-200 hover:text-primary-100"
              } 
                prose flex items-center gap-2 font-medium`}
              key={rest.href}
              {...rest}
            >
              <Icon className="h-5 w-5" />
              {t(`navigation:${rest.name}`)}
            </Link>
          ))}
          <LanguageToggler />
        </nav>
      </div>
    </div>
  );
};

export default WebNavbar;
