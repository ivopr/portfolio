import { Popover } from "@headlessui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

import { links } from "./data";
import { classNames } from "../../../utils";
import LanguageToggler from "../LanguageToggler";

const WebNavbar: FC = () => {
  const location = useLocation();
  const { t } = useTranslation(["common", "navigation"]);

  return (
    <div className="flex items-center h-16 px-6 shadow-md md:px-12">
      <div className="flex flex-1 items-center justify-between py-2 md:space-x-10">
        <div className="flex justify-start lg:flex-1">
          <Link to="/">
            <h1 className="text-xl text-primary-100 font-semibold subpixel-antialiased">
              {t("common:app-name")}
            </h1>
          </Link>
        </div>
        <div className="md:hidden">
          <Popover.Button className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary-800 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
            <span className="sr-only">Open menu</span>
            <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <nav className="hidden space-x-10 md:flex">
          {links.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className={classNames(
                location.pathname === link.href
                  ? "text-primary-50 hover:text-primary-100"
                  : "text-primary-200 hover:text-primary-100",
                "prose font-medium flex gap-2 items-center"
              )}
            >
              <link.Icon className="h-5 w-5" />
              {t(`navigation:${link.name}`)}
            </Link>
          ))}
          <LanguageToggler />
        </nav>
      </div>
    </div>
  );
};

export default WebNavbar;