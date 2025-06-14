import React from 'react';
import { Link } from 'react-router-dom';
import { AudioPlayer } from '../components/AudioPlayer';
import { HeadphonesIcon, BookOpenIcon } from '../components/Icons';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const AudioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-x-hidden">
      {/* Epic Audio Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-700 animate-gradient-shift" />
        
        {/* Floating Audio Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-32 h-32 bg-white/10 rounded-full animate-float-gentle" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full animate-bounce-subtle" />
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse-soft" />
          <div className="absolute bottom-20 right-16 w-28 h-28 bg-white/10 rounded-full animate-float-gentle" />
          
          {/* Audio Wave Visualization */}
          <div className="absolute top-1/2 left-8 flex space-x-2">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="w-1 bg-white/30 rounded-full animate-pulse-soft"
                style={{ 
                  height: `${Math.random() * 40 + 20}px`,
                  animationDelay: `${i * 0.1}s` 
                }}
              />
            ))}
          </div>
          
          <div className="absolute top-1/3 right-12 flex space-x-2">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="w-1 bg-white/30 rounded-full animate-bounce-subtle"
                style={{ 
                  height: `${Math.random() * 50 + 15}px`,
                  animationDelay: `${i * 0.15}s` 
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Audio Badge */}
          <div className="inline-block mb-8 animate-scale-in">
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white font-bold text-sm uppercase tracking-wider flex items-center">
                🎧 Audio Adventure Experience 🎧
              </span>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-pink-200 via-white to-green-200 bg-clip-text text-transparent">
              Listen to
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-white to-purple-200 bg-clip-text text-transparent">
              The Adventure
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 font-light mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Immerse yourself in the full audio experience. Follow Olivia and Captain Kiwi through London's most bizarre mystery with professional narration and immersive sound design.
          </p>
        </div>
      </section>

      {/* Main Audio Player Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float-gentle" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-8">
              Start Your Journey
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the mystery unfold with every word, every clue, and every thrilling moment.
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

      {/* Story Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse-soft" />
          <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float-gentle" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">
              Audio Experience Features
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover what makes this audio adventure truly special
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                🎭
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-serif">Professional Voice Acting</h3>
              <p className="text-white/80 leading-relaxed">
                Each character comes alive through expert AI narration, bringing distinct personalities to Olivia, Captain Kiwi, and the entire cast.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                🌆
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-serif">Immersive London Atmosphere</h3>
              <p className="text-white/80 leading-relaxed">
                Feel like you're jogging along the Thames and exploring London's markets with rich ambient sounds and atmospheric effects.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                🎵
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-serif">Dynamic Sound Design</h3>
              <p className="text-white/80 leading-relaxed">
                Original music and sound effects enhance every twist, turn, and revelation in this quirky superhero mystery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Story Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-24 h-24 bg-white/10 rounded-full animate-bounce-subtle" />
          <div className="absolute bottom-20 right-16 w-32 h-32 bg-white/10 rounded-full animate-float-gentle" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-8">
              About This Adventure
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">The Story</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  What begins as a simple morning jog along the Thames quickly escalates into London's most peculiar mystery. Join product manager Olivia Foxtron and the enigmatic Captain Kiwi as they uncover a conspiracy involving missing vegetables, mysterious sausage patterns, and a severed toe with suspicious nail polish.
                </p>
                <p className="text-white/90 leading-relaxed">
                  This isn't your typical detective story—it's a hilarious, heartwarming adventure about two unlikely heroes united by their love of spandex and their dedication to justice.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">Technical Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
                    <span className="text-white/90"><strong>Duration:</strong> Full adventure experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                    <span className="text-white/90"><strong>Quality:</strong> High-definition audio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-white/90"><strong>Format:</strong> Streaming MP3</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                    <span className="text-white/90"><strong>Genre:</strong> Comedy Mystery Adventure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-12 left-16 w-20 h-20 bg-white/10 rounded-full animate-pulse-soft" />
          <div className="absolute bottom-16 right-20 w-28 h-28 bg-white/10 rounded-full animate-bounce-subtle" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Want More Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              After listening to the audio adventure, dive deeper into the mystery by reading the full story and discovering hidden details you might have missed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/story"
                className="group bg-white text-emerald-600 font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-white/25"
              >
                <div className="flex items-center">
                  <BookOpenIcon className="w-5 h-5 mr-3" />
                  Read the Full Story
                </div>
              </Link>
              
              <Link 
                to="/"
                className="group border-2 border-white text-white font-bold py-4 px-8 rounded-2xl text-lg transform transition-all duration-300 hover:bg-white hover:text-emerald-600 hover:scale-105"
              >
                <div className="flex items-center">
                  <span className="mr-3">🦸‍♀️</span>
                  Meet the Heroes
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
