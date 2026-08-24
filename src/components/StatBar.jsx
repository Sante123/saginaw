import { stats } from '../data/content'
import Icon from './Icon'

export default function StatBar() {
  return (
    <div className="statbar">
      {stats.map((s) => (
        <div className="statbar__item" key={s.label}>
          <span className="statbar__icon">
            <Icon name={s.icon} size={21} />
          </span>
          <span>
            <span className="statbar__value">{s.value}</span>
            <span className="statbar__label">{s.label}</span>
          </span>
        </div>
      ))}
    </div>
  )
}
