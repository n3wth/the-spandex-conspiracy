/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Apple-inspired system colors
        system: {
          // Background colors with improved contrast
          background: '#ffffff',
          'background-secondary': '#f5f5f7',
          'background-tertiary': '#fafafa',
          
          // Text colors with better readability
          text: '#1d1d1f',
          'text-secondary': '#424245',
          'text-tertiary': '#86868b',
          
          // Enhanced Blue (Primary accent)
          blue: '#0071e3',
          'blue-secondary': '#42a1ec',
          'blue-tertiary': '#0077ed',
          
          // Refined Gray system colors
          gray: '#86868b',
          'gray-secondary': '#a1a1a6',
          'gray-tertiary': '#c7c7cc',
          'gray-quaternary': '#d2d2d7',
          'gray-quinary': '#e5e5e7',
          'gray-senary': '#f5f5f7',
          
          // Enhanced Accent colors
          green: '#34c759',
          indigo: '#5856d6',
          orange: '#ff9500',
          pink: '#ff2d55',
          purple: '#af52de',
          red: '#ff3b30',
          teal: '#5ac8fa',
          yellow: '#ffcc00',
          
          // Improved Separator colors
          separator: 'rgba(60, 60, 67, 0.18)',
          'separator-opaque': '#d2d2d7',
        },
        
        // Enhanced Theme colors for the spandex conspiracy
        spandex: {
          primary: '#ff9500',
          'primary-light': '#ffaa33',
          'primary-dark': '#cc7700',
          secondary: '#5856d6',
          'secondary-light': '#7a79e0',
          'secondary-dark': '#4645ab',
          accent: '#ffcc00',
          'accent-light': '#ffd633',
          'accent-dark': '#cca300',
          success: '#34c759',
          'success-light': '#5cd679',
          'success-dark': '#2a9f47',
        }
      },
      fontFamily: {
        // Enhanced font system with Playfair Display
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'source-code-pro', 'Menlo', 'Consolas', 'monospace'],
        display: ['Playfair Display', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Enhanced Apple Typography Scale
        'caption2': ['11px', { lineHeight: '13px', letterSpacing: '0.066px' }],
        'caption1': ['12px', { lineHeight: '16px', letterSpacing: '0.072px' }],
        'footnote': ['13px', { lineHeight: '18px', letterSpacing: '0.078px' }],
        'subheadline': ['15px', { lineHeight: '20px', letterSpacing: '0.09px' }],
        'callout': ['16px', { lineHeight: '21px', letterSpacing: '0.096px' }],
        'body': ['17px', { lineHeight: '22px', letterSpacing: '0.102px' }],
        'headline': ['17px', { lineHeight: '22px', letterSpacing: '0.102px', fontWeight: '600' }],
        'title3': ['20px', { lineHeight: '25px', letterSpacing: '0.12px', fontWeight: '600' }],
        'title2': ['22px', { lineHeight: '28px', letterSpacing: '0.132px', fontWeight: '600' }],
        'title1': ['28px', { lineHeight: '34px', letterSpacing: '0.168px', fontWeight: '600' }],
        'large-title': ['34px', { lineHeight: '41px', letterSpacing: '0.204px', fontWeight: '700' }],
      },
      spacing: {
        // Enhanced Apple spacing system - based on 4pt grid
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
        // Enhanced entrance animations
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'spring 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        
        // Enhanced micro-interactions
        'bounce-subtle': 'bounceSubtle 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle-soft': 'wiggleSoft 0.8s ease-in-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'rotate-gentle': 'rotateGentle 20s linear infinite',
        
        // Enhanced button animations
        'button-press': 'buttonPress 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'button-release': 'buttonRelease 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Enhanced loading animations
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Enhanced page transitions
        'page-enter': 'pageEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'page-exit': 'pageExit 0.4s cubic-bezier(0.4, 0, 1, 1)',
        
        // Enhanced audio visualizations
        'wave': 'wave 1.5s ease-in-out infinite',
        'equalizer': 'equalizer 0.8s ease-in-out infinite alternate',
        
        // New animations
        'gradient-shift': 'gradientShift 8s ease infinite',
        'text-reveal': 'textReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'card-hover': 'cardHover 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        // Enhanced entrance animations
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
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
        spring: {
          '0%': { transform: 'scale(0.8) translateY(40px)', opacity: '0' },
          '50%': { transform: 'scale(1.05) translateY(-10px)', opacity: '0.8' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        
        // Enhanced micro-interactions
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
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        rotateGentle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        
        // Enhanced button animations
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.98)' },
        },
        buttonRelease: {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
        
        // Enhanced loading animations
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
        
        // Enhanced page transitions
        pageEnter: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pageExit: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(0.98)' },
        },
        
        // Enhanced audio visualizations
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
        
        // New animations
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        textReveal: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
            filter: 'blur(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)'
          },
        },
        cardHover: {
          '0%': { 
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
          },
          '100%': { 
            transform: 'translateY(-6px) scale(1.02)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)'
          },
        },
      },
      boxShadow: {
        // Enhanced shadow system
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.08)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.12)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 25px 50px rgba(0, 0, 0, 0.1), 0 12px 24px rgba(0, 0, 0, 0.08)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 12px 30px rgba(0, 122, 255, 0.3), 0 6px 15px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        // Enhanced border radius system
        'sm': '0.375rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
