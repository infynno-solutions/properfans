/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-button':
          'linear-gradient(101.43deg, #FD8DDD -32.04%, #8958E1 46.51%);',
        'gradient-post-details':
          'linear-gradient(180deg, rgba(0 0 0 / 0.6) 19.27%, rgba(0 0 0 / 0) 100%);',
        'gradient-live-story':
          'linear-gradient(101.43deg, #F279D0 -32.04%, #EF4444 46.51%)',
      },
      boxShadow: {
        sidebar: '4px 0px 10px rgb(0 0 0 / 0.04);',
        main: '0px 4px 10px rgba(0 0 0 / 0.02);',
      },
      colors: {
        gray: {
          500: '#999999',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
