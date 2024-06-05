/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lexend Deca", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#245EE9",
        "secondary": "#BA44D8",
        "tertiary": "#001A44",
        "highlight": "#5582EE",
        "dblue": "#001A44",
        "c1b": "#DDE7FF",
        "abu": "#EBEBEB",
      },
      boxShadow: {
        "s1": '0 8px 10px rgba(0, 0, 0, 0.1)',
        "s2": '4px 4px 6px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'g1': 'linear-gradient(to bottom, #BA44B8, #245EE9)',
      },
    },
  },
  plugins: [],
}

