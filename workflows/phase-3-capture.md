# Phase 3 — Capture the User's Descriptions

**Trigger**: User sends a large block of French text describing the images

---

## What to Expect

The text may be unstructured:
- User may reference images out of order
- May go back to a previous image
- May add details they forgot

This is expected and fine.

---

## Steps

1. **Parse the text** and extract all references to image numbers

2. **Group the text by image number**

3. **Check for missing descriptions**:
   - If some images have no description, ask:
   **"Je n'ai pas de description pour l'image X et l'image Y. Tu veux ajouter quelque chose, ou on les laisse sans texte ?"**

4. **Clarify if needed**:
   - If something is unclear or ambiguous, ask for clarification BEFORE translating

5. **Once confirmed**, proceed to Phase 4

---

**Next**: [Phase 4 — Translate and Build Draft](phase-4-translation.md)
