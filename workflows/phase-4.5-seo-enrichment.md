# Phase 4.5 — SEO Enrichment

**Trigger**: User has approved the content (Phase 4 & 5 completed). Ready to finalize for publishing.

This phase enriches the frontmatter with optimized title and meta description.

---

## Step 1: Optimize the Title

Read the current `title` in the frontmatter and the post content.

### Guidelines

- **Keep it descriptive and specific**
- **Include the main subject** (what was painted/built)
- **Avoid clickbait or over-the-top language**
- **Length**: 40-60 characters ideal
- **Format examples**:
  - "Sacrificial Altar Megablocks"
  - "Warhammer Quest Rats"
  - "Hello Kitty Ruined House"

### What NOT to do

- ❌ Don't add "Tutorial" or "How to" unless it genuinely is one
- ❌ Don't add "Terrain Piece" (it's implied by the blog)
- ❌ Don't use superlatives ("Amazing", "Epic", "Ultimate")
- ❌ Don't make it too generic ("My Latest Project")

### Process

1. Analyze the post content
2. Suggest 2-3 alternative titles if the current one could be improved
3. Ask the user which they prefer

---

## Step 2: Write Meta Description

Create a `description` field for the frontmatter.

### Guidelines

- **Length**: 150-160 characters ideal (Norska truncates at 180, but Google shows ~155-160)
- **Fact-dense**: Include 1 specific detail or technique mentioned in the post
- **Summarize the journey**: What was attempted, what actually happened
- **Write naturally**: Conversational, not keyword-stuffed
- **End with a period**
- **SEO principles**:
  - Front-load important keywords in first 120 characters (what shows in mobile results)
  - Make it compelling enough to earn clicks
  - Reflect the actual content (avoid clickbait)

### Format

```
Found a [object] at [place]. [What you did]. [One interesting detail or result].
```

### Examples

**Good**:
```
Found a Megablocks altar set at a secondhand shop. Tried to preserve the lighting mechanism but ended up sculpting a foam monolith instead. Much more modular result.
```

**Bad** (too generic):
```
A terrain piece I made for tabletop gaming.
```

**Bad** (too long, over 180 chars):
```
I found this really cool Megablocks sacrificial altar set at a secondhand shop and thought it would be perfect for tabletop RPG terrain so I tried to keep the lighting mechanism working but it was broken.
```

**Bad** (keyword stuffing):
```
Megablocks terrain piece altar sacrifice tabletop RPG miniature painting foam sculpting tutorial.
```

---

## Step 3: Update Frontmatter

Add the `description` field to the frontmatter:

```markdown
---
title: "Sacrificial Altar Megablocks"
tags: terrain
date: 2026-04-02
layout: post
description: "Found a Megablocks altar set at a secondhand shop. Tried to preserve the lighting mechanism but ended up sculpting a foam monolith instead."
---
```

---

## Step 4: Update the File

**Update the frontmatter directly** in the index.md file:

1. If title needs changing, update it
2. Add the `description` field with the optimized meta description

Use the Edit tool to modify the frontmatter.

## Step 5: Present to User

Show the user what was changed:

1. **Title**: (kept/changed to "...")
2. **Meta description added**: "..."
3. **File updated**: `src/<slug>/index.md`

Tell the user: **"J'ai mis à jour le frontmatter avec le titre et la description. Regarde dans Typora si ça te va."**

---

## Anti-Patterns

| ❌ Don't | ✅ Do |
|---------|--------|
| "Amazing Megablocks Altar Build!" | "Sacrificial Altar Megablocks" |
| Generic: "My latest terrain piece" | Specific: "Warhammer Quest Rats" |
| Keyword stuff: "terrain RPG miniature paint" | Natural: "Found at a secondhand shop..." |
| Too long (>180 chars) | Concise, under 180 chars |
| No period at end | End with proper punctuation. |

---

**Next**: [Phase 5 — Review and Iterate](phase-5-review.md) or [Phase 6 — Handoff](phase-6-handoff.md)
