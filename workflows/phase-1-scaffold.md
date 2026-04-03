# Phase 1 — Create the Post Scaffold

**Trigger**: User says "nouveau post" or "new post" and describes the subject

---

## Steps

1. **Infer a short English slug** from the subject
   - Example: "maison en ruine" → `ruined-house`
   - Use camelCase or kebab-case

2. **Create the directory**: `src/<slug>/`
   - If it already exists, find another slug

3. **Create `src/<slug>/index.md`** with:
   - Frontmatter filled in (use today's date, infer title from subject)
   - An empty line for content

4. **Open in Typora**:
   ```bash
   typora src/<slug>/index.md > /dev/null 2>&1 &
   ```
   (Run in background, suppress output)

5. **Tell the user**:
   **"Le dossier est prêt. Tu peux coller tes screenshots dans Typora. Dis-moi quand tu as fini."**

---

**Next**: [Phase 2 — Number the Images](phase-2-numbering.md)
