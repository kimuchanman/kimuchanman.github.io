import { getCollection } from 'astro:content';
import type { Entry } from './components/EntryList.astro';

// 記事の一覧行。本文に動画や図を埋め込んだ記事にもラベルを付ける
export async function postEntries(): Promise<Entry[]> {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.map((post) => {
		const kinds: string[] = [];
		if (post.data.video || post.body?.includes('class="video-embed"')) kinds.push('動画');
		if (post.data.embed || post.body?.includes('class="map-embed"')) kinds.push('図');
		return { href: `/blog/${post.id}/`, date: post.data.pubDate, title: post.data.title, kinds };
	});
}

// ゲームの一覧行。サイトのページを挟まず、public/games/<id>.html へ直接案内する
export async function gameEntries(label: boolean): Promise<Entry[]> {
	const games = await getCollection('games', ({ data }) => !data.draft);
	return games.map((game) => ({
		href: `/games/${game.id}.html`,
		date: game.data.pubDate,
		title: game.data.title,
		kinds: label ? ['ゲーム'] : [],
	}));
}
