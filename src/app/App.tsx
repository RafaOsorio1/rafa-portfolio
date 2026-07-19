import { useState, useEffect, useRef } from 'react';
import { KONAMI } from '../data/constants';

import { Navigation } from '../components/layout/Navigation';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { Interests } from '../sections/Interests';
import { Contact } from '../sections/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [konamiActivated, setKonamiActivated] = useState(false);

  const [logoClicks, setLogoClicks] = useState(0);
  const [raceCarActive, setRaceCarActive] = useState(false);
  const [sudoActive, setSudoActive] = useState(false);


  const sudoBufferRef = useRef('');

  // Easter egg effects (Console, Konami, Sudo)
  useEffect(() => {
    console.log(
      '%c\n  ██████╗ ███████╗██╗   ██╗\n  ██╔══██╗██╔════╝██║   ██║\n  ██║  ██║█████╗  ██║   ██║\n  ██║  ██║██╔══╝  ╚██╗ ██╔╝\n  ██████╔╝███████╗ ╚████╔╝\n  ╚═════╝ ╚══════╝  ╚═══╝\n\n',
      'color:#00E5FF;font-family:monospace'
    );
    console.log('%c🏎️  MODO DEV ACTIVADO', 'color:#FF003C;font-size:16px;font-weight:bold');
    console.log(
      '%c¿Encontraste este easter egg? Prueba el código Konami en la página: ↑↑↓↓←→←→BA',
      'color:#FFD700'
    );
    console.log('%cO haz clic en el logo 5 veces... 👀', 'color:#94A3B8');
    console.log('%cO escribe "sudo" en cualquier parte... 🤫', 'color:#64748B;font-size:11px');
  }, []);

  useEffect(() => {
    let progress = 0;
    const handleKey = (e: KeyboardEvent) => {
      // Sudo easter egg
      sudoBufferRef.current += e.key.length === 1 ? e.key : '';
      if (sudoBufferRef.current.slice(-4) === 'sudo') {
        setSudoActive(true);
        sudoBufferRef.current = '';
        setTimeout(() => setSudoActive(false), 4000);
      }
      if (sudoBufferRef.current.length > 20)
        sudoBufferRef.current = sudoBufferRef.current.slice(-10);

      // Konami
      if (e.key === KONAMI[progress]) {
        progress++;
        setKonamiProgress(progress);
        if (progress === KONAMI.length) {
          setKonamiActivated(true);
          progress = 0;
          setKonamiProgress(0);
        }
      } else {
        progress = e.key === KONAMI[0] ? 1 : 0;
        setKonamiProgress(progress);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Section observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleLogoClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      setRaceCarActive(true);
      setLogoClicks(0);
      setTimeout(() => setRaceCarActive(false), 3500);
    }
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @keyframes racecar { from { left: -80px; } to { left: calc(100% + 80px); } }
        @keyframes glitch {
          0%,100% { clip-path: inset(0 0 100% 0); } 20% { clip-path: inset(33% 0 33% 0); transform: translateX(-4px); }
          40% { clip-path: inset(66% 0 10% 0); transform: translateX(4px); } 60% { clip-path: inset(10% 0 66% 0); }
        }
        @keyframes scanline { from { top: -10%; } to { top: 110%; } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up { animation: fadeSlideUp 0.6s ease forwards; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.2); border-radius: 2px; }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center top, #00E5FF22 0%, transparent 70%)',
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.018]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)',
        }}
      />

      {raceCarActive && (
        <div
          className="fixed bottom-10 z-[200] text-4xl pointer-events-none"
          style={{ animation: 'racecar 3.2s linear forwards' }}
        >
          🏎️💨
        </div>
      )}

      {konamiActivated && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer"
          style={{ background: 'rgba(0,0,0,0.96)' }}
          onClick={() => setKonamiActivated(false)}
        >
          <div className="text-center space-y-5">
            <div className="text-7xl animate-bounce">🎮</div>
            <div
              className="font-mono text-4xl font-black"
              style={{ color: '#00E5FF', textShadow: '0 0 40px #00E5FF' }}
            >
              CHEAT CODE ACTIVADO
            </div>
            <div className="font-mono text-lg" style={{ color: '#FFD700' }}>
              +30 VIDAS · MODO DIOS · UNLIMITED CAFFEINE
            </div>
            <div className="font-mono text-sm mt-8" style={{ color: '#64748B' }}>
              ↑↑↓↓←→←→BA — Clásico eterno.
            </div>
            <div className="font-mono text-xs" style={{ color: '#2D3748' }}>
              [ click en cualquier parte para cerrar ]
            </div>
          </div>
        </div>
      )}

      {sudoActive && (
        <div
          className="fixed bottom-6 right-6 z-[90] rounded-xl p-4 font-mono text-sm"
          style={{
            background: '#0C0C1A',
            border: '1px solid rgba(0,229,255,0.3)',
            boxShadow: '0 0 30px rgba(0,229,255,0.1)',
          }}
        >
          <div className="mb-2" style={{ color: '#FF003C' }}>
            $ sudo ▮
          </div>
          <div style={{ color: '#00FF80' }}>✓ Acceso root concedido.</div>
          <div style={{ color: '#64748B' }}>...justo como si eso te sirviera de algo aquí 😄</div>
        </div>
      )}

      <Navigation
        activeSection={activeSection}
        handleLogoClick={handleLogoClick}
        konamiProgress={konamiProgress}
      />

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Interests />
      <Contact />
    </div>
  );
}
