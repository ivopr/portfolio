import { Popover } from "@headlessui/react";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FC } from "react";

import { classNames } from "../../utils/classNames";
import { links } from "./data";

const LanguageToggler = dynamic(() => import("../LanguageToggler"), {
  suspense: true,
});

const MobileNavbar: FC = () => {
  const location = useRouter();
  const { t } = useTranslation(["common", "navigation"]);

  return (
    <div className="divide-y-2 divide-primary-50 rounded-lg bg-primary-800 shadow-lg ring-1 ring-white/5">
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <Popover.Button as={Link} legacyBehavior={false} href="/">
            <span className="text-xl font-semibold text-primary-100 subpixel-antialiased">
              {t("common:app-name")}
            </span>
          </Popover.Button>
          <div className="-mr-2">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-primary-900 p-2 text-gray-400 hover:bg-primary-700 hover:text-primary-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="my-6 flex">
          <LanguageToggler isMobile />
        </div>
        <nav className="grid gap-y-8">
          {links.map((link) => (
            <Popover.Button
              key={link.href}
              as={Link}
              legacyBehavior={false}
              href={link.href}
            >
              <span
                className={classNames(
                  location.pathname === link.href
                    ? "text-primary-50 hover:text-primary-100"
                    : "text-primary-200 hover:text-primary-100",
                  "prose font-medium flex gap-2"
                )}
              >
                <link.Icon className="h-5 w-5" />
                {t(`navigation:${link.name}`)}
              </span>
            </Popover.Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
