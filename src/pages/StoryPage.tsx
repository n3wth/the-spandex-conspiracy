import React, { useState, useEffect } from 'react';
import { parseStoryContent } from '../utils';
import { Loader2Icon, FeatherIcon, ArrowLeftIcon, ArrowRightIcon, BookOpenIcon } from '../components/Icons'; // Corrected import path

export const StoryPage: React.FC = () => {
  const [storyContent, setStoryContent] = useState<string>('');
  const [chapters, setChapters] = useState<Array<{ title: string; content: string }>>([]);
  const [selectedChapter, setSelectedChapter] = useState<number>(() => {
    const stored = localStorage.getItem('selectedChapter');
    return stored ? Number(stored) : 0;
  });
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
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

  useEffect(() => {
    localStorage.setItem('selectedChapter', String(selectedChapter));
  }, [selectedChapter]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollHeight === clientHeight ? 0 : (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-system-background to-system-gray-secondary">
        <div className="text-center p-8 rounded-xl bg-system-background/80 backdrop-blur-md shadow-xl">
          <Loader2Icon className="w-12 h-12 text-system-blue animate-spin mb-6 mx-auto" />
          <div className="text-headline font-semibold text-system-text-secondary">Loading the conspiracy...</div>
          <p className='text-subheadline text-system-text-tertiary mt-2'>Unraveling the mystery, one thread at a time.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-system-blue to-system-purple z-50 transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Story Layout */}
      <div className="min-h-screen bg-gradient-to-br from-system-background to-system-gray-secondary text-system-text">
        {/* Header */}
        <div className="relative hero-section py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-aurora-light opacity-30 animate-aurora"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
            <BookOpenIcon className="w-16 h-16 text-system-blue mb-6 mx-auto animate-float-subtle" />
            <h1 className="text-large-title md:text-display-medium font-bold text-system-text mb-4 animate-fade-in-up">
              The Spandex Conspiracy
            </h1>
            <p className="text-title3 md:text-title1 text-system-text-secondary text-balance animate-fade-in-up animation-delay-200">
              A thrilling adventure through London's most mysterious conspiracy, chapter by chapter.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Mobile Nav Toggle */}
            {chapters.length > 0 && (
              <>
                <button
                  className="lg:hidden mb-4 flex items-center gap-2 btn-secondary"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  <FeatherIcon className="w-5 h-5" />
                  {isNavOpen ? 'Hide Chapters' : 'Show Chapters'}
                </button>

                <aside
                  className={`lg:col-span-3 py-6 lg:py-0 ${
                    isNavOpen ? 'block' : 'hidden lg:block'
                  }`}
                >
                  <div className="card-elevated p-6 sticky top-28 shadow-2xl animate-slide-in-left">
                    <div className='flex items-center mb-6'>
                      <FeatherIcon className="w-6 h-6 text-system-blue mr-3" />
                      <h3 className="text-title3 font-semibold text-system-text">Chapters</h3>
                    </div>
                    <nav className="space-y-2">
                      {chapters.map((chapter, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedChapter(index);
                            setIsNavOpen(false);
                            window.scrollTo({ top: 0 });
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl text-subheadline font-medium transition-all duration-300 ease-out group interactive-card ${
                            selectedChapter === index
                              ? 'bg-system-blue text-white shadow-lg scale-105'
                              : 'text-system-text-secondary hover:text-system-text hover:bg-system-gray-quinary transform hover:scale-102'
                          }`}
                        >
                          <div className="font-semibold text-caption1 mb-1 opacity-80 group-hover:opacity-100">
                            Chapter {index + 1}
                          </div>
                          <div className="truncate text-body group-hover:text-system-text">
                            {chapter.title}
                          </div>
                        </button>
                      ))}
                    </nav>
                  </div>
                </aside>
              </>
            )}

            {/* Story Content */}
            <main className={`${chapters.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'} mt-8 lg:mt-0`}>
              <article className="card-elevated p-8 sm:p-10 md:p-12 shadow-2xl animate-slide-in-right">
                {chapters.length > 0 ? (
                  <div>
                    <header className="mb-10 border-b border-system-separator pb-8">
                      <div className="text-caption1 font-medium text-system-blue mb-2 tracking-wider uppercase">
                        Chapter {selectedChapter + 1}
                      </div>
                      <h2 className="text-title1 md:text-large-title font-bold text-system-text mb-3">
                        {chapters[selectedChapter].title}
                      </h2>
                      <div className="w-20 h-1.5 bg-gradient-to-r from-system-blue to-system-purple rounded-full animate-gradient-x"></div>
                    </header>
                    
                    <div className="prose prose-lg max-w-none text-system-text leading-relaxed space-y-6">
                      {chapters[selectedChapter].content.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index} className="text-body text-system-text-primary leading-loose opacity-0 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                    
                    {/* Chapter Navigation Buttons */}
                    <footer className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-10 border-t border-system-separator">
                      <button
                        onClick={() => setSelectedChapter(Math.max(0, selectedChapter - 1))}
                        disabled={selectedChapter === 0}
                        className={`btn-secondary group flex items-center space-x-2 ${
                          selectedChapter === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-system-gray-quinary'
                        }`}
                      >
                        <ArrowLeftIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                        <span>Previous Chapter</span>
                      </button>
                      
                      <div className="text-footnote text-system-text-tertiary my-4 sm:my-0">
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
                  <div className="prose prose-lg max-w-none text-system-text leading-relaxed space-y-6">
                    {storyContent.split('\n').map((line, index) => (
                      line.trim() && (
                        <p key={index} className="text-body text-system-text-primary leading-loose opacity-0 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
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
    </>
  );
};
