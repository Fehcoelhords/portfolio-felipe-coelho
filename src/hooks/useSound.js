import { useCallback } from "react";

// Hook customizado para tocar sons de forma simples
export const useSound = (soundPath, options = { volume: 0.25 }) => {
  const play = useCallback(() => {
    try {
      const audio = new Audio(soundPath);
      audio.volume = options.volume;
      audio.play();
    } catch (e) {
      console.error(`Não foi possível tocar o som: ${soundPath}`, e);
    }
  }, [soundPath, options.volume]);

  return play;
};
