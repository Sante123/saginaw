import { getImage } from '../data/images'
import Icon from './Icon'

/**
 * Renders a real photo when one is configured in src/data/images.js,
 * and a labelled placeholder at the correct aspect ratio when one is not.
 * Layout stays identical either way, so dropping photos in never shifts the page.
 */
export default function Img({ name, className = '', ratio, priority = false, style }) {
  const img = getImage(name)
  const aspect = ratio || img.ratio

  if (!img.src) {
    return (
      <div
        className={`img img--ph ${className}`}
        style={{ aspectRatio: aspect, ...style }}
        role="img"
        aria-label={img.alt || 'Photo placeholder'}
      >
        <div className="img__ph-inner">
          <Icon name="image" size={26} className="img__ph-icon" />
          <div className="img__ph-label">Photo needed</div>
          <p className="img__ph-note">{img.note}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`img ${className}`} style={{ aspectRatio: aspect, ...style }}>
      <img
        className="img__el"
        src={img.src}
        alt={img.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : 'auto'}
      />
    </div>
  )
}
