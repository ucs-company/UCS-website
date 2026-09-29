import { ctaStrip, portfolio, pricing, team, testimonials, why } from '../../data/content.js';
import { CONTACT } from '../../data/site.js';
import { A, IconChip, Ph, Reveal, SectionHead, T } from '../ui.jsx';
import MemberAvatar from '../MemberAvatar.jsx';
import Icon from '../Icon.jsx';
import { useSlider } from '../../hooks/useSlider.js';

export function CtaStrip() {
  return (
    <section className="cta-strip">
      <div className="container cta-strip__inner">
        <div>
          <h2>
            <T text={ctaStrip.title} />
          </h2>
          <p>
            <T text={ctaStrip.text} />
          </p>
        </div>
        <a className="btn btn--primary btn--lg" href="#contact">
          {ctaStrip.cta}
          <Icon name="arrowRight" size={17} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function Team() {
  const t = team;
  return (
    <section className="section section--anchor" id="team">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} text={t.text} tone="blue" />

        {t.groups.map((group) => (
          <div className={`team-group${group.key === 'tel' ? ' team-group--tel' : ''}`} key={group.key}>
            <Reveal className="team-group__head">
              <span className="team-group__badge" aria-hidden="true">
                <Icon name={group.icon} size={23} />
              </span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
              </div>
              <span className="team-group__count">
                <T text={group.count} />
              </span>
            </Reveal>

            <div className={`team-grid team-grid--${group.members.length}`}>
              {group.members.map((member, i) => (
                <Reveal as="article" className="member" delay={(i % 4) * 60} key={member.role}>
                  <MemberAvatar role={member.role} photo={member.photo} />
                  <span className="member__name">
                    <Ph>[EDIT full name]</Ph>
                  </span>
                  <span className="member__role">{member.role}</span>
                  <div className="member__skills">
                    {member.skills.map((skill) => (
                      <span className={`tag tag--${group.tone}`} key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal className="collab">
          <h3>{t.collab.title}</h3>
          <p>
            <T text={t.collab.text} />
          </p>
          <div className="collab__flow">
            {t.collab.steps.map((step, i) => (
              <div className="collab__step" key={step.title}>
                <span className="collab__step-num">{i + 1}</span>
                <h4>{step.title}</h4>
                <p>
                  <T text={step.text} />
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hiring">
          <div className="hiring__body">
            <span className="hiring__icon" aria-hidden="true">
              <Icon name="userPlus" size={22} />
            </span>
            <div>
              <h3>{t.hiring.title}</h3>
            </div>
          </div>
          <A className="btn btn--ghost" href={`mailto:${CONTACT.email}`}>
            {t.hiring.cta}
          </A>
        </Reveal>
      </div>
    </section>
  );
}

export function Portfolio() {
  const p = portfolio;
  return (
    <section className="section section--grey section--anchor" id="portfolio">
      <div className="container">
        <SectionHead eyebrow={p.eyebrow} title={p.title} text={p.text} tone="blue" />

        <div className="pf-grid">
          {p.items.map((item, i) => (
            <Reveal as="article" className="pf-card" delay={i * 70} key={i}>
              <div className="pf-card__media" aria-hidden="true">
                <Icon name={item.icon} size={34} strokeWidth={1.7} />
                <span className="pf-card__media-label">
                  <T text={item.mediaLabel} />
                </span>
              </div>
              <div className="pf-card__body">
                <div className="pf-card__head">
                  <h3>
                    <T text={item.title} />
                  </h3>
                  <span className={`pf-card__type${item.tone ? ` pf-card__type--${item.tone}` : ''}`}>
                    {item.type}
                  </span>
                </div>
                <p>
                  <T text={item.text} />
                </p>
                <div className="pf-card__foot">
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span className={`tag${item.tone ? ` tag--${item.tone}` : ''}`} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="pf-note">
          <T text={p.note} />
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHead eyebrow={why.eyebrow} title={why.title} />
        <div className="why-grid">
          {why.items.map((item, i) => (
            <Reveal as="article" className="card" delay={(i % 3) * 60} key={item.title}>
              <IconChip icon={item.icon} size={21} className="icon-chip--sm" />
              <div>
                <h3>{item.title}</h3>
                <p>
                  <T text={item.text} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const p = pricing;
  return (
    <section className="section pricing section--anchor" id="pricing">
      <div className="container">
        <SectionHead eyebrow={p.eyebrow} title={p.title} text={p.text} />

        <div className="price-grid">
          {p.cards.map((card, i) => (
            <Reveal
              as="article"
              className={`price-card${card.tone ? ` price-card--${card.tone}` : ''}${
                card.featured ? ' price-card--featured' : ''
              }`}
              delay={card.featured ? 80 : undefined}
              key={card.title}
            >
              {card.flag ? <span className="price-card__flag">{card.flag}</span> : null}
              <span className="price-card__icon" aria-hidden="true">
                <Icon name={card.icon} size={25} />
              </span>
              <h3>{card.title}</h3>
              <p className="price-card__sub">{card.sub}</p>
              <p className="price-card__amount">
                <T text={card.amount} />
                <small>
                  <T text={card.amountNote} />
                </small>
              </p>
              <ul className="price-card__list">
                {card.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={17} strokeWidth={2.4} aria-hidden="true" />
                    <span>
                      <T text={item} />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="price-card__foot">
                <a className="btn btn--primary btn--block" href="#contact">
                  {card.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="price-card__note" style={{ textAlign: 'center' }}>
          <T text={p.note} />
        </Reveal>

        <Reveal className="price-combo">
          <div className="price-combo__body">
            <h3>{p.combo.title}</h3>
            <p>
              <T text={p.combo.text} />
            </p>
            <div className="price-combo__tags">
              {p.combo.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a className="btn btn--primary btn--lg" href="#contact">
            {p.combo.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const t = testimonials;
  const { index, maxIndex, offset, dragging, go, viewportRef, handlers } = useSlider(
    t.items.length
  );
  const dotCount = maxIndex + 1;

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} tone="blue" />

        <Reveal className="slider" id="testimonialSlider">
          <div
            className={`slider__viewport${dragging ? ' is-dragging' : ''}`}
            id="sliderViewport"
            ref={viewportRef}
            {...handlers}
          >
            <div
              className={`slider__track${dragging ? ' is-dragging' : ' is-animating'}`}
              id="sliderTrack"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {t.items.map((item, i) => (
                <div className="slide" key={i}>
                  <figure className="tcard">
                    <span className="tcard__stars" role="img" aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Icon name="star" key={s} size={16} aria-hidden="true" />
                      ))}
                    </span>
                    <blockquote className="tcard__quote">
                      <T text={item.quote} />
                    </blockquote>
                    <figcaption className="tcard__foot">
                      <span className="tcard__avatar" aria-hidden="true">
                        <Ph>[EDIT]</Ph>
                      </span>
                      <span>
                        <span className="tcard__name">
                          <T text={t.attribution.name} />
                        </span>
                        <span className="tcard__role">
                          <T text={t.attribution.role} />
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="slider__controls">
            <button
              className="slider__btn"
              type="button"
              id="sliderPrev"
              aria-label="Previous testimonial"
              onClick={() => go(index - 1)}
              disabled={index === 0}
            >
              <Icon name="chevronLeft" size={18} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <div className="slider__dots" id="sliderDots" role="group" aria-label="Choose testimonial">
              {Array.from({ length: dotCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className="slider__dot"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button
              className="slider__btn"
              type="button"
              id="sliderNext"
              aria-label="Next testimonial"
              onClick={() => go(index + 1)}
              disabled={index >= maxIndex}
            >
              <Icon name="chevronRight" size={18} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
