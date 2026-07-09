export const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export const NAV_ITEMS = [
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.interests", href: "#interests" },
  { key: "nav.contact", href: "#contact" },
];

export const getProjects = (t: (key: string) => string) => [
  {
    id: 1, title: "Easy Shop",
    description: t('projects_data.easy_shop.desc') || "Plataforma de comercio electrónico moderna y completa.",
    longDesc: t('projects_data.easy_shop.long') || "E-commerce full-stack desarrollado con React 19 y Node.js. Incluye carrito de compras, gestión de estado con Zustand, base de datos PostgreSQL gestionada con Prisma, y websockets para notificaciones en tiempo real.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Zustand", "Socket.io"],
    url: "#", repo: "#", repoBack: "#", accent: "#00E5FF", year: "2024", status: "production",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&auto=format",
  },
  {
    id: 2, title: "Chatty",
    description: t('projects_data.chatty.desc') || "Aplicación de mensajería instantánea en tiempo real.",
    longDesc: t('projects_data.chatty.long') || "Plataforma de chat construida con React y Socket.io. Soporta salas de chat, selectores de emojis y comunicación bidireccional de baja latencia.",
    tech: ["React", "Socket.io", "Tailwind CSS", "Zustand"],
    url: "https://chatty.rafaosorio.dev/", repo: "https://github.com/RafaOsorio1/chatty-client", accent: "#FF003C", year: "2026", status: "production",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop&auto=format",
  },
  {
    id: 3, title: "Chatty API",
    description: t('projects_data.chatty_api.desc') || "API REST y WebSocket para plataforma de mensajería.",
    longDesc: t('projects_data.chatty_api.long') || "Backend de la plataforma Chatty. Arquitectura escalable en Node.js que maneja la persistencia de usuarios, seguridad JWT y comunicación bidireccional de baja latencia con Socket.io. Documentado con Swagger.",
    tech: ["Node.js", "Express", "Socket.io", "JWT", "Swagger"],
    url: "https://chatty-backend-nov8.onrender.com", repo: "https://github.com/RafaOsorio1/chatty-backend", accent: "#00E5FF", year: "2026", status: "production",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&auto=format",
  },
  {
    id: 4, title: "Feedback Net",
    description: t('projects_data.feedback.desc') || "Plataforma integral de feedback en colaboración con Angie Natalia.",
    longDesc: t('projects_data.feedback.long') || "Aplicación de interfaz desarrollada en colaboración con Angie Natalia. Me enfoqué en apoyar implementaciones clave del frontend en Next.js, conectando con nuestra robusta API REST.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://feedback-net.netlify.app/", repo: "https://github.com/RafaOsorio1/feedback-net", accent: "#7C3AED", year: "2026", status: "production",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format",
    collaboration: t('projects.collab') || "Colaboración con Angie Natalia",
  },
  {
    id: 5, title: "Feedback Net API",
    description: t('projects_data.feedback_api.desc') || "Backend robusto para plataforma de feedback corporativo.",
    longDesc: t('projects_data.feedback_api.long') || "Arquitectura backend completa desarrollada desde cero. Gestión compleja de base de datos relacional (PostgreSQL + Prisma), autenticación segura y múltiples endpoints REST documentados interactivamente con Swagger.",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "Swagger"],
    url: "https://feedback-net-backend-v2.onrender.com", repo: "https://github.com/RafaOsorio1/feedback-net-backend_V2", accent: "#FFBD2E", year: "2026", status: "production",
    img: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=800&h=450&fit=crop&auto=format",
  },
  {
    id: 6, title: "F1 Hub",
    description: t('projects_data.f1_hub.desc') || "Plataforma de estadísticas y telemetría de Fórmula 1.",
    longDesc: t('projects_data.f1_hub.long') || "Aplicación interactiva que consume la API de Jolpica para mostrar resultados en tiempo real, estadísticas de pilotos y análisis de carreras. Construida con un backend robusto para manejar la sincronización de datos.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "F1 API"],
    url: "#", repo: "#", repoBack: "#", accent: "#00FF80", year: "2026", status: "production",
    img: "https://images.unsplash.com/photo-1532983330958-4b32bbe9aa00?w=800&h=450&fit=crop&auto=format",
  }
];

export const SKILLS_DATA = [
  { category: "Frontend", items: [
    { name: "React 19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Zustand", icon: "" },
    { name: "React Query", icon: "" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
  ], level: 95, color: "#00E5FF" },
  { category: "Backend", items: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
    { name: "JWT", icon: "" },
    { name: "Zod", icon: "" },
    { name: "Bcrypt", icon: "" }
  ], level: 90, color: "#FF003C" },
  { category: "Bases de Datos", items: [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
  ], level: 85, color: "#FFD700" },
  { category: "Herramientas / Infra", items: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Cloudinary", icon: "" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" }
  ], level: 85, color: "#7C3AED" },
];

export const GAMES = [
  { title: "F1 24", platform: "Xbox", hours: "350h+", genre: "Racing", rating: 10, icon: "🏎️", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2488620/capsule_231x87.jpg" },
  { title: "Call of Duty", platform: "Xbox", hours: "400h+", genre: "Shooter", rating: 9, icon: "🎯", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1938090/capsule_231x87.jpg" },
  { title: "Minecraft", platform: "Xbox", hours: "250h+", genre: "Sandbox", rating: 10, icon: "⛏️", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=100&fit=crop" },
  { title: "Warframe", platform: "Xbox", hours: "500h+", genre: "Action RPG", rating: 9, icon: "🥷", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/230410/capsule_231x87.jpg" },
  { title: "Elden Ring", platform: "Xbox", hours: "210h", genre: "Souls-like", rating: 10, icon: "⚔️", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_231x87.jpg" },
  { title: "The Witcher 3", platform: "Xbox", hours: "280h", genre: "RPG", rating: 10, icon: "🐺", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/capsule_231x87.jpg" },
];

export const MOVIES = [
  { title: "Interstellar", year: 2014, rating: 10, director: "Christopher Nolan", genre: "Sci-Fi" },
  { title: "Blade Runner 2049", year: 2017, rating: 10, director: "Denis Villeneuve", genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 10, director: "Christopher Nolan", genre: "Thriller" },
  { title: "Dune: Part Two", year: 2024, rating: 9, director: "Denis Villeneuve", genre: "Sci-Fi" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 9, director: "George Miller", genre: "Action" },
  { title: "Arrival", year: 2016, rating: 9, director: "Denis Villeneuve", genre: "Sci-Fi" },
];

export const F1_STANDINGS = [
  { pos: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 393, flag: "🇳🇱", fastest: "1:11.294" },
  { pos: 2, driver: "Lando Norris", team: "McLaren", points: 331, flag: "🇬🇧", fastest: "1:11.501" },
  { pos: 3, driver: "Charles Leclerc", team: "Ferrari", points: 307, flag: "🇲🇨", fastest: "1:11.743" },
  { pos: 4, driver: "Oscar Piastri", team: "McLaren", points: 262, flag: "🇦🇺", fastest: "1:11.889" },
  { pos: 5, driver: "Carlos Sainz", team: "Ferrari", points: 244, flag: "🇪🇸", fastest: "1:12.001" },
];

export const TEAM_COLORS: Record<string, string> = {
  "Red Bull Racing": "#3671C6",
  "McLaren": "#FF8000",
  "Ferrari": "#E8002D",
  "Mercedes": "#00D2BE",
  "Aston Martin": "#006F62",
};
