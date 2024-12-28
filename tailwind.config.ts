import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        dark: "var(--dark)",

      },
    },
  },
  plugins: [],
} satisfies Config;
