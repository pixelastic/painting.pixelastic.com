# Painting Blog Post Workflow

**DEFAULT: User wants to create a new post. Read and follow [Phase 1](phase1-scaffold/index.md) immediately.**

Do NOT ask for title, tag, or date. Phase 1 will infer everything from the subject.

Only do something else if user explicitly requests a different phase (update post, continue from phase X, etc.).

---

## Tech Stack

- **Blog engine**: Norska (custom static site generator)
- **Editor**: Typora
- **Translation**: Claude translates French → English
- **Speech-to-text**: User's keybinding outputs French text

---

## Directory Structure

Posts live at:
```
src/<post-slug>/index.md
src/<post-slug>/<image-files>
```

Images are auto-saved by Typora when copy-pasted.
Filename format: `image-YYYYMMDDHHMMSS.png`

---

## Frontmatter Template

```markdown
---
title: "<Title in English>"
tags: <tag>
date: <YYYY-MM-DD>
layout: post
---
```

Valid tags: `terrain`, `miniature`, `painting`, `wip` (use only one)

---

## Finding Existing Posts

**Important**: Slugs are in ENGLISH, even when user describes in French.

Examples:
- "maison en ruine Hello Kitty" → `helloKittyRuinedHouse/`
- "rats de Warhammer Quest" → `warhammerQuestRats/`

**Search strategy**:
1. List posts: `ls src/`
2. Search by English keywords in slugs or file contents

---

## Workflows

### Creating a New Post
**Trigger**: "nouveau post" or "new post"
→ Follow [Phase 1](phase1-scaffold/index.md)

### Updating an Existing Post
**Trigger**: "update", "modifier", "ajouter des photos"

1. Find post in `src/` (slugs are in English)
2. Read `src/<slug>/index.md`
3. Ask: **"J'ai trouvé le post. Veux-tu ouvrir Typora pour ajouter/modifier des images ? Ou les as-tu déjà ajoutées ?"**
4. If images ready → [Phase 2](phase2-numbering/index.md)
5. If user wants Typora → `typora src/<slug>/index.md > /dev/null 2>&1 &`, then tell user it's open

---

## The Phases

A phase ends when the agent needs user input or validation.

### [Phase 1 — Create the Post Scaffold](phase1-scaffold/index.md)
Create directory, frontmatter, open Typora
→ **Waits for user to add images in Typora**

### [Phase 2 — Number the Images](phase2-numbering/index.md)
Add numbered comments, delete orphans, compress images in background
→ **Waits for user to describe images in French**

### [Phase 3 — Write the Draft](phase3-writing/index.md)
This phase runs multiple sub-steps autonomously:
1. [Parse and translate](phase3-writing/1-translation.md) - Parse French descriptions, translate to English with glossary, write intro/conclusion
2. [Flow & polish](phase3-writing/2-flow-polish.md) - Merge choppy sentences, eliminate repetitions, add transitions
3. [Humanization](phase3-writing/3-humanization.md) - Remove AI patterns including em-dashes

→ **Waits for user to review and approve the draft**

When user reviews, they can either:
- Request changes → Agent applies them and waits again
- Say "c'est bon" → Proceed to Phase 4

### [Phase 4 — SEO Enrichment](phase4-seo/index.md)
Only runs after user approves the draft. Optimizes title, writes meta description, updates frontmatter

→ **FIN - User commits the changes**

---

> **Note**: Publishing is always done manually by the user. Claude never runs git commands.
