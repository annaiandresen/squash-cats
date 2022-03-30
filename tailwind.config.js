module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      pink: '#FFB5A7',
      'pink-lighter': '#FCD5CE',
      orange: '#FEC89A',
      'orange-lighter': '#FEC89A',
      'soft-peach': '#F8EDEB',
      grey: '#D6CCC2',
      'grey-darker': '#8D8984',
      'grey-lighter': '#E5DED8',
    },
    extend: {
      fontFamily: {
        sspro: ['Source Sans Pro', 'sans-serif'],
      },
      scale: {
        102: '1.02',
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: '#FFB5A7',
            secondary: '#FEC89A',
            accent: '#e3dbc3',
            neutral: '#2A2E37',
            'base-100': '#3D4451',
            info: '#3ABFF8',
            success: '#36D399',
            warning: '#FBBD23',
            error: '#F87272',
          },
        },
      ],
    },
    plugins: [require('daisyui')],
  },
};
