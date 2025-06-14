import React, { useState, useEffect } from 'react';
import { parseStoryContent } from '../utils';

export const StoryPage: React.FC = () => {
  const [storyContent, setStoryContent] = useState<string>('');
  const [chapters, setChapters] = useState<Array<{ title: string; content: string }>>([]);
  const [selectedChapter, setSelectedChapter] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the story content from STORY.md
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
      <div className="min-h-screen flex items-center justify-center bg-system-background">
        <div className="text-center">
          <div className="w-8 h-8 bg-system-blue rounded-full animate-pulse mb-4 mx-auto"></div>
          <div className="text-headline text-system-text-secondary">Loading the conspiracy...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-system-background">
      {/* Header */}
      <div className="hero-section py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-large-title font-bold text-system-text mb-4">
            The Spandex Conspiracy
          </h1>
          <p className="text-title3 text-system-text-secondary text-balance">
            A thrilling adventure through London's most mysterious conspiracy
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Chapter Navigation */}
          {chapters.length > 0 && (
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-title3 font-semibold text-system-text mb-6">Chapters</h3>
                <nav className="space-y-1">
                  {chapters.map((chapter, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedChapter(index)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-subheadline font-medium transition-all duration-200 ease-out interactive ${
                        selectedChapter === index
                          ? 'bg-system-blue text-white'
                          : 'text-system-text-secondary hover:text-system-text hover:bg-system-gray-quinary'
                      }`}
                    >
                      <div className="font-semibold text-caption1 mb-1">
                        Chapter {index + 1}
                      </div>
                      <div className="truncate">
                        {chapter.title}
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Story Content */}
          <div className={`${chapters.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'} mt-8 lg:mt-0`}>
            <div className="card p-8">
              {chapters.length > 0 ? (
                <div>
                  <div className="mb-8">
                    <div className="text-caption1 font-medium text-system-text-tertiary mb-2">
                      Chapter {selectedChapter + 1}
                    </div>
                    <h2 className="text-title1 font-bold text-system-text mb-4">
                      {chapters[selectedChapter].title}
                    </h2>
                    <div className="w-12 h-1 bg-system-blue rounded-full"></div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    {chapters[selectedChapter].content.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="mb-6 text-body text-system-text leading-relaxed">
                          {paragraph}
                        </p>
                      )
                    ))}
                  </div>
                  
                  {/* Chapter Navigation */}
                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-system-separator">
                    <button
                      onClick={() => setSelectedChapter(Math.max(0, selectedChapter - 1))}
                      disabled={selectedChapter === 0}
                      className={`btn-secondary ${
                        selectedChapter === 0 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      Previous Chapter
                    </button>
                    
                    <div className="text-footnote text-system-text-tertiary">
                      {selectedChapter + 1} of {chapters.length}
                    </div>
                    
                    <button
                      onClick={() => setSelectedChapter(Math.min(chapters.length - 1, selectedChapter + 1))}
                      disabled={selectedChapter === chapters.length - 1}
                      className={`btn-primary ${
                        selectedChapter === chapters.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      Next Chapter
                    </button>
                  </div>
                </div>
              ) : (
                <div className="prose prose-lg max-w-none">
                  {storyContent.split('\n').map((line, index) => (
                    line.trim() && (
                      <p key={index} className="mb-6 text-body text-system-text leading-relaxed">
                        {line}
                      </p>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
