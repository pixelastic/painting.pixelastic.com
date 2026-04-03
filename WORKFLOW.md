# Painting Blog Post Workflow

This is the master workflow for creating posts on painting.pixelastic.com.

Claude Code reads this file at the start of every session. Follow each phase in order. Ask for confirmation before moving to the next phase.

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

## Glossary FR → EN

Always apply these translations:

| French | English |
|---|---|
| socle | base |
| figurine | miniature |
| enduit de rebouchage | spackle |
| polystyrène | foam |
| sous-couche | primer |
| brossage à sec | drybrushing |
| mélange | mix |
| pistolet à colle | glue gun |
| papier de verre | sandpaper |
| mousse | foam (material) |
| décor | terrain / scenery |
| campagne | campaign |

Add new terms as they come up.

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
→ Follow [Phase 1](workflows/phase-1-scaffold.md)

### Updating an Existing Post
**Trigger**: "update", "modifier", "ajouter des photos"

1. Find post in `src/` (slugs are in English)
2. Read `src/<slug>/index.md`
3. Ask: **"J'ai trouvé le post. Veux-tu ouvrir Typora pour ajouter/modifier des images ? Ou les as-tu déjà ajoutées ?"**
4. If images ready → [Phase 2](workflows/phase-2-numbering.md)
5. If user wants Typora → `typora src/<slug>/index.md > /dev/null 2>&1 &`, then tell user it's open

---

## The 6 Phases

### [Phase 1 — Create the Post Scaffold](workflows/phase-1-scaffold.md)
Create directory, frontmatter, open Typora

### [Phase 2 — Number the Images](workflows/phase-2-numbering.md)
Add numbered comments, delete orphans

### [Phase 3 — Capture Descriptions](workflows/phase-3-capture.md)
Parse French speech-to-text, group by image

### [Phase 4 — Translate and Build Draft](workflows/phase-4-translation.md)
**Critical phase**: Translate to English, write intro/conclusion, assemble final markdown

### [Phase 5 — Review and Iterate](workflows/phase-5-review.md)
Apply user corrections, iterate until approved

### [Phase 6 — Handoff for Publishing](workflows/phase-6-handoff.md)
Final checks, user publishes manually

---

> **Note**: Publishing is always done manually by the user. Claude never runs git commands.
