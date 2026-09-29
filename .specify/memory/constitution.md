# Constitución del Proyecto: Rafael Rodelo Portfolio

## Principios Fundamentales

### I. Idioma Predeterminado: Español
Toda la documentación, especificaciones funcionales (`spec.md`), planes técnicos de arquitectura (`plan.md`), desgloses de tareas (`tasks.md`), revisiones de calidad y checklists de Spec Kit deben estar redactados en **español**. Los términos técnicos estándar del desarrollo web (ej. *props*, *hooks*, *render*, *build*, *PR*) pueden mantenerse o adaptarse naturalmente.

### II. Stack y Arquitectura Modular
- **Base Técnica:** React 19, TypeScript estricto, Vite, Tailwind CSS y componentes basados en Radix UI / Shadcn.
- **Estructura de Directorios:**
  - `src/components/`: Componentes atómicos y widgets reutilizables.
  - `src/sections/`: Secciones principales del viewport (Hero, About, Experience, Projects, Skills, Interests, Contact).
  - `src/context/`: Gestión de estado global (tema, idioma, configuración).
  - `src/data/`: Fuentes de datos locales y diccionarios de internacionalización (i18n).
- **Aislamiento:** Cada componente o sección debe ser modular, desacoplado y libre de dependencias circulares.

### III. Especificación Primero (Specification-Driven Development)
Ninguna funcionalidad se implementará directamente sin haber pasado por el ciclo de Spec Kit:
1. Definición de requerimientos e historias de usuario (`/speckit-specify`).
2. Aclaración de dudas y casos borde (`/speckit-clarify`).
3. Plan técnico y decisiones de arquitectura (`/speckit-plan`).
4. Desglose en tareas atómicas independientes (`/speckit-tasks`).
5. Ejecución guiada y verificable (`/speckit-implement`).

### IV. Calidad, Tipado Estricto y Rendimiento
- Tipado estricto en TypeScript; evitar el uso de `any`.
- Optimización de assets, animaciones fluidas con Framer Motion sin sobrecargar el hilo principal.
- Diseño completamente responsive garantizado en todos los dispositivos y pantallas.

### V. Internacionalización y Accesibilidad (i18n & a11y)
- Los textos visibles de cara al usuario deben ser localizables y añadirse a los diccionarios en `src/data/`.
- Uso adecuado de etiquetas semánticas HTML5 y atributos de accesibilidad ARIA.

## Gobernanza
Esta constitución rige todo el desarrollo dentro de este repositorio. Cualquier cambio arquitectónico significativo o excepción a estos principios debe documentarse y ratificarse formalmente en este archivo.

**Versión**: 1.0.0 | **Ratificada**: 2026-09-29 | **Última Modificación**: 2026-09-29
