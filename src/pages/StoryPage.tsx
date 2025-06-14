import React, { useState, useEffect } from 'react';
import { parseStoryContent } from '../utils';
import { Loader2Icon, FeatherIcon, ArrowLeftIcon, ArrowRightIcon, BookOpenIcon } from '../components/Icons';

export const StoryPage: React.FC = () => {
  const [storyContent, setStoryContent] = useState<string>('');
  const [chapters, setChapters] = useState<Array<{ title: string; content: string }>>([]);
  const [selectedChapter, setSelectedChapter] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/STORY.md')
      .then(response => response.text())
      .then(content => {
        setStoryContent(content);
        const parsedChapters = parseStoryContent(content);
        setChapters(parsedChapters);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading story:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-scale-in">
          <Loader2Icon className="w-16 h-16 text-pink-400 animate-spin mb-8 mx-auto" />
          <div className="text-2xl font-bold text-white mb-4 font-serif">Loading the conspiracy...</div>
          <p className='text-lg text-white/80'>Unraveling the mystery, one thread at a time.</p>
          <div className="mt-8 flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-3 h-3 bg-pink-400/50 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Epic Comic Book Style Header */}
      <div className="relative py-32 text-center bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-16 w-32 h-32 bg-pink-500/20 rounded-full animate-float-gentle" />
          <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-500/20 rounded-full animate-bounce-subtle" />
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-500/20 rounded-full animate-pulse-soft" />
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-blue-500/20 rounded-full animate-float-gentle" />
        </div>
        
        {/* Comic Book Style Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-3 h-full">
            {Array.from({ length: 64 }, (_, i) => (
              <div key={i} className="bg-white/30 rounded-lg animate-pulse-soft" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <div className="inline-block mb-8">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-white font-bold text-sm uppercase tracking-wider flex items-center">
                  📚 Interactive Story Experience 📚
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-pink-200 via-white to-green-200 bg-clip-text text-transparent">
                The Spandex
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-white to-purple-200 bg-clip-text text-transparent">
                Conspiracy
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dive deep into London's most peculiar mystery. Follow our spandex-clad heroes 
              through each thrilling chapter of adventure, clues, and unexpected revelations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Enhanced Chapter Navigation */}
          {chapters.length > 0 && (
            <aside className="lg:col-span-4 py-6 lg:py-0">
              <div className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 p-8 rounded-3xl sticky top-32 shadow-2xl shadow-purple-500/10 animate-slide-up">
                <div className='flex items-center mb-8'>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                    📖
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-serif">Story Chapters</h3>
                    <p className="text-sm text-gray-500">Choose your adventure</p>
                  </div>
                </div>
                
                <nav className="space-y-3">
                  {chapters.map((chapter, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedChapter(index)}
                      className={`w-full text-left px-6 py-4 rounded-2xl font-medium transition-all duration-300 group transform hover:scale-105 ${
                        selectedChapter === index
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-purple-50/80 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          selectedChapter === index 
                            ? 'bg-white/20 text-white' 
                            : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-xs mb-1 opacity-80 uppercase tracking-wider">
                            Chapter {index + 1}
                          </div>
                          <div className="font-bold text-sm leading-tight">
                            {chapter.title}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
                
                {/* Chapter Progress */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>Progress</span>
                    <span>{selectedChapter + 1} of {chapters.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((selectedChapter + 1) / chapters.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Enhanced Story Content */}
          <main className={`${chapters.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} mt-8 lg:mt-0`}>
            <article className="bg-white/90 backdrop-blur-sm border-2 border-purple-100 p-10 sm:p-12 md:p-16 rounded-3xl shadow-2xl shadow-purple-500/10 animate-slide-up" style={{ animationDelay: '200ms' }}>
              {chapters.length > 0 ? (
                <div>
                  <header className="mb-12 border-b-2 border-purple-100 pb-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                        Chapter {selectedChapter + 1}
                      </div>
                      <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider">
                        Mystery Adventure
                      </div>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                      {chapters[selectedChapter].title}
                    </h2>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full" />
                      <div className="text-sm text-gray-500 font-medium">
                        🦸‍♀️ Spandex Heroes in Action 🦸‍♂️
                      </div>
                    </div>
                  </header>
                  
                  <div className="prose prose-lg max-w-none text-gray-900 leading-relaxed space-y-8">
                    {chapters[selectedChapter].content.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="text-lg leading-loose font-medium text-gray-800 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                          {paragraph}
                        </p>
                      )
                    ))}
                  </div>
                  
                  {/* Enhanced Chapter Navigation */}
                  <footer className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-12 border-t-2 border-purple-100">
                    <button
                      onClick={() => setSelectedChapter(Math.max(0, selectedChapter - 1))}
                      disabled={selectedChapter === 0}
                      className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        selectedChapter === 0 
                          ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' 
                          : 'bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 shadow-lg hover:shadow-purple-500/25'
                      }`}
                    >
                      <ArrowLeftIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                      <span>Previous Chapter</span>
                    </button>
                    
                    <div className="flex items-center space-x-4 my-6 sm:my-0">
                      <div className="flex space-x-2">
                        {chapters.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === selectedChapter 
                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125' 
                                : 'bg-gray-300 hover:bg-purple-300 cursor-pointer'
                            }`}
                            onClick={() => setSelectedChapter(index)}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedChapter(Math.min(chapters.length - 1, selectedChapter + 1))}
                      disabled={selectedChapter === chapters.length - 1}
                      className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        selectedChapter === chapters.length - 1 
                          ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' 
                          : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-pink-500/50'
                      }`}
                    >
                      <span>Next Chapter</span>
                      <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </footer>
                </div>
              ) : (
                <div className="prose prose-lg max-w-none text-gray-900 leading-relaxed space-y-8">
                  {storyContent.split('\n').map((line, index) => (
                    line.trim() && (
                      <p key={index} className="text-lg leading-loose font-medium text-gray-800">
                        {line}
                      </p>
                    )
                  ))}
                </div>
              )}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};
