import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Hologram() {
  const meshRef = useRef();

  // O hook useFrame executa essa função em cada quadro (frame) da animação
  useFrame((state, delta) => {
    // Rotaciona o holograma lentamente
    meshRef.current.rotation.x += delta * 0.9;
    meshRef.current.rotation.y += delta * 0.6;
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      {/* Usamos uma geometria de Torus (rosquinha) para o holograma */}
      <torusGeometry args={[1, 0.3, 16, 100]} />

      {/* O material define a aparência. 'wireframe' cria o efeito de holograma */}
      <meshStandardMaterial
        wireframe
        color="#00f6ff"
        emissive="#00f6ff" // Cor de emissão para o efeito de brilho neon
        emissiveIntensity={2} // Intensidade do brilho
      />
    </mesh>
  );
}

export default Hologram;
