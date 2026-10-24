// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kimuchanman.github.io',
	redirects: {
		// 動画記事は文章記事に統合した(2026-10-18)。古い URL は文章記事へ送る
		'/blog/video-fluency-vs-diff': '/blog/fluency-vs-diff/',
		'/blog/video-forgetting-mechanisms': '/blog/forgetting-is-six-events/',
		'/blog/video-pstack': '/blog/pstack/',
		// Git と AWS の概念図 3 本は、オントロジーマップの評価記事 1 本にまとめた(2026-10-18)
		'/blog/aws-vpc-ontology-map': '/blog/ontology-map-evaluation/',
		'/blog/aws-messaging-ontology-map': '/blog/ontology-map-evaluation/',
		'/blog/aws-ontology-map': '/blog/ontology-map-evaluation/',
		'/blog/git-ontology-map': '/blog/ontology-map-evaluation/',
		// ゲームは記事から外し、/games/ に置いた(2026-10-24)
		'/blog/game-stick-brawl': '/games/stick-brawl/',
	},
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
