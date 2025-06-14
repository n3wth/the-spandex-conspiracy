import React, { useState, useEffect } from 'react';
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

  // Visual effect for audio wave animation
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    setIsAnimating(isPlaying);
  }, [isPlaying]);

  return (
    <div className={`bg-system-background rounded-2xl border border-system-separator p-6 max-w-md mx-auto ${className}`}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Cover Art and Track Info */}
      <div className="flex items-center mb-6">
        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt={title}
            className="w-16 h-16 rounded-xl object-cover mr-4 interactive border border-system-separator"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-headline font-semibold text-system-text truncate">{title}</h3>
          <p className="text-subheadline text-system-text-secondary truncate mb-2">{artist}</p>
          
          {/* Audio waveform visualization */}
          <div className="flex items-center h-1.5 gap-px">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i} 
                className={`bg-system-blue rounded-full w-0.5 transition-all duration-300 ${isAnimating ? 'animate-pulse' : ''}`}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  opacity: isAnimating ? 0.8 : 0.3,
                  height: isAnimating ? `${Math.max(4, Math.min(12, 4 + Math.sin(i) * 8))}px` : '4px'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="relative mb-2">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-1 bg-system-gray-quinary rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-system-blue focus:ring-offset-2"
            style={{
              background: `linear-gradient(to right, #007aff 0%, #007aff ${progressPercentage}%, #e5e5ea ${progressPercentage}%, #e5e5ea 100%)`,
            }}
          />
        </div>
        <div className="flex justify-between text-caption1 text-system-text-tertiary">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="w-12 h-12 bg-system-blue hover:bg-system-blue/90 text-white rounded-full flex items-center justify-center transition-all duration-200 ease-out focus-ring interactive"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <PauseIcon className="w-4 h-4" />
          ) : (
            <PlayIcon className="w-4 h-4 ml-0.5" />
          )}
        </button>

        {/* Volume Control */}
        <div className="flex items-center space-x-3 flex-1 max-w-28 ml-6">
          <button
            onClick={toggleMute}
            className="text-system-text-secondary hover:text-system-text transition-colors duration-200 focus-ring rounded p-1"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <VolumeOffIcon className="w-4 h-4" />
            ) : (
              <VolumeUpIcon className="w-4 h-4" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1 bg-system-gray-quinary rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-system-blue focus:ring-offset-2"
            style={{
              background: `linear-gradient(to right, #007aff 0%, #007aff ${volumePercentage}%, #e5e5ea ${volumePercentage}%, #e5e5ea 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
