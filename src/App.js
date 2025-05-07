import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EnhancedFormPage from './components/EnhancedFormPage';
import CVPreviewPage from './components/CVPreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<EnhancedFormPage />} />
        <Route path="/preview" element={<CVPreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
