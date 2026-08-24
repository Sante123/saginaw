Drop client photos in this folder, then point src/data/images.js at them.

Example:
  1. Save the hero photo here as  hero.jpg
  2. Open src/data/images.js
  3. Change   src: null   to   src: '/images/hero.jpg'

Every slot, its aspect ratio and what the shot should show is listed in
src/data/images.js. Until a slot has a real file, the site draws a labelled
placeholder at exactly the right size, so nothing shifts when photos land.

Compress before uploading — https://squoosh.app, target under 300KB each.
