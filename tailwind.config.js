/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        apper: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        disapper: {
          "0%": {opacity: 1},
          "100%": {opacity:0},
        }
      },
      animation:{
        apper: "appear 0.5s ease",
        // disapper: "disappear 32 ease 0s 1 forwards"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
