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
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        scrolled 
          ? 'glass-panel shadow-sm'
          : 'bg-system-background/80 backdrop-blur-sm border-b border-system-separator'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 interactive group">
            <div className="w-8 h-8 bg-gradient-to-br from-spandex-primary to-spandex-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-title3 font-bold text-system-text">
              The Spandex Conspiracy
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-callout font-medium transition-all duration-200 ease-out nav-link ${
                    isActive
                      ? 'bg-system-blue text-white shadow-sm'
                      : 'text-system-text-secondary hover:text-system-text hover:bg-system-gray-quinary'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
