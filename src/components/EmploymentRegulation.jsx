import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import PrimaryParagraph from '../common/PrimaryParagraph'
import Icons from '../common/Icons'
import employmentImage from '../assets/image/webp/employment-image.webp'
import employmentVector from '../assets/image/webp/employment-vector.webp'

const EmploymentRegulation = () => {
    return (
        <div className='relative overflow-hidden max-w-[1920px] mx-auto'>
            <div id='Services' className='container ld:py-[120px] md:py-24 py-20'>
                <div className='flex flex-col justify-center items-center'>
                    <PrimaryHeading className="text-center" text="Employment " redText="Regulation" />
                    <PrimaryParagraph className="max-w-[716px] text-center pt-4" text="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:" />
                </div>
                <div className='flex justify-center pt-6 pb-[44px]'>
                <img className='md:max-w-[260px] max-w-[286px] lg:hidden w-full' src={employmentImage} alt="#" />
                </div>
                <div className='max-w-[1055px] w-full lg:pt-14 lg:gap-[73px] md:gap-10 sm:gap-8 gap-6 flex lg:flex-row flex-col lg:items-center max-lg:justify-center'>
                    <div className='lg:max-w-[325px] w-full flex flex-row lg:flex-col lg:gap-0 md:gap-9 gap-6'>
                        <div className='flex flex-col lg:items-end max-lg:w-6/12'>
                            <Icons className="max-sm:w-[31px] max-sm:h-[31px]" IconName="numberOne" />
                            <p className='sm:text-xl text-base sm:leading-6 leading-5 font-medium text-black pt-4'>
                                Work permit requirements
                            </p>
                        </div>
                        <div className='flex flex-col lg:pt-14 lg:items-end max-lg:w-6/12'>
                            <Icons className="max-sm:w-[31px] max-sm:h-[31px]" IconName="numberTwo" />
                            <p className='sm:text-xl text-base sm:leading-6 leading-5 font-medium text-black pt-4'>
                                Job-seeking visas
                            </p>
                        </div>
                    </div>
                    <img className='max-w-[260px] lg:flex hidden w-full' src={employmentImage} alt="#" />
                    <div className='lg:max-w-[325px] max-w-[650px] w-full flex lg:flex-col flex-row lg:gap-0 md:gap-24 gap-6'>
                        <div className='flex flex-col lg:items-start max-lg:w-6/12'>
                            <Icons className="max-sm:w-[31px] max-sm:h-[31px]" IconName="numberThree" />
                            <p className='sm:text-xl text-base sm:leading-6 leading-5 font-medium text-black pt-4'>
                                Self-employment regulations
                            </p>
                        </div>
                        <div className='flex flex-col lg:pt-14 lg:items-start max-lg:w-6/12'>
                            <Icons className="max-sm:w-[31px] max-sm:h-[31px]" IconName="numberFour" />
                            <p className='sm:text-xl text-base sm:leading-6 leading-5 font-medium text-black pt-4'>
                                Specific provisions for various professional groups
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute bottom-[-17%]' src={employmentVector} alt="#" />
        </div>
    )
}

export default EmploymentRegulation
