import { contact, faq } from '../../data/content.js';
import { ADDRESS, CONTACT, FORM } from '../../data/site.js';
import { Reveal, SectionHead, T } from '../ui.jsx';
import Icon from '../Icon.jsx';
import { useFaq } from '../../hooks/useFaq.js';
import { useInquiryForm } from '../../hooks/useInquiryForm.js';

function FaqItem({ item, index, open, onToggle }) {
  const id = `faq-${index}`;
  const answerId = `faq-a${index}`;
  return (
    <div className="faq__item">
      <button
        className="faq__q"
        type="button"
        id={id}
        aria-expanded={open}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span>
          <T text={item.q} />
        </span>
        <span className="faq__icon" aria-hidden="true" />
      </button>
      <div
        className={`faq__a${open ? ' is-open' : ''}`}
        id={answerId}
        role="region"
        aria-labelledby={id}
      >
        <div className="faq__a-inner">
          {item.a
            ? item.a.map((p, i) => (
                <p key={i}>
                  <T text={p} />
                </p>
              ))
            : null}
          {item.list ? (
            <ul>
              {item.list.map((li) => (
                <li key={li}>
                  <Icon name="check" size={15} strokeWidth={2.6} aria-hidden="true" />
                  <span>
                    <T text={li} />
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          {item.after ? (
            <p>
              <T text={item.after} />
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { open, toggle } = useFaq();
  let counter = 0;

  return (
    <section className="section section--grey section--anchor" id="faq">
      <div className="container">
        <SectionHead eyebrow={faq.eyebrow} title={faq.title} text={faq.text} />

        <div className="faq">
          {faq.columns.map((col) => (
            <div className={`faq__col${col.key === 'tel' ? ' faq__col--tel' : ''}`} key={col.key}>
              <h3 className="faq__col-title">{col.title}</h3>
              <div className="faq__list">
                {col.items.map((item) => {
                  const n = (counter += 1);
                  return (
                    <FaqItem
                      key={item.q}
                      item={item}
                      index={n}
                      open={Boolean(open[n])}
                      onToggle={() => toggle(n)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, required, error, children }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label} {required ? <span className="req" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {error ? (
        <span className="form-error" id={`${id}-err`}>
          <Icon name="alert" size={13} strokeWidth={2.2} aria-hidden="true" />
          {error}
        </span>
      ) : null}
    </div>
  );
}

export function Contact() {
  const form = useInquiryForm();
  const c = contact;

  return (
    <section className="section inquiry section--anchor" id="contact">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={c.title} text={c.text} />

        <div className="inquiry__grid">
          <Reveal className="form-card">
            <form id="inquiryForm" onSubmit={form.onSubmit} noValidate>
              <div
                className={`form-status${
                  form.status ? ` is-visible form-status--${form.status.type}` : ''
                }`}
                id="formStatus"
                role="status"
                aria-live="polite"
              >
                <span className="form-status__icon" aria-hidden="true">
                  <Icon
                    name={form.status?.type === 'error' ? 'alert' : 'check'}
                    size={15}
                    strokeWidth={3}
                    className="form-status__check"
                  />
                </span>
                <div id="formStatusText">
                  {form.status ? (
                    <>
                      <strong>{form.status.title}</strong>
                      <p>{form.status.message}</p>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="form-grid form-grid--2">
                <Field id="f-name" label="Full name" required error={form.errors.name}>
                  <input
                    type="text"
                    id="f-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.values.name}
                    onChange={form.onChange}
                    onBlur={form.blur('name')}
                    ref={form.registerField('name')}
                    aria-invalid={Boolean(form.errors.name)}
                    aria-describedby={form.errors.name ? 'f-name-err' : undefined}
                    required
                  />
                </Field>

                <Field id="f-company" label="Company">
                  <input
                    type="text"
                    id="f-company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Your company name"
                    value={form.values.company}
                    onChange={form.onChange}
                  />
                </Field>

                <Field id="f-email" label="Email" required error={form.errors.email}>
                  <input
                    type="email"
                    id="f-email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.values.email}
                    onChange={form.onChange}
                    onBlur={form.blur('email')}
                    ref={form.registerField('email')}
                    aria-invalid={Boolean(form.errors.email)}
                    aria-describedby={form.errors.email ? 'f-email-err' : undefined}
                    required
                  />
                </Field>

                <Field id="f-phone" label="Phone" required error={form.errors.phone}>
                  <input
                    type="tel"
                    id="f-phone"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+91 [EDIT]"
                    value={form.values.phone}
                    onChange={form.onChange}
                    onBlur={form.blur('phone')}
                    ref={form.registerField('phone')}
                    aria-invalid={Boolean(form.errors.phone)}
                    aria-describedby={form.errors.phone ? 'f-phone-err' : undefined}
                    required
                  />
                </Field>

                <Field id="f-service" label="Which service do you need?" required error={form.errors.service}>
                  <select
                    id="f-service"
                    name="service"
                    value={form.values.service}
                    onChange={form.onChange}
                    onBlur={form.blur('service')}
                    ref={form.registerField('service')}
                    aria-invalid={Boolean(form.errors.service)}
                    aria-describedby={form.errors.service ? 'f-service-err' : undefined}
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {FORM.services.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="f-budget" label="Approximate budget">
                  <select
                    id="f-budget"
                    name="budget"
                    value={form.values.budget}
                    onChange={form.onChange}
                  >
                    {FORM.budgets.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="form-field form-field--full">
                  <label htmlFor="f-details">
                    Project or campaign details{' '}
                    <span className="req" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="f-details"
                    name="details"
                    placeholder={FORM.detailsPlaceholder}
                    value={form.values.details}
                    onChange={form.onChange}
                    onBlur={form.blur('details')}
                    ref={form.registerField('details')}
                    aria-invalid={Boolean(form.errors.details)}
                    aria-describedby={form.errors.details ? 'f-details-err' : undefined}
                    required
                  />
                  {form.errors.details ? (
                    <span className="form-error" id="f-details-err">
                      <Icon name="alert" size={13} strokeWidth={2.2} aria-hidden="true" />
                      {form.errors.details}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="hp-field" aria-hidden="true">
                <label htmlFor="f-website">Leave this field empty</label>
                <input
                  type="text"
                  id="f-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.values.website}
                  onChange={form.onChange}
                />
              </div>

              <div className="form-foot">
                <button className="btn btn--primary btn--lg" type="submit" id="submitBtn" disabled={form.busy}>
                  <span className="btn__label">{form.busy ? c.sending : c.submit}</span>
                  <Icon name="send" size={17} strokeWidth={2.2} aria-hidden="true" />
                </button>
                <p className="form-hint">{c.hint}</p>
              </div>
            </form>
          </Reveal>

          <aside className="form-aside">
            <Reveal className="aside-card aside-card--accent" delay={60}>
              <h3>{c.asideTitle}</h3>
              <p>{c.asideText}</p>

              <div style={{ marginTop: '18px' }}>
                <div className="aside-contact">
                  <Icon name="phone" size={18} strokeWidth={2} aria-hidden="true" />
                  <div>
                    <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
                    <span className="aside-contact__label">{c.phoneLabel}</span>
                  </div>
                </div>

                <div className="aside-contact">
                  <Icon name="mail" size={18} strokeWidth={2} aria-hidden="true" />
                  <div>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    <span className="aside-contact__label">{c.emailLabel}</span>
                  </div>
                </div>

                <div className="aside-contact aside-contact--address">
                  <Icon name="pin" size={18} strokeWidth={2} aria-hidden="true" />
                  <div>
                    <span className="aside-contact__address">
                      {ADDRESS.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="aside-card" delay={120}>
              <h3>{c.asideNextTitle}</h3>
              <ul className="aside-list" style={{ marginTop: '16px' }}>
                {FORM.afterSubmit.map((item) => (
                  <li key={item.title}>
                    <span className="aside-list__icon" aria-hidden="true">
                      <Icon name="check" size={15} strokeWidth={2.4} />
                    </span>
                    <span>
                      <span className="aside-list__title">{item.title}</span>
                      <span className="aside-list__text">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
