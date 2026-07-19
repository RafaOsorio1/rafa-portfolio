# Task: Experience Timeline Component Creation

This task builds the missing Work Experience section from scratch. It creates a new component and integrates it into the navigation and main viewport routing, showing your professional trajectory with metrics, responsibilities, and architectural terms.

## Target Files
* `src/data/constants.ts`
* `src/data/translations.ts`
* `src/sections/Experience.tsx` (NEW)
* `src/app/App.tsx`

## Step-by-Step Instructions

### Step 1: Register Experience in Navigation and Translations
1. Open `src/data/constants.ts` and add a new entry to `NAV_ITEMS` (around lines 14-20) between "About" and "Projects":
   ```typescript
   { key: 'nav.experience', href: '#experience' }
   ```
2. Open `src/data/translations.ts`. Add translation keys for navigation under `nav`:
   * Spanish (`es.nav`): `experience: 'Experiencia'`
   * English (`en.nav`): `experience: 'Experience'`
3. Add the copy key definitions for the experience history.
   Create an `experience_data` node inside `es` and `en` segments.
   * **Spanish (`es.experience_data`):**
     ```json
     "experience_data": {
       "label": "experiencia",
       "title": "Trayectoria Profesional.",
       "jobs": [
         {
           "role": "Senior/Lead Full-Stack Engineer",
           "company": "Tech Corp",
           "period": "2024 - Presente",
           "bullets": [
             "Diseñé e implementé la arquitectura de microservicios utilizando Node.js y Docker, reduciendo la latencia de las transacciones críticas en un 35% y mitigando condiciones de carrera concurrentes.",
             "Migré monolitos legacy a Azure App Service y Azure SQL Database, mejorando la disponibilidad del sistema al 99.95% mediante balanceo de carga y políticas de escalado automático.",
             "Lideré la migración del frontend core a React 19 y Next.js, optimizando las métricas de Core Web Vitals (LCP reducido en 1.2 segundos)."
           ]
         },
         {
           "role": "Software Engineer",
           "company": "Software Solutions Corp",
           "period": "2022 - 2024",
           "bullets": [
             "Desarrollé APIs REST documentadas con OpenAPI (Swagger) y conexiones WebSocket persistentes (Socket.io) para sincronización bidireccional de baja latencia.",
             "Orquesté contenedores Docker en entornos locales y de staging, recortando los tiempos de onboarding de desarrolladores de 3 días a menos de 10 minutos.",
             "Implementé estrategias de pruebas unitarias y de integración (Jest/Vitest), logrando un 85% de cobertura en módulos críticos de procesamiento de pagos."
           ]
         }
       ]
     }
     ```
   * **English (`en.experience_data`):**
     *(Translate the above JSON keys to English)*

### Step 2: Create src/sections/Experience.tsx Component
Create a new file `src/sections/Experience.tsx` with a responsive vertical timeline structure that displays the jobs list:
```typescript
import { SectionLabel } from '../components/ui/SectionLabel';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const { t } = useLanguage();
  
  // Directly fetch jobs array or map translated objects. 
  // To match local context style, map translations or read an export list:
  const jobs = [
    {
      role: 'Senior Full-Stack Engineer',
      company: 'Tech Corp',
      period: '2024 - Present',
      bullets: [
        t('experience_data.jobs.0.bullet1') || 'Designed and implemented microservices architectures using Node.js and Docker, reducing critical transactions latency by 35%.',
        t('experience_data.jobs.0.bullet2') || 'Migrated monolithic systems to Azure App Services and Azure SQL, increasing availability to 99.95% via load balancing.',
        t('experience_data.jobs.0.bullet3') || 'Led core frontend migration to React 19 / Next.js, reducing Largest Contentful Paint (LCP) by 1.2s.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Software Solutions Corp',
      period: '2022 - 2024',
      bullets: [
        t('experience_data.jobs.1.bullet1') || 'Developed secure Node.js REST APIs documented under OpenAPI (Swagger) and WebSockets interfaces using Socket.io.',
        t('experience_data.jobs.1.bullet2') || 'Orchestrated container setups with Docker-compose, cutting developer onboarding times from 3 days to 10 minutes.',
        t('experience_data.jobs.1.bullet3') || 'Wrote robust unit and integration tests with Jest/Vitest, reaching 85% coverage in billing systems.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text={t('experience_data.label') || 'experiencia'} />
        <h2 className="mt-4 text-3xl font-black mb-12" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          {t('experience_data.title') || 'Trayectoria Profesional'}
        </h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:md:left-8 before:w-0.5 before:bg-slate-800">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative pl-14 md:pl-20 animate-fade-up">
              <div 
                className="absolute left-3 md:left-5 top-1.5 w-6 h-6 rounded-full flex items-center justify-center border"
                style={{
                  background: '#0C0C1A',
                  borderColor: '#00E5FF',
                  color: '#00E5FF'
                }}
              >
                <Briefcase size={12} />
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-white">{job.role}</h3>
                    <p className="text-sm font-mono" style={{ color: '#00E5FF' }}>{job.company}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{job.period}</span>
                </div>
                
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 3: Mount in App.tsx
1. Open `src/app/App.tsx`.
2. Import the new component:
   ```typescript
   import { Experience } from '../sections/Experience';
   ```
3. Place `<Experience />` inside the render body between `<About />` and `<Projects />` (around lines 233-235).

---

## Verification Criteria
1. Run local dev server.
2. Verify that "EXPERIENCIA" / "EXPERIENCE" navigation item appears on the top navbar.
3. Click the navigation item: verify the viewport smoothly scrolls to the timeline.
4. Verify that formatting (alignment, timeline lines, bullet points) displays correctly on desktop, tablet, and mobile dimensions.
