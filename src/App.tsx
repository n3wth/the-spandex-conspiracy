import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { AudioPage } from './pages/AudioPage';

// Scroll to top on page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-system-background font-sans antialiased">
        <Navigation />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/audio" element={<AudioPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
