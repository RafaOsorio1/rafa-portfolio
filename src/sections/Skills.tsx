import { SectionLabel } from "../components/ui/SectionLabel";
import { SKILLS_DATA } from "../data/constants";
import { useLanguage } from "../context/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text={t('skills.label')} />
        <h2 className="mt-4 text-3xl font-black" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          {t('skills.title')}
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.category} className="rounded-xl p-6 space-y-4" style={{ border: "1px solid rgba(0,229,255,0.1)", background: "rgba(0,229,255,0.02)" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "#64748B" }}>{skill.category}</span>
                <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})` }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item.name} className="flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded" style={{ background: skill.color + "14", color: skill.color, border: `1px solid ${skill.color}25` }}>
                    {item.icon && <img src={item.icon} alt={item.name} className="w-3.5 h-3.5" style={{ filter: item.name === 'Express' || item.name === 'GitHub' ? 'invert(1)' : 'none' }} />}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
