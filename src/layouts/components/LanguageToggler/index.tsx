import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "../Button";

import bra from "svg-country-flags/svg/br.svg"
import usa from "svg-country-flags/svg/us.svg"

type LanguageTogglerProps = {
  isMobile?: boolean;
}

const LanguageToggler: FC<LanguageTogglerProps> = ({ isMobile }) => {
  const { i18n } = useTranslation();

  const changeToPTBR = () => {
    i18n.changeLanguage("ptbr");
  };

  const changeToEN = () => {
    i18n.changeLanguage("en");
  };

  return (
    <Menu as="div" className="relative inline-block text-left w-full md:w-auto">
      <Menu.Button as="div" className="w-full">
        <Button className="flex w-full items-center gap-2 px-4" parentClassName="w-full">
          {i18n.language === "en" ? <img src={usa} className="w-5 h-5" /> : <img src={bra} className="w-5 h-5" />}
          {isMobile ? (i18n.language === "en" ? "English" : "Português (BR)") : null}
          <BsChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-full md:w-max shadow-md shadow-primary-500/25 z-10 mt-2 inline-block text-sm font-medium border-primary-500 border bg-primary-900 text-primary-400">
          <Menu.Item>
            {() => (
              <button className="flex gap-2 py-2 px-4 w-full hover:bg-primary-800 hover:text-primary-200" onClick={changeToEN}>
                <img src={usa} className="w-5 h-5" />
                English
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {() => (
              <button className="flex gap-2 py-2 px-4 w-full hover:bg-primary-800 hover:text-primary-200" onClick={changeToPTBR}>
                <img src={bra} className="w-5 h-5" />
                Português (BR)
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageToggler;