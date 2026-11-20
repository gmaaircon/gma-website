# GMA Air Conditioning website (gma-ac.com)

Static site built with Eleventy and hosted on Netlify.

- **Edit content:** go to https://gma-ac.com/admin/ and log in with GitHub.
- **Content files:** `src/_data/*.json` (company details, services, sectors, gallery, testimonials, accreditations, TM44 FAQs) and `src/blog/posts/*.md` (blog posts).
- **Images:** `src/assets/img/` (uploads from the editor go to `src/assets/img/uploads/`).
- **Build:** `npm install && npm run build` → output in `_site/`. Netlify does this automatically on every change.
