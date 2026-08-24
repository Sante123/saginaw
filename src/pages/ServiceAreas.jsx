import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { site } from '../data/site'
import { areas, services } from '../data/content'
import { localBusiness, breadcrumbSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import Icon from '../components/Icon'
import Marquee from '../components/Marquee'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'

export default function ServiceAreas() {
  useSeo({
    title: 'Service Areas in Central Oregon',
    description:
      'Saginaw Construction provides drywall and remodeling services in Bend, Redmond, Sisters, Sunriver, La Pine, Prineville, Tumalo and Terrebonne, Oregon.',
    path: '/service-areas',
    jsonLd: [localBusiness, breadcrumbSchema([{ label: 'Service Areas', to: '/service-areas' }])],
  })

  return (
    <>
      <PageHead
        eyebrow="Where We Work"
        title="Drywall Services Across Central Oregon"
        lead={`Saginaw Construction is based in ${site.address.city}, ${site.address.regionName} and works throughout the surrounding communities. If you are just outside this list, call and ask — it depends on the size of the job.`}
        crumbs={[{ label: 'Service Areas', to: '/service-areas' }]}
      />

      <section className="section">
        <div className="container">
          <div className="area-grid">
            {areas.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 60}>
                <div className="area">
                  <h3>
                    <Icon name="pin" size={17} />
                    {a.name}, OR
                  </h3>
                  <p>{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">What We Bring</div>
            <h2>The Same Standard in Every Town</h2>
            <p className="lead">
              A job in Sisters gets the same crew, the same finish levels and the same written scope
              as a job five minutes from the shop in Bend.
            </p>
            <p>
              Travel does affect scheduling on smaller jobs — a two-hour patch an hour out of town
              may get grouped with other work in the same area. We will tell you that up front
              rather than quietly stretching the timeline.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="cards" style={{ gap: '1rem' }}>
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
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure if you are in range?"
        body="Send the address and what needs doing. If it is not a fit we will say so, and point you at someone who can help."
      />
    </>
  )
}
