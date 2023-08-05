/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-button": "#0095F6",
        "facebook-logo": "#385185",
        "ig-link": "#00376B",
      },
      animation: {
        opacity: "opacity 12s ease-in-out infinite",
      },
      keyframes: {
        opacity: {
          "0% , 100%": { opacity: 0, zIndex: 10 },
          "8% , 32%": { opacity: 1 },
          "40%": { opacity: 0 },
        },
      },
      transitionDelay: {
        '4s': '4s',
        "8s": "8s",
        "12s": "12s",
      }
    },
    backgroundPosition: {
      logo: "0px -47px",
    },
  },
  plugins: [],
};
