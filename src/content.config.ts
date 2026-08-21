// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Define a `loader` and `schema` for each collection
const posts = defineCollection({
    loader: glob({ 
      pattern: '**/[^_]*.{md,mdx}', 
      base: "./src/content/posts",
      generateId: ({ entry, data }) => {
        if (data.slug && String(data.slug).trim() !== '') {
          return String(data.slug).trim();
        }
        if (data.id) {
          return String(data.id).trim();
        }
        return slugify(entry.replace(/\.[^/.]+$/, ""));
      }
    }),
    schema: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      pubDate: z.coerce.date().optional(),
      date: z.coerce.date().optional(),
      slug: z.string().optional(),
      author: z.string().optional(),
      image: z.preprocess(
        (val: any) => {
          if (!val) return val;
          if (typeof val === 'string') return { url: val };
          return val;
        },
        z.object({
          url: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          borderRadius: z.number().optional(),
          alignment: z.enum(['left', 'center', 'right']).optional(),
        })
      ).optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false).optional(),
      imageAlt: z.string().optional()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { posts };