import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { images } from './data/studio.js';

const imageKey = z.enum(Object.keys(images));

export const collections = {
  work: defineCollection({
    loader: glob({ base: './src/content/work', pattern: '*.md' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      order: z.number(),
      category: z.string(),
      year: z.string(),
      location: z.string(),
      img: imageKey,
      space: z.string(),
      spaceImages: z.array(imageKey).length(2),
      gallery: z.array(imageKey).length(6),
      ask: z.string().optional(),
      result: z.string().optional(),
      testimonial: z.string().optional(),
    }),
  }),
};
