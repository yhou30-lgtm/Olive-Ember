import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E7",
        sand: "#ECE4D3",
        charcoal: "#1D1B19",
        olive: { DEFAULT: "#5F6540", soft: "#B9BE96" }, // DEFAULT 5.5:1 on cream, soft 8.9:1 on charcoal
        ember: { DEFAULT: "#A3482A", glow: "#E08A57" }, // small flame accents only
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
};
export default config;
