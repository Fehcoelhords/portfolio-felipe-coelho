import {
  HomeIcon,
  UserIcon,
  RectangleStackIcon,
  CommandLineIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useSound } from "../hooks/useSound";

const navItems = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "Identificação", icon: UserIcon },
  { name: "Missões", icon: RectangleStackIcon },
  { name: "Painel Técnico", icon: CommandLineIcon },
  { name: "Transmissão", icon: EnvelopeIcon },
];

// 1. Recebendo as novas props (isFirstLoad, setIsFirstLoad)
function Sidebar({ activePage, setActivePage, isFirstLoad, setIsFirstLoad }) {
  const playClickSound = useSound("/sfx/click.mp3", { volume: 0.2 });

  const handleNavClick = (pageName) => {
    playClickSound();
    setActivePage(pageName);
    // 2. Desliga a animação de pulso no primeiro clique
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-16 md:w-20 bg-glass-bg border-r border-neon-blue/20 backdrop-blur-md z-20 flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-neon-blue bg-deep-blue flex items-center justify-center">
          <span className="font-bold text-neon-blue">FR</span>
        </div>
      </div>
      <nav className="flex flex-col items-center gap-y-4">
        {navItems.map((item) => {
          const isActive = activePage === item.name;
          // 3. Adiciona a classe de animação se for a primeira visita e o botão não estiver ativo
          const pulseClass =
            isFirstLoad && !isActive && item.name !== "Dashboard"
              ? "animate-pulse-icon-initial"
              : "";

          return (
            <button
              key={item.name}
              aria-label={item.name}
              onClick={() => handleNavClick(item.name)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-neon-blue/20 text-neon-blue shadow-neon-blue"
                  : "text-gray-400 hover:bg-neon-blue/10 hover:text-neon-blue"
              } ${pulseClass}`} // 4. Aplica a classe de animação aqui
            >
              <item.icon className="w-6 h-6 md:w-7 md:h-7" />
              <span className="absolute left-full ml-4 px-2 py-1 bg-deep-blue text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
