/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B8A9', // Teal Green
          light: '#00D4C3',
          dark: '#009A8C',
        },
        secondary: {
          DEFAULT: '#DB5A42', // Reddish Orange
          light: '#E67E5A',
          dark: '#C44A35',
        },
        accent: {
          DEFAULT: '#F1C40F', // Mustard Yellow
          light: '#F4D03F',
          dark: '#D4AC0D',
        },
        text: {
          dark: '#1a1a1a',
          light: '#ffffff',
        },
        earth: {
          brown: '#A0522D',
          darkBrown: '#8B4513',
          tan: '#C2B280',
          olive: '#556B2F',
          sage: '#9CAF88',
          cream: '#F5F5DC',
          terracotta: '#E2725B',
          moss: '#8FBC8F',
        }
      },
      fontFamily: {
        'arboria': ['Fredoka', 'sans-serif'],
        'sans': ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
