# Website publishing

When adding a new public content page, add a matching entry to `whatsNewItems` in `components/PublicPage.tsx` as part of the same change. Include a clear title, short description, correct URL, suitable category, and `isNew: true`. Keep existing Archives listings and navigation when also listing an archive in What’s New. Utility, admin, and API routes do not need What’s New entries. Before publishing, verify that each new public content page has a working homepage What’s New link.

Every new public content page must also appear in `app/sitemap.ts` using the canonical `https://www.nasaemployees.com` domain and have self-referencing canonical metadata. Verify sitemap coverage and indexability before publishing.
