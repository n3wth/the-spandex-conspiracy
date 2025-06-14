import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-system-background text-system-text">
        <Navigation />
        <ScrollToTop />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/audio" element={<AudioPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
