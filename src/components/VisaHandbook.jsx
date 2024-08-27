import menResidence from '../assets/image/webp/men-residence.webp'
import PrimaryParagraph from '../common/PrimaryParagraph'
import PrimaryHeading from '../common/PrimaryHeading'
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

const VisaHandbook = () => {
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".handbook-text", {
                x: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: ".handbook",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".handbook-img", {
                scale: "0",
                opacity: 0,
                duration: 0.6,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".handbook",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".para-text", {
                x: -400,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".handbook",
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
        <div className='relative max-w-[1920px] mx-auto'>
            <div className='container lg:pt-[120px] md:pt-24 pt-20 max-sm:-mb-24 handbook
handbook'>
                <div className='flex lg:gap-[153px] gap-14 lg:flex-row flex-col items-center lg:pb-[65px] pb-20'>
                    <div className='max-w-[478px] w-full'>
                        <PrimaryHeading text="Visa " redText="Handbook" />
                        <PrimaryParagraph className="max-w-[478px] sm:mt-4 mt-[14px]" text="The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herbert's training on this resource offers:" />
                        <ul className='list-disc py-2 ps-5'>
                            <li className='handbook-text font-normal text-base leading-6 text-gray'>In-depth insights into visa application assessment</li>
                            <li className='handbook-text font-normal text-base leading-6 text-gray'>Clarification on complex cases and exceptions</li>
                            <li className='handbook-text font-normal text-base leading-6 text-gray'>Nuanced interpretations of immigration laws and regulations</li>
                        </ul>
                    </div>
                    <img className='max-w-[392px] w-full handbook-img pointer-events-none' src={menResidence} alt="#" />
                </div>
                <div className='border rounded-lg border-offGray max-w-[1440px] w-full bg-white'>
                    <p className='font-normal text-base text-gray leading-6 p-6 max-w-[1140px] para-text'>
                        By basing its knowledge on these official sources, Herbert provides you with accurate, up-to-date, & reliable information on German immigration processes. Our commitment to using these authoritative resources ensures that you receive guidance aligned with current German immigration laws & practices.
                    </p>
                </div>
            </div>
            <div className='bg-handbookBg bg-no-repeat bg-cover absolute sm:top-[65%] top-[70%] left-1/2 -translate-x-1/2 w-full h-[670px] bg-center -z-10'></div>
        </div>
    )
}

export default VisaHandbook
