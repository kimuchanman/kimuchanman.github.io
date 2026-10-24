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
			// 図の記事: public/<embed>.html(例 'maps/git-ontology')を動画と同じ全幅の枠で表示する
			embed: z.string().optional(),
		}),
});

// ゲーム: 本体は public/games/<id>.html。ここには一覧に出す題名と日付だけを書く
const games = defineCollection({
	loader: glob({ base: './src/content/games', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

// ツール: 本体は public/tools/<id>.html。ゲームと同じく、一覧に出す題名と日付だけを書く
const tools = defineCollection({
	loader: glob({ base: './src/content/tools', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, games, tools };
