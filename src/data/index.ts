import type {
  Achievement,
  Education,
  Experience,
  NavItem,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Testimonial,
} from '@/types'

export const SITE = {
  name: 'Ammar Abu Hurraira',
  shortName: 'Ammar',
  title: 'Software Engineer',
  description:
    'Senior-minded Software Engineer specializing in Laravel, React, and .NET. Building enterprise CRM systems, AI-powered automation, and premium web experiences.',
  url: 'https://ammarabuhurraira.dev',
  email: 'ammarabuhurraira@gmail.com',
  phone: '0325 5780200',
  phoneIntl: '+923255780200',
  location: 'Islamabad, Pakistan',
  github: 'https://github.com/Abu-Hurraira',
  githubUsername: 'Abu-Hurraira',
  linkedin: 'https://linkedin.com/in/ammar-abu-hurraira',
  resumeUrl: '/resume.pdf',
  company: {
    name: 'Creative IT Park',
    url: 'https://creativeitpark.org/',
    role: 'Laravel Developer',
    location: 'Islamabad',
  },
} as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/#home', shortcut: 'H' },
  { label: 'About', href: '/#about', shortcut: 'A' },
  { label: 'Experience', href: '/#experience', shortcut: 'E' },
  { label: 'Skills', href: '/#skills', shortcut: 'S' },
  { label: 'Projects', href: '/#projects', shortcut: 'P' },
  { label: 'GitHub', href: '/#github', shortcut: 'G' },
  { label: 'Company', href: '/company', shortcut: 'C' },
  { label: 'Contact', href: '/contact', shortcut: 'M' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: SITE.github, icon: 'github' },
  { name: 'LinkedIn', href: SITE.linkedin, icon: 'linkedin' },
  { name: 'Email', href: `mailto:${SITE.email}`, icon: 'mail' },
]

export const ROTATING_TITLES = [
  'Software Engineer',
  'Laravel Developer',
  'React Developer',
  '.NET Developer',
  'Problem Solver',
  'Creative Thinker',
]

export const JOURNEY = [
  { title: 'Medical Path', description: 'Started exploring medicine before discovering a passion for systems and logic.' },
  { title: 'Computer Science', description: 'Pivoted into CS at PMAS Arid Agriculture University — algorithms, software design, and building.' },
  { title: 'Web Development', description: 'Mastered full-stack web: Laravel, React, ASP.NET, APIs, and databases.' },
  { title: 'Professional Engineer', description: 'Now shipping enterprise CRM, AI automation, and production systems at Creative IT Park.' },
]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Creative IT Park',
    role: 'Laravel Developer',
    location: 'Islamabad',
    period: '2024 — Present',
    current: true,
    website: 'https://creativeitpark.org/',
    responsibilities: [
      'Develop and maintain enterprise CRM platforms serving real business workflows',
      'Design REST APIs and relational database schemas for scalable systems',
      'Integrate WhatsApp Business API for bulk messaging and automation',
      'Build AI-powered features using Gemini for intelligent CRM assistance',
      'Collaborate on lead management, deal pipelines, meetings, and automation flows',
    ],
    achievements: [
      'Shipped production CRM modules used in day-to-day operations',
      'Automated repetitive messaging and follow-up workflows',
      'Integrated Gemini AI for smarter lead and deal assistance',
      'Improved API reliability and database performance for CRM features',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'Bootstrap',
      'REST APIs',
      'Git',
      'CRM',
      'AI Integration',
      'Automation',
      'WhatsApp Business API',
      'Gemini',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind', level: 92 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Laravel', level: 93 },
      { name: '.NET Core', level: 82 },
      { name: 'ASP.NET MVC', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Node', level: 75 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: [
      { name: 'SQL Server', level: 85 },
      { name: 'MySQL', level: 90 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 88 },
      { name: 'XAMPP', level: 85 },
      { name: 'Composer', level: 88 },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    skills: [{ name: 'Figma', level: 78 }],
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'teacher-folder-management',
    title: 'Teacher Folder Management System',
    subtitle: 'Institutional document & course ops platform',
    description:
      'ASP.NET Core system for teachers to manage folders, courses, and synchronized institutional content with role-based access.',
    longDescription:
      'A full-stack institutional platform built with ASP.NET Core and SQL Server that centralizes teacher folder management, course organization, and synchronized updates. Designed for clarity, access control, and reliable day-to-day academic operations.',
    image: '/projects/teacher-folder.png',
    gallery: [
      '/projects/teacher-folder.png',
      '/projects/teacher-folder-2.png',
      '/projects/teacher-folder-3.png',
    ],
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'MVC', 'Bootstrap', 'Entity Framework'],
    github: 'https://github.com/Abu-Hurraira',
    features: [
      'Folder management for academic resources',
      'Teacher dashboard with operational overview',
      'Course management workflows',
      'Content synchronization across roles',
      'Role-based access control',
      'Notification system for updates',
    ],
    challenges: [
      'Designing secure multi-role access without slowing workflows',
      'Keeping folder and course data synchronized across users',
      'Building a clear dashboard for daily teaching operations',
    ],
    solutions: [
      'Implemented layered authorization with role policies',
      'Centralized sync logic in service layers with transactional updates',
      'Structured dashboard views around high-frequency teacher actions',
    ],
    role: 'Full-stack Developer — architecture, backend, database, and UI',
    category: 'Enterprise',
    year: '2024',
    architecture: ['Presentation (MVC Views)', 'Business Logic / Services', 'Data Access (EF Core)', 'SQL Server'],
  },
  {
    id: '2',
    slug: 'creative-it-park-crm',
    title: 'Creative IT Park CRM',
    subtitle: 'Enterprise CRM with AI & WhatsApp automation',
    description:
      'Laravel enterprise CRM featuring lead pipelines, deal management, Gemini AI assistance, and WhatsApp Business automation.',
    longDescription:
      'An enterprise CRM built for Creative IT Park that unifies leads, deals, meetings, and automation. Integrates Gemini AI for intelligent assistance and WhatsApp Business API for bulk messaging and follow-ups — turning CRM from a database into an operating system for sales and client workflows.',
    image: '/projects/crm.png',
    gallery: [
      '/projects/crm.png',
      '/projects/crm-2.png',
      '/projects/crm-3.png',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'REST APIs', 'Gemini AI', 'WhatsApp Business API'],
    live: 'https://creativeitpark.org/',
    features: [
      'Lead management & pipeline tracking',
      'Deal management workflows',
      'Meeting scheduling & records',
      'AI automation with Gemini',
      'WhatsApp Business integration',
      'Bulk messaging & follow-up automation',
    ],
    challenges: [
      'Orchestrating CRM entities (leads, deals, meetings) into one coherent system',
      'Reliable WhatsApp bulk messaging without rate-limit failures',
      'Making AI assistance useful inside real sales workflows',
    ],
    solutions: [
      'Modeled CRM domain with clear service boundaries and REST endpoints',
      'Queued messaging with retry/backoff for WhatsApp Business API',
      'Scoped Gemini prompts to CRM context for actionable suggestions',
    ],
    role: 'Laravel Developer — CRM modules, APIs, AI & WhatsApp integrations',
    category: 'Enterprise',
    year: '2025',
    architecture: ['Laravel Controllers & Services', 'MySQL Schema', 'External APIs (WhatsApp, Gemini)', 'Automation Jobs'],
  },
  {
    id: '3',
    slug: 'restaurant-finder',
    title: 'Restaurant Finder',
    subtitle: 'Map-first discovery for nearby dining',
    description:
      'React + Leaflet app for discovering nearby restaurants with location search and an interactive map experience.',
    longDescription:
      'A location-aware restaurant discovery experience built with React, Vite, and Leaflet. Users search places, explore nearby restaurants, and interact with a responsive map interface designed for fast discovery.',
    image: '/projects/restaurant.png',
    gallery: [
      '/projects/restaurant.png',
      '/projects/restaurant-2.png',
    ],
    tech: ['React', 'Vite', 'Leaflet', 'JavaScript', 'CSS'],
    github: 'https://github.com/Abu-Hurraira',
    features: [
      'Nearby restaurant discovery',
      'Location-based search',
      'Interactive Leaflet map',
      'Responsive map UI',
      'Clean discovery flow',
    ],
    challenges: [
      'Handling geolocation permission edge cases',
      'Keeping map interactions smooth on mobile',
      'Presenting restaurant data without clutter',
    ],
    solutions: [
      'Graceful fallbacks when location is denied',
      'Optimized marker clustering and map event handling',
      'Minimal UI focused on map + essential details',
    ],
    role: 'Frontend Developer — map UX, search, and React architecture',
    category: 'Frontend',
    year: '2024',
    architecture: ['React UI', 'Leaflet Map Layer', 'Geolocation API', 'External Places Data'],
  },
  {
    id: '4',
    slug: 'tracker',
    title: 'Tracker',
    subtitle: 'Premium productivity & analytics suite',
    description:
      'Personal productivity application for daily records, multi-account tracking, analytics, exports, and modern dashboards.',
    longDescription:
      'Tracker is a premium productivity application focused on daily record keeping, multi-account management, and rich analytics. It combines timeline views, calendars, charts, filters, backups, and exportable reports into a cohesive modern dashboard experience.',
    image: '/projects/tracker.png',
    gallery: [
      '/projects/tracker.png',
      '/projects/tracker-2.png',
      '/projects/tracker-3.png',
    ],
    tech: ['React', 'TypeScript', 'Charts', 'Local Storage', 'Vite'],
    github: 'https://github.com/Abu-Hurraira',
    features: [
      'Daily record tracking',
      'Multi-account support',
      'Reports & analytics',
      'Statistics & history',
      'Data visualization & charts',
      'Export reports',
      'Backup & restore',
      'Search & filter',
      'Timeline & calendar views',
      'Modern dashboard UI',
    ],
    challenges: [
      'Designing a flexible data model for multi-account records',
      'Building performant charts and history views',
      'Export/backup reliability without a heavy backend',
    ],
    solutions: [
      'Normalized local data structures with account scoping',
      'Deferred rendering and chart virtualization patterns',
      'JSON export/import with validation for backups',
    ],
    role: 'Product Engineer — full product design, UX, and implementation',
    category: 'Product',
    year: '2025',
    architecture: ['Dashboard UI', 'Data Layer', 'Analytics Engine', 'Export / Backup'],
  },
]

export const EDUCATION: Education[] = [
  {
    id: '1',
    institution: 'PMAS Arid Agriculture University',
    degree: 'BS Computer Science',
    period: '2023 — 2027',
    status: 'Expected Graduation 2027',
  },
  {
    id: '2',
    institution: 'Punjab Group of Colleges',
    degree: 'Intermediate',
    period: 'Completed',
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', label: 'Projects', value: 12, suffix: '+' },
  { id: '2', label: 'Experience', value: 1, suffix: '+ yr' },
  { id: '3', label: 'Technologies', value: 20, suffix: '+' },
  { id: '4', label: 'GitHub Repos', value: 15, suffix: '+' },
  { id: '5', label: 'Hours Coding', value: 2500, suffix: '+' },
  { id: '6', label: 'Commits', value: 800, suffix: '+' },
]

export const SERVICES: Service[] = [
  { id: '1', title: 'Laravel Development', description: 'Robust backend systems, CRM modules, and elegant PHP architectures.', icon: 'server' },
  { id: '2', title: 'React Development', description: 'Premium interactive UIs with motion, performance, and polish.', icon: 'component' },
  { id: '3', title: '.NET Development', description: 'ASP.NET Core / MVC applications with clean architecture.', icon: 'code' },
  { id: '4', title: 'REST API Development', description: 'Secure, documented, scalable APIs for modern clients.', icon: 'network' },
  { id: '5', title: 'Database Design', description: 'MySQL & SQL Server schemas built for integrity and speed.', icon: 'database' },
  { id: '6', title: 'Dashboard Development', description: 'Operational dashboards with analytics and clear workflows.', icon: 'layout' },
  { id: '7', title: 'CRM Development', description: 'Lead pipelines, deals, automation, and client operations.', icon: 'users' },
  { id: '8', title: 'Automation Systems', description: 'Workflow automation that removes repetitive busywork.', icon: 'zap' },
  { id: '9', title: 'AI Integration', description: 'Gemini and AI-assisted features inside real products.', icon: 'sparkles' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Project Lead',
    role: 'Engineering Manager',
    company: 'Creative IT Park',
    content:
      'Ammar delivers production-ready Laravel features with unusual care — clean APIs, thoughtful UX, and automation that actually ships.',
  },
  {
    id: '2',
    name: 'Product Collaborator',
    role: 'Product Designer',
    company: 'Partner Team',
    content:
      'He thinks in systems and interfaces. The dashboards and CRM flows feel intentional, not bolted together.',
  },
  {
    id: '3',
    name: 'Peer Engineer',
    role: 'Full-stack Developer',
    company: 'Open Collaboration',
    content:
      'Strong ownership across backend, integrations, and frontend polish. WhatsApp and AI work was especially well structured.',
  },
]

export const TECH_LOGOS = [
  'React',
  'Laravel',
  '.NET',
  'Git',
  'GitHub',
  'SQL',
  'MySQL',
  'JavaScript',
  'Tailwind',
  'Node',
  'TypeScript',
  'PHP',
]

export const COMPANY = {
  name: 'Creative IT Park',
  url: 'https://creativeitpark.org/',
  overview:
    'Creative IT Park is a technology organization focused on building digital products, enterprise systems, and innovative software solutions. As a Laravel Developer, I contribute to production CRM platforms, automation, and AI-powered workflows that support real business operations.',
  role: 'Laravel Developer',
  location: 'Islamabad',
  focus: [
    'Enterprise CRM Systems',
    'Laravel Backend Engineering',
    'REST API Development',
    'Database Design',
    'WhatsApp Business Automation',
    'Gemini AI Integration',
  ],
}
