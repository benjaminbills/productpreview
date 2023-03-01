/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkcyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        verydarkblue: 'hsl(212, 21%, 14%)',
        darkgrayishblue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        fraunces: 'Fraunces',
        montserrat: 'Montserrat',
      },
      letterSpacing: {
        4: '0.4em',
      },
    },
  },
  plugins: [],
};
