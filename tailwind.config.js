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
          DEFAULT: '#1A1A1A', // Negro casi puro para fondos
          dark: '#0F0F0F',
          light: '#2D2D2D',
        },
        secondary: {
          DEFAULT: '#333333', // Gris muy oscuro
          dark: '#252525',
          light: '#444444',
        },
        accent: {
          DEFAULT: '#D4AF37', // Dorado real
          dark: '#996515', // Dorado oscuro
          light: '#FFD700', // Gold - Dorado puro
        },
        'dark': '#121212',
        'dark-lighter': '#1E1E1E',
        'dark-darker': '#0A0A0A',
        'light': '#F8F7F1',
        'gold': {
          DEFAULT: '#D6A520', // Dorado principal (metálico brillante)
          'bright': '#FFD700', // Dorado brillante (más amarillo)
          'deep': '#B8860B', // Dorado profundo (más naranja)
          'metallic': 'linear-gradient(to right, #B8860B, #FFD700, #B8860B)', // Gradiente metálico
          'light': '#FFDC73', // Dorado claro (reflejos)
          'dark': '#996515', // Dorado oscuro (sombras)
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(212, 175, 55, 0.2)',
        'gold': '0 4px 12px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 8px 24px rgba(212, 175, 55, 0.4)',
        'gold-inner': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.5)', // Brillo dorado más intenso
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #B8860B, #FFD700, #B8860B)',
        'gold-metallic': 'linear-gradient(135deg, #0A0A0A, #1E1E1E 30%, #1E1E1E 70%, #0A0A0A), linear-gradient(to right, #996515, #FFD700, #D4AF37)',
        'dark-gradient': 'linear-gradient(to bottom, #0A0A0A, #121212)',
      },
      animation: {
        'gold-pulse': 'goldPulse 2s infinite',
        'gold-shimmer': 'goldShimmer 2s infinite',
      },
      keyframes: {
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(212, 175, 55, 0)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' },
        },
        goldShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
    },
  },
  plugins: [],
}