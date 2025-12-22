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
          primary: "#1F2937",   // Main brand Text Dark Slate
          secondary: "#1F2937", // Dark slate (headers, footer)
          accent: "#F2D8A7",    // Muted Yellow (links, highlights)
          muted: "#6B7280",     // Muted text
          background: "#F2D8A7" // Light background
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
