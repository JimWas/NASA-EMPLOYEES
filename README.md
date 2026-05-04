# People of NASA Starter

NASA-inspired editorial landing page rebuilt as a modern Next.js app with a built-in admin studio.

## Included

- Public-facing homepage inspired by the `People of NASA` layout
- Admin page at `/admin`
- WYSIWYG editing for rich text sections
- Full JSON code editor for every page field
- File-backed content API at `/api/content`
- Image upload API that stores files in `public/uploads`
- Local draft recovery in the browser
- JSON import/export for quick migrations and backups
- Embedded live preview inside the admin experience

## Content model

All site content is stored in:

`content/site-content.json`

That file powers the homepage and the admin editor.

## Run locally

```bash
npm install
npm run dev
```

Then open:

- `http://localhost:3000/`
- `http://localhost:3000/admin`

## Good next upgrades

- Add authentication before deploying the admin publicly
- Add role-based approvals and editorial workflow
- Move JSON storage to a database or headless CMS
- Add reusable section blocks instead of a fixed homepage schema
- Add analytics, A/B testing, and scheduled publishing
