/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F27405",   // Main brand orange
          secondary: "#1F2937", // Dark slate (headers, footer)
          accent: "#2563EB",    // Blue (links, highlights)
          muted: "#6B7280",     // Muted text
          background: "#F9FAFB" // Light background
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
