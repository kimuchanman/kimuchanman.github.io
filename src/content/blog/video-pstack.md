---
title: 'pstack の入口と検証'
description: 'Cursor のプラグイン pstack(0.15.26)は、エージェントの「直しました」をどう信じられるものにしているか。入口・手順書・道具・規則の 4 つの部品と、証拠付きの検証の仕組み'
pubDate: '2026-10-18'
video: 'pstack'
duration: '11:28'
---

Cursor のプラグイン pstack(0.15.26)は、エージェントの「直しました」をどう信じられるものにしているか。入口・手順書・道具・規則の 4 つの部品と、証拠付きの検証の仕組みを追います。ずんだもんが質問し、四国めたんが答える形式で、11:28 です。

内容は 2026-10-18 時点の pstack(cursor/plugins のコミット 0b8e952)と、作者の poteto(Lauren Tan)さんの記事・投稿から取りました。0.15.9 からの変更点も 1 場面で扱っています。作る前に決めるか、作ってから決めるかという対比は、文章の記事 [先に決めるか、作ってから決めるか(grill/pstack)](/blog/decide-before-or-after/) にも書きました。

## 出典

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
