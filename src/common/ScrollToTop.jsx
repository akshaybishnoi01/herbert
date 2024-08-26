import React, { useEffect, useState } from 'react'
import upArrow from "../assets/image/svg/up-arrow.svg"

const ScrollToTop = () => {
    const Scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = window.scrollY;
        if (scrolled > 400) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);
    
    return (
        <button onClick={Scroll} className="animate-bounce place-items-center fixed right-[2%] bottom-[2%] sm:bottom-[3%] sm:right-[3%] lg:bottom-[3%] cursor-pointer shadow-4xl duration-300 ease-linear z-30" style={{ display: visible ? 'grid' : 'none' }}>
            <img src={upArrow} alt="upArrow" className='max-sm:max-w-[35px] sm:max-w-[40px] md:max-w-[45px] lg:max-w-[60px]' />
        </button>
    )
}

export default ScrollToTop
