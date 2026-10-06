// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — no need to touch the layout or animation code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Samuel Joyson Rego',
  initials: 'SR',
  title: 'Staff Software Engineer',
  roles: ['Staff Software Engineer', 'Java Full Stack Developer', 'Distributed Systems Engineer', 'AI Platform Engineer'],
  summary:
    'I design and build scalable, cloud-native systems with Java, Spring Boot and React — and for the past year I have been bringing AI into products with smart search and LLM-powered features.',
  location: 'Bengaluru, India',
  languages: 'English, Hindi, Kannada',
  email: 'rego.joyson@gmail.com',
  linkedin: 'https://www.linkedin.com/in/samuel-joyson-rego/',
  github: 'https://github.com/regojoyson',
  // Square photo (~600×600). Initials show if it's missing.
  photo: 'assets/profile.jpg',
};

export const stats = [
  { value: 10, suffix: '+', label: 'Years of experience' },
  { value: 6, suffix: '', label: 'Companies' },
  { value: 6, suffix: '', label: 'Major projects' },
  { value: 40, suffix: '+', label: 'Technologies' },
];

export const about = {
  heading: 'An engineer who builds systems that scale — and keep working.',
  paragraphs: [
    'I am a Staff Software Engineer based in Bengaluru with over 10 years of experience designing and delivering back-end and full-stack solutions. My career spans Estuate, Kredifi, Mercedes-Benz R&D India, Sciforma, Allegion and STG Labs.',
    'My core is Java and Spring Boot microservices, event-driven architecture with Kafka, and React front ends, deployed on AWS with Docker and Kubernetes. I care about data integrity, performance under peak load and clean, maintainable design.',
    'Recently I have been integrating AI into enterprise products — intent-based smart search, LLM features and agents — backed by a Postgraduate degree in AI & Machine Learning from UT Austin. I also lead design reviews and mentor engineers across teams.',
  ],
  highlights: [
    'System design & microservices architecture',
    'Event-driven systems with Kafka',
    'Full-stack delivery with Spring Boot & React',
    'AI integration: LLMs, RAG, smart search',
    'Technical leadership & mentoring',
    'Certified ScrumMaster® — Agile delivery',
  ],
};

export const experience = [
  {
    role: 'Staff Software Engineer',
    company: 'STG Labs',
    period: 'Jul 2025 — Present',
    location: 'Bengaluru · Hybrid',
    current: true,
    points: [
      'Leading end-to-end design and delivery of full-stack features for event-management and learning-management SaaS products.',
      'Building a shared AI platform that provides intent-based smart search APIs to multiple products, with a Snowflake data pipeline behind it.',
      'Leading design reviews, defining coding standards and mentoring engineers across squads.',
    ],
    tech: ['Java 17', 'Spring Boot', 'Spring AI', 'React', 'TypeScript', 'Kafka', 'Snowflake', 'AWS'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Allegion India',
    period: 'Nov 2024 — Jul 2025',
    location: 'Bengaluru · On-site',
    points: [
      'Developed cloud services for smart locks and electronic access control — device provisioning, credentials and access events.',
      'Built Kafka pipelines for high-volume device telemetry and audit trails with near real-time monitoring.',
      'Implemented secure IoT integrations with encryption, token-based auth and least-privilege access.',
    ],
    tech: ['Java 17', 'Spring Security', 'Kafka', 'MQTT', 'React', 'AWS'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Sciforma, a Planview company',
    period: 'Sep 2021 — Nov 2024',
    location: 'Bengaluru · On-site',
    points: [
      'Led Java back-end development for a leading Project & Portfolio Management (PPM) product.',
      'Ensured data synchronisation across PostgreSQL, MongoDB and Kafka; contributed React front-end modules.',
      'Conducted code reviews and provided technical guidance to junior engineers.',
    ],
    tech: ['Java', 'Jersey', 'Kafka', 'GraphQL', 'React', 'PostgreSQL', 'MongoDB'],
  },
  {
    role: 'Senior Consultant',
    company: 'Mercedes-Benz R&D India',
    period: 'Oct 2020 — Sep 2021',
    location: 'Bengaluru · Hybrid',
    points: [
      'Developed Java and Kafka platforms, improving system performance and scalability.',
      'Led migration of legacy systems to a new Java + Kafka platform, reducing processing time.',
      'Built an adapter integrating Jira and CodeBeamer ALM tools.',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka Connect', 'Elasticsearch'],
  },
  {
    role: 'Junior Architect · Software Engineer',
    company: 'Kredifi',
    period: 'Apr 2019 — Oct 2020',
    location: 'Bengaluru',
    points: [
      'Promoted from Software Engineer to Junior Architect in May 2020.',
      'Designed back-end services for a background-verification product with high-volume data pipelines.',
      'Integrated Stripe, Twilio, Bitly, Suite CRM and verification providers.',
    ],
    tech: ['Java 11', 'Spring Boot', 'Kafka', 'GraphQL', 'Zeebe', 'React'],
  },
  {
    role: 'Software Engineer',
    company: 'Estuate, Inc.',
    period: 'Mar 2016 — Mar 2019',
    location: 'Bengaluru · On-site',
    points: [
      'Built and maintained Java back-end applications in Agile teams.',
      'Strong foundation in OOP, data structures, testing and the full SDLC.',
    ],
    tech: ['Java', 'J2EE', 'RabbitMQ', 'MySQL'],
  },
];

// category: ai | backend | iot
export const projectFilters = [
  ['all', 'All'], ['ai', 'AI & Search'], ['backend', 'Backend & Platforms'], ['iot', 'IoT'],
];

export const projects = [
  {
    title: 'AI Smart Search Platform',
    org: 'STG Labs',
    duration: 'Ongoing',
    category: 'ai',
    summary: 'A shared AI platform that lets event-management and LMS products offer intent-based smart search through one API.',
    details: [
      'Hybrid search combining keyword (BM25) and vector retrieval, ranked by user intent.',
      'Snowflake ETL pipeline that prepares product data for search and AI features.',
      'LLM-powered agents and features exposed as APIs for product teams.',
    ],
    tech: ['Java 17', 'Spring AI', 'Snowflake', 'pgvector', 'Elasticsearch'],
  },
  {
    title: 'Event Management & Attendee Engagement',
    org: 'STG Labs',
    duration: '12+ months',
    category: 'ai',
    summary: 'SaaS platform used by associations and enterprises to run conferences and continuing-education programmes.',
    details: [
      'Full-stack features across React front ends and Spring Boot microservices, owning design through production.',
      'LLM-based content summarisation, semantic search and session recommendations using RAG.',
      'Caching, query optimisation and Kafka-based async processing for peak event days.',
    ],
    tech: ['Spring Boot', 'GraphQL', 'React', 'TypeScript', 'Kafka', 'Kubernetes'],
  },
  {
    title: 'Smart Access & Connected Lock Platform',
    org: 'Allegion India',
    duration: '9 months',
    category: 'iot',
    summary: 'Cloud services and admin portals for smart locks, enabling organisations to issue, manage and audit digital credentials.',
    details: [
      'Secure microservices for device provisioning, credential issuance and access-event processing.',
      'Kafka-based telemetry and audit pipelines for real-time monitoring and alerting.',
      'React administration portals for locks, users, schedules and mobile credentials.',
    ],
    tech: ['Java 17', 'Spring Security', 'Kafka', 'MQTT', 'MongoDB', 'AWS'],
  },
  {
    title: 'Project & Portfolio Management (PPM)',
    org: 'Sciforma',
    duration: '3 years',
    category: 'backend',
    summary: 'Back-end development for Sciforma, a leading project and portfolio management product.',
    details: [
      'Efficient Java back-end services with data integrity across PostgreSQL, MongoDB and Kafka.',
      'Participated in technical design and implementation phases.',
      'Contributed React front-end modules.',
    ],
    tech: ['Java 8', 'Jersey', 'Kafka', 'GraphQL', 'React', 'AWS S3'],
  },
  {
    title: 'Background Verification Platform',
    org: 'Kredifi',
    duration: '1.5 years',
    category: 'backend',
    summary: 'A product for verifying candidate employment, education and criminal history.',
    details: [
      'Back-end services and data pipelines for large volumes of verification data.',
      'Workflow orchestration with Zeebe.',
      'Integrations with Stripe, Twilio, Bitly, Suite CRM and multiple verification providers.',
    ],
    tech: ['Java 11', 'Spring Boot', 'Kafka', 'Redis', 'GraphQL', 'Zeebe'],
  },
  {
    title: 'Jira ↔ CodeBeamer Adapter',
    org: 'Mercedes-Benz R&D India',
    duration: '1 year',
    category: 'backend',
    summary: 'An integration adapter keeping two Application Lifecycle Management tools in sync.',
    details: [
      'Designed and implemented the adapter for seamless interoperability between ALM tools.',
      'Monitored the integration workflow for uninterrupted data flow and stability.',
    ],
    tech: ['Java', 'Kafka Connect', 'Elasticsearch', 'Spring Boot'],
  },
];

// [label, devicon class] — see https://devicon.dev. Empty class = text-only chip.
export const skills = [
  {
    title: 'Languages & Backend',
    items: [
      ['Java', 'devicon-java-plain colored'], ['Spring Boot', 'devicon-spring-plain colored'], ['Hibernate', 'devicon-hibernate-plain colored'],
      ['GraphQL', 'devicon-graphql-plain colored'], ['Node.js', 'devicon-nodejs-plain colored'], ['JUnit', 'devicon-junit-plain colored'],
      ['Maven', 'devicon-maven-plain colored'], ['Microservices', ''], ['REST APIs', ''],
    ],
  },
  {
    title: 'Frontend',
    items: [
      ['React', 'devicon-react-original colored'], ['TypeScript', 'devicon-typescript-plain colored'], ['JavaScript', 'devicon-javascript-plain colored'],
      ['Redux', 'devicon-redux-original colored'], ['HTML5', 'devicon-html5-plain colored'], ['CSS3', 'devicon-css3-plain colored'],
    ],
  },
  {
    title: 'Data & Messaging',
    items: [
      ['Kafka', 'devicon-apachekafka-original colored'], ['PostgreSQL', 'devicon-postgresql-plain colored'], ['MongoDB', 'devicon-mongodb-plain colored'],
      ['Redis', 'devicon-redis-plain colored'], ['Elasticsearch', 'devicon-elasticsearch-plain colored'], ['MySQL', 'devicon-mysql-original colored'],
      ['RabbitMQ', 'devicon-rabbitmq-original colored'], ['Snowflake', ''], ['MQTT', ''],
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      ['AWS', 'devicon-amazonwebservices-plain-wordmark colored'], ['Docker', 'devicon-docker-plain colored'], ['Kubernetes', 'devicon-kubernetes-plain colored'],
      ['Jenkins', 'devicon-jenkins-line colored'], ['Git', 'devicon-git-plain colored'], ['Linux', 'devicon-linux-plain'], ['CI/CD', ''],
    ],
  },
  {
    title: 'AI & GenAI',
    items: [
      ['LLM integration', ''], ['OpenAI / Claude', ''], ['Spring AI', ''], ['LangChain4j', ''], ['RAG', ''],
      ['Embeddings & pgvector', ''], ['Hybrid search', ''], ['Prompt engineering', ''],
    ],
  },
  {
    title: 'Practices',
    items: [
      ['System design', ''], ['Event-driven architecture', ''], ['TDD', ''], ['Agile / Scrum', ''],
      ['Code reviews', ''], ['Mentoring', ''], ['Performance tuning', ''],
    ],
  },
];

export const education = [
  {
    degree: 'Master of Applied Artificial Intelligence',
    school: 'Deakin University',
    period: '2026 — Present',
    status: 'In progress',
  },
  {
    degree: 'Postgraduate Degree, Artificial Intelligence & Machine Learning',
    school: 'The University of Texas at Austin',
    period: 'Jun 2025 — Jun 2026',
    status: 'Completed',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA), Computer Science',
    school: 'Mangalore University',
    period: '2013 — 2016',
    status: 'Completed',
  },
];

export const certifications = [
  { name: 'Certified ScrumMaster® (CSM)', issuer: 'Scrum Alliance', date: 'Issued Apr 2025' },
];
