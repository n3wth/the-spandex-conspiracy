import React from 'react';
import { AudioPlayer } from '../components/AudioPlayer';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const AudioPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Listen to The Spandex Conspiracy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Immerse yourself in the thrilling audio adventure of Olivia Foxtron and Captain Kiwi
          </p>
        </div>

        <div className="flex justify-center">
          <AudioPlayer
            src={MP3_URL}
            title="The Spandex Conspiracy"
            artist="Audio Adventure"
            coverImageUrl={COVER_ART_URL}
            className="w-full max-w-lg"
          />
        </div>

        <div className="mt-12 prose prose-lg mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Audio Adventure</h2>
          <p className="text-gray-600">
            Join Olivia Foxtron, a determined product manager, and the mysterious Captain Kiwi 
            as they uncover a conspiracy that spans London's markets. What starts as a simple 
            morning jog turns into an adventure involving missing vegetables, severed toes, 
            and questionably large sausages.
          </p>
          <p className="text-gray-600 mt-4">
            This immersive audio experience brings the characters to life with engaging 
            narration and sound design that will keep you on the edge of your seat.
          </p>
        </div>
      </div>
    </div>
  );
};
