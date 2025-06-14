import React from 'react';
import { GithubIcon, TwitterIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-16 w-20 h-20 bg-pink-500/20 rounded-full animate-float-gentle" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-500/20 rounded-full animate-bounce-subtle" />
        <div className="absolute bottom-16 left-1/4 w-12 h-12 bg-yellow-500/20 rounded-full animate-pulse-soft" />
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              🦸
            </div>
            <div>
              <div className="text-2xl font-bold font-serif text-white">
                The Spandex Conspiracy
              </div>
              <div className="text-sm text-white/70 -mt-1">
                Superhero Mystery Adventure
              </div>
            </div>
          </div>
          
          {/* Hero Quote */}
          <blockquote className="text-lg text-white/90 italic max-w-2xl mx-auto mb-8">
            "Some mysteries are better left unsolved... but not this one!"
            <footer className="text-pink-300 font-semibold mt-2">
              - Olivia Foxtron & Captain Kiwi
            </footer>
          </blockquote>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Adventure Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
              🎧 Experience
            </h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="/audio" className="hover:text-pink-300 transition-colors duration-300">Audio Adventure</a></li>
              <li><a href="/story" className="hover:text-pink-300 transition-colors duration-300">Read the Story</a></li>
              <li><a href="/" className="hover:text-pink-300 transition-colors duration-300">Meet the Heroes</a></li>
            </ul>
          </div>
          
          {/* Characters */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
              🦸‍♀️ Our Heroes
            </h3>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-pink-300 transition-colors duration-300">💪 Olivia Foxtron</li>
              <li className="hover:text-green-300 transition-colors duration-300">🥝 Captain Kiwi</li>
              <li className="hover:text-purple-300 transition-colors duration-300">🎭 The Mystery</li>
            </ul>
          </div>
          
          {/* Mystery Elements */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
              🔍 The Case
            </h3>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-red-300 transition-colors duration-300">🦶 The Severed Toe</li>
              <li className="hover:text-orange-300 transition-colors duration-300">🌭 Sausage Pattern</li>
              <li className="hover:text-green-300 transition-colors duration-300">🥬 Missing Vegetables</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-white/70 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Spandex Conspiracy. All rights reserved. 
              <span className="block md:inline md:ml-2 text-sm">
                🦸‍♀️ Justice served in style 🦸‍♂️
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="group text-white/70 hover:text-pink-300 transition-all duration-300 transform hover:scale-110" 
                aria-label="GitHub"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="group text-white/70 hover:text-blue-300 transition-all duration-300 transform hover:scale-110" 
                aria-label="Twitter"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Fun Easter Egg */}
        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <div className="text-xs text-white/50 animate-pulse">
            Made with 💖 and premium spandex technology
          </div>
        </div>
      </div>
    </footer>
  );
};
