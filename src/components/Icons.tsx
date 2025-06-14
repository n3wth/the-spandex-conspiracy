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
  ArrowLeft, // Added
  ChevronDown,
  ChevronRight, // Added
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Loader2, // Added
  Sparkles, // Added
  Wand2, // Added
  Clock, // Added
  Gauge, // Added
  ShieldCheck, // Added
  FileAudio, // Added
  Disc3, // Added
  Mail, // Added
  MessageCircle // Added
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
  ArrowLeft as ArrowLeftIcon, // Added
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon, // Added
  Github as GithubIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon,
  Loader2 as Loader2Icon, // Added
  Sparkles as SparklesIcon, // Added
  Wand2 as Wand2Icon, // Added
  Clock as ClockIcon, // Added
  Gauge as GaugeIcon, // Added
  ShieldCheck as ShieldCheckIcon, // Added
  FileAudio as FileAudioIcon, // Added
  Disc3 as Disc3Icon, // Added
  Mail as MailIcon, // Added
  MessageCircle as MessageCircleIcon // Added
};

// General IconProps if needed for custom wrappers, though lucide-react icons are quite flexible
export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}
