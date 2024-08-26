import React from 'react'
import Hero from './components/Hero';
import './App.css'
import SchengenBorders from './components/SchengenBorders';
import EmploymentRegulation from './components/EmploymentRegulation';
import VisaCode from './components/VisaCode';
import ResidenceAct from './components/ResidenceAct';
import VisaHandbook from './components/VisaHandbook';
import NeedHelp from './components/NeedHelp';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
      <Hero/>
      <ResidenceAct/>
      <SchengenBorders/>
      <EmploymentRegulation/>
      <VisaCode/>
      <VisaHandbook/>
      <NeedHelp/>
      <Footer/>
     </div>
  )
}

export default App
