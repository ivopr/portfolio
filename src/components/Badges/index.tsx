import Image from "next/image";
import { useTranslation } from "next-i18next";
import { FC } from "react";

import archBadge from "../../assets/archlinux.svg";
import cssBadge from "../../assets/css3.svg";
import htmlBadge from "../../assets/html5.svg";
import javascriptBadge from "../../assets/javascript.svg";
import phpBadge from "../../assets/php.svg";
import pythonBadge from "../../assets/python.svg";
import reactBadge from "../../assets/react.svg";
import reactNativeBagde from "../../assets/reactnative.svg";
import typescriptBadge from "../../assets/typescript.svg";

const Badges: FC = () => {
  const { t } = useTranslation(["home"]);

  return (
    <>
      <h5 className="mt-5 text-sm">{t("home:about.using")}</h5>
      <div className="mt-2 flex flex-wrap gap-1">
        <Image
          alt="Badge Arch Linux"
          className="pointer-events-none"
          src={archBadge}
        />
        <Image
          alt="Badge React"
          className="pointer-events-none"
          src={reactBadge}
        />
        <Image
          alt="Badge React Nativa"
          className="pointer-events-none"
          src={reactNativeBagde}
        />
        <Image
          alt="Badge JavaScript"
          className="pointer-events-none"
          src={javascriptBadge}
        />
        <Image
          alt="Badge TypeScript"
          className="pointer-events-none"
          src={typescriptBadge}
        />
        <Image
          alt="Badge CSS3"
          className="pointer-events-none"
          src={cssBadge}
        />
        <Image
          alt="Badge HTML5"
          className="pointer-events-none"
          src={htmlBadge}
        />
        <Image alt="Badge PHP" className="pointer-events-none" src={phpBadge} />
        <Image
          alt="Badge Phyton"
          className="pointer-events-none"
          src={pythonBadge}
        />
      </div>
    </>
  );
};

export default Badges;
