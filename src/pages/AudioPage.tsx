import React from 'react';
import { AudioPlayer } from '../components/AudioPlayer';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const AudioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-system-background">
      {/* Header */}
      <div className="hero-section py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-large-title font-bold text-system-text mb-4">
            Listen to The Spandex Conspiracy
          </h1>
          <p className="text-title3 text-system-text-secondary text-balance">
            Immerse yourself in the thrilling audio adventure of Olivia Foxtron and Captain Kiwi
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Audio Player Section */}
        <div className="flex justify-center mb-16">
          <AudioPlayer
            src={MP3_URL}
            title="The Spandex Conspiracy"
            artist="Audio Adventure"
            coverImageUrl={COVER_ART_URL}
            className="w-full max-w-lg card-elevated"
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="card p-8">
            <div className="mb-6">
              <div className="w-10 h-10 bg-system-blue rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-title3">🎧</span>
              </div>
              <h2 className="text-title2 font-bold text-system-text mb-4">
                About This Audio Adventure
              </h2>
            </div>
            
            <div className="space-y-4 text-body text-system-text leading-relaxed">
              <p>
                Join Olivia Foxtron, a determined product manager, and the mysterious Captain Kiwi 
                as they uncover a conspiracy that spans London's markets.
              </p>
              <p>
                What starts as a simple morning jog turns into an adventure involving missing vegetables, 
                severed toes, and questionably large sausages.
              </p>
              <p>
                This immersive audio experience brings the characters to life with engaging 
                narration and sound design that will keep you on the edge of your seat.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="card p-8">
            <div className="mb-6">
              <div className="w-10 h-10 bg-system-green rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-title3">✨</span>
              </div>
              <h2 className="text-title2 font-bold text-system-text mb-4">
                Audio Features
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-system-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-caption2 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-callout font-semibold text-system-text">High-Quality Narration</h3>
                  <p className="text-subheadline text-system-text-secondary">
                    Professional voice acting brings each character to life
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-system-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-caption2 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-callout font-semibold text-system-text">Immersive Sound Design</h3>
                  <p className="text-subheadline text-system-text-secondary">
                    Atmospheric sounds transport you to London's streets
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-system-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-caption2 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-callout font-semibold text-system-text">Original Music</h3>
                  <p className="text-subheadline text-system-text-secondary">
                    Custom soundtrack enhances the mystery atmosphere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="card p-8 mt-8">
          <h2 className="text-title3 font-semibold text-system-text mb-6">Technical Details</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-title2 font-bold text-system-blue mb-2">10:00</div>
              <div className="text-subheadline text-system-text-secondary">Duration</div>
            </div>
            <div>
              <div className="text-title2 font-bold text-system-blue mb-2">320kbps</div>
              <div className="text-subheadline text-system-text-secondary">Quality</div>
            </div>
            <div>
              <div className="text-title2 font-bold text-system-blue mb-2">MP3</div>
              <div className="text-subheadline text-system-text-secondary">Format</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
