import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { site } from '../data/site'
import { services, values, process, projects, faqs, sampleReviews, SHOW_SAMPLE_REVIEWS } from '../data/content'
import { localBusiness, websiteSchema, faqSchema } from '../data/schema'

import Img from '../components/Img'
import Icon from '../components/Icon'
import StatBar from '../components/StatBar'
import Marquee from '../components/Marquee'
import BeforeAfter from '../components/BeforeAfter'
import FaqAccordion from '../components/FaqAccordion'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { ReviewCard, TrustpilotWidget } from '../components/Reviews'

export default function Home() {
  useSeo({
    title: 'Residential & Commercial Drywall in Bend, Oregon',
    description:
      'Saginaw Construction delivers residential drywall, commercial drywall and remodeling construction in Bend, Oregon. Over 30 years of hanging, taping, finishing and texture — built on integrity, quality and speed.',
    path: '/',
    jsonLd: [localBusiness, websiteSchema, faqSchema(faqs.slice(0, 5))],
  })

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <Img name="hero" priority />
        </div>
        <div className="container">
          <div className="hero__inner">
            <div className="eyebrow">Commercial and Residential Drywall</div>
            <h1>
              Walls Done Right
              <span className="accent">The First Time</span>
            </h1>
            <p className="lead hero__lead">
              Residential drywall, commercial drywall and remodeling construction across Bend,
              Oregon and the surrounding areas. Installation, repair, finishing and texture —
              delivered on time, to the standard the job was bid on.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn--lg">
                Start Your Project
              </Link>
              <Link to="/services" className="btn btn--ghost btn--lg">
                See What We Do
              </Link>
            </div>
            <div className="hero__trust">
              <span>
                <Icon name="check" size={16} className="accent" /> {site.yearsExperience}+ years in
                the trade
              </span>
              <span>
                <Icon name="check" size={16} className="accent" /> Owner-managed on every job
              </span>
              <span>
                <Icon name="check" size={16} className="accent" /> Central Oregon based
              </span>
            </div>
          </div>

          <StatBar />
        </div>
      </section>

      <Marquee />

      {/* ---------- About ---------- */}
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
            <div className="eyebrow">About Saginaw Construction</div>
            <h2>What We Do</h2>
            <p className="lead">
              At Saginaw Construction we specialize in residential drywall, commercial drywall and
              remodeling construction. From installation and repair through to finishing and
              texture, our skilled team delivers high-quality results with a focus on integrity and
              efficiency.
            </p>
            <p>
              Servicing Bend, Oregon and surrounding areas, we deliver projects on time and to the
              highest standards — whether that is a whole-home hang on a new build, a tenant
              improvement with a fixed opening date, or a repair that has to disappear into an
              existing textured wall.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Link to="/about" className="btn">
                More About Us
              </Link>
              <Link to="/projects" className="btn btn--ghost">
                View Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="eyebrow">Our Services</div>
              <h2>Drywall and Remodeling, Start to Finish</h2>
            </div>
            <p className="lead">
              Three lines of work, one crew, one person accountable for the result. Every job is
              scoped in writing before it starts.
            </p>
          </div>

          <div className="cards cards--3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <article className="scard">
                  <div className="scard__media">
                    <Img name={s.imageKey} />
                  </div>
                  <div className="scard__body">
                    <h3>{s.title}</h3>
                    <p>{s.summary}</p>
                    <Link to={`/services/${s.slug}`} className="tlink">
                      Learn more <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Before / After (signature) ---------- */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <BeforeAfter />
          </Reveal>
          <Reveal delay={80}>
            <div className="eyebrow">Before & After</div>
            <h2>From Damaged to Invisible</h2>
            <p className="lead">
              The measure of good drywall work is that you cannot tell where it happened. Drag the
              slider to see the difference on a real repair.
            </p>
            <p>
              Anyone can cut out a hole and screw in a patch. The skill is in the coats, the sanding
              and the texture match — getting new work to blend into an existing wall so the seam
              never shows through the paint, even in raking afternoon light.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Link to="/projects" className="btn">
                See More Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">Why Choose Us</div>
            <h2>Integrity, Quality, Speed</h2>
            <p className="lead">
              Three things set the work apart, and they are the same three things every job is
              measured against.
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

      {/* ---------- Process ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">How It Works</div>
            <h2>Five Steps, No Surprises</h2>
            <p className="lead">
              The order matters here — each stage depends on the one before it, and skipping ahead
              is how jobs end up needing a second visit.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn">
                Book a Walkthrough
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
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
          </Reveal>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="eyebrow">Recent Work</div>
              <h2>Projects Across Central Oregon</h2>
            </div>
            <p className="lead">
              A sample of the residential, commercial and remodel work coming out of the shop.
            </p>
          </div>

          <div className="cards cards--3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <article className="pcard">
                  <div className="pcard__media">
                    <Img name={p.imageKey} />
                  </div>
                  <div className="pcard__body">
                    <h3>{p.title}</h3>
                    <div className="tag-row">
                      <span className="tag">{p.location}</span>
                      <span className="tag">{p.duration}</span>
                    </div>
                    <p>{p.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: '2.5rem', justifyContent: 'center' }}>
            <Link to="/projects" className="btn btn--ghost btn--lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">Reviews</div>
            <h2>What Clients Say</h2>
            <p className="lead">
              Reviews are collected on Trustpilot, where they are verified and out of our hands.
            </p>
          </div>

          <TrustpilotWidget />

          {SHOW_SAMPLE_REVIEWS && (
            <div className="cards cards--3">
              {sampleReviews.map((r, i) => (
                <Reveal key={r.id} delay={i * 80}>
                  <ReviewCard review={r} sample />
                </Reveal>
              ))}
            </div>
          )}

          <div className="btn-row" style={{ marginTop: '2.5rem', justifyContent: 'center' }}>
            <Link to="/reviews" className="btn btn--ghost btn--lg">
              Read and Leave Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section--tint">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <div className="eyebrow eyebrow--center">Common Questions</div>
            <h2>Before You Call</h2>
          </div>
          <FaqAccordion items={faqs.slice(0, 5)} showFilters={false} />
          <div className="btn-row" style={{ marginTop: '2rem', justifyContent: 'center' }}>
            <Link to="/faq" className="btn btn--ghost">
              All Questions
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
