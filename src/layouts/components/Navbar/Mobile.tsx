import { Popover } from "@headlessui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { links } from "./data";
import { classNames } from "../../../utils";
import LanguageToggler from "../LanguageToggler";

const MobileNavbar: FC = () => {
  const location = useLocation();
  const { t } = useTranslation(["common", "navigation"]);

  return (
    <div className="divide-y-2 bg-primary-800 divide-primary-50 rounded-lg shadow-lg ring-1 ring-white/5">
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <Popover.Button as={Link} to="/">
            <h1 className="text-xl text-primary-100 font-semibold subpixel-antialiased">
              {t("common:app-name")}
            </h1>
          </Popover.Button>
          <div className="-mr-2">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 bg-primary-900 text-gray-400 hover:bg-primary-700 hover:text-primary-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="flex my-6">
          <LanguageToggler isMobile />
        </div>
        <nav className="grid gap-y-8">
          {links.map((link) => (
            <Popover.Button
              as={Link}
              key={link.href}
              to={link.href}
              className={classNames(
                location.pathname === link.href
                  ? "text-primary-50 hover:text-primary-100"
                  : "text-primary-200 hover:text-primary-100",
                "prose font-medium flex gap-2"
              )}
            >
              <>
                <link.Icon className="h-5 w-5" />
                {t(`navigation:${link.name}`)}
              </>
            </Popover.Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;