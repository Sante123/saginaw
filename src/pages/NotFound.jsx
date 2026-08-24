import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { services } from '../data/content'
import Icon from '../components/Icon'

export default function NotFound() {
  useSeo({
    title: 'Page not found',
    description: 'That page does not exist. Head back to the Saginaw Construction homepage.',
    path: '/404',
    noindex: true,
  })

  return (
    <section className="section" style={{ paddingBlock: 'clamp(4rem, 3rem + 6vw, 8rem)' }}>
      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow eyebrow--center">Error 404</div>
        <h1>That page is not here</h1>
        <p className="lead">
          The link may be old, or the address may have a typo in it. Here is the way back.
        </p>
        <div className="btn-row" style={{ justifyContent: 'center', marginTop: '1.75rem' }}>
          <Link to="/" className="btn btn--lg">
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn--ghost btn--lg">
            Contact Us
          </Link>
        </div>

        <div className="cards cards--3" style={{ marginTop: '3.5rem', textAlign: 'left' }}>
          {services.map((s) => (
            <div className="vcard" key={s.slug}>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <Link to={`/services/${s.slug}`} className="tlink">
                Learn more <Icon name="arrow" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
