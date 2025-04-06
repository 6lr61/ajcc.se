// @ts-check
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog/post": "/blog",
    "/blog/tag": "/blog/tags",
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "after",
          properties: { className: "anchor-link" },
          content: {
            type: "text",
            value: "#",
          },
          group: (node, link) => {
            return {
              type: "element",
              tagName: "div",
              properties: { className: "heading-group" },
              children: [node, link],
            };
          },
        },
      ],
    ],
  },
});
