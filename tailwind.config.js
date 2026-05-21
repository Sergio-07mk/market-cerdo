/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E22324',
          gray: '#555757',
          yellow: '#FFC627',
          black: '#000000',
          white: '#FFFFFF',
        },
        warm: {
          cream: '#F8F4F1',
          beige: '#EFE9E3',
          wood: '#D4A574',
          brown: '#3D2414',
          walnut: '#8B7355',
          warmgray: '#9B8B7E',
          amber: '#E8D4A2',
          deepred: '#8B1C1C',
          olive: '#6B7D6F',
          fieldgreen: '#8B9E7D',
        },
      },
      fontFamily: {
        'futura': ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'headline': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'subheadline': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'scroll-indicator': 'bounce 2s infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'warm-glow': 'warmGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'smoke': 'smoke 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(226, 35, 36, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(226, 35, 36, 0.8)' },
        },
        warmGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(232, 212, 162, 0.6)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(232, 212, 162, 0.9)' },
        },
        smoke: {
          '0%, 100%': { opacity: '0.15', transform: 'translateY(0px) scale(1)' },
          '50%': { opacity: '0.4', transform: 'translateY(-20px) scale(1.1)' },
        },
      },
      backdropBlur: {
        'md': '12px',
        'xl': '20px',
      },
    },
  },
  plugins: [],
};
