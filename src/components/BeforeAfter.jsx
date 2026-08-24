import { useState } from 'react'
import Img from './Img'
import Icon from './Icon'

/**
 * Drag-to-compare slider.
 *
 * Built on a full-bleed range input rather than custom pointer handlers: it gets
 * mouse, touch and keyboard control for free, announces its value to screen
 * readers, and cannot end up in a stuck-drag state.
 */
export default function BeforeAfter({
  beforeKey = 'beforeImage',
  afterKey = 'afterImage',
  beforeLabel = 'Before',
  afterLabel = 'After',
}) {
  const [pos, setPos] = useState(50)

  return (
    <div className="ba">
      <div className="ba__layer">
        <Img name={beforeKey} priority />
      </div>

      <div className="ba__after" style={{ width: `${pos}%` }} aria-hidden="true">
        <div className="ba__after-inner" style={{ width: pos > 0 ? `${(100 / pos) * 100}%` : '100%' }}>
          <Img name={afterKey} priority />
        </div>
      </div>

      <span className="ba__badge ba__badge--before">{beforeLabel}</span>
      <span className="ba__badge ba__badge--after">{afterLabel}</span>

      <div className="ba__handle" style={{ left: `${pos}%` }}>
        <span className="ba__knob" aria-hidden="true">
          <Icon name="sliders" size={20} />
        </span>
      </div>

      <input
        className="ba__range"
        type="range"
        min="0"
        max="100"
        step="1"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Reveal the ${afterLabel.toLowerCase()} photo. Drag or use the arrow keys.`}
        aria-valuetext={`${pos}% ${afterLabel.toLowerCase()}`}
      />
    </div>
  )
}
