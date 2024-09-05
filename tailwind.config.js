/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'glow-orange': {
          '0%': { boxShadow: '0 0 10px rgba(255, 166, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 166, 0, 1)' },
        },
        'glow-yellow': {
          '0%': { boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 255, 0, 1)' },
        },
        'glow-cyan': {
          '0%': { boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 1)' },
        },
        'glow-cyan-300': {
          '0%': { boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' },
        },
        'glow-blue-400': {
          '0%': { boxShadow: '0 0 10px rgba(0, 0, 255, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 0, 255, 0.8)' },
        },
        'glow-blue-600': {
          '0%': { boxShadow: '0 0 10px rgba(0, 0, 255, 0.6)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 0, 255, 1)' },
        },
        'glow-purple': {
          '0%': { boxShadow: '0 0 10px rgba(128, 0, 128, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(128, 0, 128, 1)' },
        },
      },
      animation: {
        'glow-orange': 'glow-orange 2s infinite',
        'glow-yellow': 'glow-yellow 2s infinite',
        'glow-cyan': 'glow-cyan 2s infinite',
        'glow-cyan-300': 'glow-cyan-300 2s infinite',
        'glow-blue-400': 'glow-blue-400 2s infinite',
        'glow-blue-600': 'glow-blue-600 2s infinite',
        'glow-purple': 'glow-purple 2s infinite',
      },
    },
  },
}


