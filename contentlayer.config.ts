/* eslint-disable no-param-reassign */
import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { Post } from "./content/definitions/Post";
import { Project } from "./content/definitions/Project";
import { HEADING_LINK_ANCHOR } from "./src/lib/constants";
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions
} from "./src/lib/rehypePrettyCode";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [HEADING_LINK_ANCHOR]
          }
        }
      ]
    ]
  }
});
