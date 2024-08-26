import PrimaryButton from '../common/PrimaryButton'
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

const NeedHelp = () => {
  useLayoutEffect(() => {
    const aot = gsap.context(() => {
      gsap.from(".white-head", {
        x: -200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".need-help",
            start: "top 50%",
            end: "bottom top",
            toggleActions: "play none none none",
            once: true,
        },
    });
        gsap.from(".white-para", {
            scale: "0",
            opacity: 0,
            duration: 0.6,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".need-help",
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
   <div id='Vision' className='max-w-[1920px] mx-auto'>
     <div className='container sm:translate-y-[120px] translate-y-[160px] need-help'>
      <div className='bg-orange flex flex-col items-center justify-center sm:py-16 sm:p-0 p-5 rounded-xl'>
         <h3 className='font-rubik white-head lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[56px] md:leading-10 sm:leading-9 leading-7 text-center text-white font-semibold max-w-[632px]'>
         Need Help in Your Visa? Ask Herbert Now!
         </h3>
         <p className='max-w-[528px] white-para font-normal sm:text-base text-sm sm:leading-6 leading-[21px] text-white sm:pt-4 pt-3 md:pb-[42px] pb-8 text-center'>
         Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
         </p>
         <div className='flex sm:flex-row flex-col sm:gap-4 gap-3 max-sm:w-full max-sm:max-w-[287px]'>
         <PrimaryButton className="text-orange border border-white bg-white hover:bg-orange hover:text-white sm:max-w-[235px] w-full" text="Start your conversation"/>
         <PrimaryButton className="text-white  border border-white bg-orange hover:bg-white hover:text-orange sm:max-w-[136px] w-full" text="Learn More"/>
         </div>
      </div>
    </div>
   </div>
  )
}

export default NeedHelp
