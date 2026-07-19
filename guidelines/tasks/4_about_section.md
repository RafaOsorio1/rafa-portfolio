# Task: About Me Section Refactoring

This task refactors the About Me section. It updates the bio copywriting to project high-level engineering authority and swaps out junior/amateur statistics (like "coffees consumed" and "gaming hours") with professional engineering metrics.

## Target Files
* `src/data/translations.ts`
* `src/sections/About.tsx`

## Step-by-Step Instructions

### Step 1: Update Translation Copy
Open `src/data/translations.ts` and modify the copy keys under `about` for both languages.

#### Spanish Translation Keys (under `es.about`):
* Replace `title` with `"Software Engineer"`
* Replace `subtitle` with `"Arquitectura y Escala."`
* Replace `p1` with:
  `"Software Engineer con más de 4 años de experiencia profesional diseñando y construyendo sistemas distribuidos y arquitecturas web de alto rendimiento. Especializado en el desarrollo de APIs robustas e idempotentes en Node.js, interfaces reactivas y optimizadas en React, y despliegues cloud en Azure bajo contenedores Docker. Mi enfoque está orientado a resolver cuellos de botella de rendimiento, sincronización de datos en tiempo real y optimización de bases de datos relacionales (PostgreSQL)."`
* Replace `p2` with:
  `"Fuera de la ingeniería de software, me interesa la telemetría y el análisis de datos aplicados a la Fórmula 1, el cine de ciencia ficción (especialmente el cine de Nolan y Villeneuve) y compartir tiempo con mis mascotas Roxy, Nova y Sooky."`
* Under `about.stats`, update metrics tags:
  * `yoe`: `"Experiencia / Experience"`
  * `projects`: `"Sistemas Cloud / Cloud Systems"` *(replaces "Completed projects")*
  * `coffee`: `"Latencia API / Avg Latency"` *(replaces "Coffees consumed")*
  * `games`: `"Pruebas Unitarias / Test Coverage"` *(replaces "Hours in games")*

#### English Translation Keys (under `en.about`):
* Replace `title` with `"Software Engineer"`
* Replace `subtitle` with `"Architecture & Scale."`
* Replace `p1` with:
  `"Software Engineer with 4+ years of professional experience designing and building distributed systems and high-performance web architectures. Specialized in developing robust, idempotent APIs with Node.js, optimized reactive interfaces in React, and cloud deployments on Azure using Docker containers. My engineering focus is centered on resolving performance bottlenecks, real-time data synchronization, and relational database query optimization (PostgreSQL)."`
* Replace `p2` with:
  `"Outside of software engineering, I am deeply interested in data telemetry and strategic analysis in Formula 1, sci-fi cinema (especially Christopher Nolan and Denis Villeneuve), and spending time with my three pets, Roxy, Nova, and Sooky."`
* Under `about.stats`, update labels to match English translation context.

### Step 2: Update Statistics Values in About.tsx
Open `src/sections/About.tsx` and locate the statistics array around lines 26-31. Swap the values to match the new professional metrics labels:
```typescript
{ label: t('about.stats.yoe'), value: '4+ Yoe' },
{ label: t('about.stats.projects'), value: '15+' },
{ label: t('about.stats.coffee'), value: '<150ms' },
{ label: t('about.stats.games'), value: '85%+' },
```

### Step 3: Simplify Hobbies Grid
In `src/sections/About.tsx`, modify the array of hobbies (lines 55-92):
* Combine `roxy` and `cats` (Nova & Sooky) into a single card representation called "Mascotas / Pets" to make room for a professional cloud engineering badge or simply reduce clutter.

---

## Verification Criteria
1. Run local dev server.
2. In the About section, verify that the statistics cards render:
   * `4+ Yoe` (Experiencia)
   * `15+` (Sistemas Cloud)
   * `<150ms` (Latencia API)
   * `85%+` (Pruebas Unitarias)
3. Review the text paragraphs to verify there are no grammatical errors or translation discrepancies.
