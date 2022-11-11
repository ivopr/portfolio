import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";

import Button from "../components/Button";

const NotFound: FC = () => {
  const { t } = useTranslation(["common"]);

  return (
    <main className="flex min-w-full flex-1 flex-col items-center justify-center">
      <Head>
        <title>{t("common:404.title") + " - " + t("common:app-name")}</title>
      </Head>
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-primary-500 px-2 text-sm">
        {t("common:404.title")}
      </div>
      <Link
        href="/"
        className="group relative mt-5 inline-block text-sm font-medium text-primary-500 focus:outline-none focus:ring active:text-primary-500"
      >
        <Button>{t("common:404.go-home")}</Button>
      </Link>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navigation"])),
    },
  };
};

export default NotFound;
