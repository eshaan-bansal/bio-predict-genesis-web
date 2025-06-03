
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.2rem', fontWeight: '400' }],
				'sm': ['0.875rem', { lineHeight: '1.4rem', fontWeight: '400' }],
				'base': ['1rem', { lineHeight: '1.6rem', fontWeight: '400' }],
				'lg': ['1.125rem', { lineHeight: '1.8rem', fontWeight: '500' }],
				'xl': ['1.25rem', { lineHeight: '1.9rem', fontWeight: '500' }],
				'2xl': ['1.5rem', { lineHeight: '2.2rem', fontWeight: '600' }],
				'3xl': ['1.875rem', { lineHeight: '2.4rem', fontWeight: '600' }],
				'4xl': ['2.25rem', { lineHeight: '2.8rem', fontWeight: '600' }],
				'5xl': ['3rem', { lineHeight: '3.2rem', fontWeight: '700' }],
				'6xl': ['3.75rem', { lineHeight: '3.8rem', fontWeight: '700' }],
				'7xl': ['4.5rem', { lineHeight: '4.6rem', fontWeight: '700' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
