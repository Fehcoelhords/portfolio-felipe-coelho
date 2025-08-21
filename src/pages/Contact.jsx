// src/pages/Contact.jsx
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Contact() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-neon-blue text-glow-blue mb-8 text-center">
        CANAL DE TRANSMISSÃO
      </h1>

      {/* Informações de Contato */}
      <div className="max-w-xl mx-auto mb-12 text-center space-y-4">
        <a
          href="mailto:fecoelho00@outlook.com"
          className="flex items-center justify-center text-neon-green hover:text-neon-blue transition-colors"
        >
          <EnvelopeIcon className="w-6 h-6 mr-3" />
          fecoelho00@outlook.com
        </a>
        <a
          href="https://wa.me/5511964055230"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-neon-green hover:text-neon-blue transition-colors"
        >
          <PhoneIcon className="w-6 h-6 mr-3" />
          (11) 96405-5230 (WhatsApp)
        </a>
        <div className="flex items-center justify-center text-gray-400">
          <MapPinIcon className="w-6 h-6 mr-3" />
          Jardim Germânia - São Paulo - SP
        </div>
      </div>

      <form className="max-w-xl mx-auto space-y-6 px-4">
        {/* ... (o código do formulário não muda) ... */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neon-green mb-1 text-left"
          >
            Identificação (Nome)
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full bg-deep-blue/50 border-2 border-neon-blue/30 rounded-md shadow-sm text-white focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-space transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neon-green mb-1 text-left"
          >
            Frequência (E-mail)
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full bg-deep-blue/50 border-2 border-neon-blue/30 rounded-md shadow-sm text-white focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-space transition"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neon-green mb-1 text-left"
          >
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full bg-deep-blue/50 border-2 border-neon-blue/30 rounded-md shadow-sm text-white focus:border-neon-blue focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-space transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-neon-green/80 text-dark-space font-bold py-3 rounded-lg shadow-neon-green hover:bg-neon-green transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-dark-space"
        >
          ENVIAR TRANSMISSÃO
        </button>
      </form>
    </div>
  );
}
export default Contact;
