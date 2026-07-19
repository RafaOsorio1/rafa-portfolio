# Task: Skills Section Refactoring

This task refactors the Skills section. It strips out the visual percentage progress bars (which look amateur/junior) and reorganizes the skills into core engineering domains.

## Target Files
* `src/sections/Skills.tsx`
* `src/data/constants.ts`
* `src/data/translations.ts`

## Step-by-Step Instructions

### Step 1: Remove Percentage Render and Progress Bars from Skills.tsx
1. Open `src/sections/Skills.tsx`.
2. Locate and delete the code blocks that render percentages and visual progress indicators (lines 33-48). Specifically, remove:
   ```typescript
   <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>
     {skill.level}%
   </span>
   ```
   and the enclosing progress bar container:
   ```typescript
   <div className="h-1 rounded-full overflow-hidden" ...>...</div>
   ```
3. Update the grid styling to show simple, elegant tech tag boxes grouped by category headers.

### Step 2: Refactor Categories in constants.ts
Open `src/data/constants.ts` and modify the array inside the `getSkills` function (lines 126-225).
1. Delete the `level` property from each category object.
2. Reorganize/rename the categories to:
   * **Core Languages & Runtimes** (TypeScript, JavaScript, Node.js, Express, SQL)
   * **Frontend Architecture** (React 19, Next.js, React Query, Zustand, Tailwind CSS, Vite)
   * **Databases & Caching** (PostgreSQL, Redis, MongoDB, Prisma ORM)
   * **Cloud, DevOps & Tooling** (Azure, Docker, Git, GitHub Actions, Swagger)

### Step 3: Align Translations in translations.ts
Open `src/data/translations.ts` and edit the translation category labels under `skills.categories` in both locales to match the new headers.
* **Spanish (`es.skills.categories`):**
  * `languages`: `"Lenguajes y Entornos"`
  * `frontend`: `"Arquitectura Frontend"`
  * `databases`: `"Bases de Datos y Caché"`
  * `devops`: `"Cloud, DevOps e Infra"`
* **English (`en.skills.categories`):**
  * `languages`: `"Languages & Runtimes"`
  * `frontend`: `"Frontend Architecture"`
  * `databases`: `"Databases & Caching"`
  * `devops`: `"Cloud, DevOps & Infra"`

---

## Verification Criteria
1. Compile the project: ensure there are no compilation errors related to missing property fields (like `level`).
2. Verify that categories render in clean, grid panels.
3. Confirm that the progress bar lines and percentages are completely gone, leaving only clean tags and category names.
