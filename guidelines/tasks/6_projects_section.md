# Task: Projects Refactoring & Consolidating

This task refactors the Projects listing. It consolidates separate client/API repository cards into single, unified portfolio projects (e.g. merging Chatty Client + Chatty API) and rewrites copy descriptions to highlight engineering decisions, concurrency, caching, and container setups.

## Target Files
* `src/data/constants.ts`
* `src/data/translations.ts`

## Step-by-Step Instructions

### Step 1: Consolidate Projects in constants.ts
Open `src/data/constants.ts` and modify the `getProjects` helper function (lines 22-124).
1. Merge Project 2 ("Chatty") and Project 3 ("Chatty API") into a single project.
   * **Title:** `"Decoupled Messaging Engine (Chatty)"`
   * **Tech Stack:** `['React', 'Node.js', 'Express', 'Socket.io', 'JWT', 'Tailwind CSS', 'Zustand', 'Swagger']`
   * Provide both links inside the object (`repo` for client, `repoBack` for backend api).
2. Merge Project 4 ("Feedback Net") and Project 5 ("Feedback Net API") into a single project.
   * **Title:** `"Corporate Feedback SaaS (Feedback Net)"`
   * **Tech Stack:** `['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Swagger']`
   * Provide both links inside the object (`repo` for frontend client, `repoBack` for backend api).
3. Reframe project 6 ("F1 Hub"):
   * **Title:** `"F1 Telemetry Dashboard (F1 Hub)"`
   * **Tech Stack:** `['React', 'Node.js', 'Express', 'Redis / Cache', 'F1 API']`

### Step 2: Rewrite Project Descriptions in translations.ts
Open `src/data/translations.ts` and update the translations under `projects_data` for both `es` and `en` locales.

#### Spanish Translation Keys (under `es.projects_data`):
* **easy_shop:**
  * `desc`: `"Simulador de motor de e-commerce de alta concurrencia diseñado con arquitectura desacoplada."`
  * `long`: `"Arquitectura full-stack que emula operaciones de comercio electrónico. Implementa persistencia de estado consistente en el cliente con Zustand, control transaccional estricto en PostgreSQL usando Prisma, y un servidor de notificaciones basado en WebSockets (Socket.io) para sincronización de inventario en tiempo real. Optimizado para mitigar condiciones de carrera en compras concurrentes."`
* **chatty:**
  * `desc`: `"Sistema de mensajería instantánea de baja latencia con arquitectura desacoplada."`
  * `long`: `"Plataforma de chat bidireccional en tiempo real construida con React y Node.js. Utiliza Socket.io sobre WebSockets con pooling de conexiones y autenticación sin estado mediante JWT. La API de Express está documentada bajo estándares OpenAPI (Swagger) y optimizada para soportar salas de chat concurrentes con persistencia eficiente de mensajes."`
* **feedback:**
  * `desc`: `"Plataforma SaaS corporativa para gestión de retroalimentación 360 grados."`
  * `long`: `"Sistema SaaS full-stack para feedback corporativo desarrollado en colaboración con Angie Natalia. Incluye frontend en Next.js conectado a una API REST en Node.js/Express. Construido con modelado de base de datos relacional compleja en PostgreSQL, migración automatizada con Prisma, autenticación JWT con roles jerárquicos (RBAC) y documentación interactiva."`
* **f1_hub:**
  * `desc`: `"Visualizador de telemetría de Fórmula 1 con sincronización y caching asíncrono."`
  * `long`: `"Dashboard interactivo para análisis de telemetría y resultados históricos de F1 consumiendo la API de Jolpica. Implementa una capa de backend en Node.js/Express que actúa como proxy con caché de datos en memoria para evitar el rate-limiting de la API externa, optimizando los tiempos de respuesta del cliente en un 70%."`

#### English Translation Keys (under `en.projects_data`):
*(Define equivalent translations in English)*
* **easy_shop:**
  * `desc`: `"High-concurrency decoupled e-commerce engine simulation."`
  * `long`: `"Full-stack architecture simulating e-commerce operations. Implements client-side state persistence via Zustand, strict transactional integrity on PostgreSQL using Prisma ORM, and a WebSocket-based (Socket.io) notification engine for real-time inventory synchronization. Engineered to prevent race conditions during concurrent checkouts."`
* **chatty:**
  * `desc`: `"Low-latency bidirectional messaging system with a decoupled architecture."`
  * `long`: `"Bidirectional real-time messaging platform built using React and Node.js. Leverages Socket.io over WebSockets with optimized connection pooling and stateless authentication via JWT. The Node.js API is documented under OpenAPI (Swagger) standards and optimized to handle concurrent chat rooms with memory-efficient message history delivery."`
* **feedback:**
  * `desc`: `"Enterprise SaaS system for 360-degree feedback loops."`
  * `long`: `"Full-stack SaaS system for corporate feedback loops developed in collaboration with Angie Natalia. Integrates Next.js on the frontend with a decoupled Node.js/Express API. Built with complex relational schema modeling on PostgreSQL, automated schema migrations with Prisma, JWT-based Role-Based Access Control (RBAC), and interactive Swagger docs."`
* **f1_hub:**
  * `desc`: `"F1 telemetry dashboard with asynchronous data synchronization and caching."`
  * `long`: `"Interactive dashboard for F1 telemetry analysis and historical race statistics. Integrates a Node.js/Express backend proxy layer that caches external API (Jolpica) payloads to mitigate rate-limiting, resulting in a 70% reduction in client-side loading latency."`

---

## Verification Criteria
1. Compile the project and ensure there are no compilation errors in components reading the project objects.
2. Verify there are only 4 projects now displayed in the Grid instead of 6 (or more).
3. Open a project modal (e.g. Chatty): verify that both Frontend Code and Backend Code buttons appear if the project is configured with client and backend repos.
4. Verify that formatting of tech tags matches the container layout rules.
