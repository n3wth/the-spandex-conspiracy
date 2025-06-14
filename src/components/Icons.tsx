import {
  Home,
  BookOpen,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Menu,
  X,
  Search,
  Feather,
  Mic,
  Headphones,
  MapPin,
  ArrowRight,
  ChevronDown,
  Github,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

// Re-exporting for easy use throughout the application
export {
  Home as HomeIcon,
  BookOpen as BookOpenIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Volume2 as VolumeUpIcon,
  VolumeX as VolumeOffIcon,
  Menu as MenuIcon,
  X as XIcon,
  Search as SearchIcon,
  Feather as FeatherIcon,
  Mic as MicIcon,
  Headphones as HeadphonesIcon,
  MapPin as MapPinIcon,
  ArrowRight as ArrowRightIcon,
  ChevronDown as ChevronDownIcon,
  Github as GithubIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon
};

// General IconProps if needed for custom wrappers, though lucide-react icons are quite flexible
export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}
