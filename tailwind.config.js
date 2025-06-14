/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired system colors
        system: {
          // Background colors
          background: '#ffffff',
          'background-secondary': '#f2f2f7',
          'background-tertiary': '#ffffff',
          
          // Text colors
          text: '#000000',
          'text-secondary': '#3c3c43',
          'text-tertiary': '#3c3c4399',
          
          // Blue (Primary accent)
          blue: '#007aff',
          'blue-secondary': '#5ac8fa',
          
          // Gray system colors
          gray: '#8e8e93',
          'gray-secondary': '#aeaeb2',
          'gray-tertiary': '#c7c7cc',
          'gray-quaternary': '#d1d1d6',
          'gray-quinary': '#e5e5ea',
          'gray-senary': '#f2f2f7',
          
          // Accent colors
          green: '#34c759',
          indigo: '#5856d6',
          orange: '#ff9500',
          pink: '#ff2d92',
          purple: '#af52de',
          red: '#ff3b30',
          teal: '#5ac8fa',
          yellow: '#ffcc00',
          
          // Separator
          separator: '#3c3c4349',
          'separator-opaque': '#c6c6c8',
        },
        
        // Theme colors for the spandex conspiracy
        spandex: {
          primary: '#ff9500', // Apple orange
          secondary: '#5856d6', // Apple indigo  
          accent: '#ffcc00', // Apple yellow
          success: '#34c759', // Apple green
        }
      },
      fontFamily: {
        // Apple San Francisco font system
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'source-code-pro', 'Menlo', 'Consolas', 'monospace'],
        display: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Apple Typography Scale
        'caption2': ['11px', '13px'],
        'caption1': ['12px', '16px'],
        'footnote': ['13px', '18px'],
        'subheadline': ['15px', '20px'],
        'callout': ['16px', '21px'],
        'body': ['17px', '22px'],
        'headline': ['17px', '22px'],
        'title3': ['20px', '25px'],
        'title2': ['22px', '28px'],
        'title1': ['28px', '34px'],
        'large-title': ['34px', '41px'],
      },
      spacing: {
        // Apple spacing system - based on 4pt grid
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'spring 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #F4D03F, 0 0 10px #F4D03F, 0 0 15px #F4D03F' },
          '100%': { boxShadow: '0 0 10px #F4D03F, 0 0 20px #F4D03F, 0 0 30px #F4D03F' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 5px rgba(244, 208, 63, 0.5), 0 0 10px rgba(244, 208, 63, 0.3)' },
          '100%': { textShadow: '0 0 10px rgba(244, 208, 63, 0.8), 0 0 20px rgba(244, 208, 63, 0.5), 0 0 30px rgba(244, 208, 63, 0.3)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, #F4D03F 0%, #fde68a 25%, #10B981 50%, #8B5CF6 75%, #3B82F6 100%)',
        'text-gradient': 'linear-gradient(to right, #F4D03F, #FF9F4A, #FF5E7D)',
        'cosmic-gradient': 'linear-gradient(330deg, #6366F1 0%, #8B5CF6 30%, #EC4899 70%, #F43F5E 100%)',
        'hero-gradient': 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(254,247,224,0.6) 40%, rgba(244,208,63,0.4) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
        'glass-shine': 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(244, 208, 63, 0.5)',
        'glow-lg': '0 0 40px rgba(244, 208, 63, 0.3)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(244, 208, 63, 0.2)',
        'card-hover': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'floating': '0 20px 50px rgba(0, 0, 0, 0.1)',
        'conspiracy': '0 10px 50px rgba(244, 208, 63, 0.3), 0 15px 30px -10px rgba(0, 0, 0, 0.1)',
        'text-shadow': '0 2px 5px rgba(0, 0, 0, 0.1)',
        'text-shadow-lg': '0 4px 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
