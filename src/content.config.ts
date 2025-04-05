import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({ 
  loader: glob({pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.string().array(),
  })
});

export const collections = { posts };