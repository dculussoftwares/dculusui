module.exports = {
  content: ['./*.html'],
  dculusui: {
    themes: [
      'light',
      'dark',
    ],
    prefix: 'd-',
  },
  plugins: [
    require('dculusui'),
  ],
}
