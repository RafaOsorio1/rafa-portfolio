# Task: Hero Section Overhaul

This task updates the Hero section's copy, title, and typewriter animations. It removes junior/amateur clichés and establishes a senior technical presence, balancing personal aspects to a neat 80/20 ratio.

## Target Files
* `src/data/translations.ts`
* `src/sections/Hero.tsx`

## Step-by-Step Instructions

### Step 1: Update Copy in translations.ts
Open `src/data/translations.ts` and modify the translation blocks for both Spanish (`es`) and English (`en`) keys under `hero`.

#### Spanish Translation Keys (under `es.hero`):
* Replace `role` with `"Software Engineer"`
* Replace `tagline` with:
  `"Software Engineer especializado en sistemas distribuidos, arquitectura cloud (Azure) y aplicaciones web de alto rendimiento. Diseñando sistemas escalables con React, Node.js y Docker. Enfocado en resolver problemas complejos de concurrencia y sincronización en tiempo real."`
* Replace typewriter lines (`tw1` to `tw5`):
  * `tw1`: `"Distributed Systems Engineer."`
  * `tw2`: `"Cloud Architect (Azure)."`
  * `tw3`: `"Node.js & React Specialist."`
  * `tw4`: `"Performance & Concurrency Optimization."`
  * `tw5`: `"Entusiasta de la F1 y Mascota-Dad. 🏎️🐾"`

#### English Translation Keys (under `en.hero`):
* Replace `role` with `"Software Engineer"`
* Replace `tagline` with:
  `"Software Engineer specializing in distributed systems, cloud architecture (Azure), and high-performance web applications. Designing scalable systems with React, Node.js, and Docker. Focused on solving complex concurrency, performance, and real-time synchronization challenges."`
* Replace typewriter lines (`tw1` to `tw5`):
  * `tw1`: `"Distributed Systems Engineer."`
  * `tw2`: `"Cloud Architect (Azure)."`
  * `tw3`: `"Node.js & React Specialist."`
  * `tw4`: `"Performance & Concurrency Optimization."`
  * `tw5`: `"F1 & Cat Enthusiast. 🏎️🐾"`

### Step 2: Refactor Hero Component Typings (Optional Check)
In `Hero.tsx`, confirm that the typewriter reads correctly from translation keys. The local component defines `typewriterText` on lines 8-14. It should fetch `hero.tw1` through `hero.tw5` smoothly:
```typescript
const typewriterText = [
  t('hero.tw1'),
  t('hero.tw2'),
  t('hero.tw3'),
  t('hero.tw4'),
  t('hero.tw5'),
];
```

---

## Verification Criteria
1. Run the local development server.
2. Observe the typewriter animation. Verify it cycles through the 4 core technical competency lines and finishes on the personal F1 & Cat line.
3. Switch the language toggle at the top right: confirm that translation changes propagate correctly between Spanish and English text.
4. Verify the tagline reads smoothly and does not overflow on small screen resolutions.
