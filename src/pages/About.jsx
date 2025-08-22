// src/pages/About.jsx
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

function About() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-neon-blue text-glow-blue mb-8 text-center md:text-left">
        Objetivo de Carreira
      </h1>

      {/* Seção Principal */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
        <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
          <div className="absolute inset-0 bg-neon-blue/10 rounded-full animate-pulse"></div>
          {/* IMPORTANTE: Coloque sua foto em 'public/assets/avatar.jpg' ou altere o caminho aqui */}
          <img
            src="public/images/foto01.jpg"
            className="relative w-full h-full rounded-full border-2 border-neon-blue p-1 object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-audiowide text-white mb-2">
            Felipe Coelho Rodrigues da Silva
          </h2>
          <p className="text-lg text-gray-300">
            Desenvolvedor Full-Stack em formação, com experiência prática em
            projetos freelancer, focado na criação de aplicações web responsivas
            com backend em Python/Flask, frontend em HTML/CSS/JS (Bootstrap,
            React e Tailwind CSS) e APIs REST. Possuo conhecimento em princípios
            de segurança da informação (XSS, Phishing, SQL Injection, LGPD), o
            que contribui para o desenvolvimento de soluções mais robustas e
            seguras. Busco minha primeira oportunidade de emprego (CLT) para
            aplicar e expandir minhas habilidades em uma equipe dinâmica,
            contribuindo para a inovação e o sucesso de projetos.
          </p>
        </div>
      </div>

      {/* Seções Adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formação Acadêmica */}
        <div>
          <h3 className="flex items-center text-2xl font-audiowide text-neon-green mb-4">
            <AcademicCapIcon className="w-8 h-8 mr-3" />
            Formação Acadêmica
          </h3>
          <div className="bg-deep-blue/50 p-6 rounded-lg border border-neon-green/20">
            <p className="font-bold text-white text-lg">
              Tecnólogo em Análise e Desenvolvimento de Sistemas
            </p>
            <p className="text-gray-400">UNINOVE – São Paulo</p>
            <p className="text-gray-400">
              3º Semestre | Conclusão prevista: 06/2026
            </p>
          </div>
        </div>

        {/* Cursos e Certificações */}
        <div>
          <h3 className="flex items-center text-2xl font-audiowide text-neon-green mb-4">
            <SparklesIcon className="w-8 h-8 mr-3" />
            Cursos e Certificações
          </h3>
          <ul className="bg-deep-blue/50 p-6 rounded-lg border border-neon-green/20 list-disc list-inside text-gray-300 space-y-2">
            <li>Desenvolvimento Web Completo (Udemy)</li>
            <li>Cyber Security Completo (Udemy)</li>
            <li>JavaScript, jQuery, Ajax & Json (Udemy)</li>
            <li>Segurança da Informação (Fundação Bradesco)</li>
            <li>Python 3 Completo (Udemy - em andamento)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
