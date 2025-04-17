
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
        // School colors
        school: {
          seaBlue: '#3A97D4',
          green: '#4CAF50',
          yellow: '#FFD54F',
        },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'blur-in': {
          '0%': { filter: 'blur(5px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scroll-text': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'color-wave': {
          '0%': {
            filter: 'hue-rotate(0deg) brightness(1)',
            textShadow: '0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)'
          },
          '33%': {
            filter: 'hue-rotate(120deg) brightness(1.2)',
            textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 25px rgba(0, 255, 255, 0.5), 0 0 35px rgba(0, 255, 255, 0.3)'
          },
          '66%': {
            filter: 'hue-rotate(240deg) brightness(1.1)',
            textShadow: '0 0 12px rgba(255, 255, 0, 0.7), 0 0 22px rgba(255, 255, 0, 0.5), 0 0 32px rgba(255, 255, 0, 0.3)'
          },
          '100%': {
            filter: 'hue-rotate(360deg) brightness(1)',
            textShadow: '0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)'
          },
        },
        'text-glow': {
          '0%, 100%': {
            color: '#ff69b4',
            textShadow: '0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4'
          },
          '50%': {
            color: '#00ffff',
            textShadow: '0 0 15px #00ffff, 0 0 25px #00ffff, 0 0 35px #00ffff'
          },
        },
        'yellow-green-glow': {
          '0%, 100%': {
            color: '#FFD54F',
            textShadow: '0 0 8px #FFD54F'
          },
          '50%': {
            color: '#4CAF50',
            textShadow: '0 0 8px #4CAF50'
          },
        },
        'gradient-flash': {
          '0%': {
            backgroundPosition: '0% 50%',
            textShadow: '0 0 10px rgba(58, 151, 212, 0.7), 0 0 20px rgba(58, 151, 212, 0.5)'
          },
          '25%': {
            backgroundPosition: '50% 100%',
            textShadow: '0 0 10px rgba(76, 175, 80, 0.7), 0 0 20px rgba(76, 175, 80, 0.5)'
          },
          '50%': {
            backgroundPosition: '100% 50%',
            textShadow: '0 0 10px rgba(255, 213, 79, 0.7), 0 0 20px rgba(255, 213, 79, 0.5)'
          },
          '75%': {
            backgroundPosition: '50% 0%',
            textShadow: '0 0 10px rgba(233, 30, 99, 0.7), 0 0 20px rgba(233, 30, 99, 0.5)'
          },
          '100%': {
            backgroundPosition: '0% 50%',
            textShadow: '0 0 10px rgba(58, 151, 212, 0.7), 0 0 20px rgba(58, 151, 212, 0.5)'
          },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'blur-in': 'blur-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-left': 'slide-left 0.5s ease-out',
        'slide-right': 'slide-right 0.5s ease-out',
        'scrolling-text': 'scroll-text 25s linear infinite',
        'color-wave': 'color-wave 8s linear infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite',
        'yellow-green-glow': 'yellow-green-glow 2s ease-in-out infinite',
        'gradient-flash': 'gradient-flash 5s ease infinite',
			},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
