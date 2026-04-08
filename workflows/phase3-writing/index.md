# Phase 3 — Write the Draft

**Input**: User has recorded their descriptions in French and sent a large message. The text may be unstructured (images referenced out of order, backtracking, details added afterward).

---

## What to Expect

The French text may be unstructured:
- User may reference images out of order
- May go back to a previous image
- May add details they forgot

This is expected and fine.

---

## Execution

This phase runs **three sub-steps autonomously** without user intervention:

### Step 1: [Translation](1-translation.md)
- Parse French descriptions and group by image
- Translate to English with glossary
- Write intro and conclusion paragraphs
- Assemble the full index.md

### Step 2: [Flow & Polish](2-flow-polish.md)
- Merge choppy sentences into flowing prose
- Eliminate obvious repetitions
- Add transitions where there's clear logical connection
- May use em-dashes temporarily to connect ideas

### Step 3: [Humanization](3-humanization.md)
- Remove AI writing patterns
- **Remove ALL em-dashes** (including those added during flow improvement)
- Remove pompous adjectives and generic conclusions
- Ensure text sounds natural and human-written

---

## After Completion

Tell the user:

**"Voilà le draft complet. Lis-le et dis-moi ce que tu veux changer."**

Then **wait for user feedback**. The user will either:
- **Request changes**: Apply them and wait again for feedback
- **Say "c'est bon"**: Proceed to [Phase 4 — SEO](../phase4-seo/index.md)

---

**Next**: User reviews → Either iterate or proceed to [Phase 4 — SEO](../phase4-seo/index.md)
