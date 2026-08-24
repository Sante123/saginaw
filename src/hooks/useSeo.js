import { useEffect } from 'react'
import { site } from '../data/site'

/**
 * Per-route document head management with no external dependency.
 *
 * Sets: <title>, meta description, canonical, Open Graph / Twitter tags and any
 * JSON-LD structured data blocks the page supplies. Structured data is what
 * Google's rich results and AI answer engines actually read, so every page
 * passes at least one schema object.
 */

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function useSeo({ title, description, path = '/', image, jsonLd, noindex }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Drywall Contractor in Bend, Oregon`
    const url = `${site.url.replace(/\/$/, '')}${path}`
    const ogImage = image || `${site.url.replace(/\/$/, '')}/og-image.jpg`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setLink('canonical', url)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    // Structured data — removed and rewritten on every route change so pages
    // never inherit the previous page's schema.
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove())
    const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []
    blocks.filter(Boolean).forEach((block) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-seo-jsonld', 'true')
      s.textContent = JSON.stringify(block)
      document.head.appendChild(s)
    })

    return () => {
      document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove())
    }
  }, [title, description, path, image, jsonLd, noindex])
}
