import { Link } from 'react-router-dom'
import { site, telHref, mailHref } from '../data/site'
import { services, areas } from '../data/content'
import Icon from './Icon'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { key: 'facebook', icon: 'facebook', label: 'Facebook' },
    { key: 'instagram', icon: 'instagram', label: 'Instagram' },
    { key: 'google', icon: 'google', label: 'Google Business Profile' },
  ].filter((s) => site.social[s.key])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="logo">
              <Logo />
              <span className="logo__text">
                Saginaw
                <small>Construction</small>
              </span>
            </div>
            <p>
              Residential drywall, commercial drywall and remodeling construction in{' '}
              {site.address.city}, {site.address.regionName}. Over {site.yearsExperience} years of
              hanging, taping, finishing and texture — built on integrity, quality and speed.
            </p>
            {socials.length > 0 && (
              <div className="socials" style={{ marginTop: '1.25rem' }}>
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={site.social[s.key]}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/projects">Recent Projects</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer__links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/service-areas">Service Areas</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul className="footer__links">
              <li>
                <a href={mailHref}>{site.email}</a>
              </li>
              {telHref && (
                <li>
                  <a href={telHref}>{site.phoneDisplay}</a>
                </li>
              )}
              <li style={{ color: 'rgba(255,255,255,.6)', fontSize: '.9375rem' }}>
                {site.address.city}, {site.address.region} and surrounding areas
              </li>
              <li style={{ color: 'rgba(255,255,255,.6)', fontSize: '.9375rem' }}>
                {site.hours[0].days}: {site.hours[0].time}
              </li>
            </ul>
            <Link to="/contact" className="btn btn--light" style={{ marginTop: '1.25rem' }}>
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
            {site.ccbLicense ? ` CCB #${site.ccbLicense}.` : ''}
          </span>
          <span>
            Serving {areas.map((a) => a.name).join(' · ')}
          </span>
        </div>
      </div>
    </footer>
  )
}
