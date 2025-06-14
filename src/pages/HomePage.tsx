import React from 'react';
import { Link } from 'react-router-dom';
import { AudioPlayer } from '../components/AudioPlayer';
import { HeroCharacters } from '../components/HeroCharacters';
import { MysteryElements } from '../components/MysteryElements';
import { HeadphonesIcon, BookOpenIcon } from '../components/Icons';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden"> 
      {/* Epic Superhero Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-700 animate-gradient-shift" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float-gentle" />
          <div className="absolute top-40 right-16 w-24 h-24 bg-white/15 rounded-full animate-bounce-subtle" />
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse-soft" />
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-float-gentle" />
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/20 rounded-full animate-bounce-subtle" />
          <div className="absolute top-60 right-32 w-12 h-12 bg-white/15 rounded-full animate-pulse-soft" />
        </div>
        
        {/* Comic Book Style Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full w-full">
            {Array.from({ length: 144 }, (_, i) => (
              <div key={i} className="bg-white/20 rounded-sm animate-pulse-soft" style={{ animationDelay: `${i * 50}ms` }} />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-8 animate-scale-in">
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                🦸‍♀️ Superhero Mystery 🦸‍♂️
              </span>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-pink-200 via-white to-green-200 bg-clip-text text-transparent">
              The Spandex
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-white to-purple-200 bg-clip-text text-transparent animate-spring">
              Conspiracy
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-white/90 font-light mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            When morning joggers become unlikely heroes, London's most bizarre mystery unfolds. 
            <span className="font-semibold text-pink-200"> Two spandex-clad detectives</span> must solve the case 
            of the missing vegetables and the mysterious severed toe.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link
              to="/audio"
              className="group relative overflow-hidden bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center">
                <HeadphonesIcon className="w-6 h-6 mr-3" />
                🎧 Start Your Adventure
              </div>
            </Link>
            
            <Link
              to="/story"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <div className="flex items-center">
                <BookOpenIcon className="w-6 h-6 mr-3" />
                📖 Read the Mystery
              </div>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Characters Section */}
      <HeroCharacters />
      
      {/* Mystery Elements Section */}
      <MysteryElements />

      {/* Enhanced Audio Experience Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float-gentle" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                🎵 Immersive Experience
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Experience the Full Adventure
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Dive into the complete audio experience with professional narration, 
              immersive sound design, and the full mystery unfolding before your ears.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <AudioPlayer 
              src={MP3_URL} 
              coverImageUrl={COVER_ART_URL} 
              title="The Spandex Conspiracy - Full Audio Adventure" 
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-16 w-24 h-24 bg-white/10 rounded-full animate-bounce-subtle" />
          <div className="absolute bottom-16 right-20 w-32 h-32 bg-white/10 rounded-full animate-float-gentle" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Ready to Join the Investigation?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Follow Olivia Foxtron and Captain Kiwi as they navigate through London's most peculiar mystery. 
              Every clue leads deeper into the conspiracy, every revelation more surprising than the last.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/story"
                className="group bg-white text-green-600 font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-white/25"
              >
                <div className="flex items-center">
                  <BookOpenIcon className="w-5 h-5 mr-3" />
                  Explore the Full Story
                </div>
              </Link>
              
              <Link 
                to="/audio"
                className="group border-2 border-white text-white font-bold py-4 px-8 rounded-2xl text-lg transform transition-all duration-300 hover:bg-white hover:text-green-600 hover:scale-105"
              >
                <div className="flex items-center">
                  <HeadphonesIcon className="w-5 h-5 mr-3" />
                  Listen Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
