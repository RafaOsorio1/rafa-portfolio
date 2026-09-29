---

description: "Plantilla de lista de tareas para la implementación de funcionalidades"
---

# Tareas: [NOMBRE DE LA FUNCIONALIDAD]

**Entrada**: Documentos de diseño desde `/specs/[###-nombre-feature]/`

**Prerrequisitos**: plan.md (obligatorio), spec.md (obligatorio para historias de usuario), research.md, data-model.md

**Pruebas**: Las pruebas se incluyen si son requeridas explícitamente en la especificación o para verificar tipos/build.

**Organización**: Las tareas están agrupadas por historia de usuario para permitir implementación y verificación independiente de cada una.

## Formato: `[ID] [P?] [Historia] Descripción`

- **[P]**: Tarea paralelizable (archivos distintos, sin dependencias bloqueantes)
- **[Historia]**: A qué historia de usuario pertenece (ej. US1, US2, US3)
- Incluir rutas exactas de archivos en las descripciones

## Convenciones de Rutas

- Estructura principal en `src/`:
  - Componentes: `src/components/`
  - Secciones: `src/sections/`
  - Datos / i18n: `src/data/`
  - Contextos / Hooks: `src/context/`

---

## Fase 1: Preparación (Infraestructura Compartida)

**Propósito**: Inicialización y configuración básica de la funcionalidad

- [ ] T001 [P] Crear o actualizar tipos e interfaces en `src/` para la nueva funcionalidad
- [ ] T002 [P] Añadir claves de texto en los diccionarios de idiomas en `src/data/`

---

## Fase 2: Fundamentos (Prerrequisitos Bloqueantes)

**Propósito**: Componentes base, hooks o utilidades compartidas necesarias para las historias de usuario

- [ ] T003 Implementar hook o servicio base requerido por las vistas
- [ ] T004 Configurar estado en context si la feature requiere persistencia global

**Punto de Control**: Fundamentos listos - la implementación de historias de usuario puede comenzar

---

## Fase 3: Historia de Usuario 1 - [Título] (Prioridad: P1) 🎯 MVP

**Objetivo**: [Breve descripción de lo que entrega esta historia de usuario]

**Prueba Independiente**: [Cómo verificar visual y funcionalmente esta historia de forma autónoma]

### Implementación para Historia de Usuario 1

- [ ] T005 [P] [US1] Crear componente visual en `src/components/...`
- [ ] T006 [US1] Integrar componente en la sección correspondiente en `src/sections/...`
- [ ] T007 [US1] Añadir animaciones o interacciones con Framer Motion
- [ ] T008 [US1] Probar responsividad en breakpoints móvil, tablet y escritorio

**Punto de Control**: En este punto, la Historia de Usuario 1 está completamente funcional y verificada de forma independiente.

---

## Fase 4: Historia de Usuario 2 - [Título] (Prioridad: P2)

**Objetivo**: [Breve descripción de lo que entrega esta historia de usuario]

**Prueba Independiente**: [Cómo verificar esta historia de forma autónoma]

### Implementación para Historia de Usuario 2

- [ ] T009 [P] [US2] Crear componentes adicionales en `src/components/...`
- [ ] T010 [US2] Conectar interacción o filtrado de datos
- [ ] T011 [US2] Integrar con la Historia de Usuario 1

**Punto de Control**: Las Historias 1 y 2 funcionan e interactúan de manera armónica e independiente.

---

## Fase Final: Pulido y Control de Calidad

**Propósito**: Verificaciones transversales y estándares finales

- [ ] T012 Verificar compilación estricta de TypeScript (`pnpm run build` o `npx tsc --noEmit`)
- [ ] T013 Validar coherencia visual con el tema claro/oscuro y diseño neomórfico
- [ ] T014 Confirmar que todas las etiquetas y textos se visualizan en español e inglés
- [ ] T015 Limpieza de código y formateo con Prettier (`pnpm run format`)

---

## Orden de Ejecución y Dependencias

1. Completar **Fase 1 (Preparación)** y **Fase 2 (Fundamentos)**.
2. Implementar **Historia de Usuario 1 (P1 - MVP)** y validar de inmediato.
3. Avanzar secuencialmente con las siguientes historias priorizadas (P2, P3...).
4. Realizar la **Fase Final** de pulido, verificación de build y linting.
