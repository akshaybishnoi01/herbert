import React, { useEffect, useState } from 'react';
import preloaderLogo from "../assets/image/webp/logo.webp";

const PreLoader = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const Timer = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 2000);
        return () => {
            clearTimeout(Timer);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;

    return (
        <div className='min-h-screen w-full bg-white z-[100] fixed top-0 left-0 grid place-items-center'>
            <div className='animate-pulse flex gap-5 sm:gap-8 justify-center items-center'>
                <img src={preloaderLogo} alt="logo" className='w-[260px] sm:w-[380px] relative z-10' />
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div
                        className="sm:w-24 w-18 h-18 sm:h-24 border-4 border-transparent text-orange text-2xl animate-spin flex items-center justify-center border-t-blue-600 rounded-full"
                    >
                        <div
                            className="sm:w-20 w-14 h-14 sm:h-20 border-4 border-transparent text-orange text-2xl animate-spin flex items-center justify-center border-t-offRed rounded-full"
                        >
                            <div
                                className="sm:w-20 w-10 h-10 sm:h-20 border-4 border-transparent text-red-100 text-4xl animate-spin flex items-center justify-center border-t-offBlack rounded-full"
                            >
                                <div
                                    className="sm:w-16 w-10 h-10 sm:h-16 border-4 border-transparent text-orange text-2xl animate-spin flex items-center justify-center border-t-black rounded-full"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader
