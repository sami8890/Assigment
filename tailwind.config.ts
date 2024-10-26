import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        // Custom font sizes
        '11px': '0.6875rem', // 11px
        '12px': '0.75rem',   // 12px
        '14px': '0.875rem',  // 14px
        '16px': '1rem',      // 16px (default)
        '18px': '1.125rem',  // 18px
        '20px': '1.25rem',   // 20px
        '24px': '1.5rem',    // 24px
        '28px': '1.75rem',   // 28px
        '32px': '2rem',      // 32px
        '36px': '2.25rem',   // 36px
      },
      lineHeight: {
        // Custom line heights
        '16px': '1rem',      // 16px
        '18px': '1.125rem',  // 18px
        '20px': '1.25rem',   // 20px
        '22px': '1.375rem',  // 22px
        '24px': '1.5rem',    // 24px
        '28px': '1.75rem',   // 28px
        '32px': '2rem',      // 32px
        '36px': '2.25rem',   // 36px
        '40px': '2.5rem',    // 40px
      },
      fontFamily: {
        // Adding Inter font
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
