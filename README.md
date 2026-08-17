# Choosing Well — Next.js site

## What changed from the old single-page HTML site

- The "Begin anywhere" three-box section (Practice / Resources / Extra(ordinary)
  Matters) has been removed from the homepage.
- Those same three items now live in the **header navigation** as hover
  dropdowns. Hovering "The Practice" (or tapping it) opens a small panel with
  the same description text and a list of links (The Reflections, The
  Conversations, The Stories) — same for Resources and Extra(ordinary) Matters.
- Each link goes to its own page (e.g. `/practice/reflections`). Right now
  those are simple placeholder pages that say "content coming soon" — you (or
  a future chat with Claude) can fill each one in with real content whenever
  you're ready, without touching anything else on the site.
- The hero photo is now your real uploaded portrait
  (`public/images/nithya-portrait.jpg`), not a placeholder.
- Everything else (Ten Questions accordion, tensions, PDF download, WhatsApp
  Channel button, animations) carried over as-is.

## Project structure

```
app/
  layout.js              -> shared Header + Footer + fonts
  page.js                -> homepage, assembles all sections
  globals.css            -> all site styling
  practice/reflections/page.js
  practice/conversations/page.js
  practice/stories/page.js
  resources/workshops/page.js
  resources/articles/page.js
  resources/frameworks/page.js
  extraordinary/unseen-sundays/page.js
  extraordinary/mundane-musings/page.js
components/
  Header.jsx              -> nav + the 3 hover dropdowns
  NavDropdown.jsx          -> reusable dropdown panel
  Hero.jsx, WhatIsChoosingWell.jsx, Tensions.jsx, ForYou.jsx,
  TenQuestions.jsx, ThirtyStories.jsx, Extraordinary.jsx, Signup.jsx, Footer.jsx
  Reveal.jsx               -> scroll-fade-in wrapper
public/
  images/nithya-portrait.jpg
  files/Ten-Questions-Choosing-Well.pdf
```

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Editing content later (blogs / newsletters / updates)

- To fill in a placeholder page (e.g. "The Reflections"), open
  `app/practice/reflections/page.js` and replace the placeholder text with
  real content — plain HTML/JSX, so you can add headings, paragraphs, images,
  whatever you need.
- To add a brand-new blog post or newsletter page later, create a new folder
  under `app/` (e.g. `app/blog/my-post/page.js`) with a `page.js` file — Next.js
  automatically turns that into a live route at `/blog/my-post`.
- To swap the hero photo, replace `public/images/nithya-portrait.jpg` with a
  new file of the same name (or update the path in `components/Hero.jsx`).
- To set your real WhatsApp Channel link, open `components/Signup.jsx` and
  replace the `href="#"` with your channel URL.

## Deploying to Netlify (static export)

This project is configured to export as static files (`output: 'export'` in
`next.config.js`), so it deploys to Netlify just like your old HTML site did.

```bash
npm install
npm run build
```

This produces an `out/` folder. In Netlify:
- **New site from Git** (recommended, so future edits redeploy automatically): connect this project's repo, set build command to `npm run build`, and publish directory to `out`.
- **Or drag-and-drop**: after running `npm run build` locally, drag the `out/` folder into Netlify's dashboard.

## Notes

- The header dropdowns close automatically on click of a link, and on mouse
  leave (with a small delay so moving the cursor down into the panel doesn't
  close it early).
- On small screens (under ~980px) the main nav (including dropdowns) is
  hidden, matching the original site's mobile behavior — a mobile hamburger
  menu isn't built yet; let me know if you'd like one added.
