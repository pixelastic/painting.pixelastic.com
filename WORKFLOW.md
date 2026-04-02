# Painting Blog Post Workflow

This file is the master workflow for creating a new post on
painting.pixelastic.com. It is intended to be read by Claude Code at the start
of every new post session. Follow each phase in order. Do not skip ahead. Ask
for confirmation before moving to the next phase.

---

## Tech stack

- **Blog engine**: Norska (custom static site generator)
- **Editor**: Typora
- **Translation**: Claude translates directly from French to English
- **Speech-to-text**: User's own keybinding, outputs French text directly into the session

---

## Directory structure

Posts live at:
```
src/<post-slug>/index.md
src/<post-slug>/<image-files>
```

Images are saved automatically by Typora into the same folder as `index.md` when copy-pasted.
Image filenames follow Typora's default format: `image-YYYYMMDDHHMMSS.png`

---

## Finding existing posts

**Important**: Post directory names (slugs) are in ENGLISH, even when the user describes them in French.

Examples:
- User says "maison en ruine Hello Kitty" → look for `helloKittyRuinedHouse/`
- User says "rats de Warhammer Quest" → look for `warhammerQuestRats/`
- User says "décor de lave" → look for `lavaBases/` or similar

**Search strategy**:
1. All posts are in `src/<slug>/index.md`
2. List posts with: `ls src/` or similar
3. Search by English keywords in the slug names or file contents

---

## Common workflows

### Creating a new post
**Trigger**: User says "nouveau post" or "new post"
→ Follow **Phase 1** below

### Updating an existing post
**Trigger**: User says "update", "modifier", "ajouter des photos" to an existing post

1. Find the post in `src/` (remember: slugs are in English)
2. Read `src/<slug>/index.md`
3. Ask: **"J'ai trouvé le post. Veux-tu ouvrir Typora pour ajouter/modifier des images ? Ou les as-tu déjà ajoutées ?"**
4. If images are ready → continue to **Phase 2**
5. If user wants Typora → run `typora src/<slug>/index.md`, wait for confirmation

---

## Frontmatter template

```markdown
---
title: "<Title in English>"
tags: <tag>
date: <YYYY-MM-DD>
layout: post
---
```

Valid tags: `terrain`, `miniature`, `painting`, `wip`
Use only one tag per post.

---

## Glossary FR → EN

Always apply these translations consistently:

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
| mousse | foam (context: material) |
| décor | terrain / scenery |
| campagne | campaign |

Add new terms to this glossary as they come up during sessions.

---

## Phase 1 — Create the post scaffold

**Trigger**: User says something like "nouveau post" or "new post" and describes the subject.

1. Infer a short English slug from the subject (e.g. "maison en ruine" → `ruined-house`)
2. Create the directory: `src/<slug>/`. Find another slug if the directory already exists.
3. Create `src/<slug>/index.md` with:
   - Frontmatter filled in (use today's date, infer title from subject)
   - An empty line for the content
4. Open the file in Typora: `typora src/<slug>/index.md`
5. Tell the user: **"Le dossier est prêt. Tu peux coller tes screenshots dans Typora. Dis-moi quand tu as fini."**

---

## Phase 2 — Number the images

**Trigger**: User says "c'est bon, j'ai mis toutes les images" or similar.

1. Read `index.md` and extract all image references, in the order they appear in the file. This is the source of truth — not the directory.
2. Delete any image files in `src/<slug>/` that are NOT referenced in `index.md` (orphan images from copy-paste mistakes)
3. Update `index.md`: add a numbered label comment above each image reference, preserving their order:

```markdown
<!-- Image 1 -->
![](image-20260317192131446.png)

<!-- Image 2 -->
![](image-20260317192306699.png)
```

3. Tell the user: **"J'ai numéroté X images. Tu peux maintenant me décrire chaque image en français. Référence-les par leur numéro : 'sur l'image 1...', 'sur l'image 3...'. Quand tu as tout dit, envoie ton message."**

---

## Phase 3 — Capture the user's descriptions

**Trigger**: User sends a large block of French text describing the images.

This text may be unstructured. The user may reference images out of order, go back to a previous image, or add details they forgot. That is expected and fine.

1. Parse the text and extract all references to image numbers
2. Group the text by image number
3. If some images have no description, ask: **"Je n'ai pas de description pour l'image X et l'image Y. Tu veux ajouter quelque chose, ou on les laisse sans texte ?"**
4. If something is unclear or ambiguous, ask for clarification before translating
5. Once all descriptions are confirmed, proceed to Phase 4

---

## Phase 4 — Translate and build the draft

1. Translate all descriptions from French to English
   - Apply the glossary consistently
   - Keep the user's voice: direct, practical, slightly casual. Not overly formal.
   - Preserve technical precision (paint names, brand names, material names stay as-is)
   - Paint names and brand names are never translated (e.g. "Necrotic Flesh", "Speedpaints")
2. Write an **intro paragraph** (2-4 sentences) based on what the user described overall:
   - What is this project?
   - Why did they make it?
   - One hook that makes the reader want to keep reading
3. Write a **conclusion paragraph** (2-4 sentences):
   - What did they think of the result?
   - What did they learn?
   - What would they do differently?
4. Assemble the full `index.md`:

```markdown
---
frontmatter
---

![](header-image.png)
<intro paragraph>

<!-- Image 1 -->
![](image-1.png)
<description for image 1>

<!-- Image 2 -->
![](image-2.png)
<description for image 2>

...

<conclusion paragraph>
```

5. Tell the user: **"Voilà le draft complet. Lis-le et dis-moi ce que tu veux changer, je m'occupe des corrections."**

---

## Phase 5 — Review and iterate

**Trigger**: User reads the draft and gives feedback.

- Apply corrections as requested
- If the user says something is off with the tone, adjust and show the corrected paragraph
- Repeat until the user says "c'est bon" or "publish" or similar

---

## Phase 6 — Handoff for publishing

**Trigger**: User approves the draft.

1. Do a final check:
   - All image references exist in the directory
   - Frontmatter is complete
   - No French words remaining in the body text
   - Glossary terms have been applied correctly
2. Tell the user: **"Le fichier est prêt. À toi de faire le git add / commit / push."**

> Publishing is always done manually by the user. Claude never runs git commands.
