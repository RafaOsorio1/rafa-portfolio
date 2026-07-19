import { SectionLabel } from '../components/ui/SectionLabel';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text={t('about.label')} />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2
              className="text-4xl font-black leading-tight"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              {t('about.title')}
              <br />
              <span style={{ color: '#00E5FF' }}>{t('about.subtitle')}</span>
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: t('about.stats.yoe'), value: '4+ Yoe' },
                { label: t('about.stats.projects'), value: '15+' },
                { label: t('about.stats.coffee'), value: '<150ms' },
                { label: t('about.stats.games'), value: '85%+' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg p-4"
                  style={{
                    border: '1px solid rgba(0,229,255,0.12)',
                    background: 'rgba(0,229,255,0.03)',
                  }}
                >
                  <div
                    className="text-3xl font-black"
                    style={{ fontFamily: "'Exo 2', sans-serif", color: '#00E5FF' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: '#64748B' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: '💻',
                label: t('about.interests.programming.label'),
                sub: t('about.interests.programming.sub'),
                color: '#38BDF8',
              },
              {
                icon: '🏎️',
                label: t('about.interests.f1.label'),
                sub: t('about.interests.f1.sub'),
                color: '#10B981',
              },
              {
                icon: '🎮',
                label: t('about.interests.games.label'),
                sub: t('about.interests.games.sub'),
                color: '#7C3AED',
              },
              {
                icon: '🎬',
                label: t('about.interests.cinema.label'),
                sub: t('about.interests.cinema.sub'),
                color: '#00E5FF',
              },
              {
                icon: '🐾',
                label: t('about.interests.pets.label'),
                sub: t('about.interests.pets.sub'),
                color: '#FF6B35',
              },
            ].map((item) => (
              <div key={item.label} className="group flex items-center gap-4 cursor-default">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ border: `1px solid ${item.color}30`, background: item.color + '12' }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold" style={{ color: item.color }}>
                    {item.label}
                  </div>
                  <div className="text-xs font-mono mt-0.5 truncate" style={{ color: '#64748B' }}>
                    {item.sub}
                  </div>
                </div>
                <div
                  className="h-px transition-all duration-300 w-6 group-hover:w-12 flex-shrink-0"
                  style={{ background: item.color + '50' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
