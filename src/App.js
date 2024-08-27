import React from 'react'
import './App.css'
import Sources from './view/Sources'
import Landing from './view/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vision from './view/Vision';

const App = () => {
  return (
    <div className='min-h-screen relative overflow-hidden font-lato'>
       <Router>
      <Routes>
        <Route path="/" element={<Sources/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/vision" element={<Vision/>} />
      </Routes>
    </Router>
     </div>
  )
}

export default App
