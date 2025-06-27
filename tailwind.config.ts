import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f4",
          100: "#dcf4e8",
          500: "#4c745f",
          600: "#3d5f4c",
          700: "#2f4a3a",
        },
        secondary: {
          500: "#6b8e23",
        },
        accent: {
          500: "#f4a261",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
} satisfies Config;
