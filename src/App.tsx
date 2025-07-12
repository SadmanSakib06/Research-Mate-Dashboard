import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ResearchGuide from './pages/ResearchGuide';
import ExploreDatasets from './pages/ExploreDatasets';
import ExplorePapers from './pages/ExplorePapers';
import SavedLibrary from './pages/SavedLibrary';
import AutoSummary from './pages/AutoSummary';
import PlanResearch from './pages/PlanResearch';
import DiscussionForum from './pages/DiscussionForum';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guide" element={<ResearchGuide />} />
            <Route path="/datasets" element={<ExploreDatasets />} />
            <Route path="/papers" element={<ExplorePapers />} />
            <Route path="/library" element={<SavedLibrary />} />
            <Route path="/summary" element={<AutoSummary />} />
            <Route path="/plan" element={<PlanResearch />} />
            <Route path="/forum" element={<DiscussionForum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;