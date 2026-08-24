import useSeo from '../hooks/useSeo'
import { site } from '../data/site'
import { localBusiness, breadcrumbSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import Icon from '../components/Icon'
import CtaBand from '../components/CtaBand'
import { ReviewCta, TrustpilotWidget } from '../components/Reviews'

export default function ReviewsPage() {
  useSeo({
    title: 'Reviews',
    description:
      'Read verified Trustpilot reviews of Saginaw Construction, a drywall and remodeling contractor serving Bend, Oregon, and leave a review of your own project.',
    path: '/reviews',
    jsonLd: [localBusiness, breadcrumbSchema([{ label: 'Reviews', to: '/reviews' }])],
  })

  return (
    <>
      <PageHead
        eyebrow="Reviews"
        title="What Clients Say About the Work"
        lead="Reviews live on Trustpilot rather than on this page, which means they are verified, public, and outside our control. That is the point."
        crumbs={[{ label: 'Reviews', to: '/reviews' }]}
      />

      <section className="section">
        <div className="container">
          <TrustpilotWidget height="160px" />

        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <ReviewCta />

          <div className="cards cards--3" style={{ marginTop: '2.5rem' }}>
            <div className="vcard">
              <span className="vcard__icon">
                <Icon name="star" size={22} />
              </span>
              <h3>Leave a review</h3>
              <p>
                Click through to Trustpilot, rate the work out of five and write a couple of
                sentences. You will need to confirm an email address — that is what keeps the
                reviews trustworthy.
              </p>
            </div>
            <div className="vcard">
              <span className="vcard__icon">
                <Icon name="mail" size={22} />
              </span>
              <h3>Something went wrong?</h3>
              <p>
                If a job did not go the way it should have, email{' '}
                <a href={`mailto:${site.email}`} className="accent">
                  {site.email}
                </a>{' '}
                first. We would rather fix it than read about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
