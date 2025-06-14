import { useState, useRef, useEffect, useCallback } from 'react';
import type { AudioPlayerState, AudioPlayerActions } from '../types';

interface UseAudioPlayerProps {
  src: string;
  onEnded?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
  onDurationChange?: (duration: number) => void;
}

interface UseAudioPlayerReturn extends AudioPlayerState, AudioPlayerActions {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const useAudioPlayer = ({
  src,
  onEnded,
  onTimeUpdate,
  onDurationChange,
}: UseAudioPlayerProps): UseAudioPlayerReturn => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(0.75);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      const newDuration = audioRef.current.duration;
      setDuration(newDuration);
      onDurationChange?.(newDuration);
    }
  }, [onDurationChange]);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      const newCurrentTime = audioRef.current.currentTime;
      setCurrentTime(newCurrentTime);
      onTimeUpdate?.(newCurrentTime);
    }
  }, [onTimeUpdate]);

  const handleAudioEnded = useCallback(() => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    onEnded?.();
  }, [onEnded]);

  const play = useCallback(async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clampedVolume);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
    if (clampedVolume > 0) {
      setLastVolume(clampedVolume);
      setIsMuted(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (isMuted) {
      setVolume(lastVolume);
    } else {
      setLastVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  }, [isMuted, lastVolume, volume, setVolume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleAudioEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleAudioEnded);
    };
  }, [handleLoadedMetadata, handleTimeUpdate, handleAudioEnded]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return {
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
  };
};
