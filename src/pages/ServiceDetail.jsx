import { Link, Navigate, useParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { services, process, areas, faqs } from '../data/content'
import { serviceSchema, breadcrumbSchema, faqSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import Img from '../components/Img'
import Icon from '../components/Icon'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import FaqAccordion from '../components/FaqAccordion'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== slug)
  const pageFaqs = faqs.filter((f) => f.category === 'Scope of work').slice(0, 3)

  return (
    <ServiceBody service={service} others={others} pageFaqs={pageFaqs} />
  )
}

function ServiceBody({ service, others, pageFaqs }) {
  useSeo({
    title: `${service.title} in Bend, Oregon`,
    description: `${service.summary} Saginaw Construction serves Bend, Oregon and surrounding areas with over 30 years of drywall experience.`,
    path: `/services/${service.slug}`,
    jsonLd: [
      serviceSchema(service),
      breadcrumbSchema([
        { label: 'Services', to: '/services' },
        { label: service.title, to: `/services/${service.slug}` },
      ]),
      faqSchema(pageFaqs),
    ],
  })

  return (
    <>
      <PageHead
        eyebrow={service.short}
        title={`${service.title} in Bend, Oregon`}
        lead={service.hook}
        crumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title, to: `/services/${service.slug}` },
        ]}
      />

      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <Img name={service.imageKey} />
          </Reveal>
          <Reveal delay={80} className="prose">
            <div className="eyebrow">Overview</div>
            <h2>{service.title}</h2>
            <p className="lead">{service.intro}</p>
            <p>
              Saginaw Construction has been doing this work in Central Oregon for over three
              decades. The estimate you get is the scope you get, and the person who quotes the job
              is on site while it is being done.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn--ghost">
                See Similar Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="eyebrow">What's Included</div>
              <h2>Scope of Work</h2>
            </div>
            <p className="lead">
              Anything outside this list gets discussed before it happens, not invoiced afterwards.
            </p>
          </div>
          <ul className="checklist checklist--2">
            {service.work.map((w) => (
              <li key={w}>
                <Icon name="check" size={17} />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">Process</div>
            <h2>How a {service.title} Job Runs</h2>
            <p className="lead">
              Same five steps whatever the size of the job. The order is what keeps a project from
              needing a second visit.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn">
                Book a Walkthrough
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="steps">
              {process.map((p, i) => (
                <div className="step" key={p.step}>
                  <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{p.step}</h3>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">Questions</div>
            <h2>About {service.title}</h2>
          </div>
          <FaqAccordion items={pageFaqs} showFilters={false} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Also Available</div>
            <h2>Other Services</h2>
          </div>
          <div className="cards cards--2">
            {others.map((s) => (
              <article className="scard" key={s.slug}>
                <div className="scard__media">
                  <Img name={s.imageKey} />
                </div>
                <div className="scard__body">
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <Link to={`/services/${s.slug}`} className="tlink">
                    Learn more <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="lead" style={{ marginTop: '2.5rem' }}>
            {service.title} is available in {areas.map((a) => a.name).join(', ')} and surrounding
            Central Oregon communities.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
