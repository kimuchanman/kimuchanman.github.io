# kimuchanman.github.io

Astro で作った静的サイト。main に push すると GitHub Actions が build して GitHub Pages に配信する。

- サイト: https://kimuchanman.github.io
- 記事: `src/content/blog/*.md`。frontmatter は `title` `description` `pubDate`(任意で `updatedDate` `heroImage` `draft`)
- `.md` の中では生の HTML と `<script>` がそのまま出力される。`.mdx` では `<script>` が Astro に処理されるので、そのまま出したいときは `<script is:inline>` と書く
- `draft: true` の記事はサイトに出ない。ただしリポジトリは公開なので、ファイル自体は誰でも読める。公開直前まで下書きは別の非公開リポジトリに置く
- 単体の HTML(artifact や解説動画など)は `public/` に置くと、そのパスでそのまま配信される。100 MB 超のファイルは GitHub が受け付けない

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ に出力
```
