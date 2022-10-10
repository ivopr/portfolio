import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowDown } from "react-icons/ai"
import Flag from "react-world-flags";
import { Button } from "../Button";

export const LanguageToggler: FC = () => {
  const { i18n } = useTranslation();

  const changeToPTBR = () => {
    i18n.changeLanguage("ptbr");
  };

  const changeToEN = () => {
    i18n.changeLanguage("en");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <Button className="flex gap-2 w-64 justify-center">
            {i18n.language === "en" ? <Flag code="usa" className="w-5 h-5 mr-2" /> : <Flag code="bra" className="w-5 h-5 mr-2" />}
            {i18n.language === "en" ? "English" : "Português (BR)"}
            <AiOutlineArrowDown className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute shadow-md shadow-primary-500/25 z-10 mt-2 w-64 inline-block text-sm font-medium border-primary-500 border bg-primary-900 text-primary-400">
          <div className="py-1">
            <Menu.Item>
              {() => (
                <button className="flex gap-2 py-2 px-4 hover:bg-primary-800 w-full hover:text-primary-200" onClick={changeToEN}>
                  <Flag code="usa" className="w-5 h-5 mr-2" />
                  English
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button className="flex gap-2 py-2 px-4 hover:bg-primary-800 w-full hover:text-primary-200" onClick={changeToPTBR}>
                    <Flag code="bra" className="w-5 h-5 mr-2" />
                    Português (BR)
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};