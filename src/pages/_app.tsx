import { Suspense } from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import nextI18nConfig from "../../next-i18next.config";
import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="pt-10 flex flex-col flex-1 h-screen">
      <Suspense fallback={<Loading />}>
        <Navbar />

        <main className="flex flex-1 items-center justify-center p-5 md:p-10">
          <Component {...pageProps} />
        </main>
      </Suspense>
    </div>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);
