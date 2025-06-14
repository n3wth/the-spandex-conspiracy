import React, { useState } from 'react';

interface ClueCardProps {
  icon: string;
  title: string;
  description: string;
  evidence: string;
  color: string;
  delay?: number;
}

const ClueCard: React.FC<ClueCardProps> = ({ 
  icon, title, description, evidence, color, delay = 0 
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 animate-slide-up`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <div className={`card p-6 h-64 bg-gradient-to-br ${color} border-0 overflow-hidden relative`}>
        {/* Mystery Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-2 h-full">
            {Array.from({ length: 36 }, (_, i) => (
              <div key={i} className="bg-white rounded-sm opacity-20" />
            ))}
          </div>
        </div>
        
        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{icon}</div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white backdrop-blur-sm">
              {isRevealed ? 'REVEALED' : 'CLUE'}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 font-serif">{title}</h3>
          
          <div className="flex-1 overflow-hidden">
            <div className={`transform transition-all duration-500 ${
              isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-75'
            }`}>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                {description}
              </p>
              
              {isRevealed && (
                <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm animate-fade-in">
                  <p className="text-white font-medium text-xs uppercase tracking-wider mb-1">Evidence:</p>
                  <p className="text-white/95 text-sm">{evidence}</p>
                </div>
              )}
            </div>
          </div>
          
          {!isRevealed && (
            <div className="text-center">
              <div className="text-white/60 text-xs animate-pulse">Click to reveal evidence</div>
            </div>
          )}
        </div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 border-2 border-white/20 rounded-3xl group-hover:border-white/40 transition-colors duration-300" />
      </div>
    </div>
  );
};

export const MysteryElements: React.FC = () => {
  const clues = [
    {
      icon: "🦶",
      title: "The Severed Toe",
      description: "A mysterious toe found at the crime scene, perfectly preserved with 'Midnight Mischief' nail polish.",
      evidence: "Surgical precision cut. Limited edition polish from last spring. Links to sausage factory accident.",
      color: "from-red-600 via-red-700 to-rose-800",
      delay: 0
    },
    {
      icon: "🌭",
      title: "The Sausage Pattern",
      description: "Eight sausages, each exactly 8.75 inches long. Not a coincidence—it's a geometric pattern across London!",
      evidence: "Every theft location is exactly 8.75 kilometers from a specialty sausage shop. The golden ratio of meat and vegetable harmony.",
      color: "from-amber-600 via-orange-700 to-red-800",
      delay: 100
    },
    {
      icon: "🥬",
      title: "Missing Vegetables",
      description: "Prize-winning produce disappearing from London's finest markets. Someone has a vendetta against root vegetables.",
      evidence: "Pattern includes parsnips, turnips, and cabbages. All award-winning specimens. Thief shows expert knowledge of vegetable quality.",
      color: "from-green-600 via-emerald-700 to-teal-800",
      delay: 200
    },
    {
      icon: "🎭",
      title: "The Culprit",
      description: "Nigel Pumpernickel: former sausage factory worker turned rogue produce liberator with a mathematical obsession.",
      evidence: "Lost toe in sausage-making accident. Developed vendetta against both produce vendors and foot-based measurement systems.",
      color: "from-purple-600 via-violet-700 to-indigo-800",
      delay: 300
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-bounce-subtle" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            🔍 Case Files
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">
            Unravel the Mystery
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Follow the clues that led our spandex-clad heroes through London's most bizarre conspiracy. 
            Click each card to reveal the evidence.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clues.map((clue, index) => (
            <ClueCard
              key={index}
              {...clue}
            />
          ))}
        </div>
        
        {/* Investigation Timeline */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">The Investigation Timeline</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
              <h4 className="text-white font-semibold mb-2">The Meeting</h4>
              <p className="text-white/70 text-sm">Morning jog by the Thames</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
              <h4 className="text-white font-semibold mb-2">The Discovery</h4>
              <p className="text-white/70 text-sm">Mysterious toe at crime scene</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
              <h4 className="text-white font-semibold mb-2">The Pattern</h4>
              <p className="text-white/70 text-sm">Sausage measurements revealed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
              <h4 className="text-white font-semibold mb-2">The Capture</h4>
              <p className="text-white/70 text-sm">Justice in spandex</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 