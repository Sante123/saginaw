import { site } from './site'
import { areas } from './content'

const base = site.url.replace(/\/$/, '')

/**
 * The core business entity. Everything else references it by @id, which tells
 * search engines and AI answer engines that all these pages describe one
 * business rather than several unrelated things.
 */
export const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': `${base}/#business`,
  name: site.name,
  description:
    'Saginaw Construction provides residential drywall, commercial drywall and remodeling construction services in Bend, Oregon and surrounding areas.',
  url: base,
  email: site.email,
  ...(site.phone ? { telephone: `+${site.phone}` } : {}),
  founder: { '@type': 'Person', name: site.owner, jobTitle: site.ownerTitle },
  foundingLocation: { '@type': 'Place', name: 'Bend, Oregon' },
  address: {
    '@type': 'PostalAddress',
    ...(site.address.street ? { streetAddress: site.address.street } : {}),
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    addressCountry: site.address.country,
  },
  areaServed: areas.map((a) => ({
    '@type': 'City',
    name: `${a.name}, Oregon`,
  })),
  knowsAbout: [
    'Drywall installation',
    'Drywall taping and finishing',
    'Drywall texture matching',
    'Drywall repair',
    'Commercial tenant improvements',
    'Interior remodeling construction',
  ],
  sameAs: Object.values(site.social).filter(Boolean),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Drywall and remodeling services',
    itemListElement: [
      'Residential Drywall',
      'Commercial Drywall',
      'Remodeling Construction',
    ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${base}/#website`,
  url: base,
  name: site.name,
  publisher: { '@id': `${base}/#business` },
}

export const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  serviceType: service.title,
  description: service.summary,
  url: `${base}/services/${service.slug}`,
  provider: { '@id': `${base}/#business` },
  areaServed: areas.map((a) => ({ '@type': 'City', name: `${a.name}, Oregon` })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${service.title} scope`,
    itemListElement: service.work.map((w) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: w },
    })),
  },
})

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const breadcrumbSchema = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.label,
    item: `${base}${t.to}`,
  })),
})
