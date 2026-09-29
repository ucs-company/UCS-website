import { hero, services, about, development, technologies, process } from '../../data/content.js';
import { BRAND } from '../../data/site.js';
import { CheckList, IconChip, Reveal, SectionHead, T } from '../ui.jsx';
import Icon from '../Icon.jsx';

export function Hero() {
  return (
    <section className="hero" id="home">
      <span className="hero__rings" aria-hidden="true" />
      <span className="hero__arc" aria-hidden="true" />

      <div className="container hero__inner hero__inner--solo">
        <div className="hero__copy">
          <Reveal className="hero__badge" delay={0} immediate>
            <span className="hero__badge-dot" aria-hidden="true">
              <Icon name="check" size={15} strokeWidth={2.2} />
            </span>
            <span>
              <b>{hero.badgeLead}</b> · {hero.badgeTail}
            </span>
          </Reveal>

          <h1 className="reveal is-visible" style={{ '--d': '60ms' }}>
            {hero.h1Before}
            <span className="hl">{hero.h1Hl}</span>
            {hero.h1Mid}
            <span className="hl-o">{hero.h1HlOrange}</span>
            {hero.h1After}
          </h1>

          <Reveal as="span" className="hero__tagline" delay={120} immediate>
            {BRAND.tagline}
          </Reveal>

          <Reveal as="p" className="hero__text" delay={180} immediate>
            <T text={hero.text} />
          </Reveal>

          <Reveal className="hero__cta" delay={240} immediate>
            <a className="btn btn--primary btn--lg" href="#contact">
              Get a Free Consultation
              <Icon name="arrowRight" size={17} strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost btn--lg" href="#development">
              Explore our services
            </a>
          </Reveal>

          <Reveal className="hero__chips" delay={300} immediate>
            {hero.chips.map((chip) => (
              <span className="pill" key={chip}>
                <Icon name="check" size={14} strokeWidth={2.2} aria-hidden="true" />
                {chip}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section section--anchor" id="services">
      <div className="container">
        <SectionHead
          eyebrow={services.eyebrow}
          title={services.title}
          text={services.text}
          tone="blue"
        />

        <div className="svc-pair">
          {services.cards.map((card, i) => (
            <Reveal
              as="article"
              className={`svc-card${card.tone ? ` svc-card--${card.tone}` : ''}`}
              delay={i === 1 ? 90 : undefined}
              key={card.key}
            >
              <div className="svc-card__top">
                <span className="svc-card__icon" aria-hidden="true">
                  <Icon name={card.icon} size={27} />
                </span>
                <div>
                  <h3>{card.title}</h3>
                  <span className="svc-card__kicker">{card.kicker}</span>
                </div>
              </div>
              <p>
                <T text={card.text} />
              </p>
              <CheckList items={card.items} />
              <div className="svc-card__foot">
                <a
                  className="btn btn--link"
                  href={card.href}
                  style={card.tone ? { color: 'var(--orange)' } : undefined}
                >
                  {card.cta}
                  <Icon name="arrowRight" size={15} strokeWidth={2.4} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section section--grey section--anchor" id="about">
      <div className="container about__grid">
        <Reveal className="about__story">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>
            <T text={about.title} />
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>
              <T text={p} />
            </p>
          ))}

          <div className="about__split">
            {about.split.map((item) => (
              <div className={`about__split-card about__split-card--${item.key}`} key={item.key}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="about__mission">
            <Icon name="target" size={22} aria-hidden="true" />
            <div>
              <h3>{about.mission.title}</h3>
              <p>{about.mission.text}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="about__visual" delay={110}>
          <div className="about-diagram">
            <span className="about-diagram__rings" aria-hidden="true" />
            <span className="about-diagram__title">{about.diagram.title}</span>
            <div className="about-diagram__teams">
              {about.diagram.teams.map((team) => (
                <div
                  className={`about-diagram__team${team.key === 'tel' ? ' about-diagram__team--tel' : ''}`}
                  key={team.key}
                >
                  <h4>{team.title}</h4>
                  <p>{team.text}</p>
                </div>
              ))}
            </div>
            <span className="about-diagram__join">
              <Icon name="plusCircle" size={15} strokeWidth={2.2} aria-hidden="true" />
              {about.diagram.join}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Development() {
  return (
    <section className="section section--anchor" id="development">
      <div className="container">
        <SectionHead
          eyebrow={development.eyebrow}
          title={development.title}
          text={development.text}
          tone="blue"
        />
        <div className="dev-grid">
          {development.items.map((item, i) => (
            <Reveal
              as="article"
              className="card card--lift"
              delay={(i % 4) * 60}
              key={item.title}
            >
              <IconChip icon={item.icon} tone={item.tone} />
              <h3>{item.title}</h3>
              <p>
                <T text={item.text} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Technologies() {
  return (
    <section className="section section--grey tech" id="technologies">
      <div className="container">
        <SectionHead
          eyebrow={technologies.eyebrow}
          title={technologies.title}
          text={technologies.text}
        />
        <Reveal className="chip-group chip-group--center">
          {technologies.chips.map((chip) => (
            <span className="chip chip--lg" key={chip}>
              {chip}
            </span>
          ))}
        </Reveal>
        <Reveal as="p" className="tech__note">
          <T text={technologies.note} />
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section section--anchor" id="process">
      <div className="container">
        <SectionHead
          eyebrow={process.eyebrow}
          title={process.title}
          text={process.text}
          tone="blue"
        />
        <ol className="dproc">
          {process.steps.map((step, i) => (
            <Reveal as="li" className="dproc__step" delay={i * 60} key={step.title}>
              <span className="dproc__num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>
                <T text={step.text} />
              </p>
              <ul>
                {step.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} strokeWidth={2.6} aria-hidden="true" />
                    <T text={item} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
