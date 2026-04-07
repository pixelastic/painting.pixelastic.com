# Phase 6 — SEO Enrichment

**Input (what the user has done)**: User has approved the content (said "c'est bon, ça me va" or similar)

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

## Step 5: Find Internal Link Opportunities

Search for related posts in the blog that could be linked to.

### Strategy

1. **Identify key themes** in the current post:
   - Main materials used (foam, cardboard, etc.)
   - Techniques mentioned (sculpting, drybrushing, etc.)
   - Similar project types (ruined houses, altars, etc.)
   - Common challenges (lighting mechanisms, painting, etc.)

2. **Search other posts** in `src/*/index.md`:
   - Use Grep to find posts mentioning the same themes
   - Read promising posts to verify relevance

3. **Suggest 2-3 internal links** where appropriate:
   - Link naturally within the text (not forced)
   - Link to posts that add value for the reader
   - Prefer linking from specific mentions (e.g., "foam sculpting" → link to another foam project)

### Guidelines

**Good internal links:**
- ✅ "I used foam sculpting [like I did for the ruined tower](../ruinedTower/)"
- ✅ "The lighting mechanism was broken, similar to what happened with the [Hello Kitty house](../helloKittyRuinedHouse/)"
- ✅ Natural flow, adds context

**Bad internal links:**
- ❌ Don't force links where they don't fit
- ❌ Don't link just for SEO (must add value for reader)
- ❌ Don't add too many links (2-3 max per post)
- ❌ Don't link to unrelated posts

### Link Format

Use relative paths:
```markdown
[link text](../other-post-slug/)
```

### If No Good Links Found

If you can't find 2-3 relevant posts to link to, **that's fine**. Don't force it.

Tell the user: **"Je n'ai pas trouvé de posts pertinents à linker pour celui-ci."**

---

## Step 6: Update File with Links (if found)

If you found good internal link opportunities:

1. **Use the Edit tool** to add the links in the post body
2. **Integrate them naturally** into existing sentences

---

## Step 7: Add Alt Text to Images

Add descriptive alt text to all images by paraphrasing the text description below each image.

### Guidelines

**Alt text format:**
- 1 sentence summary of what the image shows + why it's relevant
- Based on the text description below the image, NOT visual analysis
- 40-80 characters ideal (screen readers)
- Describe what matters for understanding the content

**Examples:**

```markdown
<!-- Before -->
![](image-20260402110901122.png)

The central stone actually moves...

<!-- After -->
![Disassembled Megablocks altar showing central stone and flame columns](image-20260402110901122.png)

The central stone actually moves...
```

### Process

1. Read each image's descriptive text (the paragraph below it)
2. Write a 1-sentence summary as alt text
3. Use the Edit tool to add alt text to all images in the file

### What to Include in Alt Text

- **What the image shows** (the subject)
- **Key details mentioned in the text** (technique, material, state)
- **Context if needed** (scale, perspective)

### What NOT to Include

- ❌ Don't say "image of" or "photo of" (redundant)
- ❌ Don't describe irrelevant visual details
- ❌ Don't copy the entire paragraph
- ❌ Don't exceed 100 characters if possible

---

## Step 8: Present to User

Show the user what was changed:

1. **Title**: (kept/changed to "...")
2. **Meta description added**: "..."
3. **Alt text added**: X images with alt text
4. **Internal links added**: X link(s) to [post names] (if found)
5. **File updated**: `src/<slug>/index.md`

Tell the user: **"J'ai mis à jour le frontmatter, ajouté les alt text sur X images et X lien(s) interne(s). Regarde dans Typora si ça te va."**

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

**Next**: [Phase 7 — Handoff](phase-7-handoff.md)
