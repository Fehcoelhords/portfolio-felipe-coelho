import { useState, useEffect } from "react";

// O texto a ser digitado. Troque "Felipe Rodrigues" pelo seu nome.
const bootText =
  "Acesso autorizado. Bem-vindo(a) ao meu Portfólio profissional. Eu sou Felipe Coelho, Sinta-se à vontade para explorar os sistemas no painel lateral";
const bootDelay = 40; // Milissegundos entre cada letra

function BootScreen({ onBootComplete }) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Toca o som de inicialização
    const audio = new Audio("/sfx/boot.mp3");
    audio.volume = 0.3; // Ajuste o volume se necessário
    audio
      .play()
      .catch(() =>
        console.warn(
          "A reprodução automática de áudio foi bloqueada pelo navegador."
        )
      );

    // Inicia a animação de digitação
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < bootText.length) {
        setText((prevText) => prevText + bootText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        // Deixa o cursor piscar mais um pouco antes de sumir
        setTimeout(() => {
          setShowCursor(false);
          // Aguarda um pouco antes de chamar a função para concluir o boot
          setTimeout(onBootComplete, 1200);
        }, 800);
      }
    }, bootDelay);

    // Efeito de piscar o cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [onBootComplete]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 font-audiowide text-neon-green p-4">
      <p className="text-lg md:text-2xl text-center whitespace-pre-wrap">
        {text}
        {showCursor && <span className="animate-pulse">_</span>}
      </p>
    </div>
  );
}

export default BootScreen;
