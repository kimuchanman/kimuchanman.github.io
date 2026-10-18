# kimuchanman.github.io

Astro で作った静的サイト。main に push すると GitHub Actions が build して GitHub Pages に配信する。

- サイト: https://kimuchanman.github.io
- 設計と書き方の方針: docs/DESIGN.md(全体図を先に、数値は表、関係は Mermaid、文は著者の言葉のまま)
- トップが記事一覧。`/blog` はトップへ転送する
- 記事を載せる手順は個人 skill `blog-publish`(`~/.claude/skills/blog-publish/SKILL.md`)にある
- 記事: `src/content/blog/*.md`。frontmatter は `title` `description` `pubDate`(任意で `updatedDate` `heroImage` `draft`)
- 図は ```` ```mermaid ```` の fence で書く。ブラウザ側で描画する(BlogPost レイアウトの script)
- `.md` の中では生の HTML と `<script>` がそのまま出力される。`.mdx` では `<script>` が Astro に処理されるので、そのまま出したいときは `<script is:inline>` と書く
- `draft: true` の記事はサイトに出ない。ただしリポジトリは公開なので、ファイル自体は誰でも読める。公開直前まで下書きは別の非公開リポジトリに置く
- 解説動画は 1 本を 1 記事にする。HTML を `public/videos/<slug>.html` に置き、`src/content/blog/video-<slug>.md` の frontmatter に `video: '<slug>'` と `duration: '9:26'` を書くと、全幅のプレイヤー(VideoPost レイアウト)で表示され、一覧に「動画」ラベルが付く。本文には導入・出典・VOICEVOX のクレジットを書く(場面一覧は動画のサイドバーに出るので書かない)
- 地図などの対話的な図は `public/maps/<slug>.html` に置き、frontmatter に `embed: 'maps/<slug>'` を書くと同じ全幅の枠で表示され、一覧に「図」ラベルが付く
- 単体の HTML(artifact など)は `public/` に置くと、そのパスでそのまま配信される。100 MB 超のファイルは GitHub が受け付けない

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ に出力
```
