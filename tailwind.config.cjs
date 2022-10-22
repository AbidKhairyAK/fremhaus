/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: '#252321',
        'dark-shallow': '#2E2E2E',
        primary: '#3D94F3',
        'primary-shallow': '#51B3FF',
      },
      fontFamily: {
        sans: ['PlusJakarta', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
