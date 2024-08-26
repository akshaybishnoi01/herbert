import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const PrimaryButton = (props) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const element = buttonRef.current;
    const typeSplit = new SplitType(element, {types: 'words', tagName: 'span'});
    gsap.from(element.querySelectorAll('.word'), {
      x: '-200%',opacity: 0, duration: 0.6, ease: 'power1.in', stagger: 0.1,
        scrollTrigger: {
        trigger: element,
        start: 'top 80%', 
        toggleActions: 'play none none none', 
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(element.querySelectorAll('.word'));
    };
  }, []);
    return (
      <button ref={buttonRef} className={`${props.className} rounded-lg py-[14px] text-nowrap px-6 font-rubik font-semibold sm:text-base text-sm sm:leading-[18px] leading-[16.59px] transition-all duration-500`}>{props.text}
      </button>
    )
  }
  
  export default PrimaryButton