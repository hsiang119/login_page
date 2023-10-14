import plugin from 'tailwindcss/plugin'


/** @type {import('tailwindcss').Config} */
export default {
  jit: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ef"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient("#081b29", "#0ef", "#081b29", "#0ef")',
        'under-background': 'linear-gradient(45deg, #081b29, "#0ef")',
      },
      boxShadow: {
        'neon': `inset 0 0 .5em #0ef, 0 0 .5em #0ef`,
        'custom-cyan': '0 0 25px #0ef',
      },
      transitionDelay: {
        '400': '400ms',
        '550': '550ms',
        '600': '600ms',
        '650': '650ms',
        '1100': '1100ms',
        '1200': '1200ms',
        '1300': '1300ms',
        '1400': '1400ms',
        '1500': '1500ms',
        '1600': '1600ms',
        '1700': '1700ms',
        '1800': '1800ms',
        '1900': '1900ms',
        '2000': '2000ms',
        '2100': '2100ms',
        '2200': '2200ms',
        '2300': '2300ms',
        '2400': '2400ms',
        '2500': '2500ms',
        '2600': '2600ms',
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}\\`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
}

