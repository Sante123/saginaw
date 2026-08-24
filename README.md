# Saginaw Construction — Website

Vite + React + React Router. Multi-page marketing site for a drywall and
remodeling contractor in Bend, Oregon.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

Node 18 or newer.

---

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/services` | `src/pages/Services.jsx` |
| `/services/residential-drywall` | `src/pages/ServiceDetail.jsx` |
| `/services/commercial-drywall` | `src/pages/ServiceDetail.jsx` |
| `/services/remodeling-construction` | `src/pages/ServiceDetail.jsx` |
| `/projects` | `src/pages/Projects.jsx` |
| `/service-areas` | `src/pages/ServiceAreas.jsx` |
| `/reviews` | `src/pages/ReviewsPage.jsx` |
| `/faq` | `src/pages/Faq.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| anything else | `src/pages/NotFound.jsx` |

The three service pages are generated from one component. Adding a fourth
service means adding one object to the `services` array in
`src/data/content.js` — the route, nav dropdown, footer link, cards and
structured data all pick it up automatically.

---

## Where to change things

Almost nothing needs a component edit.

| What | Where |
|---|---|
| Phone, email, address, hours, socials, licence | `src/data/site.js` |
| Nav structure | `src/data/site.js` → `nav` |
| Services, FAQs, projects, service areas, process | `src/data/content.js` |
| Photos | `src/data/images.js` + `/public/images/` |
| Colours, fonts, spacing, radii | `src/styles/tokens.css` |
| Structured data | `src/data/schema.js` |

---

## Launch checklist

Search the project for `TODO` — every outstanding item is flagged in place.

**Needed from the client**

- [ ] Phone number → `site.phone` (digits only) and `site.phoneDisplay`
- [ ] CCB licence number → `site.ccbLicense` (Oregon customers look for this)
- [ ] Confirmed domain → `site.url`, plus `public/sitemap.xml` and `public/robots.txt`
- [ ] Facebook / Instagram / Google Business Profile URLs → `site.social`
- [ ] Business address, or leave blank to run as a service-area business
- [ ] Photos (see below)
- [ ] Real project write-ups to replace the six placeholders in `content.js`

**Wiring up**

- [ ] Contact form endpoint → `site.form.endpoint`
      Formspree (`https://formspree.io/f/xxxxxxx`) or Web3Forms
      (`https://api.web3forms.com/submit` + `site.form.accessKey`).
      Leave it empty and the form falls back to opening the visitor's mail
      client pre-filled — it works either way, but a real endpoint is better.
- [ ] Trustpilot Business Unit ID → `site.trustpilot.businessUnitId`
      Claim the profile at business.trustpilot.com first. The live widget
      switches itself on once the ID is there. The "Review on Trustpilot"
      link already works without it.
- [ ] Set `SHOW_SAMPLE_REVIEWS = false` in `content.js` once real reviews exist
- [ ] Add `/public/og-image.jpg` (1200×630) for link previews
- [ ] Submit the sitemap in Google Search Console
- [ ] Create / claim the Google Business Profile — for a local contractor this
      drives more calls than the website itself

---

## Photos

Every image slot lives in `src/data/images.js` with its aspect ratio and a note
on what the shot should show. Until a slot has a real file, the site draws a
labelled placeholder at exactly the right size, so dropping photos in later
never shifts the layout.

To add one:

1. Save the file into `/public/images/` (compress first — squoosh.app, under 300KB)
2. Change `src: null` to `src: '/images/your-file.jpg'`
3. Check the `alt` text still describes the photo you actually used

**Priority shots, in order of impact:**

1. `hero` — wide finished interior, bright
2. `beforeImage` / `afterImage` — same camera position, a real repair. This
   feeds the drag slider, which is the most persuasive thing on the site
3. `serviceResidential` / `serviceCommercial` / `serviceRemodel`
4. `ownerPortrait` — Patrick on site beats a studio shot
5. Six project photos

---

## Reviews

Reviews are collected on **Trustpilot**, not stored on this site. That is
deliberate: reviews typed into a contractor's own website carry no weight,
because anyone could have written them. Trustpilot verifies reviewers and the
business cannot delete feedback it dislikes.

The three cards on `/reviews` and the home page are **samples**, visibly tagged
as such. Replace them with real feedback or hide them —
do not publish invented testimonials. It breaches Trustpilot's terms and the
FTC's endorsement rules, and for a trade business it is the fastest way to lose
the trust the site exists to build.

---

## SEO and GEO

Already in place:

- Per-route `<title>`, meta description, canonical, Open Graph and Twitter tags
  (`src/hooks/useSeo.js` — no external dependency)
- JSON-LD on every page: `GeneralContractor`, `Service`, `FAQPage`,
  `BreadcrumbList`, all referencing one `@id` so engines treat the site as a
  single business entity rather than several
- `public/sitemap.xml`, `public/robots.txt` with AI crawlers explicitly allowed
- `public/llms.txt` — a plain-language summary for AI answer engines
- Semantic headings, descriptive alt text, breadcrumbs, answer-first FAQ copy
- Dedicated pages per service and a service-areas page, which is what ranks for
  "drywall contractor Bend Oregon" style searches

### One thing worth doing before launch

This is a client-rendered single-page app. Google will render the JavaScript,
but slower and less reliably than static HTML — and most AI crawlers do not
execute JavaScript at all, so they see an empty `<div id="root">`.

The fix is prerendering. `vite-react-ssg` is a small change given how the routes
are already organised, and it emits real static HTML per route while keeping
everything else identical. Next.js is the alternative if you would rather move
the whole thing.

For a business whose entire goal is being found locally, this is the highest-value
remaining item.

---

## Accessibility

Skip link, visible keyboard focus, `prefers-reduced-motion` respected (marquee
and reveals both stop), ARIA on the accordion, drawer and before/after slider,
which is keyboard-operable via arrow keys. Colour contrast meets WCAG AA.

---

## Deploying

Static host — Netlify, Vercel, Cloudflare Pages.

- Build command: `npm run build`
- Publish directory: `dist`

`public/_redirects` handles the SPA fallback for Netlify and Cloudflare Pages.
On Vercel add a `vercel.json` rewrite; on Apache or Nginx, route all paths to
`index.html`. Without this, deep links like `/contact` return 404 on refresh.
