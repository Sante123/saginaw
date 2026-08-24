import { Link } from 'react-router-dom'

export default function PageHead({ eyebrow, title, lead, crumbs = [], children }) {
  return (
    <section className="pagehead">
      <div className="container">
        <div className="pagehead__inner">
          {crumbs.length > 0 && (
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              {crumbs.map((c, i) => (
                <span key={c.to} style={{ display: 'contents' }}>
                  <span aria-hidden="true">/</span>
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page">{c.label}</span>
                  ) : (
                    <Link to={c.to}>{c.label}</Link>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
