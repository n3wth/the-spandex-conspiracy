import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { AudioPage } from './pages/AudioPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-spandex-cream to-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/audio" element={<AudioPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
