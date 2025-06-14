export interface AudioPlayerState {
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  volume: number;
  isMuted: boolean;
}

export interface AudioPlayerActions {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  audioUrl?: string;
  coverImageUrl?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
}
