import React from 'react';
import { Link } from 'react-router-dom';
import { AudioPlayer } from '../components/AudioPlayer';
import { PlayIcon, BookOpenIcon } from '../components/Icons';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-large-title text-balance mb-6">
              The Spandex Conspiracy
            </h1>
            <p className="text-title3 text-system-text-secondary text-balance mb-10 max-w-3xl mx-auto">
              An unusual morning jog turns into an extraordinary adventure through London's most mysterious conspiracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/audio"
                className="btn-primary flex items-center space-x-2 text-headline px-8 py-4"
              >
                <PlayIcon className="w-5 h-5" />
                <span>Listen Now</span>
              </Link>
              <Link
                to="/story"
                className="btn-secondary flex items-center space-x-2 text-headline px-8 py-4"
              >
                <BookOpenIcon className="w-5 h-5" />
                <span>Read Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Player Section */}
      <section className="content-section-alt py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-title1 mb-4">Experience the Adventure</h2>
            <p className="text-body text-system-text-secondary max-w-2xl mx-auto text-balance">
              Immerse yourself in London's most bizarre mystery with premium audio narration and atmospheric sound design.
            </p>
          </div>
          
          <div className="flex justify-center scale-in">
            <div className="w-full max-w-md">
              <AudioPlayer
                src={MP3_URL}
                title="The Spandex Conspiracy"
                artist="Chapter 1: An Unusual Morning Jog"
                coverImageUrl={COVER_ART_URL}
                className="card-elevated p-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="content-section py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-title1 mb-4">Meet the Heroes</h2>
            <p className="text-body text-system-text-secondary max-w-2xl mx-auto text-balance">
              Two unlikely allies united by spandex, determination, and an insatiable curiosity for London's most bizarre mystery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Olivia Foxtron */}
            <div className="card p-8 interactive">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-system-pink to-system-purple rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-title3">OF</span>
                </div>
                <h3 className="text-title2 mb-4">Olivia Foxtron</h3>
                <p className="text-body text-system-text-secondary mb-6 text-balance">
                  London's youngest senior product manager. Her neon-pink spandex cuts through morning mist like a beacon of determination.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-system-gray-quinary text-system-text-secondary rounded-full text-footnote font-medium">
                    Analytical
                  </span>
                  <span className="px-3 py-1 bg-system-gray-quinary text-system-text-secondary rounded-full text-footnote font-medium">
                    Determined
                  </span>
                  <span className="px-3 py-1 bg-system-gray-quinary text-system-text-secondary rounded-full text-footnote font-medium">
                    Spandex Expert
                  </span>
                </div>
              </div>
            </div>

            {/* Captain Kiwi */}
            <div className="card p-8 interactive">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-system-green to-system-teal rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-title2">🥝</span>
                </div>
                <h3 className="text-title2 mb-4">Captain Kiwi</h3>
                <p className="text-body text-system-text-secondary mb-6 text-balance">
                  A mysterious figure in emerald spandex with a distinctive kiwi-shaped helmet. Self-proclaimed leader of all things fruit.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-system-gray-quinary text-system-text-secondary rounded-full text-footnote font-medium">
                    Mysterious
                  </span>
                  <span className="px-3 py-1 bg-system-gray-quinary text-system-text-secondary rounded-full text-footnote font-medium">
                    Fruit Expert
                  </span>
                  <span className="px-3 py-1 bg-system-gray-quinary text-system-text-secondary rounded-full text-footnote font-medium">
                    Cape Enthusiast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section-alt py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-title1 mb-4">Why You'll Love It</h2>
            <p className="text-body text-system-text-secondary max-w-2xl mx-auto text-balance">
              A unique blend of mystery, humor, and London atmosphere that will keep you engaged from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center slide-up">
              <div className="w-12 h-12 bg-system-blue rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-title3">🎧</span>
              </div>
              <h3 className="text-headline mb-2">Premium Audio</h3>
              <p className="text-body text-system-text-secondary text-balance">
                Crystal clear narration with immersive sound effects
              </p>
            </div>

            <div className="text-center slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-system-green rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-title3">🎭</span>
              </div>
              <h3 className="text-headline mb-2">Character Voices</h3>
              <p className="text-body text-system-text-secondary text-balance">
                Unique voices bring each character to vivid life
              </p>
            </div>

            <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-system-orange rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-title3">🌆</span>
              </div>
              <h3 className="text-headline mb-2">London Atmosphere</h3>
              <p className="text-body text-system-text-secondary text-balance">
                Authentic sounds of the Thames and city streets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="content-section py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-title1 mb-6">The Mystery Begins</h2>
              <div className="card p-8">
                <blockquote className="text-body italic text-system-text-secondary mb-6 text-balance">
                  "The morning mist hung over the River Thames like a gossamer curtain, and Olivia Foxtron's neon-pink leotard cut through it like a beacon of pure determination..."
                </blockquote>
                <p className="text-body text-system-text-secondary mb-8 text-balance">
                  What starts as a routine morning jog quickly spirals into London's most bizarre investigation involving missing vegetables, mysterious toes, and questionable sausages.
                </p>
                <Link
                  to="/story"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <BookOpenIcon className="w-4 h-4" />
                  <span>Read Full Story</span>
                </Link>
              </div>
            </div>
            
            <div className="scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="card p-8">
                <h3 className="text-title3 mb-6">Chapter Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-system-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-footnote font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-callout font-semibold">An Unusual Morning Jog</h4>
                      <p className="text-footnote text-system-text-secondary">Where neon-pink spandex meets mystery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-system-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-footnote font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-callout font-semibold">The Mystery of the Misplaced Toe</h4>
                      <p className="text-footnote text-system-text-secondary">A gruesome discovery at Covent Garden</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-system-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-footnote font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-callout font-semibold">The Sausage Solution</h4>
                      <p className="text-footnote text-system-text-secondary">Where premium meats hold the key</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="content-section-alt py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="spring">
            <h2 className="text-title1 mb-6">Ready to Join the Conspiracy?</h2>
            <p className="text-title3 text-system-text-secondary mb-10 max-w-2xl mx-auto text-balance">
              The mystery awaits. Help Olivia and Captain Kiwi solve London's most bizarre case.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/audio"
                className="btn-primary flex items-center space-x-2 text-headline px-10 py-4"
              >
                <PlayIcon className="w-5 h-5" />
                <span>Begin Adventure</span>
              </Link>
              <Link
                to="/story"
                className="btn-secondary flex items-center space-x-2 text-headline px-10 py-4"
              >
                <BookOpenIcon className="w-5 h-5" />
                <span>Explore Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
