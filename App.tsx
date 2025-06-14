import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PlayIcon, PauseIcon, VolumeUpIcon, VolumeOffIcon } from './components/Icons';

const MP3_URL = "https://b.newth.ai/spandex.mp3";
const COVER_ART_URL = "https://b.newth.ai/spandex3.png"; 

const CREATIVE_ACCENT_YELLOW = "#F4D03F"; // Richer, golden yellow (like Tailwind amber-400)
const SLIDER_TRACK_BASE_COLOR = "#fde68a"; // Lighter amber tone (Tailwind amber-200) for slider base
const PLAYER_CARD_BACKGROUND_COLOR = "bg-amber-50/95"; // Warmer, creamy card background
const PLAYER_CARD_SHADOW = "shadow-amber-600/30"; // Shadow consistent with new palette

const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds === Infinity) {
    return '0:00';
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(0.75);
  const [isCoverArtError, setIsCoverArtError] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const volumeSliderRef = useRef<HTMLInputElement>(null);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleAudioEnded = useCallback(() => {
    setIsPlaying(false);
    if (audioRef.current) {
       audioRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleAudioEnded);
      audio.volume = isMuted ? 0 : volume;
      audio.muted = isMuted;

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleAudioEnded);
      };
    }
  }, [handleLoadedMetadata, handleTimeUpdate, handleAudioEnded, volume, isMuted]);

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = Number(event.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = newVolume === 0;
    }
    if (newVolume > 0 && isMuted) { 
        setIsMuted(false);
    }
    if (newVolume > 0) {
      setLastVolume(newVolume);
    }
  };

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;
      if (newMutedState) {
        setLastVolume(volume > 0 ? volume : 0.5); 
        setVolume(0);
      } else {
        const volumeToRestore = lastVolume > 0 ? lastVolume : 0.5;
        setVolume(volumeToRestore);
        audioRef.current.volume = volumeToRestore;
      }
    }
  }, [isMuted, volume, lastVolume]);

  const updateSliderBackground = useCallback((sliderRef: React.RefObject<HTMLInputElement>, value: number, max: number = 1, activeColor: string = CREATIVE_ACCENT_YELLOW, baseColor: string = SLIDER_TRACK_BASE_COLOR) => {
    if (sliderRef.current) {
      const percentage = max > 0 ? (value / max) * 100 : 0;
      sliderRef.current.style.background = `linear-gradient(to right, ${activeColor} ${percentage}%, ${baseColor} ${percentage}%)`;
    }
  }, []);

  useEffect(() => {
    updateSliderBackground(progressBarRef, currentTime, duration, CREATIVE_ACCENT_YELLOW, SLIDER_TRACK_BASE_COLOR);
  }, [currentTime, duration, updateSliderBackground]);

  useEffect(() => {
     updateSliderBackground(volumeSliderRef, isMuted ? 0 : volume, 1, CREATIVE_ACCENT_YELLOW, SLIDER_TRACK_BASE_COLOR);
  }, [volume, isMuted, updateSliderBackground]);

  const handleCoverArtError = () => {
    setIsCoverArtError(true);
  };

  const playButtonFocusRingOffsetClass = "focus:ring-offset-amber-50"; // Updated focus ring offset

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 select-none antialiased">
      <audio ref={audioRef} src={MP3_URL} preload="metadata"></audio>
      
      <div className={`w-full max-w-[330px] xs:max-w-sm sm:max-w-[400px] ${PLAYER_CARD_BACKGROUND_COLOR} backdrop-blur-md shadow-xl ${PLAYER_CARD_SHADOW} rounded-3xl p-5 sm:p-6 space-y-5 sm:space-y-6 transition-all duration-300 ease-out`}>
        <div className={`aspect-square w-full rounded-2xl overflow-hidden shadow-lg ${isCoverArtError ? 'bg-slate-200 flex items-center justify-center' : ''}`}>
          {isCoverArtError ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ) : (
            <img 
              src={COVER_ART_URL} 
              alt="Cover art for The Spandex Conspiracy" 
              className="w-full h-full object-cover"
              onError={handleCoverArtError}
            />
          )}
        </div>

        <div className="text-center space-y-1 sm:space-y-1.5">
          <h1 className="text-xl xs:text-2xl sm:text-2xl font-semibold text-slate-800 tracking-tight truncate" title="The Spandex Conspiracy">The Spandex Conspiracy</h1>
        </div>

        <div className="space-y-2 pt-1 sm:pt-2">
          <input
            type="range"
            ref={progressBarRef}
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full focus:outline-none"
            aria-label="Audiobook progress"
          />
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 sm:pt-3">
          <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 w-1/3"> {/* Volume controls container */}
            <button 
              onClick={toggleMute}
              className={`text-slate-500 hover:text-amber-500 transition-colors duration-200 p-1.5 xs:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:ring-offset-2 ${playButtonFocusRingOffsetClass}`}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? <VolumeOffIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> : <VolumeUpIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />}
            </button>
            <input
              type="range"
              ref={volumeSliderRef}
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full max-w-[70px] xs:max-w-[80px] sm:max-w-[100px] focus:outline-none"
              aria-label="Volume control"
            />
          </div>
          
          <div className="w-1/3 flex justify-center"> {/* Play/Pause button container */}
            <button 
              onClick={togglePlayPause}
              className={`bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-800 p-2.5 xs:p-3 sm:p-4 rounded-full shadow-lg shadow-amber-500/40 hover:shadow-xl hover:shadow-amber-400/50 transition-all duration-200 transform hover:scale-110 active:scale-100 focus:outline-none focus:ring-4 focus:ring-amber-500/70 focus:ring-offset-2 ${playButtonFocusRingOffsetClass}`}
              aria-label={isPlaying ? "Pause Audiobook" : "Play Audiobook"}
            >
              {isPlaying ? <PauseIcon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" /> : <PlayIcon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />}
            </button>
          </div>

          <div className="w-1/3"> {/* Spacer for balance */}
          </div>
        </div>
         <p className="text-center text-xs text-slate-500/80 pt-3 sm:pt-4">Embrace the Spandex!</p>
      </div>
    </div>
  );
};

export default App;