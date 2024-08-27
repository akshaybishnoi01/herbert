import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const PrimaryHeading = (props) => {
    const headingRef = useRef(null);
    useEffect(() => {
        const element = headingRef.current;
        const typeSplit = new SplitType(element, { types: 'words', tagName: 'span' });
        gsap.from(element.querySelectorAll('.word'), {
            x: '100%', opacity: 0, duration: 0.5, ease: 'power1.in', stagger: 0.1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf(element.querySelectorAll('.word'));
            typeSplit.revert();
        };
    }, []);

    return (
        <h2 ref={headingRef} className={`${props.className} font-rubik font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[56px] md:leading-10 sm:leading-9 leading-7 text-black`}>{props.text}
            <span className='text-offRed font-rubik font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[56px] md:leading-10 sm:leading-9 leading-7'>{props.redText}</span>{props.blackText}
        </h2 >
    )
}

export default PrimaryHeading