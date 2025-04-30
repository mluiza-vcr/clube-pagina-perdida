import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: ["EB Garamond", "serif"],
        mono: ['"Roboto Mono"', "Courier", "monospace"],
      },
      colors: {
        poetic: {
          light: {
            bg: "#faf0e6", // Bege claro, páginas envelhecidas
            text: "#3e2723", // Marrom escuro, tinta de pena
            accent: "#d4af37", // Dourado envelhecido
            link: "#8b5e3c", // Marrom queimado, capa de couro
          },
          dark: {
            bg: "#2a1a1f", // Marrom profundo, madeira escura
            text: "#f5e1a4", // Creme, páginas amarelecidas
            accent: "#7a4b1e", // Dourado suave, ouro gasto
            link: "#6f4f33", // Marrom escuro com toque de vermelho
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
