/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary1': 'rgb(12,10,9)', //stone-950
        'primary2': 'rgb(231, 229, 228)', //stone-300
        'secondary1': '#A0A0A0',
        'secondary2': '#c0c0c0',
        'accent1': 'hsla(287, 90%, 25%, 1)',
        'accent2': '#030104',
        'accent3': 'hsla(287, 100%, 52%, 1)',
      }
    },
  },
  plugins: [],
}
