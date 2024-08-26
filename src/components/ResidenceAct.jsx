import React from 'react'
import menResidence from '../assets/image/webp/men-residence.webp'
import PrimaryParagraph from '../common/PrimaryParagraph'
import PrimaryHeading from '../common/PrimaryHeading'

const ResidenceAct = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <div id='Sources' className='container lg:pb-[120px] md:pb-24 pb-20'>
      <div id='Features' className='max-w-[1024px] w-full flex lg:justify-start justify-center items-center gap-[153px]'>
          <div className='max-w-[478px] w-full '>
            <PrimaryHeading text="Residence " redText="Act" />
            <PrimaryParagraph className="max-w-[478px] sm:mt-4 mt-[14px]" text="The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:"/>
            <div className='flex justify-center'>
            <img className='md:max-w-[392px] max-w-[261px] lg:hidden w-full my-8' src={menResidence} alt="#" />
            </div>
            <ul className='list-disc py-2 ps-5'>
              <li className='font-normal text-base leading-6 text-gray'>Entry into Germany</li>
              <li className='font-normal text-base leading-6 text-gray'>Residence permits</li>
              <li className='font-normal text-base leading-6 text-gray'>Employment regulations for foreigners</li>
              <li className='font-normal text-base leading-6 text-gray'>Integration measures</li>
            </ul>
            <PrimaryParagraph className="max-w-[478px]" text="Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany."/>
          </div>
          <img className='max-w-[392px] lg:flex hidden w-full' src={menResidence} alt="#" />
        </div>
    </div>
    </div>
  )
}

export default ResidenceAct
