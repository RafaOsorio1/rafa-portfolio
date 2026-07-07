import { SectionLabel } from "../components/ui/SectionLabel";
import { useLanguage } from "../context/LanguageContext";
import { Send, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [showOptions, setShowOptions] = useState(false);
  const email = "rafaosorio.0815@gmail.com";

  return (
    <>
      <section id="contact" className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <SectionLabel text={t('contact.label')} />
          <h2 className="text-4xl font-black" style={{ fontFamily: "'Exo 2', sans-serif" }}>{t('contact.title')}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
            {t('contact.desc')}
          </p>

          <div className="text-left rounded-xl p-6 font-mono text-sm space-y-3" style={{ border: "1px solid rgba(0,229,255,0.2)", background: "rgba(0,229,255,0.02)" }}>
            <div className="flex gap-3 flex-wrap">
              <span style={{ color: "#FF003C" }}>$</span>
              <span style={{ color: "#64748B" }}>contact --method</span>
              <span style={{ color: "#00E5FF" }}>email</span>
            </div>
            <div className="pl-4 space-y-2" style={{ color: "#64748B" }}>
              <div>→ <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaosorio.0815@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" style={{ color: "#00E5FF" }}>rafaosorio.0815@gmail.com</a></div>
              <div>→ <a href="https://www.linkedin.com/in/rafael-rodelo-osorio-90b605262/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" style={{ color: "#00E5FF" }}>linkedin.com/in/rafael-rodelo</a></div>
              <div>→ <a href="https://github.com/RafaOsorio1" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" style={{ color: "#00E5FF" }}>github.com/RafaOsorio1</a></div>
            </div>
            <div className="flex gap-3 flex-wrap pt-2">
              <span style={{ color: "#FF003C" }}>$</span>
              <span style={{ color: "#64748B" }}>response_time --avg</span>
              <span style={{ color: "#FFD700" }}>{"< 24h"}</span>
            </div>
          </div>

          <div className="relative inline-block mt-4">
            {showOptions && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 rounded-lg overflow-hidden shadow-2xl animate-fade-up z-50 flex flex-col"
                   style={{ background: "#06060E", border: "1px solid rgba(0,229,255,0.2)" }}>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm text-left hover:bg-[rgba(0,229,255,0.1)] transition-colors border-b border-[rgba(255,255,255,0.05)] text-foreground flex items-center gap-2" onClick={() => setShowOptions(false)}>
                  🔴 Gmail
                </a>
                <a href={`https://outlook.live.com/mail/0/deeplink/compose?to=${email}`} target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm text-left hover:bg-[rgba(0,229,255,0.1)] transition-colors border-b border-[rgba(255,255,255,0.05)] text-foreground flex items-center gap-2" onClick={() => setShowOptions(false)}>
                  🔵 Outlook
                </a>
                <a href={`https://compose.mail.yahoo.com/?to=${email}`} target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm text-left hover:bg-[rgba(0,229,255,0.1)] transition-colors border-b border-[rgba(255,255,255,0.05)] text-foreground flex items-center gap-2" onClick={() => setShowOptions(false)}>
                  🟣 Yahoo
                </a>
                <a href={`mailto:${email}`} className="px-4 py-3 text-sm text-left hover:bg-[rgba(0,229,255,0.1)] transition-colors text-foreground flex items-center gap-2" onClick={() => setShowOptions(false)}>
                  💻 Default App
                </a>
              </div>
            )}

            <button 
              onClick={() => setShowOptions(!showOptions)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded font-mono font-bold text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #00E5FF, #0099BB)", color: "#06060E" }}
            >
              {t('contact.btn')} 
              <ChevronDown size={16} className={`transform transition-transform ${showOptions ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid rgba(0,229,255,0.08)" }}>
        <div className="max-w-6xl mx-auto space-y-1">
          <p className="font-mono text-xs" style={{ color: "#2D3748" }}>{t('contact.footer')} · {new Date().getFullYear()}</p>
          <p className="font-mono text-xs" style={{ color: "#1A2030" }}>
            Psst... try the Konami code 🎮 or type sudo...
          </p>
        </div>
      </footer>
    </>
  );
}
