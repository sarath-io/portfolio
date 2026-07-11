/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        board: {
          DEFAULT: "#0A1410",
          panel: "#102019",
          line: "#1C3226",
        },
        copper: {
          DEFAULT: "#C87F4A",
          bright: "#E8A868",
        },
        signal: {
          DEFAULT: "#6EE7B7",
          dim: "#3F8C6E",
        },
        ink: {
          DEFAULT: "#EDF6F1",
          muted: "#7C9184",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(200,127,74,0) 0%, rgba(28,50,38,0.6) 100%)",
      },
    },
  },
  plugins: [],
};
