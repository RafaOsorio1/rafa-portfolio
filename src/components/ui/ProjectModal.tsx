import { useEffect } from "react";
import { Github, Globe, X } from "lucide-react";
import { PROJECTS } from "../../data/constants";

export function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl"
        style={{ background: "#0C0C1A", border: `1px solid ${project.accent}40` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser chrome */}
        <div className="sticky top-0 z-10 flex items-center gap-2 px-4 py-3" style={{ background: "#0C0C1A", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <button onClick={onClose} className="w-3 h-3 rounded-full hover:opacity-70 transition-opacity" style={{ background: "#FF5F57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
          <div className="flex-1 mx-3 px-3 py-1 rounded text-xs font-mono text-center" style={{ background: "rgba(255,255,255,0.04)", color: "#64748B", border: "1px solid rgba(255,255,255,0.06)" }}>
            {"https://"}{project.title.toLowerCase().replace(/\s/g, "-")}{".dev"}
          </div>
          <button onClick={onClose} className="hover:opacity-70 transition-opacity" style={{ color: "#64748B" }}>
            <X size={14} />
          </button>
        </div>

        {/* Preview image */}
        <div className="relative h-52 overflow-hidden">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C0C1A 5%, transparent 55%)" }} />
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl font-black" style={{ fontFamily: "'Exo 2', sans-serif", color: project.accent }}>{project.title}</h2>
            <div className="text-xs font-mono mt-1" style={{ color: "#64748B" }}>{project.year} · {project.status}</div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {"collaboration" in project && project.collaboration && (
            <div className="inline-block px-3 py-1.5 rounded font-mono text-xs font-bold" style={{ background: project.accent + "20", color: project.accent }}>
              🤝 {project.collaboration as string}
            </div>
          )}
          <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{project.longDesc}</p>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#64748B" }}>Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded text-sm font-mono" style={{
                  background: project.accent + "15", color: project.accent,
                  border: `1px solid ${project.accent}30`,
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-mono font-bold transition-opacity hover:opacity-85"
              style={{ background: project.accent, color: "#06060E" }}
            >
              <Globe size={13} /> Demo
            </a>

            {"demoBack" in project && project.demoBack && (
              <a href={project.demoBack as string} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-mono transition-opacity hover:opacity-70"
                style={{ border: `1px solid ${project.accent}40`, color: project.accent }}
              >
                <Globe size={13} /> API Docs
              </a>
            )}
            
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-mono transition-opacity hover:opacity-70"
                style={{ border: `1px solid ${project.accent}40`, color: project.accent }}
              >
                <Github size={13} /> {!("repoBack" in project) || !project.repoBack ? "Código" : "Frontend"}
              </a>
            )}

            {"repoBack" in project && project.repoBack && (
              <a href={project.repoBack as string} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-mono transition-opacity hover:opacity-70"
                style={{ border: `1px solid ${project.accent}40`, color: project.accent }}
              >
                <Github size={13} /> Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
