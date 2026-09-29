# Directrices del Proyecto: Rafael Rodelo Portfolio

## 1. Idioma Oficial del Proyecto
- **Idioma Principal:** Español.
- Todas las especificaciones de funcionalidades, historias de usuario, planes de arquitectura técnica (`plan.md`), listas de tareas (`tasks.md`), checklists y documentación generada mediante **Spec Kit** (`/speckit-*`) deben ser redactadas exclusivamente en **español**.
- Las explicaciones, propuestas, revisiones y comunicaciones con el desarrollador se realizan en **español**.

## 2. Stack Tecnológico
- **Framework & Entorno:** React 19, TypeScript estricto, Vite.
- **Estilos & UI:** Tailwind CSS, Radix UI / Shadcn, Framer Motion, Lucide React.
- **Estructura del Proyecto:**
  - `src/components/`: Componentes UI reutilizables y modulares.
  - `src/sections/`: Secciones principales de la página (Hero, About, Experience, Projects, Skills, Interests, Contact).
  - `src/context/`: Estado global y contexto de traducción/idioma.
  - `src/data/`: Datos estáticos y diccionarios de internacionalización (i18n).
  - `src/styles/`: Estilos globales y variables de diseño.

## 3. Flujo de Trabajo (Specification-Driven Development)
- Toda nueva característica, refactor o sección debe seguir el flujo estructurado:
  1. `/speckit-specify` - Definición clara de historias de usuario y requerimientos (en español).
  2. `/speckit-clarify` - Resolución de dudas y casos borde.
  3. `/speckit-plan` - Plan de arquitectura técnica y dependencias.
  4. `/speckit-tasks` - Desglose en tareas atómicas y ejecutables.
  5. `/speckit-implement` - Generación e integración del código.
