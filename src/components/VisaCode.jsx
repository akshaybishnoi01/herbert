import Icons from '../common/Icons'
import { CARD_DATA } from '../common/Helper'
import PrimaryHeading from '../common/PrimaryHeading'
import PrimaryParagraph from '../common/PrimaryParagraph'
import PrimaryButton from '../common/PrimaryButton'
import visaVector from '../assets/image/webp/visa-vector.webp'
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

const VisaCode = () => {
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".box", {
                y: "100%",
                opacity: 0,
                duration: 0.5,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".visa",
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
        <div className='bg-offOrange'>
            <div className='max-w-[1920px] mx-auto relative'>
                <div className='container md:py-[100px] sm:py-20 py-16 visa'>
                    <div id='Plans' className='flex xl:gap-[135px] md:gap-20 gap-14 lg:flex-row flex-col justify-start lg:items-center'>
                        <div className='flex sm:gap-9 gap-6 max-sm:justify-center items-center max-w-[532px] w-full'>
                            {CARD_DATA.map((value) => (
                                <div key={value.id} className='sm:max-w-[248px] max-w-[152px] w-full flex flex-col sm:gap-9 gap-6'>
                                    {value.item.map((value, index) => (
                                        <div key={index} className='sm:max-w-[248px] max-w-[152px] bg-white box rounded-xl flex flex-col justify-center items-center sm:py-[27px] py-[18px] sm:px-[25px] px-[17px]' >
                                            <Icons className="max-sm:w-[49px] max-sm:h-[49px]" IconName={value.icon} />
                                            <p className='max-w-[197px] sm:text-xl text-base sm:leading-6 leading-5 text-center text-black font-medium mt-[14px]'>
                                                {value.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className='max-w-[473px] w-full'>
                            <PrimaryHeading text="Visa" redText="Code" />
                            <PrimaryParagraph className="max-w-[473px] sm:mt-4 mt-[14px]" text="This code standardizes procedures for short-stay visas in the Schengen Area. Herbert's understanding of the Visa-Kodex ensures accurate information on:" />
                            <PrimaryButton className="text-white border border-orange bg-orange hover:bg-white hover:text-orange max-w-[136px] w-full md:mt-11 mt-8" text="Learn More" />
                        </div>
                    </div>
                </div>
                <img className='absolute right-0 bottom-[50%] max-w-[216px] h-[265px] md:flex hidden' src={visaVector} alt="#" />
                <img className='absolute left-[-2%] bottom-[38%] max-w-[127px] h-[180px] md:hidden flex rotate-180' src={visaVector} alt="#" />
            </div>
        </div>
    )
}

export default VisaCode
