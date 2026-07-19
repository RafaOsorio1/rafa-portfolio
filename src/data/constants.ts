export const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const NAV_ITEMS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.interests', href: '#interests' },
  { key: 'nav.contact', href: '#contact' },
];

export const getProjects = (t: (key: string) => string) => [
  {
    id: 1,
    title: 'Easy Shop',
    description:
      t('projects_data.easy_shop.desc') || 'Plataforma de comercio electrónico moderna y completa.',
    longDesc:
      t('projects_data.easy_shop.long') ||
      'E-commerce full-stack desarrollado con React 19 y Node.js. Incluye carrito de compras, gestión de estado con Zustand, base de datos PostgreSQL gestionada con Prisma, y websockets para notificaciones en tiempo real.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Zustand', 'Socket.io'],
    url: '#',
    repo: '#',
    repoBack: '#',
    accent: '#00E5FF',
    year: '2024',
    status: 'production',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'Decoupled Messaging Engine (Chatty)',
    description:
      t('projects_data.chatty.desc') ||
      'Sistema de mensajería instantánea de baja latencia con arquitectura desacoplada.',
    longDesc:
      t('projects_data.chatty.long') ||
      'Plataforma de chat bidireccional en tiempo real construida con React y Node.js. Utiliza Socket.io sobre WebSockets con pooling de conexiones y autenticación sin estado mediante JWT. La API de Express está documentada bajo estándares OpenAPI (Swagger) y optimizada para soportar salas de chat concurrentes con persistencia eficiente de mensajes.',
    tech: ['React', 'Node.js', 'Express', 'Socket.io', 'JWT', 'Tailwind CSS', 'Zustand', 'Swagger'],
    url: 'https://chatty.rafaosorio.dev/',
    repo: 'https://github.com/RafaOsorio1/chatty-client',
    repoBack: 'https://github.com/RafaOsorio1/chatty-backend',
    accent: '#FF003C',
    year: '2026',
    status: 'production',
    img: 'https://res.cloudinary.com/do99wz148/image/upload/v1783631669/326_1x_shots_so_pozp2o.png',
  },
  {
    id: 3,
    title: 'Corporate Feedback SaaS (Feedback Net)',
    description:
      t('projects_data.feedback.desc') ||
      'Plataforma SaaS corporativa para gestión de retroalimentación 360 grados.',
    longDesc:
      t('projects_data.feedback.long') ||
      'Sistema SaaS full-stack para feedback corporativo desarrollado en colaboración con Angie Natalia. Incluye frontend en Next.js conectado a una API REST en Node.js/Express. Construido con modelado de base de datos relacional compleja en PostgreSQL, migración automatizada con Prisma, autenticación JWT con roles jerárquicos (RBAC) y documentación interactiva.',
    tech: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Swagger',
    ],
    url: 'https://feedback-net.netlify.app/',
    repo: 'https://github.com/RafaOsorio1/feedback-net',
    repoBack: 'https://github.com/RafaOsorio1/feedback-net-backend_V2',
    accent: '#7C3AED',
    year: '2026',
    status: 'production',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format',
    collaboration: t('projects.collab') || 'Colaboración con Angie Natalia',
  },
  {
    id: 4,
    title: 'F1 Telemetry Dashboard (F1 Hub)',
    description:
      t('projects_data.f1_hub.desc') ||
      'Visualizador de telemetría de Fórmula 1 con sincronización y caching asíncrono.',
    longDesc:
      t('projects_data.f1_hub.long') ||
      'Dashboard interactivo para análisis de telemetría y resultados históricos de F1 consumiendo la API de Jolpica. Implementa una capa de backend en Node.js/Express que actúa como proxy con caché de datos en memoria para evitar el rate-limiting de la API externa, optimizando los tiempos de respuesta del cliente en un 70%.',
    tech: ['React', 'Node.js', 'Express', 'Redis / Cache', 'F1 API'],
    url: '#',
    repo: '#',
    repoBack: '#',
    accent: '#00FF80',
    year: '2026',
    status: 'production',
    img: 'https://images.unsplash.com/photo-1532983330958-4b32bbe9aa00?w=800&h=450&fit=crop&auto=format',
  },
];

export const getSkills = (t: (key: string) => string) => [
  {
    category: t('skills.categories.languages') || 'Languages & Runtimes',
    items: [
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      },
      { name: 'SQL', icon: '' },
    ],
    color: '#00E5FF',
  },
  {
    category: t('skills.categories.frontend') || 'Frontend Architecture',
    items: [
      {
        name: 'React 19',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      },
      { name: 'React Query', icon: '' },
      { name: 'Zustand', icon: '' },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'Vite',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
      },
    ],
    color: '#FF003C',
  },
  {
    category: t('skills.categories.databases') || 'Databases & Caching',
    items: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'Redis',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Prisma ORM',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
      },
    ],
    color: '#FFD700',
  },
  {
    category: t('skills.categories.devops') || 'Cloud, DevOps & Tooling',
    items: [
      {
        name: 'Azure',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      },
      {
        name: 'GitHub Actions',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      },
      {
        name: 'Swagger',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
      },
    ],
    color: '#7C3AED',
  },
];

export const GAMES = [
  {
    title: 'F1 24',
    platform: 'Xbox',
    genre: 'Racing',
    icon: '🏎️',
    img: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2488620/capsule_231x87.jpg',
  },
  {
    title: 'Call of Duty',
    platform: 'Xbox',
    genre: 'Shooter',
    icon: '🎯',
    img: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1938090/capsule_231x87.jpg',
  },
  {
    title: 'Minecraft',
    platform: 'Xbox',
    genre: 'Sandbox',
    icon: '⛏️',
    img: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=100&fit=crop',
  },
  {
    title: 'Warframe',
    platform: 'Xbox',
    genre: 'Action RPG',
    icon: '🥷',
    img: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/230410/capsule_231x87.jpg',
  },
  {
    title: 'Elden Ring',
    platform: 'Xbox',
    genre: 'Souls-like',
    icon: '⚔️',
    img: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_231x87.jpg',
  },
  {
    title: 'The Witcher 3',
    platform: 'Xbox',
    genre: 'RPG',
    icon: '🐺',
    img: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/capsule_231x87.jpg',
  },
];

export const MOVIES = [
  { title: 'Interstellar', year: 2014, rating: 10, director: 'Christopher Nolan', genre: 'Sci-Fi' },
  {
    title: 'Blade Runner 2049',
    year: 2017,
    rating: 10,
    director: 'Denis Villeneuve',
    genre: 'Sci-Fi',
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    rating: 10,
    director: 'Christopher Nolan',
    genre: 'Thriller',
  },
  { title: 'Dune: Part Two', year: 2024, rating: 9, director: 'Denis Villeneuve', genre: 'Sci-Fi' },
  {
    title: 'Mad Max: Fury Road',
    year: 2015,
    rating: 9,
    director: 'George Miller',
    genre: 'Action',
  },
  { title: 'Arrival', year: 2016, rating: 9, director: 'Denis Villeneuve', genre: 'Sci-Fi' },
];

export const F1_STANDINGS = [
  {
    pos: 1,
    driver: 'Max Verstappen',
    team: 'Red Bull Racing',
    points: 393,
    flag: '🇳🇱',
    fastest: '1:11.294',
  },
  { pos: 2, driver: 'Lando Norris', team: 'McLaren', points: 331, flag: '🇬🇧', fastest: '1:11.501' },
  {
    pos: 3,
    driver: 'Charles Leclerc',
    team: 'Ferrari',
    points: 307,
    flag: '🇲🇨',
    fastest: '1:11.743',
  },
  {
    pos: 4,
    driver: 'Oscar Piastri',
    team: 'McLaren',
    points: 262,
    flag: '🇦🇺',
    fastest: '1:11.889',
  },
  { pos: 5, driver: 'Carlos Sainz', team: 'Ferrari', points: 244, flag: '🇪🇸', fastest: '1:12.001' },
];

export const TEAM_COLORS: Record<string, string> = {
  'Red Bull Racing': '#3671C6',
  McLaren: '#FF8000',
  Ferrari: '#E8002D',
  Mercedes: '#00D2BE',
  'Aston Martin': '#006F62',
};

export type Project = ReturnType<typeof getProjects>[0];
