import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";

export function Hero() {
  const { t } = useLanguage();

  const typewriterText = [
    t('hero.tw1') || "Desarrollador Full-Stack.",
    t('hero.tw2') || "Gamer de corazón.",
    t('hero.tw3') || "Fan de la Fórmula 1.",
    t('hero.tw4') || "Amante del buen cine.",
    t('hero.tw5') || "Papá de Roxy, Nova y Sooky."
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = typewriterText[heroIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && typedText === text) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setHeroIndex((i) => (i + 1) % typewriterText.length);
    } else {
      timeout = setTimeout(() => {
        setTypedText(isDeleting ? text.slice(0, typedText.length - 1) : text.slice(0, typedText.length + 1));
      }, isDeleting ? 45 : 75);
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, heroIndex, typewriterText]);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative pt-14 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        <div className="inline-flex items-center gap-2.5 font-mono text-xs px-4 py-1.5 rounded-full" style={{
          border: "1px solid rgba(0,229,255,0.25)",
          color: "#00E5FF",
          background: "rgba(0,229,255,0.06)",
        }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          sistema_online · v2.0.{new Date().getFullYear()}
        </div>

        <div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.95]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            {t('hero.hello')}<br />
            <span className="relative inline-block" style={{ color: "#00E5FF" }}>
              Rafael Rodelo
              <span className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#00E5FF,transparent)" }} />
            </span>
          </h1>

          <div className="mt-5 h-9 flex items-center justify-center">
            <span className="font-mono text-lg sm:text-2xl" style={{ color: "#94A3B8" }}>
              {typedText}
              <span className="animate-pulse" style={{ color: "#00E5FF" }}>|</span>
            </span>
          </div>
        </div>
        <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "#94A3B8" }}>
          {t('hero.tagline')}
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a href="#projects" className="px-6 py-2.5 rounded font-mono text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.03]" style={{ background: "#00E5FF", color: "#06060E" }}>
            ver_proyectos()
          </a>
          <a href="#contact" className="px-6 py-2.5 rounded font-mono text-sm font-bold transition-all hover:opacity-70" style={{ border: "1px solid rgba(0,229,255,0.35)", color: "#00E5FF" }}>
            contactar()
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          {([
            { icon: Github, href: "https://github.com/RafaOsorio1", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/rafael-rodelo-osorio-90b605262/", label: "LinkedIn" },
            { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=hi@rafaosorio.dev", label: "Email" },
          ] as const).map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110 hover:border-[rgba(0,229,255,0.4)]"
              style={{ border: "1px solid rgba(0,229,255,0.15)", color: "#64748B" }}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ color: "#64748B" }}>
        <ChevronRight size={14} className="rotate-90" />
        <span className="font-mono text-xs">scroll</span>
      </div>
    </section>
  );
}
