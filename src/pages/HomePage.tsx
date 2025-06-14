import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, MusicIcon } from '../components/Icons';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">The</span>{' '}
                  <span className="block text-spandex-yellow xl:inline">Spandex Conspiracy</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A thrilling audio adventure featuring Olivia Foxtron and Captain Kiwi in their 
                  spandex-clad quest through London's most mysterious conspiracy involving missing 
                  vegetables and questionable meat products.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/audio"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-spandex-yellow hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                    >
                      <MusicIcon className="w-5 h-5 mr-2" />
                      Listen Now
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/story"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                    >
                      <BookOpenIcon className="w-5 h-5 mr-2" />
                      Read Story
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-br from-spandex-yellow/20 to-spandex-amber/20 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-8xl opacity-20">🕷️</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-spandex-yellow font-semibold tracking-wide uppercase">
              Adventure Awaits
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A story like no other
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-spandex-yellow text-gray-900">
                    <BookOpenIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Captivating Story
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Follow Olivia and Captain Kiwi through London's mysterious markets in their 
                  quest to solve the spandex conspiracy.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-spandex-yellow text-gray-900">
                    <MusicIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Immersive Audio
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Experience the adventure through our high-quality audio narration with 
                  our built-in audio player.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
