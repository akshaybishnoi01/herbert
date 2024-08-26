import Header from '../common/Header'
import PrimaryParagraph from '../common/PrimaryParagraph'
import PrimaryButton from '../common/PrimaryButton'
import { gsap } from "gsap";
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.to("h1", {
        y: '0',
        delay:'2.5',
        opacity: "1",
        duration:"0.8",
    });
    tl.to(".para-hero", {
      y: '0',
      opacity: "1",
      duration:"0.8",
  });
}, []);
  return (
    <div className='relative max-w-[1920px] mx-auto'>
      <Header />
      <div className='container pt-[72px] md:pb-[120px] pb-24'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='translate-y-14 opacity-0 font-rubik md:font-semibold font-bold lg:text-custom-2xl md:text-5xl sm:text-4xl text-custom-xl lg:leading-[66px] md:leading-[48px] sm:leading-10 leading-8 max-w-[807px] text-center text-black'>
            The Foundations of <span className='text-offRed font-rubik md:font-semibold font-bold lg:text-custom-2xl md:text-5xl sm:text-4xl text-custom-xl lg:leading-[66px] md:leading-[48px] sm:leading-10 leading-8'>German Immigration</span> Expertise
          </h1>
          <p className='para-hero translate-y-14 opacity-0 max-w-[685px] text-center sm:mt-4 mt-[14px] md:mb-10 mb-8 font-normal sm:text-base text-sm sm:leading-6 leading-[21px] text-gray'>
          Herbert, our AI chatbot, is built on a comprehensive understanding of German immigration law. To ensure accuracy and reliability, Herbert's knowledge base is derived from the following authoritative sources:
          </p>
          <PrimaryButton className="text-white border border-orange bg-orange hover:bg-white hover:text-orange sm:max-w-[136px] max-w-[126px] w-full" text="Contact Us" />
        </div>
      </div>
      <div className='bg-hero bg-no-repeat bg-cover absolute top-0 left-1/2 -translate-x-1/2 w-full h-[773px] bg-center -z-10 '></div>
    </div>
  )
}

export default Hero
