import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FloatingMenu from './components/FloatingMenu';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Technology from './pages/Technology';
import Process from './pages/Process';
import Market from './pages/Market';
import Investment from './pages/Investment';
import Operations from './pages/Operations';
import Revenue from './pages/Revenue';
import Profitability from './pages/Profitability';
import Risks from './pages/Risks';
import Impact from './pages/Impact';
import NextSteps from './pages/NextSteps';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router basename="/ESD">
      <div className="min-h-screen bg-gray-50">
        {isMobile ? <Navigation /> : null}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/process" element={<Process />} />
            <Route path="/market" element={<Market />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/profitability" element={<Profitability />} />
            <Route path="/risks" element={<Risks />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/next-steps" element={<NextSteps />} />
          </Routes>
        </main>
        {!isMobile && <FloatingMenu />}
      </div>
    </Router>
  );
}

export default App;