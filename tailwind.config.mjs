/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#FFFFFF',
        gold: {
          DEFAULT: '#C6A15B',
          soft: '#D9BF8E',
          dim: '#8A7042',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
      },
      fontSize: {
        'clamp-hero': 'clamp(2.75rem, 9vw, 9rem)',
        'clamp-h2': 'clamp(2rem, 5vw, 4.5rem)',
        'clamp-h3': 'clamp(1.5rem, 3vw, 2.5rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        alva: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};
