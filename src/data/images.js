/**
 * IMAGE MANIFEST
 *
 * Every image slot on the site lives here. Values are null until real photos
 * exist — the <Img> component draws a labelled placeholder block at the correct
 * aspect ratio instead, so the layout never collapses while you wait on photos.
 *
 * To go live: drop files into /public/images/ and change null to the path,
 * e.g. hero: '/images/hero.jpg'
 *
 * `alt` text is already written for each slot. Keep it descriptive — it is read
 * by screen readers, and it is one of the few signals image search and AI
 * answer engines have about what a photo shows.
 */

export const images = {
  hero: {
    src: null,
    alt: 'Finished drywall interior of a new home in Bend, Oregon, with smooth walls and square corners',
    ratio: '16/9',
    note: 'Hero. Wide finished interior shot, bright. 2400×1350 min.',
  },
  aboutMain: {
    src: null,
    alt: 'Saginaw Construction crew hanging drywall on a residential job site',
    ratio: '4/3',
    note: 'About — main image. Crew at work. 1200×900.',
  },
  aboutInset: {
    src: null,
    alt: 'Close-up of a taped and coated drywall seam ready for sanding',
    ratio: '1/1',
    note: 'About — small overlapping inset. Detail shot. 700×700.',
  },
  ownerPortrait: {
    src: null,
    alt: 'Patrick McElderry, owner and manager of Saginaw Construction',
    ratio: '4/5',
    note: 'Owner portrait. On-site, natural light beats a studio shot. 900×1125.',
  },
  beforeImage: {
    src: null,
    alt: 'Damaged interior wall before drywall repair',
    ratio: '3/2',
    note: 'Before/after slider — BEFORE. Must be the same framing as the after shot. 1600×1067.',
  },
  afterImage: {
    src: null,
    alt: 'The same wall after drywall repair, finished and texture matched',
    ratio: '3/2',
    note: 'Before/after slider — AFTER. Same camera position as the before shot. 1600×1067.',
  },
  serviceResidential: {
    src: null,
    alt: 'Residential drywall installation in a Central Oregon home',
    ratio: '3/2',
    note: 'Residential service card and page header. 1400×933.',
  },
  serviceCommercial: {
    src: null,
    alt: 'Commercial drywall build-out inside an office tenant improvement',
    ratio: '3/2',
    note: 'Commercial service card and page header. 1400×933.',
  },
  serviceRemodel: {
    src: null,
    alt: 'Interior remodeling construction with new drywall blended into existing walls',
    ratio: '3/2',
    note: 'Remodeling service card and page header. 1400×933.',
  },
  ctaBand: {
    src: null,
    alt: 'Drywall finishing detail on a Saginaw Construction job site',
    ratio: '21/9',
    note: 'Wide background for the closing call-to-action band. 2400×1029.',
  },
  project1: { src: null, alt: 'Whole-home drywall installation in a new build in Bend, Oregon', ratio: '4/3', note: 'Project card. 1200×900.' },
  project2: { src: null, alt: 'Office tenant improvement drywall build-out in Bend, Oregon', ratio: '4/3', note: 'Project card. 1200×900.' },
  project3: { src: null, alt: 'Kitchen remodel with texture-matched drywall in Redmond, Oregon', ratio: '4/3', note: 'Project card. 1200×900.' },
  project4: { src: null, alt: 'Repaired and retextured ceiling after water damage in Sunriver, Oregon', ratio: '4/3', note: 'Project card. 1200×900.' },
  project5: { src: null, alt: 'Garage converted to finished living space in Sisters, Oregon', ratio: '4/3', note: 'Project card. 1200×900.' },
  project6: { src: null, alt: 'Retail interior drywall finish in Prineville, Oregon', ratio: '4/3', note: 'Project card. 1200×900.' },
}

export const getImage = (key) =>
  images[key] || { src: null, alt: '', ratio: '4/3', note: 'Unmapped image key: ' + key }
