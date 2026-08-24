import { useMemo, useState } from 'react'
import useSeo from '../hooks/useSeo'
import { projects } from '../data/content'
import { localBusiness, breadcrumbSchema } from '../data/schema'

import PageHead from '../components/PageHead'
import Img from '../components/Img'
import Icon from '../components/Icon'
import BeforeAfter from '../components/BeforeAfter'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  useSeo({
    title: 'Drywall Projects in Central Oregon',
    description:
      'Recent residential drywall, commercial drywall and remodeling projects completed by Saginaw Construction across Bend, Redmond, Sisters, Sunriver and Central Oregon.',
    path: '/projects',
    jsonLd: [localBusiness, breadcrumbSchema([{ label: 'Projects', to: '/projects' }])],
  })

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.duration)))],
    []
  )
  const visible = filter === 'All' ? projects : projects.filter((p) => p.duration === filter)

  return (
    <>
      <PageHead
        eyebrow="Recent Work"
        title="Projects Across Central Oregon"
        lead="Residential builds, commercial interiors, remodels and repairs. Every one of these walls was hung, taped, finished and textured by the same crew."
        crumbs={[{ label: 'Projects', to: '/projects' }]}
      />

      <section className="section">
        <div className="container">
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter${filter === c ? ' is-active' : ''}`}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="cards cards--3">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <article className="pcard">
                  <div className="pcard__media">
                    <Img name={p.imageKey} />
                  </div>
                  <div className="pcard__body">
                    <h3>{p.title}</h3>
                    <div className="tag-row">
                      <span className="tag">
                        <Icon name="pin" size={13} />
                        {p.location}
                      </span>
                      <span className="tag tag--solid">{p.duration}</span>
                    </div>
                    <p>{p.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <BeforeAfter />
          </Reveal>
          <Reveal delay={80}>
            <div className="eyebrow">Before & After</div>
            <h2>The Repair You Cannot Find Afterwards</h2>
            <p className="lead">
              Drag the slider. If you can still see where the patch went in once the wall is
              painted, the texture match was not right.
            </p>
            <p>
              Water damage, impact holes, cracked seams, sagging ceilings and openings left behind
              by plumbing or electrical work — all of it comes back to blending new material into
              old.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want your project on this page?"
        body="Send through what you are planning and we will walk the space, scope it in writing, and give you a timeline you can build a schedule around."
      />
    </>
  )
}
