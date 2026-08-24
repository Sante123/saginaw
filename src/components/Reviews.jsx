import { useEffect, useRef } from 'react'
import { site } from '../data/site'
import Icon from './Icon'

/* ---------- Stars ---------- */

export function Stars({ rating = 5, size = 16 }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={size} style={{ opacity: i < rating ? 1 : 0.22 }} />
      ))}
    </span>
  )
}

/* ---------- Single review ---------- */

export function ReviewCard({ review, sample = false }) {
  const initials = review.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="rcard">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem' }}>
        <Stars rating={review.rating} />
        {sample && <span className="tag tag--warn">Sample</span>}
      </div>
      <p className="rcard__quote">{review.text}</p>
      <div className="rcard__who">
        <span className="rcard__avatar" aria-hidden="true">
          {initials}
        </span>
        <span>
          <span className="rcard__name">{review.name}</span>
          <span className="rcard__role">{review.role}</span>
        </span>
      </div>
    </article>
  )
}

/* ---------- Trustpilot TrustBox ---------- */

/**
 * Renders the official Trustpilot widget once a Business Unit ID exists in
 * src/data/site.js. Until then it renders nothing, so no broken box appears on
 * the live site. The script is loaded once and reused.
 */
export function TrustpilotWidget({ height = '140px' }) {
  const ref = useRef(null)
  const { businessUnitId, templateId, locale, profileUrl } = site.trustpilot

  useEffect(() => {
    if (!businessUnitId) return
    const SRC = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    const mount = () => {
      if (window.Trustpilot && ref.current) window.Trustpilot.loadFromElement(ref.current, true)
    }
    let script = document.querySelector(`script[src="${SRC}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = SRC
      script.async = true
      script.onload = mount
      document.head.appendChild(script)
    } else {
      mount()
    }
  }, [businessUnitId])

  if (!businessUnitId) return null

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height={height}
      data-style-width="100%"
      data-theme="light"
    >
      <a href={profileUrl} target="_blank" rel="noreferrer noopener">
        Read our reviews on Trustpilot
      </a>
    </div>
  )
}

/* ---------- Leave a review ---------- */

export function ReviewCta() {
  return (
    <div className="review-cta">
      <div>
        <h3>Worked with us? Leave a review.</h3>
        <p>
          Reviews are how the next homeowner or contractor decides whether to call. It takes about a
          minute, and honest feedback is the kind we want.
        </p>
      </div>
      <div className="btn-row">
        <a
          className="btn btn--light btn--lg"
          href={site.trustpilot.reviewUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon name="star" size={16} />
          Review on Trustpilot
        </a>
      </div>
    </div>
  )
}
