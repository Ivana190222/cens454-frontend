/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Índigo elegante
          dark: '#3730A3',
          light: '#818CF8',
        },
        secondary: {
          DEFAULT: '#06B6D4', // Cian moderno
          dark: '#0E7490',
          light: '#67E8F9',
        },
        accent: {
          DEFAULT: '#EC4899', // Rosa vibrante
          dark: '#BE185D',
          light: '#F9A8D4',
        },
        dark: {
          DEFAULT: '#334155', // Slate oscuro
          darker: '#1E293B',
        },
        light: {
          DEFAULT: '#F8FAFC', // Slate claro
          darker: '#F1F5F9',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}