import React from 'react';
import { GithubIcon, TwitterIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} The Spandex Conspiracy. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Twitter">
            <TwitterIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
