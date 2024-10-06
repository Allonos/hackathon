import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import ScienceInsight from './pages/ScienceInsight.js';
import DataModelling from './pages/DataModelling.js';
import About from './pages/About.js';
import FuturePlans from './pages/FuturePlans.js'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data-modelling" element={<DataModelling />} />
        <Route path="/future-plans" element={<FuturePlans />} />
        <Route path="/science-insight" element={<ScienceInsight />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/future-plans" element={<FuturePlans />} />
      </Routes>
    </Router>
  );
};

export default App;