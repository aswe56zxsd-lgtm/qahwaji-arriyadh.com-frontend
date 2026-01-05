/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New Dark Theme Colors
        'primary': '#11a4d4',
        'primary-dark': '#0c7fa6',
        'background-light': '#f6f8f8',
        'background-dark': '#101d22',
        'surface-dark': '#18282f',

        // Legacy support
        'primary-magenta': '#B742A7',
        'primary-purple': '#7B4AA9',
        'primary-cyan': '#88CFEE',
        'primary-silver': '#C0C0C0',
        'coffee-dark': '#7B4AA9',
        'coffee-medium': '#9B65C7',
        'gold': '#B742A7',
        'bronze': '#88CFEE',
        'cream-bg': '#F5F3FF',
        'cream-accent': '#E9E5FF',
        'text-main': '#3E2564',
        'text-muted': '#6B5B95',
      },
      fontFamily: {
        'display': ['IBM Plex Sans Arabic', 'Manrope', 'sans-serif'],
        'arabic': ['IBM Plex Sans Arabic', 'sans-serif'],
        'main': ['IBM Plex Sans Arabic', 'Tajawal', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      boxShadow: {
        'golden': '0 4px 20px -2px rgba(183, 66, 167, 0.2)',
        'purple-glow': '0 4px 20px -2px rgba(123, 74, 169, 0.3)',
        'cyan-glow': '0 4px 20px -2px rgba(136, 207, 238, 0.3)',
        'primary-glow': '0 4px 20px -2px rgba(17, 164, 212, 0.3)',
      },
    },
  },
  plugins: [],
};
