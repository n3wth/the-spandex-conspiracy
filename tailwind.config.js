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
        // Premium entrance animations
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'spring 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        
        // Sophisticated micro-interactions
        'bounce-subtle': 'bounceSubtle 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle-soft': 'wiggleSoft 0.8s ease-in-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'rotate-gentle': 'rotateGentle 20s linear infinite',
        
        // Premium button animations
        'button-press': 'buttonPress 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'button-release': 'buttonRelease 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Loading animations
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Page transitions
        'page-enter': 'pageEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'page-exit': 'pageExit 0.4s cubic-bezier(0.4, 0, 1, 1)',
        
        // Audio visualizations
        'wave': 'wave 1.5s ease-in-out infinite',
        'equalizer': 'equalizer 0.8s ease-in-out infinite alternate',
      },
      keyframes: {
        // Premium entrance animations
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': { // Renamed from slideUp for clarity
          '0%': { transform: 'translateY(30px)', opacity: '0' }, // Adjusted distance
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-in-subtle': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        spring: {
          '0%': { transform: 'scale(0.8) translateY(40px)', opacity: '0' },
          '50%': { transform: 'scale(1.05) translateY(-10px)', opacity: '0.8' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        
        // Sophisticated micro-interactions
        bounceSubtle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-8px,0)' },
          '70%': { transform: 'translate3d(0,-4px,0)' },
          '90%': { transform: 'translate3d(0,-2px,0)' },
        },
        wiggleSoft: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'pulse-bg': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.3' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        rotateGentle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        
        // Premium button animations
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.98)' },
        },
        buttonRelease: {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
        
        // Loading animations
        skeleton: {
          '0%, 100%': { backgroundColor: 'theme("colors.system.gray-quinary")' },
          '50%': { backgroundColor: 'theme("colors.system.gray-senary")' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        
        // Page transitions
        pageEnter: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pageExit: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(0.98)' },
        },
        
        // Audio visualizations
        wave: {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1)' },
        },
        equalizer: {
          '0%': { height: '5px' },
          '25%': { height: '20px' },
          '50%': { height: '10px' },
          '75%': { height: '15px' },
          '100%': { height: '5px' },
        },
        'gradient-flow': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'hero-text-reveal': {
          '0%': { opacity: '0', transform: 'translateY(50px) skewY(5deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) skewY(0deg)' },
        },
        'hero-bg-pan': {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 100%' },
        },
         'orb-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
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
        'interactive': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
        'interactive-hover': '0 6px 20px 0 rgba(0, 118, 255, 0.23)',
        'card-deep': '0 10px 30px -15px rgba(0, 0, 0, 0.2), 0 20px 50px -10px rgba(0, 0, 0, 0.1)',
        'nav': '0 2px 10px rgba(0,0,0,0.05)',
        'hero-glow-blue': '0 0 40px 10px rgba(0, 122, 255, 0.3)',
        'hero-glow-purple': '0 0 50px 15px rgba(175, 82, 222, 0.25)',
        'hero-glow-orange': '0 0 45px 12px rgba(255, 149, 0, 0.28)',
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
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\\'52\\' height=\\'26\\' viewBox=\\'0 0 52 26\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414zM41.95 17.05l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414zM10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414zM41.95 17.05l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'aurora-gradient': 'radial-gradient(ellipse at center, rgba(29, 78, 216, 0.15) 0%, rgba(30, 64, 175, 0.1) 20%, rgba(17, 24, 39, 0) 60%)',
      },
      transitionTimingFunction: {
        // ... existing timing functions ...
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-hard': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)', // For bouncy effects
      },
      blur: {
        // ... existing blur values ...
        'xs': '2px',
        '4xl': '128px',
      },
    },
  },
  plugins: [],
};
