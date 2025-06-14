import type { FC } from 'react';
import { AudioPlayer } from '../components/AudioPlayer';
import { HeadphonesIcon, SparklesIcon, ClockIcon, GaugeIcon, FileAudioIcon, Disc3Icon } from '../components/Icons'; // Updated imports

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png";

export const AudioPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-system-background to-system-gray-secondary text-system-text">
      {/* Header */}
      <div className="relative hero-section py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-aurora-dance opacity-40 animate-aurora-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <HeadphonesIcon className="w-16 h-16 text-system-purple mb-6 mx-auto animate-pulse-glow" />
          <h1 className="text-large-title md:text-display-medium font-bold text-system-text mb-4 animate-fade-in-up">
            Listen to The Spandex Conspiracy
          </h1>
          <p className="text-title3 md:text-title1 text-system-text-secondary text-balance animate-fade-in-up animation-delay-200">
            Immerse yourself in the thrilling audio adventure of Olivia Foxtron and Captain Kiwi.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Audio Player Section */}
        <section className="mb-16 md:mb-24 animate-slide-in-bottom animation-delay-400">
          <AudioPlayer
            src={MP3_URL}
            title="The Spandex Conspiracy - Full Audio Drama"
            artist="Narrated by AI, Produced by The Spandex Team"
            coverImageUrl={COVER_ART_URL}
            className="w-full max-w-2xl mx-auto card-elevated shadow-2xl"
          />
        </section>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* About Section */}
          <section className="card-elevated p-8 md:p-10 shadow-xl animate-slide-in-left animation-delay-600">
            <header className="flex items-center mb-6">
              <div className="p-3 bg-system-blue/20 rounded-xl mr-4">
                <Disc3Icon className="w-8 h-8 text-system-blue" />
              </div>
              <h2 className="text-title2 font-bold text-system-text">
                About This Audio Adventure
              </h2>
            </header>
            
            <div className="space-y-5 text-body text-system-text-primary leading-relaxed">
              <p>
                Join Olivia Foxtron, a determined product manager, and the mysterious Captain Kiwi 
                as they uncover a conspiracy that spans London's vibrant markets and shadowy alleys.
              </p>
              <p>
                What starts as a simple morning jog quickly escalates into an adventure involving missing vegetables, 
                cryptic messages, severed toes, and questionably large sausages. 
              </p>
              <p>
                This immersive audio experience brings the quirky characters and thrilling plot to life with engaging 
                narration and rich sound design that will keep you on the edge of your seat.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="card-elevated p-8 md:p-10 shadow-xl animate-slide-in-right animation-delay-800">
            <header className="flex items-center mb-6">
              <div className="p-3 bg-system-green/20 rounded-xl mr-4">
                <SparklesIcon className="w-8 h-8 text-system-green" />
              </div>
              <h2 className="text-title2 font-bold text-system-text">
                Audio Experience Features
              </h2>
            </header>
            
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-system-blue text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 shadow-md">1</div>
                <div>
                  <h3 className="text-callout font-semibold text-system-text">High-Quality Narration</h3>
                  <p className="text-subheadline text-system-text-secondary">
                    Professional AI voice acting brings each character vividly to life.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-system-green text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 shadow-md">2</div>
                <div>
                  <h3 className="text-callout font-semibold text-system-text">Immersive Sound Design</h3>
                  <p className="text-subheadline text-system-text-secondary">
                    Atmospheric sounds and effects transport you directly into London's bustling streets and hidden corners.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-system-orange text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 shadow-md">3</div>
                <div>
                  <h3 className="text-callout font-semibold text-system-text">Original Music Score</h3>
                  <p className="text-subheadline text-system-text-secondary">
                    A custom-composed soundtrack enhances the mystery, tension, and quirky charm of the adventure.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* Technical Details */}
        <section className="card-elevated p-8 md:p-10 mt-8 md:mt-12 shadow-xl animate-fade-in-up animation-delay-1000">
          <header className="flex items-center mb-6">
             <div className="p-3 bg-system-purple/20 rounded-xl mr-4">
                <FileAudioIcon className="w-8 h-8 text-system-purple" />
              </div>
            <h2 className="text-title2 font-semibold text-system-text">Technical Details</h2>
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-system-gray-quinary rounded-xl hover:bg-system-gray-quaternary transition-colors duration-200">
              <ClockIcon className="w-10 h-10 text-system-blue mx-auto mb-3" />
              <div className="text-title2 font-bold text-system-blue mb-1">10:00</div>
              <div className="text-subheadline text-system-text-secondary">Duration</div>
            </div>
            <div className="p-4 bg-system-gray-quinary rounded-xl hover:bg-system-gray-quaternary transition-colors duration-200">
              <GaugeIcon className="w-10 h-10 text-system-green mx-auto mb-3" />
              <div className="text-title2 font-bold text-system-green mb-1">320kbps</div>
              <div className="text-subheadline text-system-text-secondary">Quality</div>
            </div>
            <div className="p-4 bg-system-gray-quinary rounded-xl hover:bg-system-gray-quaternary transition-colors duration-200 col-span-2 sm:col-span-1">
              <Disc3Icon className="w-10 h-10 text-system-orange mx-auto mb-3" />
              <div className="text-title2 font-bold text-system-orange mb-1">MP3</div>
              <div className="text-subheadline text-system-text-secondary">Format</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
