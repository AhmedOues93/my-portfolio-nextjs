// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // (Clean. No extra animations that caused crashes)
    },
  },
  plugins: [],
};

export default config;
