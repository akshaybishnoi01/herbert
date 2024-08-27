import footerLogo from '../assets/image/webp/footer-logo.webp'
import PrimaryParagraph from '../common/PrimaryParagraph';
import { FOOTER_DATA } from '../common/Helper';
import facebook from '../assets/image/svg/facebook.svg'
import instagram from '../assets/image/svg/instagram.svg'
import linkedin from '../assets/image/svg/linkedin.svg'
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

const Footer = () => {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            const newUrl = `/${id}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        }
    };
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".footer-link", {
                x: -200,
                opacity: 0,
                duration: 0.4,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".footer",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
            gsap.from(".footer-logo", {
                scale: "0",
                opacity: 0,
                duration: 0.6,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".footer",
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
        <div id='Herbert' className='bg-offOrange'>
            <div className='max-w-[1920px] mx-auto'>
                <div className='container pt-[212px] sm:pb-[50px] pb-[42px] footer'>
                    <div className='flex lg:justify-between lg:flex-row flex-col md:gap-10 gap-8'>
                        <div>
                           <a href="/"> <img className='md:max-w-[326px] max-w-[210px] w-full footer-logo pointer-events-none' src={footerLogo} alt="#" /></a>
                            <PrimaryParagraph className="max-w-[412px] w-full mt-[15px]" text="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." />
                        </div>
                        <div className='lg:max-w-[518px] max-sm:flex-wrap flex lg::gap-[86px] justify-between'>
                            {FOOTER_DATA.map((item, idx) => (
                                <div key={idx} className='max-sm:flex max-sm:flex-col max-sm:w-[50%]'>
                                    <p className='font-semibold text-base leading-[19px] text-black opacity-90'>
                                        {item.heading}
                                    </p>
                                    <div className="flex flex-col mt-4 gap-2 footer-link">
                                        {item.items.map((e, i) => (
                                            <a key={i} href={e.link} onClick={(event) => handleClick(event, e.link.substring(1))} className='font-normal text-base leading-6 text-gray hover:text-black duration-300'>{e.text}</a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className='flex flex-col max-sm:w-full max-sm:mt-8'>
                                <p className='font-semibold text-base leading-[19px] text-black opacity-90'>
                                    Follow Us
                                </p>
                                <div className='flex gap-3 mt-4 footer-link'>
                                    <a href="https://www.facebook.com/" target='blank'><img className='hover:scale-90 duration-300' src={facebook} alt="#" /></a>
                                    <a href="https://www.instagram.com/" target='blank'><img className='hover:scale-90 duration-300' src={instagram} alt="#" /></a>
                                    <a href="https://www.linkedin.com/login" target='blank'><img className='hover:scale-90 duration-300' src={linkedin} alt="#" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-offGray'></div>
                <p className='font-normal sm:text-base text-sm leading-[21px] text-gray sm:leading-6 text-center py-4'>
                    Copyright © 2024 herbert, All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
