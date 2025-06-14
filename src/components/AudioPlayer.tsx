import React from 'react';
import { PlayIcon, PauseIcon, VolumeUpIcon, VolumeOffIcon } from './Icons';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { formatTime } from '../utils';

interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  coverImageUrl?: string;
  className?: string;
  onEnded?: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  title = "Audio Track",
  artist = "Unknown Artist",
  coverImageUrl,
  className = "",
  onEnded,
}) => {
  const {
    isPlaying,
    duration,
    currentTime,
    volume,
    isMuted,
    audioRef,
    play,
    pause,
    seek,
    setVolume,
    toggleMute,
  } = useAudioPlayer({ src, onEnded });

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    seek(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePercentage = volume * 100;

  return (
    <div className={`audio-player p-6 max-w-md mx-auto ${className}`}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Cover Art and Track Info */}
      <div className="flex items-center mb-6">
        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt={title}
            className="w-16 h-16 rounded-lg object-cover mr-4 shadow-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg truncate">{title}</h3>
          <p className="text-gray-600 text-sm truncate">{artist}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-spandex-amber rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #F4D03F 0%, #F4D03F ${progressPercentage}%, #fde68a ${progressPercentage}%, #fde68a 100%)`,
            }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="btn-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <PauseIcon className="w-5 h-5" />
          ) : (
            <PlayIcon className="w-5 h-5 ml-0.5" />
          )}
        </button>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 flex-1 max-w-32 ml-4">
          <button
            onClick={toggleMute}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <VolumeOffIcon className="w-5 h-5" />
            ) : (
              <VolumeUpIcon className="w-5 h-5" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1 bg-spandex-amber rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #F4D03F 0%, #F4D03F ${volumePercentage}%, #fde68a ${volumePercentage}%, #fde68a 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
