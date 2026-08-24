import { marquee } from '../data/content'

/**
 * The green band from the template. Duplicated once so the CSS animation can
 * translate -50% and loop seamlessly. Pauses on hover and freezes entirely
 * under prefers-reduced-motion.
 */
export default function Marquee() {
  const group = (
    <div className="marquee__group" aria-hidden="true">
      {marquee.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
          <span className="marquee__dot" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee">
      <span className="sr-only">Services: {marquee.join(', ')}.</span>
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  )
}
