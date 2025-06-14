import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, HeadphonesIcon, FeatherIcon, MenuIcon, XIcon } from './Icons'; // Added MenuIcon, XIcon
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
    label: 'Listen',
    path: '/audio',
    icon: HeadphonesIcon,
  },
];

export const Navigation: FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || isMobileMenuOpen
          ? 'bg-system-background/90 backdrop-blur-xl shadow-lg border-b border-system-separator'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{
        backdropFilter: scrolled || isMobileMenuOpen ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled || isMobileMenuOpen ? 'blur(16px) saturate(180%)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-spandex-primary via-spandex-accent to-spandex-primary rounded-lg flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-spandex-primary/30 group-hover:rotate-[-6deg]">
                <FeatherIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <span className="text-xl font-semibold text-system-text group-hover:text-spandex-primary transition-colors duration-300">
              The Spandex Conspiracy
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon; // Renamed to avoid conflict and ensure it's a component
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`relative flex items-center space-x-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ease-out group ${
                    isActive
                      ? 'text-white' 
                      : 'text-system-text-secondary hover:text-system-text hover:bg-system-gray-quinary'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none ${
                    isActive 
                      ? 'bg-gradient-to-r from-system-blue to-system-blue-secondary shadow-md opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  {IconComponent && <IconComponent className={`w-4 h-4 relative transition-colors duration-300 ${isActive ? 'text-white' : 'text-system-text-tertiary group-hover:text-system-text'}`} />} {/* Added check for IconComponent */}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-system-text-secondary hover:text-system-text hover:bg-system-gray-quinary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-system-blue transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-system-background/95 backdrop-blur-xl border-t border-system-separator">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => {
              const IconComponent = item.icon; // Renamed to avoid conflict
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'bg-system-blue text-white' 
                      : 'text-system-text-secondary hover:bg-system-gray-quinary hover:text-system-text'
                  }`}
                >
                  {IconComponent && <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-system-text-tertiary'}`} />} {/* Added check for IconComponent */}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
