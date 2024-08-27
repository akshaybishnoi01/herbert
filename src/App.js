import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Dynamically import the components
const Sources = lazy(() => import('./view/Sources'));
const Landing = lazy(() => import('./view/Landing'));
const Vision = lazy(() => import('./view/Vision'));

const App = () => {
  return (
    <div className='min-h-screen relative overflow-hidden font-lato'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Sources />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/vision" element={<Vision />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
