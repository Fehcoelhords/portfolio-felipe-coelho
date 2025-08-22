import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSound } from "../hooks/useSound";

function Projects() {
  // Agora cada projeto tem um campo 'link'.

  const missions = [
    {
      id: 1,
      name: "Site Corporativo da Omega Recycling Brasil (HTML, CSS, JS, PHP)",
      description:
        "Desenvolvi o site corporativo da Omega Recycling Brasil, empresa de recuperação de plásticos...",
      imageSrc: "/public/images/omega.jpg",
      link: "https://omegarecyclingbrasil.com.br/",
    },

    {
      id: 2,
      name: "Site de Escritório de Advocacia",
      description:
        "Desenvolvi um site responsivo para um advogado autônomo, focado em apresentar serviços e capturar leads qualificados...",
      imageSrc: "/public/images/advogado.jpg",
      link: "https://dr.advdavifelixazevedo.com/?fbclid=PAZXh0bgNhZW0CMTEAAac6V03wpHDGwQG2uAxobS4ecIkv4lYowr7RJM0FU38wBQl69bbnMkg-9eDULg_aem_E7_0zzJJnET4_ip1YIUe4g", // <-- COLOQUE O LINK DO PROJETO AQUI
    },

    {
      id: 3,
      name: "Desenvolvedor Full-Stack (Python, Flask, Integração AI)",
      description:
        "Desenvolvi o OrbitIA, um chatbot com IA que automatiza o agendamento para pequenas empresas...",
      imageSrc: "/public/images/chat.jpg",
      link: "https://github.com/Fehcoelhords/orbitia-chatbot",
    },

    {
      id: 4,
      name: "Bot de insights de mídia social (Python + APIs + IA)",
      description:
        "Desenvolvi uma ferramenta em Python que usa a IA do Google Gemini para analisar o engajamento no Twitter/X...",
      imageSrc: "/public/images/social.jpg",
      link: "https://github.com/Fehcoelhords/social-media-bot",
    },

    {
      id: 5,
      name: "Site de Turismo e Camping Responsivo (Python + Flask)",
      description:
        "Atuei no ciclo completo de desenvolvimento (do design à implantação) de um site para uma empresa de turismo...",
      imageSrc: "/public/images/praia.jpg",
      link: "",
    },
  ];

  const cardsRef = useRef(null);
  const playScanSound = useSound("/sfx/scan.mp3", { volume: 0.3 });

  const handleVerSiteClick = (link) => {
    playScanSound();
    // Abre o link em uma nova aba
    window.open(link, "_blank");
  };

  useEffect(() => {
    const cards = cardsRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-neon-blue text-glow-blue mb-8">
        ARQUIVO DE PROJETOS
      </h1>
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="bg-glass-bg border border-neon-blue/20 rounded-lg p-6 backdrop-blur-xs hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
          >
            <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md border border-neon-blue/30">
              <img
                src={mission.imageSrc}
                alt={`Imagem do projeto ${mission.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-bold text-neon-green mb-2">
                {mission.name}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {mission.description}
              </p>
            </div>

            {/* O botão agora chama a função que abre o link */}
            <button
              onClick={() => handleVerSiteClick(mission.link)}
              disabled={mission.link === "#"}
              className="w-full mt-auto bg-neon-blue/10 text-neon-blue border border-neon-blue py-2 rounded-lg hover:bg-neon-blue hover:text-dark-space font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ACESSAR PROJETO
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
