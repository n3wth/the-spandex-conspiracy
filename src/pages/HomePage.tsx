import React from 'react';
import { Link } from 'react-router-dom';
import { AudioPlayer } from '../components/AudioPlayer';
import { PlayIcon, BookOpenIcon } from '../components/Icons';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Stunning Premium Background */}
      <div className="fixed inset-0 -z-10">
        {/* Multi-layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-system-blue/3 to-system-purple/5"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-system-orange/2 via-transparent to-system-pink/3"></div>
        
        {/* Dynamic floating orbs with enhanced animations */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-system-blue/15 via-system-teal/10 to-system-blue/5 rounded-full blur-3xl animate-float-gentle opacity-70"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-system-purple/12 via-system-pink/8 to-system-purple/4 rounded-full blur-3xl animate-float-gentle opacity-60" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-br from-system-orange/10 via-system-yellow/6 to-system-orange/3 rounded-full blur-3xl animate-float-gentle opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-system-green/8 via-system-teal/5 to-system-green/2 rounded-full blur-3xl animate-float-gentle opacity-40" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-spandex-primary/12 via-spandex-accent/8 to-spandex-primary/4 rounded-full blur-3xl animate-float-gentle opacity-60" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-system-blue rounded-full animate-pulse-soft"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-system-purple rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-system-orange rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-system-green rounded-full animate-pulse-soft" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-system-pink rounded-full animate-pulse-soft" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        {/* Hero background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          {/* Conspiracy Icons - Static positioned for stability */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-16 left-16 text-4xl animate-float-gentle">🔍</div>
            <div className="absolute top-24 right-20 text-3xl animate-float-gentle" style={{ animationDelay: '1s' }}>🏃‍♀️</div>
            <div className="absolute bottom-32 left-20 text-2xl animate-float-gentle" style={{ animationDelay: '2s' }}>🥝</div>
            <div className="absolute bottom-40 right-16 text-3xl animate-float-gentle" style={{ animationDelay: '1.5s' }}>🌉</div>
            <div className="absolute top-1/2 left-8 text-2xl animate-float-gentle" style={{ animationDelay: '0.5s' }}>🧩</div>
            <div className="absolute top-1/3 right-8 text-2xl animate-float-gentle" style={{ animationDelay: '2.5s' }}>🕵️</div>
          </div>

          <div className="space-y-12">
            {/* Premium Title with Subtle Effects */}
            <div className="relative">
              <h1 className="text-large-title font-bold text-balance mb-6 bg-gradient-to-r from-system-text via-system-blue to-system-text bg-clip-text text-transparent">
                The Spandex Conspiracy
              </h1>
              <div className="flex items-center justify-center space-x-3 text-title3">
                <div className="w-1 h-8 bg-gradient-to-b from-transparent via-system-blue to-transparent rounded-full animate-pulse-soft"></div>
                <span className="text-system-text-secondary font-medium">London's Greatest Mystery</span>
                <div className="w-1 h-8 bg-gradient-to-b from-transparent via-system-orange to-transparent rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <div className="animate-slide-up max-w-4xl mx-auto" style={{ animationDelay: '0.3s' }}>
              <p className="text-title3 text-system-text-secondary text-balance leading-relaxed mb-6">
                An unusual morning jog turns into an extraordinary adventure through London's most mysterious conspiracy.
              </p>
              <div className="flex items-center justify-center space-x-8 text-body text-system-text-tertiary">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-system-green rounded-full animate-pulse-soft"></span>
                  <span>Premium Audio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-system-blue rounded-full animate-pulse-soft" style={{ animationDelay: '0.3s' }}></span>
                  <span>Interactive Story</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-system-orange rounded-full animate-pulse-soft" style={{ animationDelay: '0.6s' }}></span>
                  <span>London Adventure</span>
                </div>
              </div>
            </div>
            
            {/* Premium Action Buttons */}
            <div className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.5s' }}>
              <Link
                to="/audio"
                className="group relative overflow-hidden bg-gradient-to-r from-system-blue to-system-blue-secondary text-white font-semibold px-12 py-6 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-system-blue/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <PlayIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-headline">Listen Now</span>
                </div>
              </Link>
              
              <Link
                to="/story"
                className="group relative overflow-hidden bg-white/80 backdrop-blur-xl text-system-text font-semibold px-12 py-6 rounded-2xl border border-white/30 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-system-blue/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-system-blue/10 to-system-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <BookOpenIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-system-blue" />
                  <span className="text-headline">Read Story</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <div className="w-8 h-12 border-2 border-system-text-tertiary/50 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
            <div className="w-1.5 h-4 bg-gradient-to-b from-system-blue to-transparent rounded-full mt-2 animate-pulse-soft"></div>
          </div>
        </div>
      </section>

      {/* Premium Audio Player Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-system-background-secondary/30 to-system-background/80"></div>
        
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-system-blue to-system-purple rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎧</span>
              </div>
              <h2 className="text-title1 font-bold bg-gradient-to-r from-system-text to-system-blue bg-clip-text text-transparent">
                Experience the Adventure
              </h2>
            </div>
            <p className="text-body text-system-text-secondary max-w-3xl mx-auto text-balance leading-relaxed">
              Immerse yourself in London's most bizarre mystery with premium audio narration, atmospheric sound design, and interactive storytelling.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-system-blue/20 via-system-purple/20 to-system-orange/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <AudioPlayer
                  src={MP3_URL}
                  title="The Spandex Conspiracy"
                  artist="Chapter 1: An Unusual Morning Jog"
                  coverImageUrl={COVER_ART_URL}
                  className="card-elevated p-8 max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Characters Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-system-pink to-system-purple rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">👥</span>
              </div>
              <h2 className="text-title1 font-bold bg-gradient-to-r from-system-text to-system-purple bg-clip-text text-transparent">
                Meet the Heroes
              </h2>
            </div>
            <p className="text-body text-system-text-secondary max-w-3xl mx-auto text-balance leading-relaxed">
              Two unlikely allies united by spandex, determination, and an insatiable curiosity for London's most bizarre mystery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Olivia Foxtron */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-system-pink/20 via-system-purple/20 to-system-pink/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative card p-10 transition-all duration-500 group-hover:scale-105">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-system-pink to-system-purple rounded-3xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-white font-bold text-title2">OF</span>
                    </div>
                    
                    {/* Clean floating icons */}
                    <div className="absolute -top-2 -right-2 text-2xl animate-float-gentle">🏃‍♀️</div>
                    <div className="absolute -bottom-2 -left-2 text-xl animate-float-gentle" style={{ animationDelay: '1s' }}>💼</div>
                  </div>
                  
                  <h3 className="text-title2 font-bold mb-4 group-hover:text-system-pink transition-colors duration-300">
                    Olivia Foxtron
                  </h3>
                  <p className="text-body text-system-text-secondary mb-8 text-balance leading-relaxed">
                    London's youngest senior product manager. Her neon-pink spandex cuts through morning mist like a beacon of determination and analytical brilliance.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {['Analytical', 'Determined', 'Spandex Expert'].map((trait, i) => (
                      <span 
                        key={trait}
                        className="px-4 py-2 bg-gradient-to-r from-system-pink/10 to-system-purple/10 text-system-text-secondary rounded-full text-footnote font-medium border border-system-pink/20 hover:border-system-pink/40 transition-colors duration-300"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Captain Kiwi */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-system-green/20 via-system-teal/20 to-system-green/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative card p-10 transition-all duration-500 group-hover:scale-105">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-system-green to-system-teal rounded-3xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-white text-title2">🥝</span>
                    </div>
                    
                    {/* Clean floating icons */}
                    <div className="absolute -top-2 -right-2 text-2xl animate-float-gentle">🦸‍♂️</div>
                    <div className="absolute -bottom-2 -left-2 text-xl animate-float-gentle" style={{ animationDelay: '1s' }}>🍃</div>
                  </div>
                  
                  <h3 className="text-title2 font-bold mb-4 group-hover:text-system-green transition-colors duration-300">
                    Captain Kiwi
                  </h3>
                  <p className="text-body text-system-text-secondary mb-8 text-balance leading-relaxed">
                    A mysterious figure in emerald spandex with a distinctive kiwi-shaped helmet. Self-proclaimed leader of all things fruit and defender of natural justice.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {['Mysterious', 'Fruit Expert', 'Cape Enthusiast'].map((trait, i) => (
                      <span 
                        key={trait}
                        className="px-4 py-2 bg-gradient-to-r from-system-green/10 to-system-teal/10 text-system-text-secondary rounded-full text-footnote font-medium border border-system-green/20 hover:border-system-green/40 transition-colors duration-300"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-system-background to-system-background-secondary/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-system-orange to-system-yellow rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">✨</span>
              </div>
              <h2 className="text-title1 font-bold bg-gradient-to-r from-system-text to-system-orange bg-clip-text text-transparent">
                Why You'll Love It
              </h2>
            </div>
            <p className="text-body text-system-text-secondary max-w-3xl mx-auto text-balance leading-relaxed">
              A unique blend of mystery, humor, and London atmosphere that will keep you engaged from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: '🎧', title: 'Premium Audio', desc: 'Crystal clear narration with immersive sound effects and atmospheric music', color: 'from-system-blue to-system-blue-secondary' },
              { icon: '🎭', title: 'Character Voices', desc: 'Unique voices and personalities bring each character to vivid life', color: 'from-system-green to-system-teal' },
              { icon: '🌆', title: 'London Atmosphere', desc: 'Authentic sounds of the Thames and city streets create perfect ambiance', color: 'from-system-orange to-system-yellow' }
            ].map((feature, i) => (
              <div key={feature.title} className="group relative animate-slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className={`absolute -inset-6 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-700`}></div>
                <div className="relative text-center card p-8 transition-all duration-500 group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-title3 font-semibold mb-4">{feature.title}</h3>
                  <p className="text-body text-system-text-secondary text-balance leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-system-blue/5 via-system-purple/5 to-system-orange/5"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div className="space-y-12">
            <div className="relative">
              <h2 className="text-title1 font-bold mb-6 bg-gradient-to-r from-system-blue via-system-purple to-system-orange bg-clip-text text-transparent">
                Ready to Join the Conspiracy?
              </h2>
              <p className="text-title3 text-system-text-secondary max-w-3xl mx-auto text-balance leading-relaxed">
                The mystery awaits. Help Olivia and Captain Kiwi solve London's most bizarre case in this unforgettable audio adventure.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                to="/audio"
                className="group relative overflow-hidden bg-gradient-to-r from-system-blue to-system-purple text-white font-bold px-16 py-8 rounded-3xl shadow-2xl transition-all duration-700 hover:scale-110 hover:shadow-3xl focus:outline-none focus:ring-6 focus:ring-system-blue/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center space-x-4">
                  <PlayIcon className="w-8 h-8 transition-transform duration-500 group-hover:scale-125" />
                  <span className="text-title3">Begin Adventure</span>
                </div>
              </Link>
              
              <Link
                to="/story"
                className="group relative overflow-hidden bg-white/90 backdrop-blur-xl text-system-text font-bold px-16 py-8 rounded-3xl border-2 border-white/40 shadow-xl transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:bg-white focus:outline-none focus:ring-6 focus:ring-system-blue/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-system-blue/10 via-system-purple/10 to-system-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center space-x-4">
                  <BookOpenIcon className="w-8 h-8 transition-transform duration-500 group-hover:scale-125 group-hover:text-system-blue" />
                  <span className="text-title3">Explore Story</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
