import React from 'react';
import { Link } from 'react-router-dom';
import { AudioPlayer } from '../components/AudioPlayer';
import { HeadphonesIcon, BookOpenIcon } from '../components/Icons';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden"> 
      {/* Every.to-Inspired Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          The Spandex Conspiracy
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 font-sans mb-10 max-w-2xl mx-auto">
          Unravel London's most peculiar mystery. An immersive audio adventure that begins with a simple jog.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            to="/audio"
            className="btn-primary flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl shadow-sm focus-ring"
          >
            <HeadphonesIcon className="w-5 h-5 mr-2.5" />
            Start Listening
          </Link>
          <Link
            to="/story"
            className="text-lg text-blue-600 font-medium hover:underline focus-ring"
          >
            Read the Story
          </Link>
        </div>
      </section>

      {/* Audio Player Section - flat, minimal, no card */}
      <section className="py-20 bg-[#fafbfc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Experience The Adventure</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Dive into the full audio experience. High-quality sound, professional narration, and an engaging plot await.
          </p>
          <div className="max-w-2xl mx-auto">
            <AudioPlayer src={MP3_URL} coverImageUrl={COVER_ART_URL} title="The Spandex Conspiracy - Chapter 1" />
          </div>
        </div>
      </section>

      {/* Story Teaser Section (minimal, clean) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Follow The Clues</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Read the full story, uncover hidden details, and piece together the conspiracy at your own pace.
          </p>
          <Link 
            to="/story"
            className="btn-secondary inline-flex items-center justify-center text-lg font-semibold rounded-2xl focus-ring"
          >
            <BookOpenIcon className="w-5 h-5 mr-2.5" />
            Explore the Narrative
          </Link>
        </div>
      </section>
    </div>
  );
};
