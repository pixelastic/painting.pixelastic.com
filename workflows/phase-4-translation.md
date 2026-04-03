# Phase 4 — Translate and Build the Draft

**Trigger**: User has finished describing all images in French (Phase 3 completed)

This is the most critical phase. You translate French speech-to-text into English blog content that sounds natural and human-written.

---

## Step 1: Translate Image Descriptions

### Core Principles

1. **Apply the glossary** (see main WORKFLOW.md)
2. **Keep the user's voice**: direct, practical, slightly casual
3. **Preserve technical precision**: Paint names, brand names stay as-is, never translated
   - Example: "Necrotic Flesh", "Speedpaints", "Megablocks"

### Critical Writing Rules

#### ❌ NEVER Use Em-Dashes (—)

Em-dashes are an AI writing tell. Always avoid them.

**Bad**:
```
I thought it would be cool to keep that feature working—having the flames light up
```

**Good**:
```
I thought it would be cool to keep that feature working, so the flames would light up when you move the stone.
```

**Good** (alternative):
```
I thought it would be cool to keep that feature working. The flames would light up when you move the stone.
```

When you need to connect ideas:
- Use conjunctions: "so", "and", "but"
- Use commas for closely related thoughts
- Split into two sentences with smooth transitions

#### ✅ Vary Sentence Length

Mix short punchy sentences (5-10 words) with longer ones (15-25 words) for natural rhythm.

**Bad** (monotonous):
```
I picked up this set. The scale looked good. I thought I'd use it. It had a lighting feature.
```

**Good** (varied):
```
I picked up this set at a secondhand shop. The scale looked about right, and I thought I could turn it into something usable.
```

#### ✅ Translation is Not Literal

Reorganize ideas (A,B,C → B,C,A) if it improves clarity or flow.

The speech-to-text is your source of ideas, not a script to follow word-for-word.

---

## Step 2: Write the Intro Paragraph

**Length**: 2-4 sentences

**Placement**: Directly after Image 1 (Image 1 serves as the header)

### What to Include

- What is this project?
- Why did they make it?
- One hook that makes the reader want to keep reading

### Critical Rules for Intro

#### ❌ DON'T Over-Explain Context

This is a painting/terrain blog. Don't say:
- ❌ "for tabletop RPG terrain"
- ❌ "for tabletop gaming sessions"

But DO give minimal context about what the piece is used for.

**Bad** (over-explained):
```
I picked up this set and thought it would work perfectly for tabletop RPG terrain pieces.
```

**Bad** (too minimal, too dry):
```
I picked up this set and thought the scale looked about right for something usable.
```

**Good** (just right):
```
I picked up this Megablocks set at a secondhand shop. Sacrificial altars are a pretty common terrain piece, and the scale looked about right, so I figured I could turn it into something usable.
```

#### ❌ DON'T Summarize Everything

The intro sets up the story. It doesn't recap all the details that will be described under each image.

**Bad** (too detailed):
```
I found this altar set. It has a lighting mechanism that I tried to preserve, but I failed and ended up sculpting foam instead.
```

**Good** (sets up the story):
```
I picked up this altar set at a secondhand shop. The scale looked about right, and I figured I could turn it into something usable.
```

#### ❌ DON'T Repeat Details from Image Descriptions

If you mention something specific in the intro, don't repeat the exact same detail in the first image description.

**Example of what NOT to do**:

Intro:
```
The original toy had a cool lighting feature: when you move the central stone, flames light up.
```

Image 2:
```
The central stone moves, and when it does, it lights up the flames on the columns. ← REPETITION!
```

**Better approach**:

Intro:
```
I picked up this set and thought I could make something out of it.
```

Image 2:
```
The central stone actually moves, and when it does, it triggers a switch that lights up the flames. I wanted to keep that working.
```

---

## Step 3: Write the Conclusion Paragraph

**Length**: 2-4 sentences

**Placement**: At the very end, after all image descriptions

### What to Include

- What did they think of the result?
- What did they learn?
- What would they do differently?
- Future plans or updates?

**Example**:
```
This project stayed in limbo for quite a while without being finished. I eventually completed it, but took a completely different approach. I separated the pieces from the base and painted them individually, which made everything much more modular.
```

---

## Step 4: Assemble the Full index.md

### Structure

```markdown
---
title: "<Title in English>"
tags: <tag>
date: <YYYY-MM-DD>
layout: post
---

<!-- Image 1 -->
![](image-YYYYMMDDHHMMSS.png)

<intro paragraph>

<!-- Image 2 -->
![](image-YYYYMMDDHHMMSS.png)

<description for image 2>

<!-- Image 3 -->
![](image-YYYYMMDDHHMMSS.png)

<description for image 3>

...

<conclusion paragraph>
```

### Critical Rules

1. **Image 1 is the header** - appears only ONCE
2. **Intro goes after Image 1** - not before it
3. **NO duplicate images**

---

## Step 5: Present to User

Tell the user:

**"Voilà le draft complet. Lis-le et dis-moi ce que tu veux changer, je m'occupe des corrections."**

Then proceed to Phase 5 (Review and Iterate).

---

## Anti-Patterns to Avoid

| ❌ Don't | ✅ Do |
|---------|--------|
| Use em-dashes (—) | Use conjunctions, commas, or split sentences |
| Say "for tabletop RPG terrain" | Just describe what it is |
| Repeat intro details in descriptions | Keep intro separate from image details |
| Summarize everything in intro | Set up the story, don't recap |
| Translate word-for-word | Reorganize for clarity and flow |
| Use clickbait phrases ("The best part?") | Write naturally and directly |
| Be overly formal ("preserve this feature") | Use simple language ("keep it working") |
| Be dramatic ("more dramatic centerpiece") | Be matter-of-fact ("proper centerpiece") |

---

## Examples of Good vs Bad Writing

### Example 1: Em-Dashes

❌ **Bad**:
```
I used my fingernail to tear off bits of foam—it creates a nice texture.
```

✅ **Good**:
```
I used my fingernail to tear off bits of foam. It creates a nice texture.
```

✅ **Good** (alternative):
```
I used my fingernail to tear off bits of foam, which creates a nice texture.
```

### Example 2: Redundant Context

❌ **Bad**:
```
I thought this would work perfectly for tabletop RPG games.
```

✅ **Good**:
```
I thought this could work.
```

### Example 3: Repetition

❌ **Bad**:

Intro:
```
The lighting feature was cool—flames light up when you move the stone.
```

Image 2:
```
When you slide the stone, flames light up on the columns.
```

✅ **Good**:

Intro:
```
I picked up this set and figured I could make something out of it.
```

Image 2:
```
When you slide the central stone, it triggers a switch that lights up the flames on the columns. I wanted to keep that feature working.
```

---

**Next**: [Phase 5 — Review and Iterate](phase-5-review.md)
