import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-black heropattern-diagonallines-white/10">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
