import { ChevronRight } from "lucide-react";
import { PROJECTS } from "../../data/constants";

export function ProjectCard({ project, onClick }: { project: typeof PROJECTS[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ border: "1px solid rgba(0,229,255,0.12)", background: "#0C0C1A" }}
    >
      <div className="h-44 overflow-hidden relative">
        <img
          src={project.img} alt={project.title}
          className="w-full h-full object-cover opacity-50 transition-all duration-500 group-hover:opacity-70 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C0C1A 10%, transparent 60%)" }} />
        <div className="absolute top-3 right-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{
            background: project.status === "production" ? "rgba(0,255,128,0.15)" : "rgba(255,200,0,0.15)",
            color: project.status === "production" ? "#00FF80" : "#FFD700",
            border: `1px solid ${project.status === "production" ? "rgba(0,255,128,0.3)" : "rgba(255,200,0,0.3)"}`,
          }}>
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg" style={{ fontFamily: "'Exo 2', sans-serif" }}>{project.title}</h3>
          <span className="text-xs font-mono flex-shrink-0" style={{ color: "#64748B" }}>{project.year}</span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{project.description}</p>
        {"collaboration" in project && project.collaboration && (
          <div className="text-[10px] font-mono py-0.5" style={{ color: project.accent }}>🤝 {project.collaboration as string}</div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-xs font-mono px-2 py-0.5 rounded" style={{
              background: project.accent + "18", color: project.accent,
              border: `1px solid ${project.accent}30`,
            }}>{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-mono px-1.5 py-0.5" style={{ color: "#64748B" }}>+{project.tech.length - 4}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono pt-1" style={{ color: project.accent }}>
          <span>Ver detalles</span>
          <ChevronRight size={12} />
        </div>
      </div>
    </button>
  );
}
