export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B0B0F',
        panel: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(34, 211, 238, 0.22)',
        violet: '0 0 60px rgba(168, 85, 247, 0.28)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 7s linear infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
