# Phase 2 — Number the Images

**Input (what the user has done)**: User has pasted images into Typora and says "c'est bon, j'ai mis toutes les images" or similar

---

## Steps

1. **Read `index.md` once** and extract all image references in order
   - The file is the source of truth, not the directory
   - Store the list of referenced images in memory

2. **Execute in parallel** (use multiple tool calls in a single message):

   **A. Delete orphan images (Bash tool)**:
   - Run `yarn run agent:delete-orphaned-images src/<slug>/`
   - This script removes any image files NOT referenced in `index.md`
   - These are copy-paste mistakes

   **B. Prepare numbered content (in memory)**:
   - Build the new `index.md` content with HTML comments
   - Add `<!-- Image N -->` above each image reference

   **C. Compress remaining images (Bash tool, background)**:
   - Run `imgmin src/<slug>/*.{png,jpg}` with `run_in_background: true`
   - This runs while the user describes images
   - No need to wait or report completion

   **Why parallel?** These operations are independent:
   - A writes to filesystem (deletes files)
   - B prepares content for file write
   - C runs in background during user narration
   - They can execute simultaneously for better performance

3. **Update `index.md` once** with the numbered content from step 2B:

```markdown
<!-- Image 1 -->
![](image-20260317192131446.png)

<!-- Image 2 -->
![](image-20260317192306699.png)
```

4. **Tell the user**:
   **"J'ai numéroté X images, supprimé Y images orphelines, et lancé la compression en background. Tu peux maintenant me décrire chaque image en français. Référence-les par leur numéro : 'sur l'image 1...', 'sur l'image 3...'. Quand tu as tout dit, envoie ton message."**

---

## How to Execute

Use **multiple tool calls in a single message** for efficiency:
1. `Read` index.md to extract image references
2. In parallel:
   - `Bash` to run `yarn run agent:delete-orphaned-images src/<slug>/`
   - `Bash` with `run_in_background: true` to compress remaining images with imgmin
   - Prepare numbered content mentally
3. `Edit` index.md once with numbered content

---

**Next**: [Phase 3 — Translation](phase-3-translation.md)
