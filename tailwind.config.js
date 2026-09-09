/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#0b1329',
          850: '#0f172a',
          800: '#131f37',
          700: '#1e293b',
          600: '#334155',
        },
        brand: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          blue: '#2563eb',
          emerald: '#10b981',
          accent: '#00f2fe',
        }
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #030712 0%, #0b1329 40%, #0f172a 100%)',
        'navy-radial': 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0b1329 50%, #030712 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'accent-gradient': 'linear-gradient(90deg, #38bdf8 0%, #06b6d4 50%, #10b981 100%)',
        'glow-gradient': 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
