---
title: 'Git の用語を 1 枚の概念図にする(index・staging area・cache は同じもの)'
description: 'git 同梱のマニュアルから概念 18 個と関係 29 本を抜き出し、別名を 1 つの概念にまとめた図。reset の 3 モードが何を書き換えるかを図の上で追える'
pubDate: '2026-10-18'
embed: 'maps/git-ontology'
---

Git の用語を、git 2.50.1 に同梱のマニュアル(man ページ)だけを出典にして 1 枚の概念図にしました。作ったのは自作の skill(input-ontology-map)で、この記事はその出力例です。

## 図の読み方

- 箱が概念、線が関係です。線には「先端のコミットを指す」のような述語が書いてあり、色は 6 種類の関係カテゴリ(is-a・part-of・depends-on・produces・constrains・relates-to)を表します
- 箱を押すと右の「詳細」に定義・別名・出典が出ます
- 左下の「Action / Policy を重ねる」を入れると、`git add`・`git commit`・`git reset` の 3 モード・`git switch --detach` が図に重なり、各コマンドがどの概念を書き換えるかが線で出ます
- 右の「問い」タブにある 3 つの問いが、この図で答えようとしたことです

## 別名を 1 つにまとめる

Git では同じものに名前が複数付いています。index はその代表で、マニュアルの中だけで 5 通りに書かれています。

| 書かれ方 | 出典 |
| --- | --- |
| index | gitglossary(7)、git-add(1) |
| staging area | git-commit(1)、git-diff(1) |
| cache | gitglossary(7)(「index の旧称」) |
| `--cached` | git-diff(1) などのオプション名 |
| `--staged` | git-diff(1)(「`--cached` の別名」) |

図ではこの 5 つを index という 1 つの箱にまとめ、残りは別名として箱の詳細に出典付きで残しました。逆に `HEAD`(大文字)と `head`(小文字)は名前が似ていても別の概念なので、別の箱にしています。HEAD は「現在のブランチヘッドを指す symref」で、head は「ブランチの先端を指す ref」です。

## reset の 3 モードを図で追う

1 つ目の問い「`git reset --soft / --mixed / --hard` はそれぞれ何を書き換えるか」には、git-reset(1) の状態表がそのまま答えます。

| モード | ブランチヘッド | index | 作業ツリー |
| --- | --- | --- | --- |
| `--soft` | 指定コミットへ動く | そのまま | そのまま |
| `--mixed`(既定) | 指定コミットへ動く | 指定コミットの tree に戻る | そのまま |
| `--hard` | 指定コミットへ動く | 指定コミットの tree に戻る | 指定コミットの tree に戻る |

3 モードとも、動かす前の先端を ORIG_HEAD に記録します。図で Action を重ねると、`--soft` から出る線はブランチヘッドと ORIG_HEAD の 2 本、`--hard` からは作業ツリーまでの 4 本になります。表の右へ行くほど書き換える範囲が広がることを、線の本数で確かめられます。

## 作り方

1. 図で答える問いを 3 つ決めた(reset の 3 モード、index の別名、detached HEAD でのコミット)
2. `man gitglossary` などのマニュアルから、問いに必要な概念・関係・コマンドを抜き出した。出典は gitglossary(7)・git-reset(1)・git-diff(1)・git-add(1)・git-commit(1)・git-switch(1) の 6 つ
3. 別名をまとめ、まとめた理由を「ソース」タブの名寄せメモに書いた
4. skill の描画テンプレートで HTML にした。抽出日は 2026-10-18

pack ファイル・merge 中の多段 index・submodule・`git worktree` は問いに要らないので外しました。
