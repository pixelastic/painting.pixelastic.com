# Phase 4.5 — Humanization (Targeted AI Pattern Removal)

**Trigger**: Automatically after Phase 4 (Translation) completes

This phase removes AI-generated writing patterns from the translated English text with a **light touch**. The goal is to remove obvious AI tells while keeping the personal voice and detailed explanations intact.

---

## Principles

1. **Preserve the good parts** - Most of the text is fine, don't change it
2. **Target only AI tells** - Focus on removing pompous words and generic conclusions
3. **Keep personality** - Maintain "I really enjoy", detailed explanations, honest self-criticism
4. **Keep sentence structure** - Don't simplify or shorten good sentences

---

## Step 1: Identify AI Patterns to Remove

Scan the text for these **specific patterns only**:

### Pompous Adjectives (Remove or Replace)
- "fascinating" → remove or use "interesting" if needed
- "highly original" → remove "highly", or just say "original"
- "refreshing change" → "different from"
- "perfect" (when exaggerating) → remove or tone down
- "unique" (when redundant) → remove if obvious
- "vibrant" → "bright" or specific color
- "stunning" → remove or be specific
- "remarkable" → remove or be specific

### Generic AI Conclusions (Rewrite)
- "serves its purpose well" → be more specific about what it does
- "stands out from" → if keeping this, make it more concrete
- "marking a pivotal moment" → remove
- "testament to" → remove
- "showcasing" → "showing" or rewrite

### Over-the-top Enthusiasm
- Multiple superlatives in one sentence → keep max one per paragraph
- Stacked adjectives like "fascinating unique monster" → pick one or remove both

---

## Step 2: Apply Changes

Go through the text **paragraph by paragraph**:

1. **Read the paragraph** - Is it mostly good?
2. **Find AI words** - Are there pompous adjectives or generic phrases?
3. **Minimal edit** - Remove or replace ONLY those words
4. **Keep everything else** - Don't rewrite good sentences

### Example Transformation:

**Before**:
```
I really enjoy painting Reaper Bones miniatures like this Coral Golem. These highly original sculpts offer a refreshing change from the usual miniatures, and they make perfect unique monsters to throw at players during game sessions. This particular creature is a fascinating monster made of stones, starfish, and shells.
```

**After**:
```
I really enjoy painting Reaper Bones miniatures like this Coral Golem. These sculpts are different from the usual miniatures, and they make good monsters to throw at players during game sessions. This one is made of stones, starfish, and shells.
```

**What changed**:
- ❌ "highly original" → removed "highly"
- ❌ "refreshing change" → "different from"
- ❌ "perfect unique monsters" → "good monsters"
- ❌ "fascinating monster" → removed "fascinating"
- ✅ Kept "I really enjoy"
- ✅ Kept the detailed structure
- ✅ Kept personal tone

---

## Step 3: Special Cases

### Intro Paragraph
- Remove ONE or TWO pompous words maximum
- Keep the personal opening ("I really enjoy...")
- Keep the context explanation

### Image Descriptions
- These are usually fine, leave them alone
- Only touch if there's an obvious AI word

### Conclusion
- Remove "serves its purpose well" if present
- Keep honest self-assessment ("not my finest work")
- Make the ending more specific if it's too generic

---

## Step 4: Quality Check

After editing, verify:

1. ✅ Does it still sound like the person is talking?
2. ✅ Are detailed explanations still there?
3. ✅ Is honest self-criticism preserved?
4. ✅ Are only the pompous/generic words removed?
5. ❌ Did we accidentally make it too dry?
6. ❌ Did we remove too many adjectives?

**If it sounds too dry**: Put back some personality. Better to have one "really" or "quite" than sound robotic.

---

## What NOT to Do

- ❌ Don't shorten good sentences
- ❌ Don't remove verbs
- ❌ Don't make it factual/Wikipedia-style
- ❌ Don't remove first-person voice
- ❌ Don't remove detailed technical explanations
- ❌ Don't make everything minimalist

---

## After Completion

Proceed directly to Phase 5 (Review and Iterate) and inform the user:

**"Voilà le draft avec les patterns AI enlevés. Lis-le et dis-moi ce que tu veux changer."**

---

**Next**: [Phase 5 — Review and Iterate](phase-5-review.md)
