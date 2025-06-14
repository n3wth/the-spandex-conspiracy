import type { FC } from 'react';
import { GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon, MessageCircleIcon, FeatherIcon } from './Icons';

export const Footer: FC = () => {
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: GithubIcon, color: 'hover:text-gray-400' },
    { name: 'Twitter', href: '#', icon: TwitterIcon, color: 'hover:text-sky-400' },
    { name: 'Instagram', href: '#', icon: InstagramIcon, color: 'hover:text-pink-500' },
    { name: 'LinkedIn', href: '#', icon: LinkedinIcon, color: 'hover:text-blue-500' },
  ];

  const contactLinks = [
    { name: 'Email Us', href: 'mailto:hello@spandexconspiracy.com', icon: MailIcon },
    { name: 'Chat Support', href: '#', icon: MessageCircleIcon },
  ];

  return (
    <footer className="bg-system-gray-secondary text-system-text-secondary border-t border-system-separator">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className='flex items-center'>
              <FeatherIcon className="h-10 w-10 text-system-blue mr-3" />
              <span className="text-2xl font-semibold text-system-text">The Spandex Conspiracy</span>
            </div>
            <p className="text-body leading-relaxed">
              Unravel the mystery. Embrace the absurd. Listen to the adventure.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className={`text-system-text-tertiary ${item.color} transition-colors duration-200`}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-system-text-tertiary tracking-wider uppercase">Story</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="/story" className="text-base hover:text-system-text transition-colors">Read Chapters</a></li>
                  <li><a href="/audio" className="text-base hover:text-system-text transition-colors">Listen to Audio</a></li>
                  <li><a href="#" className="text-base hover:text-system-text transition-colors">Character Bios</a></li>
                  <li><a href="#" className="text-base hover:text-system-text transition-colors">World Map</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-system-text-tertiary tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {contactLinks.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base hover:text-system-text transition-colors flex items-center">
                        <item.icon className="h-5 w-5 mr-2 opacity-70" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                   <li><a href="#" className="text-base hover:text-system-text transition-colors">FAQs</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-system-text-tertiary tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="#" className="text-base hover:text-system-text transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-base hover:text-system-text transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-base hover:text-system-text transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-system-separator pt-8">
          <p className="text-base text-center xl:text-left">
            &copy; {new Date().getFullYear()} The Spandex Conspiracy. All rights reserved. A Fictional Adventure.
          </p>
        </div>
      </div>
    </footer>
  );
};
