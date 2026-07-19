import { SectionLabel } from '../components/ui/SectionLabel';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const { t, language } = useLanguage();

  const langKey = language as keyof typeof translations;
  const currentLang = translations[langKey] || translations.en;
  const jobs = currentLang.experience_data?.jobs || [];

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text={t('experience_data.label') || 'experiencia'} />
        <h2
          className="mt-4 text-3xl font-black mb-12"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          {t('experience_data.title') || 'Trayectoria Profesional'}
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:md:left-8 before:w-0.5 before:bg-slate-800">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="relative pl-14 md:pl-20 animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div
                className="absolute left-3 md:left-5 top-1.5 w-6 h-6 rounded-full flex items-center justify-center border"
                style={{
                  background: '#0C0C1A',
                  borderColor: '#00E5FF',
                  color: '#00E5FF',
                }}
              >
                <Briefcase size={12} />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-white">{job.role}</h3>
                    <p className="text-sm font-mono" style={{ color: '#00E5FF' }}>
                      {job.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{job.period}</span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bullet}
                    </li>
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
