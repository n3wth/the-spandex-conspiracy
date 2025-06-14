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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-slow text-xl text-gray-600">Loading the conspiracy...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Spandex Conspiracy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A thrilling adventure through London's most mysterious conspiracy
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Chapter Navigation */}
          {chapters.length > 0 && (
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Chapters</h3>
                <nav className="space-y-2">
                  {chapters.map((chapter, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedChapter(index)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                        selectedChapter === index
                          ? 'bg-spandex-yellow text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      Chapter {index + 1}: {chapter.title}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Chapter {selectedChapter + 1}: {chapters[selectedChapter].title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    {chapters[selectedChapter].content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Chapter Navigation */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => setSelectedChapter(Math.max(0, selectedChapter - 1))}
                      disabled={selectedChapter === 0}
                      className={`btn-secondary ${
                        selectedChapter === 0 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      Previous Chapter
                    </button>
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
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {line}
                    </p>
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
