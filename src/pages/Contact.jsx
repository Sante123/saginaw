import useSeo from '../hooks/useSeo'
import { site, telHref, mailHref } from '../data/site'
import { areas, faqs } from '../data/content'
import { localBusiness, breadcrumbSchema, faqSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import ContactForm from '../components/ContactForm'
import FaqAccordion from '../components/FaqAccordion'
import Icon from '../components/Icon'

export default function Contact() {
  const startFaqs = faqs.filter((f) => f.category === 'Getting started')

  useSeo({
    title: 'Contact',
    description: `Contact Saginaw Construction for residential drywall, commercial drywall and remodeling in Bend, Oregon. Email ${site.email} or send a message for a written estimate.`,
    path: '/contact',
    jsonLd: [
      localBusiness,
      breadcrumbSchema([{ label: 'Contact', to: '/contact' }]),
      faqSchema(startFaqs),
    ],
  })

  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Tell Us About the Job"
        lead="Send through what the space is and when you need it done. You get a written scope, a timeline and a price — before anyone picks up a tool."
        crumbs={[{ label: 'Contact', to: '/contact' }]}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="panel">
            <h2 style={{ fontSize: 'var(--fs-h3)' }}>Request an estimate</h2>
            <p style={{ marginBottom: '1.75rem' }}>
              Fields marked with an asterisk are required. Everything else just helps us give you a
              more accurate number first time.
            </p>
            <ContactForm />
          </div>

          <div>
            <div className="panel panel--tint">
              <div className="eyebrow">Direct Contact</div>
              <h2 style={{ fontSize: 'var(--fs-h3)' }}>Reach {site.owner}</h2>

              <ul className="info-list" style={{ marginTop: '1.5rem' }}>
                <li>
                  <span className="info-list__icon">
                    <Icon name="mail" size={19} />
                  </span>
                  <span>
                    <span className="info-list__label">Email</span>
                    <span className="info-list__value">
                      <a href={mailHref}>{site.email}</a>
                    </span>
                  </span>
                </li>

                {telHref && (
                  <li>
                    <span className="info-list__icon">
                      <Icon name="phone" size={19} />
                    </span>
                    <span>
                      <span className="info-list__label">Phone</span>
                      <span className="info-list__value">
                        <a href={telHref}>{site.phoneDisplay}</a>
                      </span>
                    </span>
                  </li>
                )}

                <li>
                  <span className="info-list__icon">
                    <Icon name="pin" size={19} />
                  </span>
                  <span>
                    <span className="info-list__label">Service area</span>
                    <span className="info-list__value">
                      {site.address.city}, {site.address.region}
                    </span>
                    <span className="rcard__role">
                      {areas.map((a) => a.name).join(' · ')}
                    </span>
                  </span>
                </li>
              </ul>

              <hr />

              <div className="eyebrow">Hours</div>
              <ul className="hours">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <b>{h.days}</b>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel" style={{ marginTop: '1.25rem' }}>
              <h3>What happens next</h3>
              <ul className="checklist" style={{ marginTop: '1rem' }}>
                {[
                  'We read your message and come back with any questions',
                  'We walk the space and take measurements',
                  'You get scope, finish level, timeline and price in writing',
                  'Nothing gets ordered or started until you say go',
                ].map((c) => (
                  <li key={c}>
                    <Icon name="check" size={17} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">Before You Send</div>
            <h2>Getting Started</h2>
          </div>
          <FaqAccordion items={startFaqs} showFilters={false} />
        </div>
      </section>
    </>
  )
}
