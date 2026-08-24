import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { services, process, faqs } from '../data/content'
import { localBusiness, breadcrumbSchema, faqSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import Img from '../components/Img'
import Icon from '../components/Icon'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import FaqAccordion from '../components/FaqAccordion'

export default function Services() {
  const scopeFaqs = faqs.filter((f) => f.category === 'Scope of work')

  useSeo({
    title: 'Drywall Services in Bend, Oregon',
    description:
      'Residential drywall, commercial drywall and remodeling construction in Bend, Oregon. Installation, repair, taping, finishing and texture matching from Saginaw Construction.',
    path: '/services',
    jsonLd: [localBusiness, breadcrumbSchema([{ label: 'Services', to: '/services' }]), faqSchema(scopeFaqs)],
  })

  return (
    <>
      <PageHead
        eyebrow="Our Services"
        title="Drywall and Remodeling Services"
        lead="Three lines of work, all handled in-house: residential drywall, commercial drywall and remodeling construction. Every job scoped in writing before anyone picks up a tool."
        crumbs={[{ label: 'Services', to: '/services' }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid" style={{ gap: 'clamp(2.5rem, 1.5rem + 4vw, 5rem)' }}>
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <div className={`split${i % 2 === 1 ? ' split--reverse' : ''}`}>
                  <div className="split__media">
                    <Img name={s.imageKey} />
                  </div>
                  <div>
                    <div className="eyebrow">{s.short}</div>
                    <h2>{s.title}</h2>
                    <p className="lead">{s.hook}</p>
                    <p>{s.summary}</p>
                    <ul className="checklist checklist--2" style={{ margin: '1.5rem 0' }}>
                      {s.work.slice(0, 6).map((w) => (
                        <li key={w}>
                          <Icon name="check" size={17} />
                          {w}
                        </li>
                      ))}
                    </ul>
                    <div className="btn-row">
                      <Link to={`/services/${s.slug}`} className="btn">
                        {s.title} Details
                      </Link>
                      <Link to="/contact" className="btn btn--ghost">
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">How It Works</div>
            <h2>The Same Five Steps, Every Job</h2>
          </div>
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
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">Scope Questions</div>
            <h2>What We Do and Do Not Cover</h2>
          </div>
          <FaqAccordion items={scopeFaqs} showFilters={false} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
