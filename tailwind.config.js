/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sirens: {
          teal: '#4fd1c7',
          gold: '#d4af37',
          purple: '#8a2be2',
          coral: '#ff7f7f',
          pearl: '#f8f8ff',
          navy: '#0a1a2e',
          deep: '#16213e',
          ocean: '#1a2f4a',
          abyss: '#0f3460',
        }
      },
      fontFamily: {
        fantasy: ['Cinzel', 'serif'],
        mystical: ['Philosopher', 'sans-serif'],
        elegant: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'underwater-float': 'underwater-float 4s ease-in-out infinite',
        'mystical-glow': 'mystical-glow 3s ease-in-out infinite',
        'treasure-shimmer': 'treasure-shimmer 2s ease-in-out infinite',
        'enchanted-entrance': 'enchanted-entrance 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'magical-particles': 'magical-particles 5s ease-in-out infinite',
        'deep-sea-drift': 'deep-sea-drift 40s ease-in-out infinite',
        'wave-motion': 'wave-motion 6s ease-in-out infinite',
        'coral-sway': 'coral-sway 8s ease-in-out infinite',
        'bubble-rise': 'bubble-rise 15s infinite linear',
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, rgba(79, 209, 199, 0.1) 0%, rgba(138, 43, 226, 0.1) 50%, rgba(212, 175, 55, 0.1) 100%)',
        'mystical-gradient': 'linear-gradient(135deg, rgba(10, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 25%, rgba(26, 47, 74, 0.95) 50%, rgba(15, 52, 96, 0.95) 75%, rgba(10, 26, 46, 0.95) 100%)',
      }
    },
  },
  plugins: [],
};