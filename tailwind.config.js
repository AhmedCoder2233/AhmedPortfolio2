/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0a0f",
        void: "#060608",
        acid: "#00ff88",
        neon: "#00e5ff",
        lava: "#ff4d00",
        gold: "#ffd700",
      },
      fontFamily: {
        display: ["'Orbitron'", "monospace"],
        body: ["'Rajdhani'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { textShadow: "0 0 10px #00ff88, 0 0 20px #00ff88" },
          "100%": { textShadow: "0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88" },
        },
      },
    },
  },
  plugins: [],
};
