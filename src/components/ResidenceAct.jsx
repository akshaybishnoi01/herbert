import menResidence from '../assets/image/webp/men-residence.webp';
import PrimaryParagraph from '../common/PrimaryParagraph';
import PrimaryHeading from '../common/PrimaryHeading';
import actVector from '../assets/image/webp/act-vector.webp'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ResidenceAct = () => {
  useLayoutEffect(() => {
    const aot = gsap.context(() => {
      gsap.from(".act-text", {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".residence",
          start: "top 50%",
          end: "bottom top",
          toggleActions: "play none none none",
          once: true,
        },
      });
      gsap.from(".residence-img", {
        scale: 0, 
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".residence",
          start: "top 50%",
          end: "bottom top",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });
    return () => aot.revert();
  }, []);

  return (
    <div className='max-w-[1920px] mx-auto relative'>
      <div id='Sources' className='container lg:pb-[120px] md:pb-24 pb-20 residence'>
        <div id='Features' className='max-w-[1024px] w-full flex lg:justify-start justify-center items-center gap-[153px]'>
          <div className='max-w-[478px] w-full '>
            <PrimaryHeading text="Residence " redText="Act" />
            <PrimaryParagraph className="max-w-[478px] sm:mt-4 mt-[14px]" text="The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:" />
            <div className='flex justify-center'>
              <img className='md:max-w-[392px] max-w-[261px] lg:hidden w-full my-8 pointer-events-none' src={menResidence} alt="Men Residence" />
            </div>
            <ul className='list-disc py-2 ps-5'>
              <li className='act-text font-normal text-base leading-6 text-gray'>Entry into Germany</li>
              <li className='act-text font-normal text-base leading-6 text-gray'>Residence permits</li>
              <li className='act-text font-normal text-base leading-6 text-gray'>Employment regulations for foreigners</li>
              <li className='act-text font-normal text-base leading-6 text-gray'>Integration measures</li>
            </ul>
            <PrimaryParagraph className="max-w-[478px]" text="Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany." />
          </div>
          <img className='residence-img max-w-[392px] lg:flex hidden w-full pointer-events-none' src={menResidence} alt="Men Residence" />
        </div>
      </div>
      <img className='absolute md:bottom-[44%] bottom-[50%] right-[0px] md:max-w-[268px] max-w-[121px] h-[171px] md:h-[381px]' src={actVector} alt="#" />
    </div>
  );
}

export default ResidenceAct;
