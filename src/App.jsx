import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingWidgets from './components/layout/FloatingWidgets.jsx';
import StructuredData from './components/StructuredData.jsx';
import {
  About,
  Development,
  Hero,
  Process,
  Services,
  Technologies,
} from './components/sections/Core.jsx';
import Telecalling from './components/sections/Telecalling.jsx';
import {
  CtaStrip,
  Portfolio,
  Pricing,
  Team,
  Testimonials,
  WhyUs,
} from './components/sections/Content.jsx';
import { Contact, Faq } from './components/sections/FaqContact.jsx';

export default function App() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Services />
        <About />
        <Development />
        <Technologies />
        <Process />
        <Telecalling />
        <CtaStrip />
        <Team />
        <Portfolio />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
