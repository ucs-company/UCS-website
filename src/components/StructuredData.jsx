import { ADDRESS, BRAND, CONTACT } from '../data/site.js';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BRAND.name,
    description:
      'In-house software development and outbound telecalling / lead generation services for Indian businesses.',
    url: 'https://ultimateconsultancy.services/',
    logo: 'https://ultimateconsultancy.services/assets/img/UCS%20(1).png',
    image: 'https://ultimateconsultancy.services/assets/img/og-image.jpg',
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    priceRange: '[EDIT price range]',
    areaServed: 'IN',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.pin,
      addressCountry: ADDRESS.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '[EDIT latitude]',
      longitude: '[EDIT longitude]',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '[EDIT opening time]',
      closes: '[EDIT closing time]',
    },
    sameAs: [
      '[EDIT LinkedIn URL]',
      '[EDIT Facebook URL]',
      '[EDIT Instagram URL]',
      '[EDIT Google Business Profile URL]',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
