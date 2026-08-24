import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { site, mailHref } from '../data/site'
import { faqs } from '../data/content'
import { localBusiness, breadcrumbSchema, faqSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import FaqAccordion from '../components/FaqAccordion'
import CtaBand from '../components/CtaBand'

export default function Faq() {
  useSeo({
    title: 'Drywall FAQ',
    description:
      'Answers to common questions about drywall installation, repair, texture matching, timelines and working with Saginaw Construction in Bend, Oregon.',
    path: '/faq',
    jsonLd: [localBusiness, breadcrumbSchema([{ label: 'FAQ', to: '/faq' }]), faqSchema(faqs)],
  })

  return (
    <>
      <PageHead
        eyebrow="Common Questions"
        title="Drywall Questions, Answered Plainly"
        lead="The questions we get asked most often, answered the way we would answer them on a walkthrough."
        crumbs={[{ label: 'FAQ', to: '/faq' }]}
      />

      <section className="section">
        <div className="container container--narrow">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>Still have a question?</h2>
          <p className="lead">
            Email {site.owner} directly and you will get an answer from the person who would be
            running your job.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link to="/contact" className="btn btn--lg">
              Ask a Question
            </Link>
            <a href={mailHref} className="btn btn--ghost btn--lg">
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
