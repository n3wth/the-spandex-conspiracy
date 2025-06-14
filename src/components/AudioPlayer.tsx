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

  const [isAnimating, setIsAnimating] = useState(false);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const [showRipple, setShowRipple] = useState(false);
  
  useEffect(() => {
    setIsAnimating(isPlaying);
  }, [isPlaying]);

  const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipplePosition({ x, y });
    setShowRipple(true);
    
    setTimeout(() => setShowRipple(false), 600);
    
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
    <div className={`relative bg-system-background rounded-3xl border border-system-separator p-8 max-w-md mx-auto overflow-hidden ${className}`}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-system-blue/5 pointer-events-none"></div>
      
      {/* Track Info Header */}
      <div className="relative mb-8">
        <div className="flex items-center space-x-4">
          {coverImageUrl && (
            <div className="relative group">
              <img
                src={coverImageUrl}
                alt={title}
                className="w-20 h-20 rounded-2xl object-cover border border-system-separator shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Animated border when playing */}
              {isPlaying && (
                <div className="absolute inset-0 rounded-2xl border-2 border-system-blue animate-pulse-soft"></div>
              )}
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className="text-title3 font-bold text-system-text truncate mb-1">{title}</h3>
            <p className="text-callout text-system-text-secondary truncate mb-3">{artist}</p>
            
            {/* Enhanced Audio waveform visualization */}
            <div className="flex items-end h-6 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`bg-gradient-to-t from-system-blue to-system-blue-secondary rounded-full w-1 transition-all duration-300 ${
                    isAnimating ? 'animate-wave' : ''
                  }`}
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    opacity: isAnimating ? 0.9 : 0.3,
                    height: isAnimating 
                      ? `${Math.max(8, Math.min(24, 8 + Math.sin((i + currentTime) * 0.8) * 12))}px` 
                      : '8px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Progress Bar */}
      <div className="relative mb-8">
        <div className="relative mb-3">
          <div className="w-full h-2 bg-system-gray-quinary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-system-blue to-system-blue-secondary rounded-full transition-all duration-200 relative"
              style={{ width: `${progressPercentage}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Interactive progress handle */}
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
          />
          
          {/* Progress handle */}
          <div 
            className="absolute top-1/2 w-4 h-4 bg-white border-2 border-system-blue rounded-full shadow-lg transform -translate-y-1/2 transition-all duration-200 hover:scale-125"
            style={{ left: `calc(${progressPercentage}% - 8px)` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-caption1 text-system-text-tertiary font-medium">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Premium Controls */}
      <div className="relative flex items-center justify-between">
        {/* Enhanced Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="relative w-16 h-16 bg-gradient-to-br from-system-blue to-system-blue-secondary text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden group"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {/* Ripple effect */}
          {showRipple && (
            <div 
              className="absolute rounded-full bg-white/30 animate-ripple"
              style={{
                left: ripplePosition.x - 10,
                top: ripplePosition.y - 10,
                width: 20,
                height: 20,
              }}
            ></div>
          )}
          
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icon with smooth transition */}
          <div className="relative transition-transform duration-200 group-active:scale-90">
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6 ml-1" />
            )}
          </div>
        </button>

        {/* Premium Volume Control */}
        <div className="flex items-center space-x-4 flex-1 max-w-32 ml-8">
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-system-gray-quinary/50 hover:bg-system-gray-quinary text-system-text-secondary hover:text-system-text transition-all duration-200 flex items-center justify-center group"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <div className="transition-transform duration-200 group-active:scale-90">
              {isMuted || volume === 0 ? (
                <VolumeOffIcon className="w-4 h-4" />
              ) : (
                <VolumeUpIcon className="w-4 h-4" />
              )}
            </div>
          </button>
          
          <div className="relative flex-1">
            <div className="h-1 bg-system-gray-quinary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-system-blue to-system-blue-secondary rounded-full transition-all duration-200"
                style={{ width: `${volumePercentage}%` }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="absolute inset-0 w-full h-1 opacity-0 cursor-pointer"
            />
            <div 
              className="absolute top-1/2 w-3 h-3 bg-white border border-system-blue rounded-full shadow-md transform -translate-y-1/2 transition-all duration-200 hover:scale-125"
              style={{ left: `calc(${volumePercentage}% - 6px)` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
