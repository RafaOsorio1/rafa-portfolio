# Task: Boilerplate Cleanup & Technical Credibility

This task ensures the repository itself looks like it was engineered from scratch by a Senior Developer, removing default templates, generated markers, and updating configurations.

## Target Files
* `package.json`
* `README.md`
* `vite.config.ts`

## Step-by-Step Instructions

### Step 1: Fix package.json Configurations
1. In `package.json`, locate the `"name"` property on line 2:
   ```json
   "name": "@figma/my-make-file"
   ```
2. Replace it with a professional identifier matching the project repo:
   ```json
   "name": "rafael-rodelo-portfolio"
   ```
3. Verify that the version and author metadata are clean and appropriate.

### Step 2: Overwrite README.md
Replace the entire content of the root `README.md` with a professional description detailing the portfolio architecture, design decisions, internationalization, and how to run tests.

**Proposed README Content:**
```markdown
# Rafael Rodelo | Senior Full-Stack Portfolio

This repository hosts the source code for my professional portfolio. It is engineered with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui, optimized for high responsiveness, telemetry indicators, and localized translation keys.

## Architecture & Core Stack
* **Frontend:** React 19 (Hooks, Context, state-driven overlays), TypeScript.
* **Styling:** Tailwind CSS + Vanilla CSS Variables for precise neomorphic and dark-mode styling.
* **State & Locales:** Custom Context-based translation engine supporting English and Spanish locale maps.
* **Telemetry Integrations:** Asynchronous data synchronization fetching real-time external APIs (e.g., F1 driver telemetry).

## Repository Structure
* `/src/app` - Main application wrapper and custom layout effects.
* `/src/components` - Reusable UI widgets (modals, cards, navigation).
* `/src/context` - State wrappers for language and user settings.
* `/src/data` - Local translations maps and static constants.
* `/src/sections` - Core viewport layout panels.
* `/guidelines` - Guidelines and task list logs.

## Setup & Execution

### Installation
Run the following command to install required dependencies:
```bash
pnpm install
```

### Local Development
To run the hot-reloading development server locally:
```bash
pnpm run dev
```

### Production Build
To bundle the static assets for hosting:
```bash
pnpm run build
```
```

### Step 3: Remove Boilerplate Comments from vite.config.ts
In `vite.config.ts`, clean up generator-specific comments. For instance, remove:
```typescript
// The React and Tailwind plugins are both required for Make, even if
// Tailwind is not being actively used – do not remove them
```
Keep only the configuration details.

---

## Verification Criteria
1. Run `pnpm install` (or `npm install`) and verify the name change does not cause package dependency conflicts.
2. Confirm the root `README.md` displays clean markdown when rendered in GitHub or local previews.
3. Build the project (`pnpm run build`) to ensure that removing comments from `vite.config.ts` did not affect compilation.
