import data from "../../data/index.json";
import React, { useState, useEffect, useRef } from 'react';
import { useAnimation } from '../../context/AnimationContext';
export default function MySkills() {
  const { playAnimation } = useAnimation();
  const [animationClass, setAnimationClass] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimationClass('swingFadeIn');
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
      setAnimationClass('swingFadeIn');
      setTimeout(() => {
        setAnimationClass('');
      }, 2000); // 确保这里的时间与CSS中的动画时间相匹配
    }
  }, [playAnimation]);

  return (
    <section ref={sectionRef} className={`skills--section ${animationClass}`} id="mySkills">
    
      {/* <section className="skills--section" id="mySkills">  */}
      <div className="portfolio--container">
        {/* <p className="section--title">My Skills</p> */}
        <h2 className="skills--section--heading">Skills & Abilities</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
