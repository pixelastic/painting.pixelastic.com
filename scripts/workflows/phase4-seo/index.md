# Phase 4 — SEO Enrichment

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
2. Evaluate if the current title is good enough:
   - If it follows the guidelines above → **Keep it, don't change it**
   - If it clearly violates guidelines (too generic, has superlatives, missing subject) → **Change it automatically**
3. **DO NOT ask the user to choose between alternatives**
   - You are the SEO expert, make the decision yourself
   - Only change the title if there's a clear improvement to be made
   - When in doubt, keep the existing title

---

## Step 2: Generate Keywords

Create a `keywords` field for the frontmatter.

### Guidelines

- **Format**: Comma-separated string
- **Count**: 6-10 keywords maximum (strictly enforced)
  - More than 10 keywords? Choose the most specific/unique ones. No exceptions.
- **Extract from content**: Read the actual post, don't infer
- **Include**:
  - Specific subjects mentioned (creature types, terrain types)
  - Techniques actually used (speedpaints, drybrushing, foam sculpting)
  - Materials mentioned (foam, cardboard, specific products)
  - Game systems if explicitly mentioned (Zombicide, Pathfinder, Kingmaker)
- **Avoid**:
  - ❌ Generic site-wide terms (miniature painting, terrain crafting, tabletop rpg)
  - ❌ Inferred content not in post (don't add "D&D" if post says "Pathfinder")
  - ❌ "Tutorial" unless post has step-by-step instructions
  - ❌ Multi-word brand names (use "skinks conversion" not "Games Workshop skinks conversion")
  - ❌ Over 10 keywords "because they're all important" - prioritize instead

### Format Example

```yaml
keywords: "kobolds, speedpaints, metallic effects, Kingmaker, skinks conversion, Heroclix"
```

---

## Step 3: Write Meta Description

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

## Step 4: Update Frontmatter

Add the `keywords` and `description` fields to the frontmatter:

```markdown
---
title: "Sacrificial Altar Megablocks"
tags: terrain
date: 2026-04-02
layout: post
keywords: "Megablocks altar, foam sculpting, lighting mechanism, secondhand finds, modular terrain"
description: "Found a Megablocks altar set at a secondhand shop. Tried to preserve the lighting mechanism but ended up sculpting a foam monolith instead."
---
```

---

## Step 5: Update the File

**Update the frontmatter directly** in the index.md file:

1. If title needs changing, update it
2. Add the `keywords` field (6-10 keywords, comma-separated string)
3. Add the `description` field with the optimized meta description

Use the Edit tool to modify the frontmatter.

## Step 6: Find Internal Link Opportunities

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

## Step 7: Update File with Links (if found)

If you found good internal link opportunities:

1. **Use the Edit tool** to add the links in the post body
2. **Integrate them naturally** into existing sentences

---

## Step 8: Add Alt Text to Images

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

## Step 9: Present to User

Show the user what was done (concisely):

- **Title**: kept ✓ (or "changed to '...'")
- **Keywords**: added (X keywords)
- **Meta description**: added
- **Alt text**: added to X images
- **Internal links**: X link(s) added (or "none found")

Tell the user: **"SEO enrichment terminé. Le fichier est prêt pour le commit."**

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

---

## Completion

Tell the user:

**"Le SEO est optimisé. À toi de faire le commit maintenant."**

---

**FIN** - User commits the changes manually
