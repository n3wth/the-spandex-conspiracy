import React from 'react';
import { Link } from 'react-router-dom';
import { AudioPlayer } from '../components/AudioPlayer';
import { HeadphonesIcon, BookOpenIcon, ArrowRightIcon, SearchIcon, FeatherIcon, MapPinIcon, ChevronDownIcon } from '../components/Icons';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden"> 
      {/* Immersive Hero Section - Inspired by Apple & Every.to */}
      <section className="relative h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-system-blue/10 to-system-purple/5 opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-system-orange/5 via-transparent to-system-pink/10 opacity-60"></div>
          
          <FeatherIcon className="absolute top-1/4 left-1/4 w-24 h-24 text-system-blue/10 opacity-50 animate-float-gentle blur-sm" style={{ animationDelay: '0s' }} />
          <MapPinIcon className="absolute top-1/2 right-1/4 w-20 h-20 text-system-purple/10 opacity-40 animate-float-gentle blur-sm" style={{ animationDelay: '1.5s' }} />
          <SearchIcon className="absolute bottom-1/4 left-1/3 w-16 h-16 text-system-orange/10 opacity-30 animate-float-gentle blur-sm" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-spandex-primary/5 via-spandex-accent/3 to-spandex-primary/2 rounded-full blur-2xl animate-float-gentle opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-20 left-10 w-56 h-56 bg-gradient-to-tl from-system-green/5 via-system-teal/3 to-system-green/2 rounded-full blur-2xl animate-float-gentle opacity-40" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Animated Title */}
          <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-4 bg-gradient-to-r from-system-text via-system-blue to-system-purple bg-clip-text text-transparent">
              The Spandex Conspiracy
            </h1>
            <div className="absolute -top-4 -left-8 w-16 h-16">
              <FeatherIcon className="w-full h-full text-spandex-accent/30 opacity-70 animate-pulse-soft" />
            </div>
            <div className="absolute -bottom-4 -right-8 w-12 h-12">
              <MapPinIcon className="w-full h-full text-system-blue/30 opacity-70 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Subtitle / Tagline */}
          <p 
            className="text-xl sm:text-2xl text-system-text-secondary text-balance leading-relaxed mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Unravel London's most peculiar mystery. An immersive audio adventure that begins with a simple jog...
          </p>

          {/* Call to Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Link
              to="/audio"
              className="group relative flex items-center justify-center w-full sm:w-auto overflow-hidden bg-gradient-to-r from-system-blue to-system-blue-secondary text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-system-blue/40 focus:outline-none focus:ring-4 focus:ring-system-blue/30"
            >
              <HeadphonesIcon className="w-5 h-5 mr-2.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-lg">Start Listening</span>
              <ArrowRightIcon className="w-5 h-5 ml-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/story"
              className="group relative flex items-center justify-center w-full sm:w-auto overflow-hidden bg-white/70 backdrop-blur-lg text-system-text font-semibold px-8 py-4 rounded-xl border border-system-separator shadow-md transition-all duration-300 hover:scale-105 hover:shadow-system-gray-tertiary/30 hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-system-blue/20"
            >
              <BookOpenIcon className="w-5 h-5 mr-2.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-lg">Read the Story</span>
            </Link>
          </div>
        </div>
        
        {/* Subtle Scroll Indicator (Optional) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <ChevronDownIcon className="w-6 h-6 text-system-text-tertiary" />
        </div>
      </section>

      {/* Rest of the page content (e.g., features, about) can go here */}
      {/* Example: Audio Player Teaser */}
      <section className="py-16 sm:py-24 bg-system-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-system-text mb-6">Experience The Adventure</h2>
          <p className="text-lg text-system-text-secondary mb-10 max-w-2xl mx-auto">
            Dive into the full audio experience. High-quality sound, professional narration, and an engaging plot await.
          </p>
          <div className="max-w-2xl mx-auto shadow-2xl rounded-xl overflow-hidden">
            {/* Corrected prop name to coverImageUrl */}
            <AudioPlayer src={MP3_URL} coverImageUrl={COVER_ART_URL} title="The Spandex Conspiracy - Chapter 1" />
          </div>
        </div>
      </section>

      {/* Example: Story Teaser */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-system-text mb-6">Follow The Clues</h2>
          <p className="text-lg text-system-text-secondary mb-10 max-w-2xl mx-auto">
            Read the full story, uncover hidden details, and piece together the conspiracy at your own pace.
          </p>
          <Link 
            to="/story"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-spandex-primary to-spandex-accent text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-spandex-primary/40 focus:outline-none focus:ring-4 focus:ring-spandex-primary/30"
          >
            <BookOpenIcon className="w-5 h-5 mr-2.5 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-lg">Explore the Narrative</span>
            <ArrowRightIcon className="w-5 h-5 ml-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Footer Placeholder - To be designed */}
      <footer className="py-12 bg-system-gray-quinary border-t border-system-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-system-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} The Spandex Conspiracy. All rights reserved.
          </p>
          {/* Add social media icons or other links here */}
        </div>
      </footer>
    </div>
  );
};
