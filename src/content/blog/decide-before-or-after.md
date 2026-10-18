---
title: '先に決めるか、作ってから決めるか（grill/pstack）'
description: 'AI に仕事を頼むときの決め方は、作る前に質問で前提を詰める事前決定型と、まず作らせて成果物を見て決める事後決定型の 2 つ。作り直しのコストで使い分ける'
pubDate: '2026-10-10'
updatedDate: '2026-10-18'
---

AI に仕事を頼むとき、決め方には2通りある。

1つは事前決定型だ。作る前に AI から質問を受けて、読者や目的、前提を詰めてから作らせる。grill がこの型にあたる。

もう1つは事後決定型だ。症状とゴールだけ伝えてまず作らせ、成果物を見てから決める。Cursor の pstack がこの型にあたる。実行すれば分かる事実は人に聞かず、動かして決める。

どちらの型かを先に表で並べます。違いは「人が決める判断を、作る前に出すか、作った後に出すか」です。

| | 事前決定型(grill) | 事後決定型(pstack) |
| --- | --- | --- |
| 流れ | 質問に答えて前提を詰める → 作る | 症状とゴールだけ渡す → 作る → 成果物を見て決める |
| 良いところ | 前提のずれを作る前に見つけられる。考えていなかった論点が質問で出る | 頼む側の手間が少ない。目の前の成果物に具体的な直しを入れられる |
| 弱いところ | 質問に答える時間がかかる。推奨の答えを流して承認すると意味が薄れる | 前提がずれていれば作り直し。成果物を確かめる手段がないと成り立たない |
| 向く場面 | 設計や文章の主張など、後から変えにくいもの | バグ修正など、動かせば答えが出て作り直しが安いもの |

事前決定型の良いところは、前提のずれを作る前に見つけられることだ。自分が考えていなかった論点も、質問の形で出てくる。一方で、質問に答える時間がかかる。動かせば分かることまで、人が頭の中で答えることになる。質問には推奨の答えが付いてくることが多く、流して承認すると質問を受ける意味が薄れる。

事後決定型の良いところは、頼む側の手間が少ないことだ。判断するときには目の前に成果物があるので、具体的に直しを入れられる。一方で、前提がずれていれば作り直しになる。成果物を確かめる手段がなければ、そもそも成り立たない。

どちらを使うかは、作り直しのコストで決めればいいと思う。

- バグ修正のように、動かせば答えが出て、作り直しが安いものは事後決定型でいい
- 設計や文章の主張のように、後から変えにくいものは事前決定型で先に詰めたほうがいい

ただ、どちらの型でも、製品の方向のように人が決めるべき判断は人に残る。pstack の作者 Lauren Tan さんも「人のために作る以上、製品の判断は人がすべき」と書いている。違うのは、その判断を作る前にするか、作った後にするかだけだ。

どちらにも良い場面がある。適材適所で使えばいい。

pstack の仕組み(入口・手順書・道具・規則の 4 つの部品と、証拠付きの検証)は、解説動画(11 分)にしました。2026-10-18 時点の pstack 0.15.26 を元にしています。

<figure class="video-embed">
<iframe src="/videos/pstack.html" title="pstack の入口と検証(解説動画 11:28)" scrolling="no" loading="lazy"></iframe>
<figcaption><a href="/videos/pstack.html" target="_blank" rel="noopener">動画だけを別タブで開く</a>(台本と出典つき)</figcaption>
</figure>

## 動画の出典

- https://github.com/cursor/plugins/tree/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack (pstack 0.15.26)
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/README.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/poteto-mode/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/poteto-mode/playbooks/bug-fix.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/poteto-mode/playbooks/shipping.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/principle-prove-it-works/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/principle-never-block-on-the-human/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/correct/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/create-verification-skill/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/create-formal-verification-skill/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/poteto-help/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/in-your-own-words/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/sharpen/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/skills/ketchup/SKILL.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/docs/guide/README.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/docs/guide/02-poteto-mode.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/docs/guide/06-verify-and-ship.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/docs/guide/07-overnight.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/docs/guide/09-make-it-yours.md
- https://github.com/cursor/plugins/blob/0b8e952052d482ee6de06deebf14d590d77b1b34/pstack/docs/harness/claude-code.md
- https://github.com/cursor/plugins/compare/e43c7ee26e0038c6c1fa8380dd34ce86ff94cb2a...0b8e952052d482ee6de06deebf14d590d77b1b34 (0.15.9 → 0.15.26)
- https://github.com/poteto/verification-skill-example/blob/d5abe70d0d8c671672b6cef4069363f26c488feb/.cursor/skills/verify-atlas/SKILL.md
- https://x.com/poteto/status/2094457600259842065 (The Complete Guide to pstack Pt. 1, 2026-08-31)
- https://x.com/poteto/status/2097732320606507506 (The Complete Guide to pstack Pt. 2, 2026-09-09)
- https://x.com/poteto/status/2102050467505430555 (2,500 PRs, 2026-09-21)
- https://x.com/poteto/status/2111133080526495985 (信頼の 4 段, 2026-10-16)
- https://x.com/kentcdodds/status/2106614158712254515
- https://x.com/poteto/status/2106818232787276178
- https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/docs/productivity/grilling.md

音声は VOICEVOX:ずんだもん / VOICEVOX:四国めたん、イラストは VOICEVOX 公式(© SSS LLC)です。
