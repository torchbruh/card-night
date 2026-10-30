import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const listings = defineCollection({
  loader: file('src/data/listings.json'),
  schema: z.object({
    name: z.string(),
    type: z.enum(['League', 'Shop', 'Show']),
    area: z.string(),
    address: z.string(),
    when: z.string(),
    kids: z.string(),
    note: z.string(),
    url: z.string().url(),
    source: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { listings };
