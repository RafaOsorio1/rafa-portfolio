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