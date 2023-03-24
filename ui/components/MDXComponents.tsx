/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import cx from "clsx";
import type { ImageProps } from "next/image";
import NextLink from "next/link";

import { FOCUS_VISIBLE_OUTLINE, LINK_STYLES } from "@/lib/constants";
import { Aside } from "@/ui/components/Aside";
import { BlurImage } from "@/ui/components/BlurImage";
import { Code } from "@/ui/components/Code";
import { Files } from "@/ui/components/Files";

export const components = {
  // 🥴🥴 Nested Component imports via MDX are suddenly not JSX transformed 🥴🥴
  // https://github.com/contentlayerdev/contentlayer/issues/309
  Code,
  Files,
  Aside,
  h1: (props: any) => (
    <h2
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-100/90 sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-100/90 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4
      className="text-xl font-medium text-rose-100/90"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h5
      className="text-lg font-medium text-rose-100/90"
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr
      className="relative border-t-2 border-rose-200/5 pt-9 sm:pt-10"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <NextLink
          className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      );
    }

    return (
      <NextLink
        href={href}
        className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
        {...props}
      />
    );
  },
  ul: (props: any) => (
    <ul
      className="space-y-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-100/20 [li>&]:mt-3"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal space-y-3 pl-10"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong
      className="font-semibold"
      {...props}
    />
  ),
  Img: ({
    bleed,
    caption,
    ...props
  }: {
    children: React.ReactNode;
    bleed?: boolean;
    caption?: string;
  } & ImageProps) => (
    <>
      <div
        className={cx({
          "xl:!col-start-2 xl:!col-end-4": bleed === true
        })}
      >
        <BlurImage {...props} />
      </div>
      {caption ? (
        <div className="mt-2 text-sm italic text-rose-100/60">{caption}</div>
      ) : null}
    </>
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-rose-200/10 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
      {...props}
    />
  ),
  del: (props: any) => (
    <del
      className="text-rose-100/70 line-through"
      {...props}
    />
  )
};
