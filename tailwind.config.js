/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d8e0',
          300: '#aab1bf',
          400: '#7c8497',
          500: '#5a6376',
          600: '#444b5c',
          700: '#363b49',
          800: '#1f232e',
          900: '#14171f',
          950: '#0a0c12',
        },
        lime: {
          50: '#f7ffe6',
          100: '#ecffb3',
          200: '#dbff80',
          300: '#c4ff4d',
          400: '#aef21a',
          500: '#8fd60b',
          600: '#6da800',
          700: '#527a00',
          800: '#3a5600',
          900: '#1f3000',
        },
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
