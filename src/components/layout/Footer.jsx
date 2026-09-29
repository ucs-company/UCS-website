import { ADDRESS, BRAND, CONTACT, NAV } from '../../data/site.js';
import { A, T } from '../ui.jsx';
import Icon from '../Icon.jsx';
import { LogoPlate } from './Nav.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand-col">
            <LogoPlate />
            <p className="footer__tagline">{BRAND.tagline}</p>
            <p className="footer__about">
              Two in-house teams under one roof — software development and outbound
              telecalling — serving growing Indian businesses from Mumbai.
            </p>
            <SocialLinks className="footer__socials" />
          </div>

          <div>
            <h3 className="footer__title">Development</h3>
            <ul className="footer__list">
              {NAV.footer.development.map((label) => (
                <li key={label}>
                  <a href="#development">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Telecalling</h3>
            <ul className="footer__list">
              {NAV.footer.telecalling.map((label) => (
                <li key={label}>
                  <a href="#telecalling">{label}</a>
                </li>
              ))}
              <li>
                <a href="#recordings">Sample recordings</a>
              </li>
            </ul>

            <h3 className="footer__title" style={{ marginTop: '24px' }}>
              Company
            </h3>
            <ul className="footer__list">
              {NAV.footer.company.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Get in touch</h3>
            <ul className="footer__list">
              <li>
                <a href={`tel:${CONTACT.phoneTel}`}>
                  <Icon name="phone" size={15} aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
                <span className="footer__note">
                  <T text={CONTACT.workingHours} />
                </span>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>
                  <Icon name="mail" size={15} aria-hidden="true" />
                  {CONTACT.email}
                </a>
                <span className="footer__note">Replies within one working day</span>
              </li>
              <li>
                <span style={{ color: 'var(--text-on-dark)', display: 'inline-flex', alignItems: 'flex-start', gap: 8 }}>
                  <Icon
                    name="pin"
                    size={15}
                    aria-hidden="true"
                    style={{ flex: '0 0 auto', marginTop: '4px' }}
                    stroke="var(--orange)"
                  />
                  <span>
                    {ADDRESS.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </span>
              </li>
              <li>
                <a href="#contact">Get a free consultation</a>
                <span className="footer__note">Speak to the team that will actually do the work</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <nav aria-label="Legal">
            <A href="[EDIT Privacy Policy URL]">Privacy Policy</A>
            <A href="[EDIT Terms of Service URL]">Terms of Service</A>
            <A href="[EDIT Sitemap / sitemap.xml]">Sitemap</A>
          </nav>
          <p className="footer__copy">
            © {year} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
