import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FC, Fragment } from "react";
import bra from "svg-country-flags/svg/br.svg";
import usa from "svg-country-flags/svg/us.svg";

const Button = dynamic(() => import("../Button"), {
  suspense: true,
});

type LanguageTogglerProps = {
  isMobile?: boolean;
};

const LanguageToggler: FC<LanguageTogglerProps> = ({ isMobile }) => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeToPTBR = () => {
    onToggleLanguageClick("pt-BR");
  };

  const changeToEN = () => {
    onToggleLanguageClick("en-US");
  };

  return (
    <Menu as="div" className="relative inline-block w-full text-left md:w-auto">
      <Menu.Button as="div" className="w-full">
        <Button
          className="relative flex w-full items-center gap-2 px-4"
          parentClassName="w-full"
        >
          <span className="relative h-5 w-5">
            <Image src={i18n.language === "en-US" ? usa : bra} layout="fill" />
          </span>
          {isMobile
            ? i18n.language === "en-US"
              ? "English"
              : "Português (BR)"
            : null}
          <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 inline-block w-full border border-primary-500 bg-primary-900 text-sm font-medium text-primary-400 shadow-md shadow-primary-500/25 md:w-max">
          <Menu.Item>
            {() => (
              <button
                className="flex w-full gap-2 py-2 px-4 hover:bg-primary-800 hover:text-primary-200"
                onClick={changeToEN}
              >
                <span className="relative h-5 w-5">
                  <Image src={usa} layout="fill" />
                </span>
                English
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {() => (
              <button
                className="flex w-full gap-2 py-2 px-4 hover:bg-primary-800 hover:text-primary-200"
                onClick={changeToPTBR}
              >
                <span className="relative h-5 w-5">
                  <Image src={bra} layout="fill" />
                </span>
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
