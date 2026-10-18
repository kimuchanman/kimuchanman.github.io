import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// true の記事はサイトに出さない(リポジトリ上では見える)
			draft: z.boolean().default(false),
			// 解説動画の記事: public/videos/<video>.html を本体として全幅で表示する
			video: z.string().optional(),
			duration: z.string().optional(),
		}),
});

export const collections = { blog };
