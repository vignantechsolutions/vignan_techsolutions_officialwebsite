/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'deep-navy': '#0A0E17',
        'cyan-glow': '#00FFFF',
        'electric-blue': '#0059FF',
        'tech-gray': '#E5E5E5',
        'glass-cyan': 'rgba(0, 255, 255, 0.1)',
        'glass-blue': 'rgba(0, 89, 255, 0.1)',
        'maroon': {
          600: '#800000',
        },
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'code': ['JetBrains Mono', 'monospace'],
        'tech': ['Inter', 'sans-serif'],
      },
      animation: {
        'particle-flow': 'particle-flow 20s ease-in-out infinite',
        'grid-flow': 'grid-flow 15s linear infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'hologram-rotate': 'hologram-rotate 4s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'particle-float': 'particle-float 15s infinite linear',
        'wave-flow': 'wave-flow 3s ease-in-out infinite',
        'cyber-scan': 'cyber-scan 2s ease-in-out infinite',
        'tech-glow': 'tech-glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        'particle-flow': {
          '0%, 100%': { 
            background: 'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 89, 255, 0.1) 0%, transparent 50%)'
          },
          '50%': { 
            background: 'radial-gradient(circle at 80% 30%, rgba(0, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(0, 89, 255, 0.15) 0%, transparent 50%)'
          },
        },
        'grid-flow': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        'border-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'hologram-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'neon-pulse': {
          '0%': { opacity: '0.8', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) translateX(0) scale(0)', opacity: '0' },
          '10%': { opacity: '0.6', transform: 'scale(1)' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-10vh) translateX(100px) scale(0)', opacity: '0' },
        },
        'wave-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'cyber-scan': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'tech-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.5)',
            transform: 'scale(1.02)'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'cyber': '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)',
        'holo': '0 25px 50px rgba(0, 255, 255, 0.2), 0 15px 30px rgba(0, 89, 255, 0.1)',
        'neon': '0 10px 25px rgba(0, 255, 255, 0.4), 0 5px 15px rgba(0, 89, 255, 0.3)',
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(45deg, #00FFFF, #0059FF)',
        'glass-gradient': 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 89, 255, 0.05))',
        'holo-gradient': 'linear-gradient(135deg, rgba(0, 255, 255, 0.08), rgba(0, 89, 255, 0.04))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}