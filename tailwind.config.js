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
          secondary: "#d9d0bf", // Dark slate (headers, footer)
          accent: "#65A653",    // Darker Green (links, highlights)
          muted: "#6B7280",     // Muted text
          background: "#F2D8A7" // Light Yellow
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
