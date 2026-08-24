import { Link } from 'react-router-dom'
import { site, telHref } from '../data/site'
import Img from './Img'
import Icon from './Icon'

export default function CtaBand({
  title = 'Ready to get your walls finished properly?',
  body = `Tell us what the space is and when you need it done. You will get a straight answer on scope, timeline and cost — in writing, before anyone picks up a tool.`,
  primary = { label: 'Start Your Project', to: '/contact' },
}) {
  return (
    <section className="ctaband">
      <div className="ctaband__bg" aria-hidden="true">
        <Img name="ctaBand" />
      </div>
      <div className="container ctaband__inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="btn-row">
          <Link to={primary.to} className="btn btn--light btn--lg">
            {primary.label}
          </Link>
          {telHref ? (
            <a href={telHref} className="btn btn--outline-light btn--lg">
              <Icon name="phone" size={16} />
              {site.phoneDisplay}
            </a>
          ) : (
            <a href={`mailto:${site.email}`} className="btn btn--outline-light btn--lg">
              <Icon name="mail" size={16} />
              Email Patrick
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
