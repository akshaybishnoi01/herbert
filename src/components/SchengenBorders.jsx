import schengenImage from '../assets/image/webp/schengen-image.webp'
import PrimaryParagraph from '../common/PrimaryParagraph'
import PrimaryHeading from '../common/PrimaryHeading'
import borderVector from '../assets/image/webp/border-vector.webp'
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

const SchengenBorders = () => {
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".li-text", {
                x: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".schengen",
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
        <div id='About' className='bg-offOrange md:py-[72px] py-16'>
            <div className='max-w-[1920px] mx-auto schengen relative'>
                <div className='max-w-[1318px] w-full flex lg:flex-row flex-col xl:gap-[144px] md:gap-16 gap-14 justify-start items-center'>
                    <img className='xl:max-w-[701px] max-w-[580px] w-full xl:h-[602px] pointer-events-none' src={schengenImage} alt="#" />
                    <div className='lg:mx-0 mx-6'>
                        <PrimaryHeading className="max-w-[473px]" text="Schengen Borders " redText="Code" />
                        <PrimaryParagraph className="max-w-[470px] mt-[14px]" text="As part of the Schengen Area, Germany adheres to this code for border control. Herbert's knowledge of the Schengener Grenzkodex covers:" />
                        <ul className='list-disc pt-2 ps-5'>
                            <li className='li-text font-normal sm:text-base text-sm sm:leading-6 leading-[21px] text-gray'>Short-term stay regulations</li>
                            <li className='li-text font-normal sm:text-base text-sm sm:leading-6 leading-[21px] max-sm:py-2 text-gray'>Entry requirements for the Schengen Area</li>
                            <li className='li-text font-normal sm:text-base text-sm sm:leading-6 leading-[21px] text-gray'>Border crossing procedures</li>
                        </ul>
                    </div>
                </div>
                <img className='absolute right-0 md:bottom-[3%] bottom-[-6%] md:max-w-[216px] max-w-[117px] md:h-[265px] h-[180px]' src={borderVector} alt="#" />
            </div>
        </div>
    )
}

export default SchengenBorders
