import React, { useEffect, useState } from 'react';
import upArrow from "../assets/image/svg/up-arrow.svg";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1920);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const toggleVisible = () => {
        const scrolled = window.scrollY;
        setVisible(scrolled > 400);
    };

    const checkScreenWidth = () => {
        setIsLargeScreen(window.innerWidth >= 1920);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        window.addEventListener('resize', checkScreenWidth);
        
        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('scroll', toggleVisible);
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className="animate-bounce place-items-center fixed right-[2%] bottom-[2%] sm:bottom-[3%] sm:right-[3%] lg:bottom-[3%] cursor-pointer shadow-4xl duration-300 ease-linear z-30"
            style={{
                display: visible ? 'grid' : 'none',
                right: isLargeScreen ? 'calc((100vw - 1920px) / 2 + 30px)' : '3%',
            }}
        >
            <img
                src={upArrow}
                alt="Up Arrow"
                className='max-sm:max-w-[35px] sm:max-w-[40px] md:max-w-[45px] lg:max-w-[60px]'
            />
        </button>
    );
};

export default ScrollToTop;
