import { useId, useMemo, useState } from 'react'
import Icon from './Icon'

export default function FaqAccordion({ items, showFilters = true, defaultOpen = 0 }) {
  const uid = useId()
  const [openIdx, setOpenIdx] = useState(defaultOpen)
  const [filter, setFilter] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((i) => i.category).filter(Boolean)))],
    [items]
  )

  const visible = filter === 'All' ? items : items.filter((i) => i.category === filter)

  return (
    <div>
      {showFilters && categories.length > 2 && (
        <div className="filters" role="tablist" aria-label="Filter questions by topic">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              className={`filter${filter === c ? ' is-active' : ''}`}
              onClick={() => {
                setFilter(c)
                setOpenIdx(0)
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="acc">
        {visible.map((item, i) => {
          const isOpen = openIdx === i
          return (
            <div className={`acc__item${isOpen ? ' is-open' : ''}`} key={item.q}>
              <h3 style={{ margin: 0 }}>
                <button
                  type="button"
                  className="acc__btn"
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-panel-${i}`}
                  id={`${uid}-btn-${i}`}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="acc__icon">
                    <Icon name="plus" size={16} />
                  </span>
                </button>
              </h3>
              <div
                className="acc__panel"
                id={`${uid}-panel-${i}`}
                role="region"
                aria-labelledby={`${uid}-btn-${i}`}
              >
                <div className="acc__panel-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
