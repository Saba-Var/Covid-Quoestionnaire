module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        tiny: '1.375rem',
        standard: '1.5rem',
        normal: '2.5rem',
      },
      animation: {
        'rotate-center':
          'rotate-center 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both',
        'flip-scale-up-hor': 'flip-scale-up-hor 0.5s linear   both',
        'shrink-center': 'shrink-center 0.8s ease-out 0.08s 1 normal none',
        'slide-down': 'slide-down 0.8s ease-out 1.5s 1 normal none',
        hidden: 'hidden 1.5s ease normal none',
      },
      keyframes: {
        hidden: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '0',
          },
        },
        'slide-down': {
          from: {
            transform: 'translateY(-65px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
        'shrink-center': {
          from: {
            transform: 'scale(1.4)',
            width: '1920px',
            height: '1920px',
            top: '-400px',
            left: '0',
            position: 'fixed',
            borderRadius: '0',
          },
          '40%': {
            transform: 'scale(1.4)',
            width: '1920px',
            height: '1920px',
            top: '-400px',
            position: 'fixed',
            borderRadius: '0',
          },
          '41%': {
            borderRadius: '1000px',
          },
          to: {
            width: '50px',
            height: '50px',
            top: '320px',
            borderRadius: '1000px',
          },
        },

        'rotate-center': {
          '0%': {
            transform: 'rotate(0)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'flip-scale-up-hor': {
          '0%': {
            transform: 'scale(1) rotateX(0)',
          },
          '50%': {
            transform: 'scale(2.5) rotateX(-90deg)',
          },
          to: {
            transform: 'scale(1) rotateX(-180deg)',
          },
        },
      },
      fontFamily: {
        anonymous: ['Anonymous Pro', 'monospace'],
        'BPG-Arial': ['BPG Arial'],
      },
      spacing: {
        22.2: '5.5rem',
        16: '6.25rem',
        26: '6.5rem',
        41.2: '10.3rem',
        50: '12.5rem',
        63.7: '15.9rem',
        80: '20rem',
        86: '21.5rem',
        128: '32rem',
        168: '42rem',
        162: '40.5rem',
        176: '44rem',
        248: '62rem',
        270: '67.5rem',
        480: '126rem',
      },
      colors: {
        gray: 'rgb(234,234,234)',
        charcoal: '#232323',
        yellow: '#D6D16E',
      },
    },
  },
  plugins: [],
};
