/**
 * SINGLE SOURCE OF TRUTH for business details.
 * Everything marked TODO needs a real value from the client before launch.
 * Search the project for "TODO" to find every outstanding item.
 */
export const site = {
  name: 'Saginaw Construction',
  legalName: 'Saginaw Construction',
  tagline: 'Commercial and Residential Drywall',
  owner: 'Patrick McElderry',
  ownerTitle: 'Owner & Manager',
  yearsExperience: 30,

  email: 'Patrick@SaginawConstruction.com',

  // TODO: get the business phone number. Leave as empty strings to hide every
  // phone link on the site — nothing breaks, the buttons just fall back to email.
  phone: '', // digits only, e.g. '15415551234'
  phoneDisplay: '', // e.g. '(541) 555-1234'

  // TODO: confirm the live domain. Used for canonical URLs and structured data.
  url: 'https://www.saginawconstruction.com',

  // TODO: confirm mailing/shop address, or leave blank to run as a service-area
  // business (recommended for contractors who work out of a truck).
  address: {
    street: '',
    city: 'Bend',
    region: 'OR',
    regionName: 'Oregon',
    postalCode: '',
    country: 'US',
  },

  // TODO: add the CCB licence number — Oregon customers look for it and it
  // meaningfully improves trust and conversion.
  ccbLicense: '',

  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 5:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],

  social: {
    // TODO: fill in whichever exist, delete the rest. These feed the `sameAs`
    // structured-data property, which helps search and AI engines confirm
    // this is one real business rather than several.
    facebook: '',
    instagram: '',
    google: '',
    yelp: '',
  },

  trustpilot: {
    // The public review link works immediately, even before the profile is claimed.
    domain: 'saginawconstruction.com',
    reviewUrl: 'https://www.trustpilot.com/evaluate/saginawconstruction.com',
    profileUrl: 'https://www.trustpilot.com/review/saginawconstruction.com',
    // TODO: after claiming the Trustpilot profile, paste the Business Unit ID here.
    // The live TrustBox widget switches on automatically once this is filled in.
    businessUnitId: '',
    templateId: '5419b6ffb0d04a076446a9af', // "Horizontal" TrustBox
    locale: 'en-US',
  },

  form: {
    /**
     * Where the contact form posts. Two zero-backend options:
     *   Formspree  → 'https://formspree.io/f/xxxxxxx'
     *   Web3Forms  → 'https://api.web3forms.com/submit'  (also set accessKey)
     * Leave endpoint empty and the form falls back to opening the visitor's
     * email client with everything pre-filled — so it works from day one.
     */
    endpoint: '', // TODO
    accessKey: '', // Web3Forms only
  },
}

export const nav = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Residential Drywall', to: '/services/residential-drywall' },
      { label: 'Commercial Drywall', to: '/services/commercial-drywall' },
      { label: 'Remodeling Construction', to: '/services/remodeling-construction' },
    ],
  },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export const telHref = site.phone ? `tel:+${site.phone}` : null
export const mailHref = `mailto:${site.email}`
