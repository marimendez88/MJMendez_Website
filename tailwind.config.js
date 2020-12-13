const colors = require('tailwindcss/colors')

module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: ['**/*.html', '**/*.ts']
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        gray: colors.coolGray,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.lightBlue,
        indigo: colors.indigo,
        purple: colors.violet,
        red: colors.rose,
        pink: colors.fuchsia,
        primary: {
          light: '#FFFFFF',
          default: '#FFFFFF',
          dark:'#FAF4E6',          
        },
        secondary: {
          light: '#DCAC00',
          default: '#DCAC00',
          dark:'#6B5400',    
        },
        tertiary: {
          light: '#202020',
          default: '#202020',
          dark:'#222222',    
        },
        quaternary:{
          light: '#E5E5E5',
          default: '#E5E5E5',
          dark:'#E5E5E5'
        }
      },
      fontFamily: {
        sans: ['EB Garamond', 'sans-serif'],
        serif: ['Be Vietnam', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
