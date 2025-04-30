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
            bg: "#faf0e6",
            text: "#3e2723",
            accent: "#d4af37",
            link: "#8b5e3c",
          },
          dark: {
            bg: "#2a1a1f",
            text: "#f5e1a4",
            accent: "#7a4b1e",
            link: "#6f4f33",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
