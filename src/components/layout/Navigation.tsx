import { NAV_ITEMS, KONAMI } from '../../data/constants';
import { useLanguage } from '../../context/LanguageContext';

interface NavigationProps {
  activeSection: string;
  handleLogoClick: () => void;
  konamiProgress: number;
}

export function Navigation({ activeSection, handleLogoClick, konamiProgress }: NavigationProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: 'rgba(6,6,14,0.85)',
        borderBottom: '1px solid rgba(0,229,255,0.1)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="font-mono text-sm font-bold tracking-widest hover:opacity-80 transition-opacity select-none"
          style={{ color: '#00E5FF' }}
        >
          &lt;DEV /&gt;
        </button>

        {/* Konami dots progress */}
        {konamiProgress > 0 && (
          <div className="hidden md:flex gap-1 absolute left-1/2 -translate-x-1/2">
            {KONAMI.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i < konamiProgress ? '#00E5FF' : 'rgba(0,229,255,0.15)' }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className="font-mono text-xs tracking-wider transition-all duration-200 hover:opacity-100 uppercase"
                  style={{ color: isActive ? '#00E5FF' : '#64748B' }}
                >
                  {isActive && <span style={{ color: '#FF003C' }}>{'>'} </span>}
                  {t(item.key)}
                </a>
              );
            })}
          </div>

          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded text-xs font-mono font-bold transition-colors uppercase"
            style={{
              background: 'rgba(0, 229, 255, 0.1)',
              color: '#00E5FF',
              border: '1px solid rgba(0, 229, 255, 0.2)',
            }}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </nav>
  );
}
