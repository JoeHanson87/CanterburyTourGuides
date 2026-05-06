/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          50: '#e6f3fa',
          100: '#cde7f5',
          200: '#9dcfeb',
          300: '#65afd9',
          400: '#3390c4',
          500: '#0177b7',
          600: '#01659e',
          700: '#015080',
          800: '#003d63',
          900: '#002b46',
        },
        'brand-gold': {
          50: '#fdf8ef',
          100: '#faefd8',
          200: '#f5ddb0',
          300: '#eec47f',
          400: '#e3b069',
          500: '#d4913f',
          600: '#c07828',
          700: '#a0611f',
          800: '#7c4c18',
          900: '#5c3912',
        },
        'brand-cream': '#fafaf8',
        'brand-charcoal': '#1a1a1a',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
