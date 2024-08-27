import React, { useEffect, useState } from 'react';
import { NAV_ITEMS_DATA } from './Helper';
import logo from '../assets/image/webp/logo.webp'
import navbarIcon from '../assets/image/svg/navbar-icon.svg'
import crossIcon from '../assets/image/svg/cross-icon.svg'
import PrimaryButton from './PrimaryButton';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        var tl = gsap.timeline();
        tl.to(".nav-gsap", {
            y: '0',
            delay: '2.4',
            opacity: "1",
            stagger: 0.2,
        });
    }, []);
    const [show, setShow] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                document.body.style.overflow = show ? "" : "hidden";
            } else {
                document.body.style.overflow = "";
                setShow(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
        };
    }, [show]);
    const handleClick = (e, id) => {
        e.preventDefault();
        console.log('ID:', id);
        const element = document.getElementById(id);
        if (element) {
            console.log('Element Found:', element);
            element.scrollIntoView({ behavior: "smooth" });
            const newUrl = `/${id}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        } else {
            console.log('Element Not Found');
        }
        if (window.innerWidth < 768) {
            setShow(!show);
        }
    };

    return (
        <div className='md:py-[23px] sm:py-5 py-[14px]'>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    <a href="/" className='md:max-w-[180px] max-w-[117px] z-[90] flex'><img src={logo} alt="logo" className='w-full nav-gsap -translate-y-16 opacity-0 pointer-events-none'/></a>
                    <div className={`flex md:flex-row duration-300 max-md:pt-[108px] md:justify-center ease-linear bg-white z-50 flex-col items-center gap-[49px] md:gap-11 absolute top-0 -right-full w-full min-h-screen md:w-fit md:bg-transparent md:relative md:min-h-fit md:right-auto md:top-auto ${show ? "" : " !right-0"}`}>
                        {NAV_ITEMS_DATA.map((items, index) => (
                            <Link to={items.path} key={index} className='nav-gsap -translate-y-16 opacity-0 text-gray hover:text-black text-base leading-6 font-normal duration-300 ease-linear after:left-[50%] after:translate-x-[-50%] after:mx-auto hover:after:w-[31px] after:h-[3px] after:absolute after:bg-black after:bottom-[-5px] after:w-0 after:rounded after:duration-300 after:ease-linear relative'>{items.text}</Link>
                        ))}
                        <span className='flex md:w-[80%] w-[90%] bg-offGray h-px absolute top-[153px] md:hidden left-1/2 -translate-x-1/2'></span>
                        <span className='flex md:w-[80%] w-[90%] bg-offGray h-px absolute top-[229px] md:hidden left-1/2 -translate-x-1/2'></span>
                        <PrimaryButton className="text-white md:hidden border border-orange bg-orange hover:bg-white hover:text-orange max-w-[136px] w-full mt-[-17px]" text="Contact Us" />
                    </div>
                    <button
                        aria-label="Toggle Navigation Menu"
                        className={`cursor-pointer relative z-[90] md:hidden ${show ? "" : "cross"}`}
                        onClick={() => setShow(!show)}
                    >
                        <img
                            src={show ? navbarIcon : crossIcon}
                            alt={show ? "Navbar Open Icon" : "Navbar Closed Icon"}
                        />
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Header;