export const BRAND = {
  name: 'Ultimate Consultancy Services',
  short: 'UCS',
  nameLine1: 'Ultimate Consultancy',
  nameLine2: 'Services · UCS',
  tagline: 'We build your software and bring you customers.',
  logo: 'assets/img/UCS%20(1).png',
  founded: '',
};

export const ADDRESS = {
  office: 'Office No. 506, Sanjar Enclave',
  landmark: 'Near Khajuria Tank Road, S.V. Road',
  locality: 'Kandivali West, Mumbai',
  region: 'Maharashtra 400067',
  country: 'India',
  countryCode: 'IN',
  pin: '400067',
  lines: [
    'Office No. 506, Sanjar Enclave',
    'Near Khajuria Tank Road, S.V. Road',
    'Kandivali West, Mumbai',
    'Maharashtra 400067, India',
  ],
  oneLine: 'Office No. 506, Sanjar Enclave, Near Khajuria Tank Road, S.V. Road, Kandivali West, Mumbai, Maharashtra 400067, India',
  street: 'Office No. 506, Sanjar Enclave, Near Khajuria Tank Road, S.V. Road',
  city: 'Kandivali West, Mumbai',
  state: 'Maharashtra',
};

export const CONTACT = {
  phoneDisplay: '+91 99206 11078',
  phoneDigits: '9920611078',
  phoneTel: '+919920611078',
  email: 'consaltancyservicesultimate@gmail.com',
  workingHours: '[EDIT working hours]',
};

export const CONFIG = {
  FORM_ENDPOINT: '',
  FORM_ENDPOINT_IS_JSON: false,
  WHATSAPP_NUMBER: '919920611078',
  WHATSAPP_MESSAGE: 'Hi UCS, I would like to know more about your services.',
  RESPONSE_PROMISE: 'within one working day',
  REVEAL_THRESHOLD: 0.12,
};

export const NAV = {
  primary: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    {
      label: 'Services',
      href: '#services',
      children: [
        {
          href: '#development',
          icon: 'code',
          title: 'Development',
          text: 'Web, mobile & custom software',
        },
        {
          href: '#telecalling',
          icon: 'phone',
          tone: 'orange',
          title: 'Telecalling',
          text: 'Lead generation & appointments',
        },
      ],
    },
    { label: 'Our Team', href: '#team' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  drawer: [
    { type: 'link', label: 'Home', href: '#home' },
    { type: 'link', label: 'About', href: '#about' },
    { type: 'sublabel', label: 'Services' },
    { type: 'link', label: 'Development', href: '#development' },
    { type: 'link', label: 'Telecalling', href: '#telecalling' },
    { type: 'sublabel', label: 'Explore' },
    { type: 'link', label: 'Our Team', href: '#team' },
    { type: 'link', label: 'Process', href: '#process' },
    { type: 'link', label: 'Portfolio', href: '#portfolio' },
    { type: 'link', label: 'Pricing', href: '#pricing' },
    { type: 'link', label: 'FAQ', href: '#faq' },
    { type: 'link', label: 'Contact', href: '#contact' },
  ],
  footer: {
    development: [
      'Custom web development',
      'Mobile app development',
      'E-commerce development',
      'Business management software',
      'API & backend integration',
      'Payment gateway integration',
      'Maintenance & support',
      'Digital marketing',
    ],
    telecalling: [
      'Cold calling',
      'Lead generation',
      'Appointment setting',
      'Market research',
      'Tele-appointment follow-ups',
    ],
    company: [
      { label: 'About UCS', href: '#about' },
      { label: 'Our team', href: '#team' },
      { label: 'Process', href: '#process' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
};

export const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn', href: '[EDIT LinkedIn URL]', icon: 'linkedin' },
  { key: 'facebook', label: 'Facebook', href: '[EDIT Facebook URL]', icon: 'facebook' },
  { key: 'instagram', label: 'Instagram', href: '[EDIT Instagram URL]', icon: 'instagram' },
  { key: 'google', label: 'Google Business', href: '[EDIT Google Business Profile URL]', icon: 'google' },
];

export const FORM = {
  services: [
    { value: 'web-development', label: 'Web development' },
    { value: 'mobile-app', label: 'Mobile app development' },
    { value: 'ecommerce', label: 'E-commerce development' },
    { value: 'business-software', label: 'Business management software' },
    { value: 'api-integration', label: 'API & backend integration' },
    { value: 'payment-integration', label: 'Payment gateway integration' },
    { value: 'maintenance', label: 'Maintenance & support' },
    { value: 'digital-marketing', label: 'Digital marketing' },
    { value: 'telecalling', label: 'Telecalling & lead generation' },
    { value: 'appointment-setting', label: 'Appointment setting' },
    { value: 'market-research', label: 'Market research' },
    { value: 'both', label: 'Both — development and telecalling' },
    { value: 'not-sure', label: 'Not sure yet, please advise' },
  ],
  budgets: [
    { value: '', label: 'Prefer to discuss' },
    { value: 'under-50k', label: 'Under ₹50,000' },
    { value: '50k-1l', label: '₹50,000 – ₹1,00,000' },
    { value: '1l-3l', label: '₹1,00,000 – ₹3,00,000' },
    { value: '3l-5l', label: '₹3,00,000 – ₹5,00,000' },
    { value: '5l-plus', label: 'Above ₹5,00,000' },
  ],
  detailsPlaceholder:
    'For development: what are you building, who will use it, and any deadline. For telecalling: what do you sell, which cities or segments, and roughly how many contacts do you have?',
  afterSubmit: [
    {
      title: 'We read it properly',
      text: 'A lead from the relevant team, not an auto-responder.',
    },
    {
      title: 'We reply within one working day',
      text: 'With initial questions, not a sales sequence.',
    },
    {
      title: 'Free 30-minute consultation',
      text: 'Scope, timeline and a fixed quote if you want to proceed.',
    },
    {
      title: 'We say no when it makes sense',
      text: 'If we are not the right fit, we will tell you who is.',
    },
  ],
};
