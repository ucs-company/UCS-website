import { telecalling } from '../../data/content.js';
import { Reveal, SectionHead, T } from '../ui.jsx';
import Icon from '../Icon.jsx';
import { useAudioAvailability, useTabs } from '../../hooks/useTabs.js';
import recordings from '../../data/recordings.json';

function RecordingCard({ index, card, state }) {
  return (
    <div className="rec-card">
      <span className="rec-card__num">{index}</span>
      <div className="rec-card__body">
        <span className="rec-card__label">{card.label}</span>
        <span className="rec-card__lang">{card.lang}</span>
        {state === 'ready' ? (
          <audio
            className="rec-card__audio"
            src={card.src}
            controls
            preload="none"
            aria-label={`${card.label} — ${card.lang}`}
          />
        ) : null}
        {state !== 'ready' ? (
          <span className="rec-soon">
            <Icon name="clockSmall" size={14} strokeWidth={2} aria-hidden="true" />
            {state === 'probing' ? 'Checking for recording…' : 'Recording coming soon'}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function Recordings() {
  const { index, setIndex, onKeyDown, registerTab } = useTabs(recordings.length);

  return (
    <Reveal className="tabs" id="recordings" style={{ marginTop: '56px' }}>
      <div className="section-head" style={{ marginBottom: 0 }}>
        <h3>{telecalling.recordings.title}</h3>
        <p>
          <T text={telecalling.recordings.text} />
        </p>
      </div>

      <div
        className="tablist"
        role="tablist"
        aria-label="Sample call recordings by language"
        id="recTablist"
        onKeyDown={onKeyDown}
      >
        {recordings.map((lang, i) => (
          <button
            className={`tab${i === index ? ' is-active' : ''}`}
            type="button"
            role="tab"
            key={lang.slug}
            id={`tab-${lang.slug}`}
            aria-controls={`panel-${lang.slug}`}
            aria-selected={i === index}
            tabIndex={i === index ? 0 : -1}
            ref={registerTab(i)}
            onClick={() => setIndex(i)}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {recordings.map((lang, i) => (
        <RecordingPanel
          key={lang.slug}
          lang={lang}
          active={i === index}
          tabId={`tab-${lang.slug}`}
          panelId={`panel-${lang.slug}`}
        />
      ))}

      <p className="pf-note">
        <T text={telecalling.recordings.note} />
      </p>
    </Reveal>
  );
}

function RecordingPanel({ lang, active, tabId, panelId }) {
  return (
    <div
      className="tabpanel"
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      hidden={!active}
    >
      <div className="tabpanel__inner rec-grid">
        {lang.cards.map((card, i) => (
          <ProbeCard key={`${card.src}-${i}`} card={card} index={i + 1} active={active} />
        ))}
      </div>
    </div>
  );
}

function ProbeCard({ card, index, active }) {
  const state = useAudioAvailability(active ? card.src : null);
  return <RecordingCard index={index} card={card} state={state} />;
}

export default function Telecalling() {
  const t = telecalling;
  return (
    <section className="section section--grey section--anchor" id="telecalling">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} text={t.text} />

        <Reveal
          as="h3"
          className="faq__col-title"
          style={{ marginBottom: '20px' }}
        >
          {t.includesTitle}
        </Reveal>

        <div className="checklist">
          {t.includes.map((item, i) => (
            <Reveal className="check-item" delay={(i % 3) * 50} key={item.title}>
              <span className="check-item__icon" aria-hidden="true">
                <Icon name="check" size={15} strokeWidth={3} />
              </span>
              <div className="check-item__body">
                <h3>{item.title}</h3>
                <p>
                  <T text={item.text} />
                </p>
              </div>
            </Reveal>
          ))}

          <p className="checklist__note">
            <Icon name="info" size={18} strokeWidth={2} aria-hidden="true" />
          </p>
        </div>

        <Recordings />

        <div id="telecalling-start" style={{ marginTop: '60px' }}>
          <SectionHead eyebrow={t.start.eyebrow} title={t.start.title} text={t.start.text} />
          <ol className="steps">
            {t.start.steps.map((step, i) => (
              <Reveal as="li" className="step" delay={i * 70} key={step.title}>
                <span className="step__num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>
                  <T text={step.text} />
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div id="calling-process" style={{ marginTop: '60px' }}>
          <SectionHead eyebrow={t.calling.eyebrow} title={t.calling.title} text={t.calling.text} />
          <div className="tel-grid">
            {t.calling.items.map((item, i) => (
              <Reveal
                as="article"
                className="card card--lift"
                delay={(i % 3) * 60}
                key={item.title}
              >
                <span className="icon-chip icon-chip--sm" aria-hidden="true">
                  <Icon name={item.icon} size={21} />
                </span>
                <h3>{item.title}</h3>
                <p>
                  <T text={item.text} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="benefits" id="telecalling-benefits" style={{ marginTop: '60px' }}>
          <SectionHead eyebrow={t.benefits.eyebrow} title={t.benefits.title} />
          <div className="grid grid--3">
            {t.benefits.items.map((item, i) => (
              <Reveal as="article" className="card" delay={(i % 3) * 60} key={item.title}>
                <span className="icon-chip" aria-hidden="true">
                  <Icon name={item.icon} size={25} />
                </span>
                <h3>{item.title}</h3>
                <p>
                  <T text={item.text} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
