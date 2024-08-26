import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const PrimaryParagraph = (props) => {
    const paragraphRef = useRef(null);

useEffect(() => {
  const element = paragraphRef.current;
  const typeSplit = new SplitType(element, {types: 'lines', tagName: 'span'});
  gsap.from(element.querySelectorAll('.line'), {
    y: '100%',opacity: 0, duration: 1, ease: 'power1.in', stagger: 0.1,
      scrollTrigger: {
      trigger: element,
      start: 'top 80%', 
      toggleActions: 'play none none none', 
    },
  });
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(element.querySelectorAll('.line'));
  };
}, []);
    return (
        <p ref={paragraphRef} className={`${props.className} font-normal sm:text-base text-sm sm:leading-6 leading-[21px] text-gray`}>{props.text}</p>
    )
}

export default PrimaryParagraph