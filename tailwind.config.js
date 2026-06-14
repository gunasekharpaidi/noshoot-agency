/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0C0C0C',
          white: '#F8F7F3',
          red:   '#E8300A',
          muted: '#8A8A82',
          card:  '#EDECE8',
        },
      },
      fontFamily: {
        condensed: ['var(--font-barlow)', 'sans-serif'],
        sans:      ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
