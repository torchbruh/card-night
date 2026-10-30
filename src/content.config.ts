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
    // Paid Featured spot (sponsored). Leave unset for free listings.
    featured: z.boolean().optional(),
    featuredUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  }),
});

export const collections = { listings };
