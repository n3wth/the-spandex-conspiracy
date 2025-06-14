import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Story', path: '/story', icon: '📖' },
    { name: 'Audio', path: '/audio', icon: '🎧' },
  ];

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-xl' 
        : 'bg-white/80 backdrop-blur-sm border-b border-gray-100/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="group flex items-center space-x-3 transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                🦸
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors duration-300">
                  The Spandex Conspiracy
                </div>
                <div className="text-xs text-gray-500 font-medium -mt-1">
                  Superhero Mystery
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === link.path 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/80'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-semibold">{link.name}</span>
                
                {/* Animated underline for non-active items */}
                {location.pathname !== link.path && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-3/4 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative inline-flex items-center justify-center p-3 rounded-2xl text-gray-700 hover:text-purple-600 hover:bg-purple-50/80 focus:outline-none transition-all duration-300 transform hover:scale-105"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <div className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <div className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <div className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 px-4 py-6">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group flex items-center space-x-4 py-4 px-6 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/80'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-2xl">{link.icon}</span>
                <div className="flex-1">
                  <div className="font-bold text-lg">{link.name}</div>
                  <div className={`text-sm font-medium ${
                    location.pathname === link.path ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {link.name === 'Home' && 'Start your adventure'}
                    {link.name === 'Story' && 'Read the mystery'}
                    {link.name === 'Audio' && 'Listen to the tale'}
                  </div>
                </div>
                {location.pathname === link.path && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200/50 text-center">
            <div className="text-sm text-gray-500 mb-2">🦸‍♀️ Join the Adventure 🦸‍♂️</div>
            <div className="text-xs text-gray-400">
              Solve mysteries in style with our spandex heroes
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
