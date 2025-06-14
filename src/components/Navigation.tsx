import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, MusicIcon } from './Icons';
import type { NavigationItem } from '../types';

const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    id: 'story',
    label: 'Story',
    path: '/story',
    icon: BookOpenIcon,
  },
  {
    id: 'audio',
    label: 'Audio',
    path: '/audio',
    icon: MusicIcon,
  },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // Enhanced scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-system-background/95 backdrop-blur-xl border-b border-system-separator shadow-lg'
          : 'bg-system-background/80 backdrop-blur-lg border-b border-system-separator/50'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'blur(20px) saturate(120%)',
        WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'blur(20px) saturate(120%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-spandex-primary via-spandex-accent to-spandex-primary rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="absolute inset-0 w-9 h-9 bg-gradient-to-br from-spandex-primary to-spandex-accent rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-300"></div>
            </div>
            <span className="text-title3 font-bold text-system-text group-hover:text-spandex-primary transition-colors duration-300">
              The Spandex Conspiracy
            </span>
          </Link>
          
          {/* Premium Navigation Links */}
          <div className="flex items-center space-x-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-callout font-medium transition-all duration-300 ease-out group ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'text-system-text-secondary hover:text-system-text'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Background for active state */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-system-blue to-system-blue-secondary opacity-100' 
                      : 'bg-system-gray-quinary opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-2">
                    {Icon && (
                      <Icon className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                    )}
                    <span className="relative">
                      {item.label}
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 rounded-full"></div>
                      )}
                    </span>
                  </div>
                  
                  {/* Subtle ripple effect on click */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-20 bg-white transition-opacity duration-150"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
