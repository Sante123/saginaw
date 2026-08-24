import { useState } from 'react'
import { site } from '../data/site'
import { services } from '../data/content'

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  service: '',
  location: '',
  message: '',
  company: '', // honeypot — humans never see this
}

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name so we know who we are replying to.'
  if (!v.email.trim()) e.email = 'Enter an email address so we can send the estimate.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = 'That email address does not look right. Check for a typo.'
  if (!v.message.trim()) e.message = 'Tell us a little about the job.'
  else if (v.message.trim().length < 15)
    e.message = 'A sentence or two helps — what is the space, and what needs doing?'
  return e
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (key) => (ev) => {
    setValues((v) => ({ ...v, [key]: ev.target.value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const mailtoFallback = () => {
    const subject = encodeURIComponent(
      `Website enquiry — ${values.service || 'Drywall'} — ${values.name}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        values.phone && `Phone: ${values.phone}`,
        values.service && `Service: ${values.service}`,
        values.location && `Job location: ${values.location}`,
        '',
        values.message,
      ]
        .filter(Boolean)
        .join('\n')
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (values.company) return // bot filled the honeypot

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = document.querySelector('[aria-invalid="true"]')
      if (first) first.focus()
      return
    }

    // No form endpoint configured yet — hand off to the visitor's email client
    // so enquiries still reach Patrick from day one.
    if (!site.form.endpoint) {
      mailtoFallback()
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const payload = { ...values, _subject: `Website enquiry from ${values.name}` }
      if (site.form.accessKey) payload.access_key = site.form.accessKey
      delete payload.company

      const res = await fetch(site.form.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setValues(EMPTY)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form__status form__status--ok" role="status">
        <strong>Message sent.</strong>{' '}
        {site.form.endpoint
          ? 'Patrick will get back to you, usually within one business day. If it is urgent, email direct at '
          : 'Your email app should have opened with the details filled in — send it and it lands with Patrick. If nothing opened, email direct at '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {status === 'error' && (
        <div className="form__status form__status--err" role="alert">
          <strong>That did not send.</strong> Try again, or email{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </div>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'name-err' : undefined}
          />
          {errors.name && (
            <span className="field__error" id="name-err">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-err' : undefined}
          />
          {errors.email && (
            <span className="field__error" id="email-err">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
          />
        </div>

        <div className="field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" value={values.service} onChange={set('service')}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Drywall Repair">Drywall repair</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="location">Job location</label>
        <input
          id="location"
          name="location"
          placeholder="Bend, Redmond, Sisters…"
          value={values.location}
          onChange={set('location')}
        />
      </div>

      <div className="field">
        <label htmlFor="message">
          About the job <span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={set('message')}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-err' : 'message-hint'}
        />
        {errors.message ? (
          <span className="field__error" id="message-err">
            {errors.message}
          </span>
        ) : (
          <span className="field__hint" id="message-hint">
            Useful to include: roughly how much square footage, new build or repair, and when you
            would like it done.
          </span>
        )}
      </div>

      {/* Honeypot — hidden from people, irresistible to bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={set('company')} />
      </div>

      <div>
        <button type="submit" className="btn btn--lg" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        <p className="field__hint" style={{ marginTop: '.85rem' }}>
          Your details go to Patrick and nowhere else.
        </p>
      </div>
    </form>
  )
}
