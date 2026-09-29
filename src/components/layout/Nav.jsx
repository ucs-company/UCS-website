import { ADDRESS, BRAND, CONTACT, NAV } from '../../data/site.js';
import Icon from '../Icon.jsx';

export function LogoPlate({ mark = false, alt = `${BRAND.name} logo` }) {
  return (
    <span className={`logo-plate${mark ? ' logo-plate--mark' : ''}`}>
      <img className="logo-plate__img" src={BRAND.logo} alt={mark ? '' : alt} width="42" height="42" />
      {mark ? null : (
        <span className="logo-plate__text">
          <span className="logo-plate__name">{BRAND.nameLine1}</span>
          <span className="logo-plate__tag">{BRAND.nameLine2}</span>
        </span>
      )}
    </span>
  );
}

export function DrawerBody({ onNavigate }) {
  return (
    <>
      <nav className="nav-drawer__list" aria-label="Mobile">
        {NAV.drawer.map((item, i) =>
          item.type === 'sublabel' ? (
            <span className="nav-drawer__sublabel" key={`${item.label}-${i}`}>
              {item.label}
            </span>
          ) : (
            <a href={item.href} key={`${item.href}-${i}`} onClick={onNavigate}>
              {item.label}
            </a>
          )
        )}
      </nav>

      <div className="nav-drawer__foot">
        <a className="btn btn--primary btn--block" href="#contact" onClick={onNavigate}>
          Get a Free Consultation
        </a>
        <span className="nav-drawer__contact">
          <Icon name="phone" size={16} aria-hidden="true" />
          {CONTACT.phoneDisplay}
        </span>
        <span className="nav-drawer__contact">
          <Icon name="mail" size={16} aria-hidden="true" />
          {CONTACT.email}
        </span>
        <span className="nav-drawer__contact nav-drawer__contact--address">
          <Icon name="pin" size={16} aria-hidden="true" />
          {ADDRESS.lines.join(', ')}
        </span>
      </div>
    </>
  );
}

export function ServicesDrop({ id, onNavigate }) {
  const item = NAV.primary.find((n) => n.label === 'Services');
  return (
    <div className="nav__drop" id={id}>
      {item.children.map((child) => (
        <a href={child.href} key={child.href} onClick={onNavigate}>
          <span className={`nav__drop__icon${child.tone ? ` nav__drop__icon--${child.tone}` : ''}`}>
            <Icon name={child.icon} size={17} aria-hidden="true" />
          </span>
          <span>
            <span className="nav__drop__title">{child.title}</span>
            <span className="nav__drop__text">{child.text}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export function PrimaryNav({ active, servicesActive, dropOpen, onDropToggle, onNavigate, dropId, btnId }) {
  return (
    <nav className="nav" aria-label="Primary">
      <ul className="nav__list">
        {NAV.primary.map((item) => {
          if (item.children) {
            return (
              <li className="nav__item" key={item.label}>
                <button
                  className={`nav__drop-btn${servicesActive ? ' is-active' : ''}`}
                  id={btnId}
                  type="button"
                  aria-expanded={dropOpen}
                  aria-controls={dropId}
                  aria-haspopup="true"
                  onClick={onDropToggle}
                >
                  Services
                  <Icon name="chevronDown" size={15} strokeWidth={2.4} aria-hidden="true" />
                </button>
                {dropOpen ? <ServicesDrop id={dropId} onNavigate={onNavigate} /> : null}
              </li>
            );
          }
          const isActive = active === item.href.slice(1);
          return (
            <li className="nav__item" key={item.href}>
              <a
                className={`nav__link${isActive ? ' is-active' : ''}`}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                onClick={onNavigate}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
