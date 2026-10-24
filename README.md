# Mark Quach — personal site

A calm, block-based personal site built with React and Vite. Light and dark themes come from CSS tokens in `src/styles/tokens.css`; the block styles (callouts, toggles, tags, gallery, table views) live in `src/styles/blocks.css`.

## Develop

```bash
npm install
npm run dev
```

`npm run lint` and `npm run build` check and build the site.

## Editing content

All profile content (bio, projects, experience, extracurricular, education, skills) is in `src/data/profile.js`.

## Writing from Notion

The Writing section is filled from a Notion database by `scripts/sync-notion.mjs`, which saves posts to `src/content/writing.json` and downloads their images to `public/writing/`. Until a sync has run, the section shows a "coming soon" callout.

### One-time setup

1. Create an internal integration at <https://www.notion.so/profile/integrations> and copy its secret.
2. Create a Notion database for your posts. The script recognises these properties (only the title is required):

   | Property | Type | Purpose |
   | --- | --- | --- |
   | Name | Title | Post title |
   | Published | Checkbox (or a `Status` status/select with a "Published" option) | Only published pages are synced; without it, every page is |
   | Date | Date | Post date (falls back to the page's created time) |
   | Summary | Text | One-line summary shown in the list |
   | Tags | Multi-select | Tags, in their Notion colours |
   | Slug | Text | URL slug (defaults to the title) |

   The page's emoji icon is used as the post icon. Write the post itself in the page body.
3. In the database's `···` menu → **Connections**, add your integration.
4. Copy the database ID from its URL (the 32-character ID before `?v=`).

### Syncing

Put the credentials in `.env.local` at the repo root (ignored by git):

```bash
NOTION_TOKEN=secret_xxx
NOTION_WRITING_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Then run `npm run sync:writing` and commit the updated `src/content/writing.json` and `public/writing/`.

The sync also runs automatically before every `npm run build`. Add the same two variables to your hosting provider's environment (e.g. Vercel → Project Settings → Environment Variables) and each deploy will pull the latest published posts. Without the variables, the build keeps the committed `writing.json`.

Supported blocks: paragraphs, headings (including toggle headings), bulleted, numbered and to-do lists, toggles, quotes, callouts, code, dividers, images, bookmarks/embeds (as links), tables and columns.

Posts are served at `#/writing/<slug>`.
