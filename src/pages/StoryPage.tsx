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
      <div className="min-h-screen flex items-center justify-center bg-[#fafbfc]">
        <div className="text-center p-8 rounded-xl bg-white shadow-sm border border-gray-100">
          <Loader2Icon className="w-12 h-12 text-system-blue animate-spin mb-6 mx-auto" />
          <div className="text-headline font-semibold text-gray-700">Loading the conspiracy...</div>
          <p className='text-subheadline text-gray-400 mt-2'>Unraveling the mystery, one thread at a time.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-900">
      {/* Header */}
      <div className="w-full py-20 md:py-28 text-center bg-white border-b border-gray-100 mb-12">
        <BookOpenIcon className="w-16 h-16 text-system-blue mb-6 mx-auto" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Spandex Conspiracy</h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
          A thrilling adventure through London's most mysterious conspiracy, chapter by chapter.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Chapter Navigation */}
          {chapters.length > 0 && (
            <aside className="lg:col-span-3 py-6 lg:py-0">
              <div className="bg-white border border-gray-100 p-6 rounded-2xl sticky top-28 shadow-sm">
                <div className='flex items-center mb-6'>
                  <FeatherIcon className="w-6 h-6 text-system-blue mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Chapters</h3>
                </div>
                <nav className="space-y-2">
                  {chapters.map((chapter, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedChapter(index)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                        selectedChapter === index
                          ? 'bg-system-blue text-white shadow-sm scale-105'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold text-xs mb-1 opacity-80 group-hover:opacity-100">
                        Chapter {index + 1}
                      </div>
                      <div className="truncate text-base group-hover:text-gray-900">
                        {chapter.title}
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Story Content */}
          <main className={`${chapters.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'} mt-8 lg:mt-0`}>
            <article className="bg-white border border-gray-100 p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm">
              {chapters.length > 0 ? (
                <div>
                  <header className="mb-10 border-b border-gray-100 pb-8">
                    <div className="text-xs font-medium text-system-blue mb-2 tracking-wider uppercase">
                      Chapter {selectedChapter + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                      {chapters[selectedChapter].title}
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-system-blue to-system-purple rounded-full"></div>
                  </header>
                  
                  <div className="prose prose-lg max-w-none text-gray-900 leading-relaxed space-y-6">
                    {chapters[selectedChapter].content.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="text-base leading-loose">
                          {paragraph}
                        </p>
                      )
                    ))}
                  </div>
                  
                  {/* Chapter Navigation Buttons */}
                  <footer className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-10 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedChapter(Math.max(0, selectedChapter - 1))}
                      disabled={selectedChapter === 0}
                      className={`btn-secondary group flex items-center space-x-2 ${
                        selectedChapter === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                      }`}
                    >
                      <ArrowLeftIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                      <span>Previous Chapter</span>
                    </button>
                    
                    <div className="text-xs text-gray-400 my-4 sm:my-0">
                      Page {selectedChapter + 1} of {chapters.length}
                    </div>
                    
                    <button
                      onClick={() => setSelectedChapter(Math.min(chapters.length - 1, selectedChapter + 1))}
                      disabled={selectedChapter === chapters.length - 1}
                      className={`btn-primary group flex items-center space-x-2 ${
                        selectedChapter === chapters.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-system-blue-dark'
                      }`}
                    >
                      <span>Next Chapter</span>
                      <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </footer>
                </div>
              ) : (
                <div className="prose prose-lg max-w-none text-gray-900 leading-relaxed space-y-6">
                  {storyContent.split('\n').map((line, index) => (
                    line.trim() && (
                      <p key={index} className="text-base leading-loose">
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
