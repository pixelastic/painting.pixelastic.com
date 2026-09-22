---
name: craft-log
description: Use when user says "craft log", "new craft post", or wants to turn a painting/craft session from Notion into a blog post. Orchestrates notes pickup, photo matching, and article writing.
---

# Craft Log

## Overview

Turn a Notion vocal session into a published craft/painting blog post. Picks up
notes, finds matching photos, prepares images, and writes the article.

---

## Core Workflow

### Step 1 — Find and read session

Call `phone-pickup-list --tag "blog post" --is-processed 0`.

Pick the most recent entry, then call `phone-pickup-read {page_id}` to fetch its full content.

Present to the user:
- **Title** and **date**
- A **2-3 sentence summary** of the content (generated from the notes)

Extract from the content (needed for later steps):
- `<startTime>`: datetime of the first note, `YYYY-MM-DD HH.MM` format
- `<endTime>`: datetime of the last note, `YYYY-MM-DD HH.MM` format (may be on the next day)

**Ask the user to confirm** this is the correct session before continuing.

### Step 2 — Find and triage photos

Call `yarn run craft-log:photos --from "<startTime>" --to "<endTime>"`.

For each photo path returned:
1. Read the photo
2. Write an internal description
3. Map it to the nearest note timestamp
4. Exclude photos unrelated to the craft session

### Step 3 — Prepare images

Choose a **camelCase** slug based on the notes content. Max 4 words.

Call `yarn run craft-log:prepare --slug {slug} {kept_photos...}`.

The script outputs JSON:
```json
{
  "postDirectory": "content/posts/{slug}",
  "images": [
    { "original": "/path/to/dropbox/photo.jpg", "file": "image-YYYYMMDDHHMMSS000.ext" }
  ]
}
```

### Step 4 — Write article

Write `<postDirectory>/index.md` with:

**Frontmatter:**
```yaml
---
title: "{title}"
tags: ["{tag}"]
date: {YYYY-MM-DD}
layout: post
description: "{short description}"
---
```

**Content:**
- Write in English, first person, conversational tone matching existing blog posts.
- Text comes from notes only. Photos illustrate but do not inform the text.
- Photos from `<images>` interspersed at the right moments using the mapped timestamps, as `![alt](./file)`
- Do not describe details visible in photos that are not mentioned in the notes.
- Add descriptive alt text on every image.
- Sections with `##` headings for distinct phases of the session

### Step 5 — Mark as processed

Call `phone-pickup-done {page_id}`.

Output the post directory path and confirm completion.

---

## Checklist

- [ ] `phone-pickup-list` and `phone-pickup-read` called, summary presented with title/date/content description
- [ ] User confirmation received, time range extracted
- [ ] `yarn run craft-log:photos` called, photos triaged
- [ ] `yarn run craft-log:prepare --slug {slug}` called, filenames collected
- [ ] Article written to `content/posts/{slug}/index.md`
- [ ] Writing rules followed: notes-only text, English, first person, conversational, alt text
- [ ] `phone-pickup-done {page_id}` called
