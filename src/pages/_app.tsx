import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import { appWithTranslation } from "next-i18next";
import { Suspense } from "react";

import nextI18nConfig from "../../next-i18next.config";
import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";

const NowPlaying = dynamic(() => import("../components/NowPlaying"), {
  suspense: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Suspense fallback={<Loading />}>
        <Navbar />

        <div className="mx-auto mt-6 w-full">
          <NowPlaying />
        </div>

        <main className="flex flex-1 p-5 md:p-10">
          <Component {...pageProps} />
        </main>
      </Suspense>
      <Analytics />
    </div>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);
