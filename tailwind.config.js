/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          50: '#F2F7F4',
          100: '#E2EFE7',
          200: '#C5DFD0',
          300: '#9BC7AE',
          400: '#6AA887',
          500: '#438965',
          600: '#2E7452',
          700: '#245C45', // Primary Deep Botanical Green
          800: '#1B4735',
          900: '#123024',
          950: '#0A1C15',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E6ECE8',
          200: '#D1DDD4',
          300: '#AFC3B4',
          400: '#8FAF91', // Secondary Sage
          500: '#6D9270',
          600: '#537456',
          700: '#405A43',
          800: '#344937',
          900: '#2C3C2F',
        },
        herbal: {
          50: '#FDF9F2',
          100: '#FAF1DF',
          200: '#F4E1BD',
          300: '#EBCC94',
          400: '#DFB369',
          500: '#C69B52', // Accent Herbal Gold
          600: '#B08240',
          700: '#8C6332',
          800: '#714F2D',
          900: '#5E4228',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F7F5EE', // Background Warm Ivory
          200: '#EFECE2',
          300: '#E3DFD1',
          400: '#D2CCB9',
          500: '#BBB49E',
        },
        charcoal: {
          50: '#F6F7F6',
          100: '#E3E7E4',
          200: '#C6CEC9',
          300: '#9EABA2',
          400: '#728178',
          500: '#515E56',
          600: '#3D4842',
          700: '#303A35',
          800: '#242C28',
          900: '#17231D', // Text Deep Charcoal
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 92, 69, 0.08), 0 2px 6px -1px rgba(36, 92, 69, 0.04)',
        'premium': '0 20px 40px -15px rgba(23, 35, 29, 0.1), 0 0 0 1px rgba(36, 92, 69, 0.06)',
        'glow': '0 0 30px rgba(198, 155, 82, 0.25)',
        'botanical': '0 12px 36px -8px rgba(36, 92, 69, 0.18)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
};
