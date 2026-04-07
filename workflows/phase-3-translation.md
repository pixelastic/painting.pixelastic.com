# Phase 3 — Translation

**Input (what the user has done)**: User has recorded their descriptions in French and sent a large message. The text may be unstructured (images referenced out of order, backtracking, details added afterward).

---

## What to Expect

The French text may be unstructured:
- User may reference images out of order
- May go back to a previous image
- May add details they forgot

This is expected and fine.

---

## Step 1: Parse and Group Descriptions

1. **Parse the text** and extract all references to image numbers

2. **Group the text by image number**

3. **Check for missing descriptions**:
   - If some images have no description, ask:
   **"Je n'ai pas de description pour l'image X et l'image Y. Tu veux ajouter quelque chose, ou on les laisse sans texte ?"**

4. **Clarify if needed**:
   - If something is unclear or ambiguous, ask for clarification BEFORE translating

5. **Once confirmed**, proceed to Step 2

---

## Step 2: Translate Image Descriptions

### Core Principles

1. **Apply the glossary** (see main WORKFLOW.md)
2. **Preserve technical precision**: Paint names, brand names stay as-is, never translated
   - Example: "Necrotic Flesh", "Speedpaints", "Megablocks"
3. **Use first person voice**: "I usually paint", not "you usually paint"
4. **Keep it straightforward**: Just translate the content, don't worry about style yet

### Important

- **NO italic text** in descriptions (only for special terms like Latin names)
- Translate faithfully but naturally
- Don't try to make it sound polished yet (that's Phase 4)

---

## Step 3: Write the Intro Paragraph

**Length**: 2-4 sentences

**Placement**: Directly after Image 1 (Image 1 serves as the header)

### What to Include

- What is this project?
- Why did they make it?
- One hook that makes the reader want to keep reading

### Keep It Simple

- Write a straightforward intro
- Don't overthink the style (that's Phase 4)
- Just set up the story

---

## Step 4: Write the Conclusion Paragraph

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

## Step 5: Assemble the Full index.md

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
4. **NO italic text** - Write descriptions as regular paragraphs without `_underscores_` or `*asterisks*` (only use italic for special terms like Latin names)
5. **First person voice** - "I usually paint", not "you usually paint"

---

## Step 6: Present to User

Tell the user:

**"Voilà le draft traduit. Je vais maintenant le relire pour enlever les patterns AI."**

Then proceed immediately to Phase 4 (Humanization).

---

**Next**: [Phase 4 — Humanization](phase-4-humanization.md)
