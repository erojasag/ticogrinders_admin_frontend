/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        customPurple: 'rgb(103, 80, 198)',
        customGreen: 'rgb(170,233,90)',
        customGrey: 'rgb(150,150,150)',
        customCyan: 'rgb(95,204,204)',
        customDarkerGreen: 'rgb(132,174,64)',
        customDarkerPurple: 'rgb(85,33,92)',
        brandGreen: 'rgb(152, 223, 56)',
        brandRed: 'rgb(182, 39, 45)',
        brandCyan: 'rgb(52,208,208)',
        brandPurple: 'rgb(136, 39,132)',
        brandYellow: '#FFD91A',
        brandBlue: '#348DD1',
      },
      fontFamily: {
        heading: ['Montserrat', 'italica'],
        title: ['Bangers', 'italica'],
        body: ['Raleway', 'italica'],
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
