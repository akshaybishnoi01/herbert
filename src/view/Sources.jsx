import React from 'react'
import Hero from '../components/Hero';
import SchengenBorders from '../components/SchengenBorders';
import EmploymentRegulation from '../components/EmploymentRegulation';
import VisaCode from '../components/VisaCode';
import ResidenceAct from '../components/ResidenceAct';
import VisaHandbook from '../components/VisaHandbook';
import NeedHelp from '../components/NeedHelp';
import Footer from '../components/Footer';
import PreLoader from '../common/PreLoader';
import ScrollToTop from '../common/ScrollToTop';

const Sources = () => {
  return (
    <div>
      <Hero/>
      <ResidenceAct/>
      <SchengenBorders/>
      <EmploymentRegulation/>
      <VisaCode/>
      <VisaHandbook/>
      <NeedHelp/>
      <Footer/>
      <PreLoader/>
      <ScrollToTop/>
    </div>
  )
}

export default Sources
