const colors = require('tailwindcss/colors')

module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: ['**/*.html', '**/*.ts']
    },
    darkMode: media, // or 'media' or 'class'
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
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
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
