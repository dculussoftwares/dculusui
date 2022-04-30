const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  dculusux: {
    themes: [
      'light'
    ],
  },


  plugins: [
    require('@tailwindcss/typography'),
    require('../../'),
    // require('dculusux'),
    // require('tailwindcss-flip'),

  ],
}
