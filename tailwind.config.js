/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['"Pretendard Variable"', 'sans-serif'],
      },
      colors: {
        primary: '#D2FA63',
        secondary: '#191919',
        white300: '#F0F0EB',
        white200: '#F5F5F0',
        white100: '#FAFAF5',
        black100: '#191919',
        black200: '#646464',
        black300: '#7D7D7D',
        grey600: '#646464',
        grey500: '#7D7D7D',
        grey400: '#969696',
        grey300: '#AFAFAF',
        grey200: '#C8C8C8',
        grey100: '#E1E1E1',
        error: '#EB0555',
        success: '#3232FF',
        success2: '#4B5FEB',
        success3: '#E1E1FA',
      },
    },
  },
  plugins: [],
};
