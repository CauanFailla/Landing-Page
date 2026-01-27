/** @type {import('tailwindcss').Config} */
  
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    colors: {
      bg: "#FFFFFF",
      primary_text: "#0F172A",
      muted_text: "#64748B",
      accent: "#2563EB",
    }
  } },
  plugins: [],
};