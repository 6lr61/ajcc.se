// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog/post": "/blog",
    "/blog/tag": "/blog/tags",
  }
});
