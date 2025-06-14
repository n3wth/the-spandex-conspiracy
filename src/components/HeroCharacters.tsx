import React from 'react';
import { Link } from 'react-router-dom';

interface CharacterCardProps {
  name: string;
  title: string;
  description: string;
  color: string;
  bgGradient: string;
  icon: string;
  delay?: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ 
  name, title, description, color, bgGradient, icon, delay = 0 
}) => {
  return (
    <div 
      className={`relative group p-8 h-80 ${bgGradient} rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-3xl`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Superhero Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-6xl">{icon}</div>
        <div className="absolute bottom-4 right-4 text-4xl opacity-50">{icon}</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5">{icon}</div>
      </div>
      
      {/* Character Info */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${color} bg-white/20 backdrop-blur-sm mb-4`}>
            Hero
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">{name}</h3>
          <p className={`${color} font-semibold mb-4 text-lg`}>{title}</p>
        </div>
        
        <div>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Hover Effect Overlay - enhances the gradient instead of overriding it */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-white/30 rounded-3xl group-hover:border-white/50 transition-colors duration-300" />
    </div>
  );
};

export const HeroCharacters: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500/20 rounded-full animate-bounce-subtle" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-500/20 rounded-full animate-float-gentle" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-500/20 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce-subtle" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">
            Meet Your Heroes
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Two unlikely heroes united by their love of spandex and their dedication to solving London's most bizarre mysteries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <CharacterCard
            name="Olivia Foxtron"
            title="The Strategic Dynamo"
            description="Product manager by day, mystery solver by dawn. Her analytical mind and hot-pink spandex make her London's most fashionable detective."
            color="text-pink-300"
            bgGradient="bg-gradient-to-br from-pink-600 via-pink-700 to-rose-800"
            icon="💪"
            delay={100}
          />
          
          <CharacterCard
            name="Captain Kiwi"
            title="The Emerald Guardian"
            description="Fruit quality inspector turned superhero. With his signature cape and kiwi helmet, he brings both produce expertise and heroic flair to every case."
            color="text-green-300"
            bgGradient="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800"
            icon="🥝"
            delay={200}
          />
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">Ready for Adventure?</h3>
            <p className="text-white/80 mb-6">Join Olivia and Captain Kiwi as they unravel the mystery of the missing produce and the peculiar case of the severed toe.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/audio"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-2xl text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 border-0"
              >
                🎧 Listen to the Adventure
              </Link>
              <Link 
                to="/story"
                className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 font-bold py-3 px-6 rounded-2xl text-lg transform transition-all duration-300 hover:scale-105"
              >
                📖 Read the Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 