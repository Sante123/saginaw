import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { site } from '../data/site'
import { values, process, areas } from '../data/content'
import { localBusiness, breadcrumbSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import Img from '../components/Img'
import Icon from '../components/Icon'
import Marquee from '../components/Marquee'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'Saginaw Construction is a Bend, Oregon drywall contractor led by Patrick McElderry, with over 30 years in the drywall industry serving residential and commercial clients across Central Oregon.',
    path: '/about',
    jsonLd: [localBusiness, breadcrumbSchema([{ label: 'About', to: '/about' }])],
  })

  return (
    <>
      <PageHead
        eyebrow="About Us"
        title="Three Decades of Drywall in Central Oregon"
        lead="Saginaw Construction is a drywall and remodeling contractor based in Bend, Oregon. The work is owner-managed, the standard does not move, and the person who quotes the job is the person responsible for the finish."
        crumbs={[{ label: 'About', to: '/about' }]}
      />

      {/* What we do */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <div className="collage">
              <Img name="aboutMain" className="collage__main" />
              <Img name="aboutInset" className="collage__inset" />
              <div className="collage__badge">
                <b>{site.yearsExperience}+</b>
                <span>Years in the drywall industry</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="eyebrow">What We Do</div>
            <h2>Installation, Repair, Finishing and Texture</h2>
            <p className="lead">
              At Saginaw Construction, we specialize in providing top-notch residential drywall,
              commercial drywall and remodeling construction services.
            </p>
            <p>
              From installation and repair to finishing and texture, our skilled team ensures
              high-quality results with a focus on integrity and efficiency. Servicing Bend, Oregon
              and surrounding areas, we deliver projects on time and to the highest standards.
            </p>
            <ul className="checklist checklist--2" style={{ marginTop: '1.5rem' }}>
              {[
                'Residential drywall',
                'Commercial drywall',
                'Remodeling construction',
                'Drywall repair and patching',
                'Taping and finishing',
                'Texture and texture matching',
              ].map((c) => (
                <li key={c}>
                  <Icon name="check" size={17} />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* Trust the experts */}
      <section className="section section--cream">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <Img name="ownerPortrait" />
          </Reveal>
          <Reveal delay={80}>
            <div className="eyebrow">Trust the Experts</div>
            <h2>Meet {site.owner}</h2>
            <p className="lead">
              With over three decades of experience in the drywall industry, {site.owner},{' '}
              {site.ownerTitle} of Saginaw Construction, has been a trusted name for commercial and
              residential projects.
            </p>
            <p>
              Our expertise, and our commitment to integrity, quality and speed, have made us the
              go-to choice across Central Oregon. Rely on our seasoned professionals to deliver
              exceptional results every time.
            </p>
            <p>
              Thirty years in the trade means having seen the failure modes: the ceiling that sags
              because the fasteners were spaced wrong, the seam that telegraphs because a coat was
              rushed, the patch that shows because the texture was close but not matched. Knowing
              what goes wrong is what keeps it from going wrong.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn">
                Talk to Patrick
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">Why Choose Us</div>
            <h2>The Job Done Right the First Time</h2>
            <p className="lead">
              We pride ourselves on delivering exceptional drywall services for both commercial and
              residential projects. Our commitment to integrity, quality craftsmanship and swift
              project completion is what sets us apart.
            </p>
          </div>

          <div className="cards cards--3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="vcard">
                  <span className="vcard__icon">
                    <Icon name={['shield', 'ruler', 'bolt'][i]} size={24} />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--tint">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">How It Works</div>
            <h2>From First Call to Final Walkthrough</h2>
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

      {/* Areas */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Where We Work</div>
            <h2>Bend and Surrounding Areas</h2>
            <p className="lead">
              Saginaw Construction serves {areas.map((a) => a.name).join(', ')} and the wider
              Central Oregon region.
            </p>
          </div>
          <div className="btn-row">
            <Link to="/service-areas" className="btn btn--ghost">
              See Service Areas
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
