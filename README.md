# kimuchanman.github.io

Astro で作った静的サイト。main に push すると GitHub Actions が build して GitHub Pages に配信する。

- サイト: https://kimuchanman.github.io
- 設計と書き方の方針: docs/DESIGN.md(全体図を先に、数値は表、関係は Mermaid、文は kimukei-writing で整えて著者の文として扱う)
- トップが記事一覧。`/blog` はトップへ転送する
- 記事を載せる手順は個人 skill `blog-publish`(`~/.claude/skills/blog-publish/SKILL.md`)にある
- 記事: `src/content/blog/*.md`。frontmatter は `title` `description` `pubDate`(任意で `updatedDate` `heroImage` `draft`)
- 図は ```` ```mermaid ```` の fence で書く。ブラウザ側で描画する(BlogPost レイアウトの script)
- `.md` の中では生の HTML と `<script>` がそのまま出力される。`.mdx` では `<script>` が Astro に処理されるので、そのまま出したいときは `<script is:inline>` と書く
- `draft: true` の記事はサイトに出ない。ただしリポジトリは公開なので、ファイル自体は誰でも読める。公開直前まで下書きは別の非公開リポジトリに置く
- 解説動画の HTML は `public/videos/<slug>.html` に置き、`<meta charset>` の直後に favicon の `<link rel="icon" type="image/png" href="/favicon.png">` を足す(単体ページのタブに自分のアイコンを出すため)
- 同じ内容の文章記事があれば、動画は文章記事の本文に `<figure class="video-embed">` で埋め込み、動画記事は作らない。埋め込むと見出し・台本・出典が隠れてプレイヤーだけになり、本文より広い幅で出る。台本と出典は「動画だけを別タブで開く」の単体ページに残る。動画の出典は記事末尾に「## 動画の出典」として足す
- 文章記事の無い動画だけは 1 本を 1 記事にする。`src/content/blog/video-<slug>.md` の frontmatter に `video: '<slug>'` と `duration: '9:26'` を書くと、全幅のプレイヤー(VideoPost レイアウト)で表示される。本文には導入・出典・VOICEVOX のクレジットを書く(場面一覧は動画のサイドバーに出るので書かない)
- 一覧の「動画」ラベルは、`video` を持つ記事と、本文に動画を埋め込んだ記事に付く
- 地図などの対話的な図は `public/maps/<slug>.html` に置き、frontmatter に `embed: 'maps/<slug>'` を書くと同じ全幅の枠で表示され、一覧に「図」ラベルが付く。1 記事に図を複数載せるときは `embed` を使わず、本文に `<figure class="map-embed">` で埋め込む(一覧の「図」ラベルも付く)
- ブラウザで遊ぶゲームは `public/games/<slug>.html` に置き、frontmatter に `embed: 'games/<slug>'` を書く。図と同じ全幅の枠で表示され、一覧に「ゲーム」ラベルが付く。URL に `?debug` を付けると `window.__dbg` から状態を読める(自動テスト用)
- 単体の HTML(artifact など)は `public/` に置くと、そのパスでそのまま配信される。100 MB 超のファイルは GitHub が受け付けない

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ に出力
```
