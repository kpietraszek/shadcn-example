/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: [
    './modules/**/*.{ts,tsx}',
    './lib/ui-kit/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      white: {
        transparent: 'rgba(255, 255, 255, 0.25)',
      },
      gray: {
        1000: '#272727',
        800: '#404040',
        600: '#808080',
        500: '#757575',
        400: '#C6C6C6',
        200: '#D9D9D9',
        150: '#d8d8d8',
        50: '#F2F2F2',
        'transparent-1000': 'rgba(39, 39, 39, 0.15)',
      },
      blue: {
        1000: '#0084FF',
      },
      red: {
        1000: '#D64A2E',
      },
      black: '#000000',
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontSize: {
        mini: '15px',
        lg: '18px',
        '45xl': '64px',
        '13xl': '32px',
        '5xl': '24px',
        '21xl': '40px',
        smi: '13px',
        '121xl': '140px',
        xl: '20px',
        '69xl': '88px',
        inherit: 'inherit',
      },
      fontFamily: {
        sans: ['var(--font-switzer)'],
      },
      colors: {
        base: {
          light: '#FFFFFF',
          dark: '#272727',
        },
        // INFO: NFO: shadcn/ui
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'home-news-gradient-start': '#d1085c',
        'home-news-gradient-middle': '#e1ff2b',
        'home-news-gradient-end': '#0084ff',
      },
      backgroundImage: {
        'grid-dotted': "url('/grid_dotted.png')",
      },
      // INFO: shadcn/ui
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
