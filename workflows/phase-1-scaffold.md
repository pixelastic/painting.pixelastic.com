# Phase 1 — Create the Post Scaffold

**Input (what the user has done)**: User says "nouveau post sur [subject]" or "new post about [subject]"

---

## Steps

1. **Infer a short English slug** from the subject
   - Example: "maison en ruine" → `ruinedHouse`
   - Use camelCase (preferred for this project)
   - Keep it short and descriptive
   - **DO NOT ask the user for confirmation** - just make the decision

2. **Create the directory**: `src/<slug>/`
   - If it already exists, rephrase the slug with different words that mean the same thing
   - Example: if `ruinedHouse` exists, try `abandonedHouse`, `damagedBuilding`, `destroyedHome`, etc.
   - **DO NOT use numeric suffixes** - find a different way to say it

3. **Create `src/<slug>/index.md`** with:
   - Frontmatter filled in (use today's date, infer title from subject)
   - An empty line for content

4. **Open in Typora**:
   ```bash
   typora src/<slug>/index.md > /dev/null 2>&1 &
   ```
   (Run in background, suppress output)

5. **Tell the user**:
   **"Le dossier `<slug>` est prêt. Tu peux coller tes screenshots dans Typora. Dis-moi quand tu as fini."**

---

## Important

- **DO NOT ask the user to choose a slug or title** - make the decision yourself
- The title and slug can be refined later in Phase 6 (SEO Enrichment) if needed
- Focus on getting Typora open quickly so the user can paste images

---

**Next**: [Phase 2 — Number the Images](phase-2-numbering.md)
