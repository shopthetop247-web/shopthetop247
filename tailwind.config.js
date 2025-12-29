/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1F2937',
          secondary: '#1F2937', // dark slate fallback
          accent: '#65A653',
          muted: '#D9D0BF', // muted text
          background: '#F2D8A7' //light yellow  
        }
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#059c0f',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s ease-in-out',
              position: 'relative',
            },
            'a:hover': {
              color: '#d96304',
            },
            'a::after': {
              content: '""',
              position: 'absolute',
              left: '0',
              bottom: '-2px',
              width: '100%',
              height: '2px',
              backgroundColor: '#F27405',
              transform: 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.2s ease-in-out',
            },
            'a:hover::after': {
              transform: 'scaleX(1)',
              transformOrigin: 'left',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
