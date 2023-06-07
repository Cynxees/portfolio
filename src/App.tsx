import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaygroundPage from './pages/PlaygroundPage';

export default function App() {
  return (
    <div className="App">
      
      <Router>


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/play" element={<PlaygroundPage />} />
        </Routes>

      </Router>
    </div>

  )
}

