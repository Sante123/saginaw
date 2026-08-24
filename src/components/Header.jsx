import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site, nav, telHref } from '../data/site'
import Icon from './Icon'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`header${stuck ? ' is-stuck' : ''}`}>
        <div className="container header__inner">
        <Link to="/" className="logo" aria-label={`${site.name} — home`}>
          <Logo />
          <span className="logo__text">
            Saginaw
            <small>Construction</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <div className="nav__item" key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
                {item.children && <Icon name="chevron" size={14} className="nav__caret" />}
              </NavLink>

              {item.children && (
                <div className="nav__menu">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) => `nav__menu-link${isActive ? ' is-active' : ''}`}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header__cta">
          {telHref && (
            <a href={telHref} className="header__phone">
              <Icon name="phone" size={16} />
              {site.phoneDisplay}
            </a>
          )}
          <Link to="/contact" className="btn">
            Get a Quote
          </Link>
          <button
            type="button"
            className={`burger${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger__bars" />
          </button>
        </div>
        </div>
      </header>

      {open && (
        <div className="drawer" id="mobile-menu">
          <div className="container" style={{ padding: 0 }}>
            <nav aria-label="Mobile">
              {nav.map((item) => (
                <div key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
                  >
                    {item.label}
                    <Icon name="arrow" size={18} />
                  </NavLink>
                  {item.children && (
                    <div className="drawer__sub">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="drawer__foot">
              <Link to="/contact" className="btn btn--lg btn--block">
                Get a Quote
              </Link>
              {telHref && (
                <a href={telHref} className="btn btn--ghost btn--lg btn--block">
                  <Icon name="phone" size={16} />
                  Call {site.phoneDisplay}
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  )
}
