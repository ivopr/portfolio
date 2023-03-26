import Head from "next/head";

interface HeaderSEOProps {
  title: string;
  description?: string;
  ogImage?: string;
}

export function HeaderSEO({ title, description, ogImage }: HeaderSEOProps) {
  const hostname = typeof window !== "undefined" ? window.origin : "";

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="title"
        content={title}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="twitter:title"
        content={title}
      />

      {description ? (
        <>
          <meta
            name="description"
            content={description}
          />
          <meta
            property="og:description"
            content={description}
          />
          <meta
            property="twitter:description"
            content={description}
          />
        </>
      ) : null}

      {ogImage ? (
        <>
          <meta
            property="og:image"
            content={`${hostname}/api/og?${ogImage}`}
          />
          <meta
            property="twitter:image"
            content={`${hostname}/api/og?${ogImage}`}
          />
        </>
      ) : null}

      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={hostname}
      />

      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:url"
        content={hostname}
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}