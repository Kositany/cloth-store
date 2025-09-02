import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#1a1a1a',
        'neon-green': '#00ff87',
        'neon-blue': '#00d4ff',
        'neon-pink': '#ff006e',
        'neon-purple': '#8b5cf6',
        'neon-yellow': '#ffff00',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0, 255, 135, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
