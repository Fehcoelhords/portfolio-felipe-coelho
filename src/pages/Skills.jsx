// src/pages/Skills.jsx
function EnergyBar({ skill, level }) {
  // ... (Componente EnergyBar não muda)
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-neon-green">{skill}</span>
        <span className="text-sm font-medium text-neon-green">{level}%</span>
      </div>
      <div className="w-full bg-deep-blue rounded-full h-4 border border-neon-blue/20">
        <div
          className="bg-neon-green h-full rounded-full shadow-neon-green"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  const mainSkills = [
    { name: "Python (Flask, Automação, IA)", level: 90 },
    { name: "JavaScript (React)", level: 85 },
    { name: "HTML5 & CSS3 (Tailwind CSS)", level: 95 },
    { name: "SQL", level: 75 },
    { name: "PHP", level: 70 },
    { name: "Bootstrap", level: 80 },
  ];

  const secondarySkills = [
    { name: "APIs REST & Integrações", level: 85 },
    { name: "Git & GitHub (Versionamento e Deploy)", level: 80 },
    { name: "Design Responsivo (UX/UI)", level: 90 },
    { name: "Segurança da Informação (XSS, SQL Injection)", level: 70 },
  ];

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-neon-blue text-glow-blue mb-8">
        PAINEL TÉCNICO
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <h2 className="text-xl font-audiowide text-neon-green mb-4">
            Linguagens & Frameworks
          </h2>
          {mainSkills.map((skill) => (
            <EnergyBar
              key={skill.name}
              skill={skill.name}
              level={skill.level}
            />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-audiowide text-neon-green mb-4">
            Ferramentas & Conceitos
          </h2>
          {secondarySkills.map((skill) => (
            <EnergyBar
              key={skill.name}
              skill={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
