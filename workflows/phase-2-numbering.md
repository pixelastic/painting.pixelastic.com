# Phase 2 — Number the Images

**Trigger**: User says "c'est bon, j'ai mis toutes les images" or similar

---

## Steps

1. **Read `index.md`** and extract all image references in order
   - The file is the source of truth, not the directory

2. **Delete orphan images**: Remove any files in `src/<slug>/` NOT referenced in `index.md`
   - These are copy-paste mistakes

3. **Update `index.md`**: Add numbered comments above each image

```markdown
<!-- Image 1 -->
![](image-20260317192131446.png)

<!-- Image 2 -->
![](image-20260317192306699.png)
```

4. **Tell the user**:
   **"J'ai numéroté X images. Tu peux maintenant me décrire chaque image en français. Référence-les par leur numéro : 'sur l'image 1...', 'sur l'image 3...'. Quand tu as tout dit, envoie ton message."**

---

**Next**: [Phase 3 — Capture Descriptions](phase-3-capture.md)
