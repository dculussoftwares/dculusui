const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  dculusui: {
    themes: [
      'light'
    ],
  },


  plugins: [
    require('@tailwindcss/typography'),
    require('../../'),
    // require('dculusui'),
    // require('tailwindcss-flip'),

  ],
}
