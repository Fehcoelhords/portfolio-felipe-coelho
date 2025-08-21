function HUDOverlay() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20">
      {/* Cantos da interface */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-neon-blue/50 rounded-tl-lg"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-blue/50 rounded-tr-lg"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-neon-blue/50 rounded-bl-lg"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-neon-blue/50 rounded-br-lg"></div>

      {/* Linha de scan sutil (animaremos depois) */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"></div>
    </div>
  );
}

export default HUDOverlay;
