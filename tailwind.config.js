module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'rotate-center':
          'rotate-center 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both',
      },
      keyframes: {
        'rotate-center': {
          '0%': {
            transform: 'rotate(0)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      spacing: {
        26: '6.5rem',
        50: '12.5rem',
        41.2: '10.3rem',
        22.2: '5.5rem',
        16: '6.25rem',
        63.7: '15.9rem',
      },
      colors: {
        gray: '#B5C0C7',
      },
    },
  },
  plugins: [],
};
