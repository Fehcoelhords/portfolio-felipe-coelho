// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-space": "#0a0f1e",
        "deep-blue": "#1a2035",
        "glass-bg": "rgba(26, 32, 53, 0.6)",
        "neon-blue": "#00f6ff",
        "neon-green": "#39ff14",
        "neon-purple": "#bc13fe",
        "neon-red": "#ff073a",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
      },
      boxShadow: {
        "neon-blue": "0 0 5px #00f6ff, 0 0 10px #00f6ff, 0 0 20px #00f6ff",
        "neon-green": "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
