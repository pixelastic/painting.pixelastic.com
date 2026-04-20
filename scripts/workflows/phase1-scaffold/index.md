# Phase 1 — Create the Post Scaffold

**Input (what the user has done)**: User says "nouveau post sur [subject]" or "new post about [subject]"

---

## Steps

**IMPORTANT**: This phase is about creating an EMPTY scaffold. DO NOT add any content, placeholder text, or dummy images. The user will paste real images in Typora.

1. **Infer a short English slug** from the subject
   - Example: "maison en ruine" → `ruinedHouse`
   - Use camelCase (preferred for this project)
   - Keep it short and descriptive
   - **DO NOT ask the user for confirmation** - just make the decision
   - **DO NOT search/read other files first** - just infer from the subject

2. **Create the directory**: `content/posts/<slug>/`
   - If it already exists, rephrase the slug with different words that mean the same thing
   - Example: if `ruinedHouse` exists, try `abandonedHouse`, `damagedBuilding`, `destroyedHome`, etc.
   - **DO NOT use numeric suffixes** - find a different way to say it

3. **Create `content/posts/<slug>/index.md`** with ONLY frontmatter:
   ```markdown
   ---
   title: "<Inferred Title>"
   tags: [terrain]
   date: <YYYY-MM-DD>
   layout: post
   ---

   ```
   - **NO placeholder text**
   - **NO dummy images**
   - **NO content at all** - just frontmatter + one blank line
   - The user will add images and content manually in Typora

4. **Open in Typora** (MANDATORY):
   ```bash
   typora content/posts/<slug>/index.md > /dev/null 2>&1 &
   ```
   (Run in background, suppress output)

   **This is the most important step** - ALWAYS open Typora automatically
   - **DO NOT ask the user if they want Typora opened**
   - **DO NOT wait for confirmation**
   - Just open it immediately after creating the file

5. **Tell the user**:
   **"Le dossier `<slug>` est prêt. Tu peux coller tes screenshots dans Typora. Dis-moi quand tu as fini."**

---

## Important Rules

### DO NOT:
- ❌ Ask the user to choose a slug or title
- ❌ Ask the user if they want Typora opened
- ❌ Search or read other posts first (wastes time)
- ❌ Add placeholder text like `[Description de...]`
- ❌ Add dummy images like `image-20260407-01.png`
- ❌ Write any content in the body
- ❌ Try to "help" by pre-filling content

### DO:
- ✅ Make the slug/title decision immediately
- ✅ Create an EMPTY index.md with only frontmatter
- ✅ Open Typora automatically (no questions asked)
- ✅ Trust that the user will paste real images in Typora

### Why?
- The title and slug can be refined later in Phase 6 (SEO Enrichment)
- The user has real images ready to paste
- Placeholder content is useless and gets deleted anyway
- Speed matters - get Typora open ASAP

---

**Next**: [Phase 2 — Number the Images](phase-2-numbering.md)
