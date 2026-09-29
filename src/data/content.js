export const hero = {
  badgeLead: 'Two in-house teams',
  badgeTail: 'developers & callers',
  h1Before: 'Ultimate Consultancy Services: ',
  h1Hl: 'Development',
  h1Mid: ' and ',
  h1HlOrange: 'Lead Generation',
  h1After: ' Under One Roof',
  text: `Most businesses need the same two things: working software that solves a real problem,
    and a steady flow of people who want to buy it. UCS does both — a dedicated
    engineering team for the build, and a trained calling team for the pipeline, both
    in-house and both accountable to you.`,
  chips: ['Fixed-price projects', 'Monthly retainers', '11 Indian languages'],
};

export const services = {
  eyebrow: 'What we do',
  title: 'One company. Two in-house teams. Zero hand-offs.',
  text: `Building software and filling a sales pipeline are two different crafts. Most
    vendors only do one. UCS runs both as separate teams inside the same company, so
    the system your customers use and the people who sell it are designed by the same
    organisation — and pointed at the same goal.`,
  cards: [
    {
      key: 'dev',
      icon: 'code',
      title: 'Development',
      kicker: 'Software, web & mobile',
      text: `A full-stack engineering team that takes an idea from a rough brief to a live
        product — planned, built, tested, deployed and maintained by people who
        work for you.`,
      items: [
        'Custom web applications, dashboards and admin panels',
        'Android and iOS mobile apps built for real-world use',
        'Business management software, billing and CRM tools',
        'Maintenance, upgrades and support after launch',
      ],
      cta: 'See development services',
      href: '#development',
    },
    {
      key: 'tel',
      icon: 'phone',
      tone: 'tel',
      title: 'Telecalling',
      kicker: 'Lead generation & appointments',
      text: `Trained callers who work your database, your script and your market — speaking
        to decision-makers in their own language, then handing you a clean, verified,
        reportable pipeline.`,
      items: [
        'Cold calling on your database or lists we research',
        'Appointment setting and follow-up calls in 11 languages',
        'Every call recorded, tagged and reported back to you',
        'Market research and tele-appointment support',
      ],
      cta: 'See telecalling services',
      href: '#telecalling',
    },
  ],
};

export const about = {
  eyebrow: 'About UCS',
  title: 'A single company that builds the product and finds the customers for it',
  paragraphs: [
    `Ultimate Consultancy Services was set up to remove a gap that almost every
    growing business hits: the software is being built somewhere else, and the people
    who should be selling it are somewhere else again. Nothing moves in sync. Promises
    between three vendors turn into delays you have to explain to customers.`,
    `We brought both capabilities into one company. Our developers write the code, our
    calling team speaks to the market, and the people who built the product understand
    exactly which questions your buyers will ask. When the calling team reports back
    with objections, the development team can fix the thing that is causing them. That
    feedback loop is the whole point of combining them.`,
  ],
  split: [
    {
      key: 'dev',
      title: 'The development team',
      text: 'Engineers, designers and QA who plan, build, test and maintain software end to end — and who stay on your project after launch.',
    },
    {
      key: 'tel',
      title: 'The telecalling team',
      text: 'Callers, lead researchers and team leads who dial every day, script every pitch, and report on every number whether it flatters us or not.',
    },
  ],
  mission: {
    title: 'Our mission',
    text: 'To let a business own its software and its sales pipeline at the same time, with one point of accountability, and to make that affordable for companies that are still growing.',
  },
  diagram: {
    title: 'How the two teams connect',
    teams: [
      {
        key: 'dev',
        title: 'Software development',
        text: 'Requirement analysis · UI/UX · Web & mobile · API & integrations · Maintenance',
      },
      {
        key: 'tel',
        title: 'Telecalling & lead generation',
        text: 'List research · Cold calling · Appointment setting · Follow-up · Reporting',
      },
    ],
    join: 'One company, one contract',
  },
};

export const development = {
  eyebrow: 'Development services',
  title: 'Everything you need to build, launch and improve software',
  text: `Pick a single service or hand us the whole requirement. Either way you get an
    in-house team, a clear scope, and code that another developer can pick up later.`,
  items: [
    { icon: 'monitor', title: 'Custom Web Development', text: 'Websites, portals, dashboards and internal tools built around your workflow, your data and the way your team already works.' },
    { icon: 'smartphone', title: 'Mobile App Development', text: 'Android and iOS apps for customers, staff or delivery agents — built to be adopted quickly rather than abandoned after install.' },
    { icon: 'cart', title: 'E-commerce Development', text: 'Storefronts and ordering systems with inventory, payments, shipping rules and admin control that hold up when orders double.' },
    { icon: 'building', title: 'Business Management Software', text: 'Billing, inventory, scheduling, CRM and reporting modules that replace spreadsheets and stop the daily reconciliation argument.' },
    { icon: 'api', title: 'API & Backend Integration', text: 'Connect your existing systems and third-party services so data moves once, cleanly, instead of being retyped by somebody.' },
    { icon: 'card', title: 'Payment Gateway Integration', text: 'UPI, cards, net banking and wallets integrated with reconciliation, refunds and failure handling that finance can actually audit.' },
    { icon: 'shield', tone: 'navy', title: 'Maintenance & Support', text: 'Bug fixes, security updates, backups, monitoring and improvements on a monthly plan — because launching is the start, not the end.' },
    { icon: 'megaphone', tone: 'navy', title: 'Digital Marketing', text: 'SEO, paid campaigns and landing pages that send the right traffic to the software we built, so the build actually gets used.' },
  ],
};

export const technologies = {
  eyebrow: 'Technologies we use',
  title: 'Proven tools, chosen for your project',
  text: 'We pick the stack that fits the job, the team and your hosting plan — not the one that is trendiest this quarter.',
  chips: [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PHP & Laravel',
    'Python', 'Django', 'Java', 'Android (Kotlin)', 'iOS (Swift)', 'Flutter',
    'React Native', 'MySQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker',
    'Git & GitHub', 'Figma', 'WordPress', 'Shopify', 'Razorpay & PayU',
  ],
  note: `Every project is handed over with documentation and version control, so your team
    or any future developer can continue without being locked to us.`,
};

export const process = {
  eyebrow: 'How we work',
  title: 'A five-step development process with no surprises',
  text: 'You always know which step you are in, what is being built, and what happens next. No black boxes, no sudden invoices.',
  steps: [
    {
      title: 'Discovery & requirement analysis',
      text: 'We sit down with your team, map the current process and list exactly what the software must do.',
      items: ['Process and scope walkthrough', 'Feasibility and tech recommendation', 'Written scope, timeline and fixed quote'],
    },
    {
      title: 'Planning & design',
      text: 'Structure, wireframes and screens are designed and signed off before a line of code is written.',
      items: ['Wireframes for every screen', 'UI design and clickable prototype', 'Database and system architecture'],
    },
    {
      title: 'Development',
      text: 'You get a demo at the end of every sprint, so progress is something you see, not something you are told about.',
      items: ['Sprint-based development', 'Weekly demo and progress call', 'Code pushed to your repository'],
    },
    {
      title: 'Testing & QA',
      text: 'Functionality, devices, browsers, security and load are all tested before your users ever see a defect first.',
      items: ['Functional and regression testing', 'Cross-device and cross-browser checks', 'Fixes retested and confirmed with you'],
    },
    {
      title: 'Launch, support & growth',
      text: 'Go live, monitor, fix and improve — with a maintenance plan and a roadmap for the next version.',
      items: ['Hosting, domain and SSL setup', 'Team training and handover document', 'Support window and version roadmap'],
    },
  ],
};

export const telecalling = {
  eyebrow: 'Telecalling services',
  title: 'Outbound calling that produces a pipeline you can measure',
  text: `Give us your list or let us research one. We dial, we qualify, we set appointments,
    we record everything, and you see the numbers every single day.`,
  includesTitle: 'What a telecalling engagement includes',
  includes: [
    { title: 'Cold calling on your database', text: 'We work your existing list as it is, or clean and segment it first so the first call is not wasted.' },
    { title: 'Lead generation and qualification', text: 'Leads are checked for need, budget, authority and timeline — not just collected.' },
    { title: 'Appointment setting', text: 'Meetings booked on your calendar with the right person, in your sales team’s diary, with the context attached.' },
    { title: 'Follow-up calls', text: 'A fixed number of follow-up attempts per lead, with the reason for each outcome written down.' },
    { title: 'Call recording and transcripts', text: 'Every conversation recorded with a written summary, so you can review the call your team had with a difficult customer.' },
    { title: 'Daily Excel lead report', text: 'Name, company, role, contact, status, next step and call duration — delivered to you every evening.' },
    { title: 'Eleven Indian languages', text: 'Hindi, Marathi, Bengali, Malayalam, Punjabi, Telugu, English, Gujarati, Kannada, Odia and Tamil.' },
    { title: 'Dedicated calling team', text: 'A named caller who owns your accounts, learns your product, and does not start from scratch every month.' },
    { title: 'Market research', text: 'Target company and contact research, including verified phone numbers and role titles, before dialling starts.' },
  ],
  recordings: {
    title: 'Sample call recordings by language',
    text: 'Listen to the language before you commit. Recordings are added as they are recorded and approved.',
    note: 'Audio files are not published yet. Each player switches on automatically once the matching file exists in the audio folder for that language.',
  },
  start: {
    eyebrow: 'Getting started',
    title: 'What we need from you to start calling',
    text: 'Three things, and we can usually run the first batch within a few working days.',
    steps: [
      { title: 'Your list or our research', text: 'Send an existing database, or tell us your ideal customer and region and we will build the list and verify the numbers.' },
      { title: 'Your offer and script', text: 'A short description of what you sell and who it is for. If you do not have a script, we will draft one and train your callers on it.' },
      { title: 'Who closes the deal', text: 'Tell us who takes over once a lead is qualified, and how appointments should be booked — in your diary or ours.' },
    ],
  },
  calling: {
    eyebrow: 'Calling processes',
    title: 'How a typical calling day runs',
    text: 'Every campaign is a defined sequence, so nothing is skipped and every outcome is written down.',
    items: [
      { icon: 'columns', title: 'First-time dialling', text: 'A short opening that names the reason for the call, checks the person is the right contact, and offers something specific rather than a vague introduction.' },
      { icon: 'refresh', title: 'Follow-up sequences', text: 'A fixed number of attempts across different days and times, each with a different reason to call, then the lead is marked closed or moved to nurture.' },
      { icon: 'monitor', title: 'Objection handling', text: 'Budget, timing, authority and “send it by email” are all answered from a prepared response sheet, and escalated to you only when they really should be.' },
      { icon: 'calendar', title: 'Appointment setting', text: 'The caller’s only goal on a booking call is a confirmed slot with the right person, a defined agenda, and your salesperson notified with the context.' },
      { icon: 'file', title: 'Daily reporting', text: 'Calls dialled, connected, appointments, follow-ups pending and reasons for lost interest — in one sheet you can read in two minutes.' },
      { icon: 'trend', title: 'Weekly review call', text: 'We walk through the numbers with you, adjust the script where it is not landing, and change the targeting where the market is not responding.' },
    ],
  },
  benefits: {
    eyebrow: 'Benefits',
    title: 'Why businesses move their calling to UCS',
    items: [
      { icon: 'rupee', title: 'Lower cost than an in-house team', text: 'No recruitment, no training, no attrition and no idle salaries between campaigns. You pay for connected work.' },
      { icon: 'shield', title: 'Trained on your product first', text: 'Callers learn your offer, your competitors and the questions your customers ask before they touch a phone.' },
      { icon: 'clock', title: 'No lock-in on the data', text: 'Your leads, your recordings and your reports stay yours. Leaving is your decision, not a negotiation.' },
      { icon: 'gift', title: 'Transparent reporting', text: 'Numbers arrive daily whether they look good or not. We would rather show you a bad Tuesday than hide it.' },
      { icon: 'user-plus', title: 'Reach beyond your city', text: 'Eleven languages means your offer reaches tier-2 and tier-3 buyers in their own language instead of an English-only desk.' },
      { icon: 'trend', title: 'Scales with your pipeline', text: 'Add callers or developers for a launch month, release them when the campaign ends. Nothing else in your business has to change.' },
    ],
  },
};

export const ctaStrip = {
  title: 'Not sure whether you need software, callers, or both?',
  text: `Book a free 30-minute consultation. We will look at what you are trying to sell,
    what you are currently using, and tell you honestly which of the two services would
    move the number — even if the answer is “not yet”.`,
  cta: 'Get Your Free Consultation',
};

export const team = {
  eyebrow: 'Our team',
  title: 'Two teams, one office, one standard of work',
  text: `Nobody here is a freelancer or a subcontractor. The people who scope your project
    are the people who build it, and the people who pick up the phone are the people who
    report on the results.`,
  groups: [
    {
      key: 'dev',
      icon: 'code',
      title: 'Development team',
      subtitle: 'Engineers, designers and QA',
      count: 'Showing 4 of [EDIT] members',
      tone: 'blue',
      members: [
        {
          role: 'Project Manager',
          photo: '',
          skills: ['Requirement analysis', 'Client communication'],
        },
        {
          role: 'Lead Developer',
          photo: '',
          skills: ['React', 'Node.js', 'PHP'],
        },
        {
          role: 'UI/UX Designer',
          photo: '',
          skills: ['Figma', 'Prototyping', 'Design systems'],
        },
        {
          role: 'Mobile App Developer',
          photo: '',
          skills: ['Android', 'iOS', 'Flutter'],
        },
      ],
    },
    {
      key: 'tel',
      icon: 'phone',
      title: 'Telecalling team',
      subtitle: 'Callers, research and quality leads',
      count: 'Showing 3 of [EDIT] members',
      tone: 'orange',
      members: [
        {
          role: 'Telecalling Team Lead',
          photo: '',
          skills: ['Script training', 'Quality review'],
        },
        {
          role: 'Lead Generation Specialist',
          photo: '',
          skills: ['Data research', 'Cold calling', 'CRM'],
        },
        {
          role: 'Appointment Coordinator',
          photo: '',
          skills: ['Scheduling', 'Follow-ups', 'Reporting'],
        },
      ],
    },
  ],
  collab: {
    title: 'How the two teams work together on your account',
    text: `The development team and the calling team are not separate vendors sharing a
      phone number. Here is what that actually looks like once you are a client.`,
    steps: [
      { title: 'One kickoff call', text: 'Both leads join the same discovery session, so scope and messaging are decided together from day one.' },
      { title: 'Objections feed the build', text: 'When callers report a recurring objection, it goes straight into the sprint backlog instead of sitting in a monthly report.' },
      { title: 'One review, one invoice', text: 'You get a single weekly review covering both the software and the pipeline, and a single commercial relationship to manage.' },
    ],
  },
  hiring: { title: 'We are hiring developers and calling agents', cta: 'Apply Now' },
};

export const portfolio = {
  eyebrow: 'Our work',
  title: 'A sample of what the two teams have delivered',
  text: `Replace the three examples below with your real projects. Keep the description
    short and the results specific — a number, a timeframe, or a capability that
    only you could have delivered.`,
  items: [
    {
      icon: 'monitor',
      type: 'Development',
      mediaLabel: 'Screenshot [EDIT]',
      title: '[EDIT project name]',
      text: '[EDIT one-sentence summary of what was built, the stack, and the measurable result for the client.]',
      tags: ['React', 'Node.js', 'AWS'],
    },
    {
      icon: 'smartphone',
      type: 'Development',
      mediaLabel: 'Screenshot [EDIT]',
      title: '[EDIT project name]',
      text: '[EDIT one-sentence summary of what was built, the stack, and the measurable result for the client.]',
      tags: ['Flutter', 'Firebase', 'Razorpay'],
    },
    {
      icon: 'phone',
      type: 'Telecalling',
      tone: 'tel',
      mediaLabel: 'Campaign result [EDIT]',
      title: '[EDIT client or sector]',
      text: '[EDIT one-sentence summary: the market, the list size, the calling period and the outcome you can point at.]',
      tags: ['Cold calling', 'Hindi', 'English'],
    },
  ],
  note: 'Images are placeholders on purpose — nothing is loaded from a broken file path.',
};

export const why = {
  eyebrow: 'Why choose UCS',
  title: 'Six reasons businesses stay with us',
  items: [
    { icon: 'shield', title: 'Both services, one company', text: 'No coordination between a developer and a call centre that have never spoken. The same company answers for both.' },
    { icon: 'medal', title: 'Genuinely in-house staff', text: 'Full-time employees, trained and supervised, rather than a rotating pool of freelancers who learn your business twice.' },
    { icon: 'rupee', title: 'Transparent, affordable pricing', text: 'Fixed quotes for development and clear per-unit pricing for calling. No surprise line items at the end of the month.' },
    { icon: 'trend', title: 'Reporting you can audit', text: 'Daily lead sheets, call recordings and sprint demos. If you cannot check our numbers, you should not pay for them.' },
    { icon: 'clock', title: 'Fast turnaround', text: 'Short discovery, quick mockups, and a first calling batch live within days rather than the weeks a new agency needs to ramp up.' },
    { icon: 'user-plus', title: 'Long-term support', text: 'After launch we stay reachable for maintenance, improvements and the next version — not just until the handover is done.' },
  ],
};

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Straightforward pricing for both services',
  text: `The figures below are illustrative placeholders. Replace them with your real
    pricing, and add your minimum order value and payment terms.`,
  cards: [
    {
      icon: 'card',
      title: 'Development projects',
      sub: 'Fixed-price builds, quoted after a free discovery call.',
      amount: '[EDIT starting price]',
      amountNote: 'Typical small project: [EDIT range] · Timeline: [EDIT weeks]',
      items: [
        'Written scope and fixed quote before we start',
        'Milestone-based payments, never an open meter',
        'Source code, documentation and full ownership handed over',
        'Optional monthly maintenance plan after launch',
      ],
      cta: 'Request a Quote',
    },
    {
      icon: 'phone',
      tone: 'tel',
      featured: true,
      flag: 'Most popular',
      title: 'Telecalling packages',
      sub: 'Monthly calling retainers with a committed number of dialled numbers.',
      amount: '[EDIT price per month]',
      amountNote: 'Includes [EDIT] connected calls or [EDIT] numbers dialled per month',
      items: [
        'Dedicated callers trained on your product',
        'Daily Excel lead report with recordings',
        'Any of our 11 Indian languages on request',
        'Weekly review call and script optimisation',
      ],
      cta: 'Start a Campaign',
    },
  ],
  note: 'Prices are indicative and depend on scope, volume and language. Every engagement starts with a free consultation and a written quote.',
  combo: {
    title: 'Take both together and save',
    text: `The strongest results come from combining the two: build the software your
      buyers are asking for, then fill the pipeline while it is fresh. Ask about our
      combined development and telecalling package.`,
    tags: ['Web or mobile app', 'Monthly calling retainer', 'Single point of contact', 'Quarterly roadmap reviews'],
    cta: 'Ask About the Combo',
  },
};

export const testimonials = {
  eyebrow: 'Client feedback',
  title: 'What clients say after working with both teams',
  items: [
    { quote: '[EDIT testimonial — what the client said about the development work, in their own words.]' },
    { quote: '[EDIT testimonial — what the client said about the telecalling work and the results they received.]' },
    { quote: '[EDIT testimonial — what the client said about working with both teams together.]' },
    { quote: '[EDIT testimonial — what the client said about support, communication or delivery timelines.]' },
  ],
  attribution: { name: '[EDIT client name]', role: '[EDIT designation, company]' },
};

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions we get asked before people start',
  text: 'If your question is not here, ask it in the form below — we answer properly rather than sending a brochure.',
  columns: [
    {
      key: 'dev',
      title: 'Development questions',
      items: [
        {
          q: 'How much does a website or application cost?',
          a: [
            `It depends on scope, integrations and how much of the work already exists. A simple brochure site is priced very differently from an application with accounts, roles, payments and reporting.`,
            'After a free discovery call we send a written fixed quote with a milestone plan, so you know the number before spending anything.',
          ],
        },
        {
          q: 'How long does a typical project take?',
          a: [
            'Most projects run in sprints of one to two weeks, with a demo at the end of each one. You are never waiting several months to find out where things stand.',
            'The exact timeline is fixed in the proposal after discovery.',
          ],
        },
        {
          q: 'Do I own the code and the design files?',
          a: [
            'Yes. The code, design files and documentation are handed over on delivery, and everything lives in a repository you control from day one.',
            'You are never locked into us to keep running your own product.',
          ],
        },
        {
          q: 'Can you work on our existing website or codebase?',
          a: [
            'Yes. We regularly take over half-finished projects and fix them, and we regularly add features to software built by someone else.',
            'We will review what exists first and tell you honestly whether it is worth continuing or rebuilding.',
          ],
        },
        {
          q: 'What happens after launch?',
          list: ['Hosting, domain and SSL setup', 'Training for your team and a handover document', 'Optional monthly maintenance and improvement plan'],
        },
      ],
    },
    {
      key: 'tel',
      title: 'Telecalling questions',
      items: [
        {
          q: 'How quickly can calling start?',
          a: [
            'Once we have your list, your offer and a decision on who closes the deal, the first batch is usually live within a few working days.',
            'If we are researching the list for you, allow a little longer for verification.',
          ],
        },
        {
          q: 'Which languages can your callers speak?',
          a: [
            'Eleven: Hindi, Marathi, Bengali, Malayalam, Punjabi, Telugu, English, Gujarati, Kannada, Odia and Tamil.',
            'Tell us the regions you sell into and we will match the language to the market rather than selling a menu of options.',
          ],
        },
        {
          q: 'What do you need from us to begin?',
          list: [
            'Your list, or a description of the customers you want',
            'Your offer in plain language, and a script if you have one',
            'A named person on your side who takes the appointments',
          ],
          after: 'If you do not have a script, we write the first version and train the callers on it.',
        },
        {
          q: 'What do we receive, and how often?',
          list: [
            'A daily Excel sheet of every call and outcome',
            'Recordings and written summaries of conversations',
            'A weekly review call to adjust targeting and scripts',
          ],
          after: 'Everything stays your property. We are not holding your data hostage.',
        },
      ],
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Tell us what you need built or dialled',
  text: `One form for both services. Tell us which one you need, and a lead from the right
    team will reply within one working day.`,
  asideTitle: 'Prefer to talk first?',
  asideText: 'Book a free 30-minute call and get a straight answer on scope, cost and whether we are the right fit.',
  asideNextTitle: 'What happens after you send this',
  phoneLabel: 'Call during business hours',
  emailLabel: 'Replies within one working day',
  submit: 'Send Message',
  sending: 'Sending…',
  hint: 'We use your details only to respond to this enquiry.',
};
