import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Hologram from "../three/Hologram";

function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-neon-blue text-glow-blue">
        PORTFÓLIO PROFISSIONAL | FELIPE COELHO
      </h1>
      <h2 className="text-lg md:text-xl font-audiowide text-gray-300 mt-2">
        Desenvolvedor Full-Stack | Python, IA, Automação & Aplicações Web
        Responsivas
      </h2>
      <p className="mt-2 text-gray-300 mb-8">
        Status: <span className="text-neon-green">Online</span>
      </p>

      <div className="w-full h-64 md:h-80">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Hologram />
          </Suspense>
        </Canvas>
      </div>

      <div className="mt-8 p-4 border-2 border-neon-blue/20 rounded-lg bg-deep-blue/30 max-w-lg animate-pulse-slow">
        <p className="text-gray-300">
          Bem-vindo, visitante. Utilize o painel de navegação à esquerda para
          explorar meus
          <span className="text-neon-green font-bold">
            {" "}
            Arquivos de Projetos
          </span>
          ,
          <span className="text-neon-green font-bold">
            {" "}
            Painel de Habilidades
          </span>{" "}
          e<span className="text-neon-green font-bold"> Canais de Contato</span>
          .
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
