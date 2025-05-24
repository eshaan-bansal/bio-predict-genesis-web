
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
			padding: '2rem',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				biopredict: {
					'blue': '#0f172a',
					'purple': '#8b5cf6',
					'light-purple': '#a855f7',
					'accent': '#6366f1',
					'cyan': '#06b6d4',
					'emerald': '#10b981',
					'white': '#f8fafc',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.4',
						boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
					},
					'50%': {
						opacity: '1',
						boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)'
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0) scale(1)',
					},
					'50%': {
						transform: 'translateY(-20px) scale(1.02)',
					},
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'cyber-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(139, 92, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.5)'
					}
				},
				'data-stream': {
					'0%': {
						transform: 'translateX(-100%) skewX(-20deg)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(200%) skewX(-20deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-in-slow': 'fade-in 1.2s ease-out',
				'pulse-glow': 'pulse-glow 4s infinite',
				'float': 'float 8s ease-in-out infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'cyber-pulse': 'cyber-pulse 3s infinite',
				'data-stream': 'data-stream 3s linear infinite',
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.05))',
				'cyber-grid': 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			boxShadow: {
				'cyber': '0 0 20px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'cyber-lg': '0 0 40px rgba(139, 92, 246, 0.4), 0 20px 40px rgba(139, 92, 246, 0.2)',
				'glow': '0 0 30px rgba(139, 92, 246, 0.5)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
