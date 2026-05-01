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
          50: '#f0f7f4',
          100: '#dcede5',
          200: '#bbdacd',
          300: '#8ec0ab',
          400: '#5ea084',
          500: '#3d8468',
          600: '#2d6a53',
          700: '#265644',
          800: '#1a4731',
          900: '#163c2b',
        },
        'brand-gold': {
          50: '#fdf9ec',
          100: '#faf0ce',
          200: '#f4e09d',
          300: '#edcb63',
          400: '#e6b635',
          500: '#c9a227',
          600: '#b8860b',
          700: '#9a6d09',
          800: '#7e570e',
          900: '#6b4810',
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
