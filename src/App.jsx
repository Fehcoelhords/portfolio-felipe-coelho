import { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Sidebar from "./components/Sidebar";
import HUDOverlay from "./components/HUDOverlay";
import StarfieldCanvas from "./components/StarfieldCanvas";
import BootScreen from "./components/BootScreen";

// Importe as páginas
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  const [booting, setBooting] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");
  const [isFirstLoad, setIsFirstLoad] = useState(true); // 1. Adicionado para controlar a animação da sidebar

  useLayoutEffect(() => {
    if (!booting) {
      gsap.fromTo(
        "#page-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activePage, booting]);

  const renderPage = () => {
    return (
      <div id="page-content">
        {(() => {
          switch (activePage) {
            case "Dashboard":
              return <Dashboard />;
            case "Identificação":
              return <About />;
            case "Missões":
              return <Projects />;
            case "Painel Técnico":
              return <Skills />;
            case "Transmissão":
              return <Contact />;
            default:
              return <Dashboard />;
          }
        })()}
      </div>
    );
  };

  return (
    <div className="min-h-screen font-orbitron text-gray-200">
      <StarfieldCanvas />
      <HUDOverlay />

      {booting ? (
        <BootScreen onBootComplete={() => setBooting(false)} />
      ) : (
        <div className="relative z-10 flex animate-fade-in">
          {/* 2. Passando as novas props para a Sidebar */}
          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            isFirstLoad={isFirstLoad}
            setIsFirstLoad={setIsFirstLoad}
          />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 ml-16 md:ml-20">
            {renderPage()}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
