import React from 'react'
import Header from '../common/Header'
import PrimaryParagraph from '../common/PrimaryParagraph'
import PrimaryButton from '../common/PrimaryButton'

const Hero = () => {
  return (
    <div className='relative max-w-[1920px] mx-auto'>
      <Header />
      <div className='container pt-[72px] md:pb-[120px] pb-24'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-rubik md:font-semibold font-bold lg:text-custom-2xl md:text-5xl sm:text-4xl text-custom-xl lg:leading-[66px] md:leading-[48px] sm:leading-10 leading-8 max-w-[807px] text-center text-black'>
            The Foundations of <span className='text-offRed font-rubik md:font-semibold font-bold lg:text-custom-2xl md:text-5xl sm:text-4xl text-custom-xl lg:leading-[66px] md:leading-[48px] sm:leading-10 leading-8'>German Immigration</span> Expertise
          </h1>
          <PrimaryParagraph className='max-w-[685px] text-center sm:mt-4 mt-[14px] md:mb-10 mb-8' text="Herbert, our AI chatbot, is built on a comprehensive understanding of German immigration law. To ensure accuracy and reliability, Herbert's knowledge base is derived from the following authoritative sources:" />
          <PrimaryButton className="text-white border border-orange bg-orange hover:bg-white hover:text-orange sm:max-w-[136px] max-w-[126px] w-full" text="Contact Us" />
        </div>
      </div>
      <div className='bg-hero bg-no-repeat bg-cover absolute top-0 left-1/2 -translate-x-1/2 w-full h-[773px] bg-center -z-10 '></div>
    </div>
  )
}

export default Hero
