import React, { useState, useEffect, useRef } from 'react';
import { useAnimation } from '../../context/AnimationContext';
export default function ContactMe() {
  const { playAnimation } = useAnimation();
  const [animationClass, setAnimationClass] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimationClass('slideUpFadeIn');
            setTimeout(() => {
              setAnimationClass('');
            }, 3000); // 确保这里的时间与CSS中的动画时间相匹配
          }
        });
      },
      {
        threshold: [0, 0.5, 1] // 从0%到100%都触发
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (playAnimation) {
      setAnimationClass('slideUpFadeIn');
      setTimeout(() => {
        setAnimationClass('');
      }, 2000); // 确保这里的时间与CSS中的动画时间相匹配
    }
  }, [playAnimation]);

  return (
    <section ref={sectionRef} className={`contact--section ${animationClass}`} id="Contact">
      {/* <section id="Contact" className="contact--section"> */}
      <div>
        <br />
        <br />

        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          <br />
          Email address:   <a href="mailto:psun631773@gmail.com" style={{ textDecoration: 'none' }}>psun631773@gmail.com</a> <br /><br />
          Telephone number:    (+1) 416-837-3550
        </p>
        <br />
        <br />
        <br />

      </div>

    </section>
  );
}
