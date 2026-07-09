import { useState, useEffect } from "react";
import { SectionLabel } from "../components/ui/SectionLabel";
import { F1_STANDINGS, TEAM_COLORS, GAMES, MOVIES } from "../data/constants";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function F1Tab() {
  const { t } = useLanguage();
  const [standings, setStandings] = useState(F1_STANDINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jolpi.ca/ergast/f1/current/driverStandings.json")
      .then(res => res.json())
      .then(data => {
        const list = data.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0, 5);
        const mapped = list.map((item: any) => {
          const nationality = item.Driver.nationality;
          const flags: Record<string, string> = {
            "Dutch": "🇳🇱", "British": "🇬🇧", "Monegasque": "🇲🇨", "Australian": "🇦🇺",
            "Spanish": "🇪🇸", "French": "🇫🇷", "New Zealander": "🇳🇿", "Argentine": "🇦🇷",
            "Brazilian": "🇧🇷", "Thai": "🇹🇭", "German": "🇩🇪", "Finnish": "🇫🇮",
            "Mexican": "🇲🇽", "Canadian": "🇨🇦", "Italian": "🇮🇹", "American": "🇺🇸",
            "Japanese": "🇯🇵", "Chinese": "🇨🇳", "Danish": "🇩🇰"
          };
          
          let color = "#888";
          const team = item.Constructors[0]?.name || "Unknown";
          if (team.includes("Red Bull")) color = "#3671C6";
          else if (team.includes("McLaren")) color = "#FF8000";
          else if (team.includes("Ferrari")) color = "#E8002D";
          else if (team.includes("Mercedes")) color = "#00D2BE";
          else if (team.includes("Aston Martin")) color = "#006F62";
          else if (team.includes("Cadillac")) color = "#9CA3AF";

          return {
            pos: parseInt(item.position),
            driver: `${item.Driver.givenName} ${item.Driver.familyName}`,
            team: team,
            points: parseInt(item.points),
            flag: flags[nationality] || "🏁",
            fastest: "", // La API de standings no incluye fastest lap
            color: color
          };
        });
        setStandings(mapped);
      })
      .catch(err => {
        console.error("Error fetching F1 data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-mono" style={{ color: "#64748B" }}>{t('interests_section.f1.team') || "Team favorito:"}</span>
        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full" style={{ background: "#9CA3AF22", color: "#9CA3AF", border: "1px solid #9CA3AF40" }}>Cadillac 🛡️</span>
        <span className="text-xs font-mono" style={{ color: "#64748B" }}>{t('interests_section.f1.driver') || "Piloto favorito:"}</span>
        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full" style={{ background: "#10B98122", color: "#10B981", border: "1px solid #10B98140" }}>Checo Pérez #11</span>
      </div>
      <div className="rounded-xl overflow-hidden relative" style={{ border: "1px solid rgba(0,229,255,0.12)" }}>
        <div className="px-5 py-2.5 flex items-center justify-between" style={{ background: "rgba(0,229,255,0.04)", borderBottom: "1px solid rgba(0,229,255,0.08)" }}>
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "#64748B" }}>{t('interests_section.f1.title') || "Clasificación Pilotos 2026"}</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: loading ? "#FFD700" : "#00FF80" }} />
            <span className="text-[10px] font-mono" style={{ color: "#64748B" }}>{loading ? (t('interests_section.f1.syncing') || "syncing...") : (t('interests_section.f1.live') || "live via jolpica-f1")}</span>
          </div>
        </div>
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[2px]" style={{ background: "rgba(12,12,26,0.4)" }}>
              <span className="text-xs font-mono text-[#00E5FF] animate-pulse">{t('interests_section.f1.loading') || "Cargando telemetría..."}</span>
            </div>
          )}
          {standings.map((row: any) => (
            <div key={row.pos} className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors" style={{ borderBottom: "1px solid rgba(0,229,255,0.06)" }}>
              <span className="w-5 text-xs font-mono text-center" style={{ color: row.pos === 1 ? "#FFD700" : "#64748B" }}>{row.pos}</span>
              <div className="w-1 h-7 rounded-full flex-shrink-0" style={{ background: row.color || TEAM_COLORS[row.team] || "#888" }} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold flex items-center gap-2 flex-wrap">
                  <span>{row.flag} {row.driver}</span>
                  {row.driver === "Sergio Pérez" && (
                    <span className="text-xs px-1.5 py-0.5 rounded font-mono" style={{ background: "#10B98122", color: "#10B981", border: "1px solid #10B98140" }}>{t('interests_section.f1.fav') || "⭐ fav"}</span>
                  )}
                </div>
                <div className="text-xs font-mono mt-0.5" style={{ color: "#64748B" }}>{row.team}</div>
              </div>
              <div className="text-xs font-mono hidden sm:block" style={{ color: "#64748B" }}>{row.fastest}</div>
              <div className="text-sm font-bold font-mono w-10 text-right" style={{ color: row.pos === 1 ? "#FFD700" : "#E2E8F0" }}>{row.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GamesTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {GAMES.map((game) => (
        <div key={game.title} className="rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.04)" }}>
          {game.img && (
            <div className="absolute top-0 left-0 w-full h-16 opacity-30 z-0 mask-image-gradient" style={{ maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)" }}>
              <img src={game.img} alt={game.title} className="w-full h-full object-cover blur-sm" />
            </div>
          )}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              {game.img ? (
                <img src={game.img} alt={game.title} className="h-10 rounded shadow-lg" />
              ) : (
                <span className="text-2xl">{game.icon}</span>
              )}
              <span className="text-xs font-mono px-2 py-0.5 rounded-full whitespace-nowrap ml-2" style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}>{game.platform}</span>
            </div>
          <h4 className="font-bold text-sm mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{game.title}</h4>
          <div className="text-xs font-mono mb-3" style={{ color: "#64748B" }}>{game.genre} · {game.hours}</div>
          <div className="flex gap-0.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-1 flex-1 rounded-sm transition-all" style={{ background: i < game.rating ? "#7C3AED" : "rgba(124,58,237,0.15)" }} />
            ))}
          </div>
            <div className="text-xs font-mono mt-2 text-right" style={{ color: "#7C3AED" }}>{game.rating}/10</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MoviesTab() {
  return (
    <div className="space-y-2.5">
      {MOVIES.map((movie, i) => (
        <div key={movie.title} className="flex items-center gap-4 rounded-xl px-4 py-3 hover:-translate-x-0.5 transition-all duration-200" style={{ border: "1px solid rgba(0,229,255,0.1)", background: "rgba(0,229,255,0.02)" }}>
          <span className="text-base font-black w-6 text-center font-mono" style={{ color: i < 3 ? "#FFD700" : "#64748B" }}>{i + 1}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">{movie.title}</div>
            <div className="text-xs font-mono mt-0.5 truncate" style={{ color: "#64748B" }}>{movie.director} · {movie.year} · {movie.genre}</div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star size={11} fill="#FFD700" color="#FFD700" />
            <span className="text-sm font-bold font-mono">{movie.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PetsTab({ activePet, petBubble, onPetClick }: { activePet: string | null; petBubble: string | null; onPetClick: (key: string) => void }) {
  const { t } = useLanguage();
  const pets = [
    {
      key: "dog", name: "Roxy", emoji: "🐕", type: t('interests_section.pets_data.roxy.type') || "Perrita",
      desc: t('interests_section.pets_data.roxy.desc') || "La guardiana de la casa. Energía infinita, amor incondicional. Fan del balón y de los paseos interminables.",
      img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&h=500&fit=crop&auto=format",
      color: "#FF6B35",
      fact: t('interests_section.pets_data.roxy.fact') || "Duerme en tu cama y ni siquiera te pide permiso",
    },
    {
      key: "cat1", name: "Nova", emoji: "🐱", type: t('interests_section.pets_data.nova.type') || "Gata",
      desc: t('interests_section.pets_data.nova.desc') || "La reina del hogar. Experta en interrumpir videollamadas y sentarse justo encima del teclado.",
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=500&fit=crop&auto=format",
      color: "#FFD700",
      fact: t('interests_section.pets_data.nova.fact') || "Sabe exactamente cuándo abres una bolsa de snacks",
    },
    {
      key: "cat2", name: "Sooky", emoji: "🐱", type: t('interests_section.pets_data.sooky.type') || "Gata",
      desc: t('interests_section.pets_data.sooky.desc') || "La traviesa oficial. Especialista en tirar cosas de las mesas y pedir comida a las 3am.",
      img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&h=500&fit=crop&auto=format",
      color: "#C084FC",
      fact: t('interests_section.pets_data.sooky.fact') || "Ha destruido exactamente 3 pares de auriculares",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {pets.map((pet) => (
        <button
          key={pet.key}
          onClick={() => onPetClick(pet.key)}
          className="group text-left rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 relative"
          style={{ border: `1px solid ${pet.color}30`, background: pet.color + "08" }}
        >
          {activePet === pet.key && petBubble && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg" style={{ background: pet.color, color: "#06060E" }}>
              {petBubble}
            </div>
          )}
          <div className="h-48 overflow-hidden">
            <img src={pet.img} alt={pet.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" style={{ transform: "scale(1)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
            />
          </div>
          <div className="p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base" style={{ fontFamily: "'Exo 2', sans-serif", color: pet.color }}>
                {pet.emoji} {pet.name}
              </h3>
              <span className="text-xs font-mono" style={{ color: "#64748B" }}>{pet.type}</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#94A3B8" }}>{pet.desc}</p>
            <div className="text-xs font-mono p-2 rounded" style={{ background: pet.color + "12", color: pet.color + "CC" }}>
              💡 {pet.fact}
            </div>
            <div className="text-xs font-mono text-center pt-1" style={{ color: pet.color + "66" }}>{t('interests_section.pets_data.click') || "[ click para saludar ]"}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

interface InterestsProps {
  activePet: string | null;
  petBubble: string | null;
  handlePetClick: (key: string) => void;
}

export function Interests({ activePet, petBubble, handlePetClick }: InterestsProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"f1" | "games" | "movies" | "pets">("f1");

  return (
    <section id="interests" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text={t('interests_section.label') || "intereses"} />
        <h2 className="mt-4 text-3xl font-black" style={{ fontFamily: "'Exo 2', sans-serif" }}>{t('interests_section.title') || "Fuera del código"}</h2>

        <div className="mt-8 flex gap-2 flex-wrap">
          {([
            { key: "f1", label: `🏎️  ${t('interests_section.tabs.f1') || "Fórmula 1"}`, color: "#FF003C" },
            { key: "games", label: `🎮  ${t('interests_section.tabs.gaming') || "Juegos"}`, color: "#7C3AED" },
            { key: "movies", label: `🎬  ${t('interests_section.tabs.cinema') || "Películas"}`, color: "#00E5FF" },
            { key: "pets", label: `🐾  ${t('interests_section.tabs.pets') || "Mascotas"}`, color: "#FF6B35" },
          ] as const).map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className="px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-200"
                style={{
                  background: isActive ? tab.color + "20" : "transparent",
                  color: isActive ? tab.color : "#64748B",
                  border: `1px solid ${isActive ? tab.color + "40" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          {activeTab === "f1" && <F1Tab />}
          {activeTab === "games" && <GamesTab />}
          {activeTab === "movies" && <MoviesTab />}
          {activeTab === "pets" && <PetsTab activePet={activePet} petBubble={petBubble} onPetClick={handlePetClick} />}
        </div>
      </div>
    </section>
  );
}
