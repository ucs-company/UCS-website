import { useEffect, useRef, useState } from 'react';
import { useScrolled } from '../../hooks/useScrolled.js';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';
import { useDrawer } from '../../hooks/useDrawer.js';
import { DrawerBody, LogoPlate, PrimaryNav } from './Nav.jsx';
import Icon from '../Icon.jsx';

const SPY_IDS = [
  'home',
  'about',
  'services',
  'development',
  'technologies',
  'process',
  'telecalling',
  'team',
  'portfolio',
  'pricing',
  'faq',
  'contact',
];

export default function Header() {
  const scrolled = useScrolled(12);
  const { active, servicesActive } = useScrollSpy(SPY_IDS);
  const drawer = useDrawer();
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);
  const dropBtnRef = useRef(null);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  const closeDrop = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDropOpen(false), 160);
  };

  const openDrop = () => {
    window.clearTimeout(closeTimer.current);
    window.clearTimeout(openTimer.current);
    openTimer.current = window.setTimeout(() => setDropOpen(true), 60);
  };

  const toggleDrop = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
    setDropOpen((v) => !v);
  };

  useEffect(() => {
    if (!dropOpen) return;
    const onDocClick = (e) => {
      if (!dropRef.current) return;
      if (dropRef.current.contains(e.target) || dropBtnRef.current?.contains(e.target)) return;
      setDropOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDropOpen(false);
        if (dropBtnRef.current) dropBtnRef.current.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const first = dropRef.current?.querySelector('a');
      const last = dropRef.current?.querySelector('a:last-of-type');
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [dropOpen]);

  useEffect(() => {
    return () => {
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  const onNavigate = () => {
    setDropOpen(false);
    drawer.close(false);
  };

  return (
    <>
      <header
        className={`site-header${scrolled ? ' is-stuck' : ''}`}
        id="siteHeader"
        onMouseLeave={closeDrop}
      >
        <div className="container header__inner">
          <a
            className="header__brand"
            href="#home"
            aria-label="Ultimate Consultancy Services — home"
            onClick={onNavigate}
          >
            <LogoPlate />
          </a>

          <div
            ref={dropRef}
            onMouseEnter={openDrop}
            style={{ display: 'contents' }}
          >
            <PrimaryNav
              active={active}
              servicesActive={servicesActive}
              dropOpen={dropOpen}
              onDropToggle={toggleDrop}
              onNavigate={onNavigate}
              dropId="servicesDrop"
              btnId="servicesDropBtn"
            />
          </div>

          <div className="header__actions">
            <a className="btn btn--primary header__cta" href="#contact" onClick={onNavigate}>
              Get a Free Consultation
            </a>
            <button
              className={`nav-toggle${drawer.open ? ' is-open' : ''}`}
              ref={drawer.toggleRef}
              type="button"
              aria-expanded={drawer.open}
              aria-controls="navDrawer"
              aria-label={drawer.open ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => {
                if (drawer.open) drawer.close();
                else {
                  drawer.rememberOrigin(drawer.toggleRef.current);
                  drawer.setOpen(true);
                }
              }}
            >
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-scrim${drawer.open ? ' is-open' : ''}`}
        id="navScrim"
        onClick={() => drawer.close()}
        aria-hidden="true"
      />

      <aside
        className={`nav-drawer${drawer.open ? ' is-open' : ''}`}
        id="navDrawer"
        ref={drawer.panelRef}
        aria-label="Mobile navigation"
        aria-hidden={!drawer.open}
        inert={!drawer.open}
      >
        <div className="nav-drawer__head">
          <LogoPlate mark />
          <button
            className="nav-drawer__close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => drawer.close()}
          >
            <Icon name="close" size={20} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>
        <DrawerBody onNavigate={() => drawer.close(false)} />
      </aside>
    </>
  );
}
