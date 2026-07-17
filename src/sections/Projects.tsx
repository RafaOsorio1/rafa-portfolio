import { SectionLabel } from '../components/ui/SectionLabel';
import { ProjectCard } from '../components/ui/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from '../components/ui/ProjectModal';
import { getProjects } from '../data/constants';
import { useState } from 'react';

export function Projects() {
  const { t } = useLanguage();
  const PROJECTS = getProjects(t);
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text={t('projects.label')} />
          <div className="mt-4 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              {t('projects.title')}
            </h2>
            <span className="text-xs font-mono hidden sm:block" style={{ color: '#64748B' }}>
              click → preview inline
            </span>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
