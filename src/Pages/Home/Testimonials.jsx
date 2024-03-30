import data from "../../data/index.json";
import React, { useState, useEffect, useRef } from 'react';
import { useAnimation } from '../../context/AnimationContext';
export default function Testimonial() {
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
    <section ref={sectionRef} className={`testimonial--section ${animationClass}`} id="testimonial">
      {/* <section className="testimonial--section" id="testimonial"> */}
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">Professional Experience</p> */}
          <h2 className="sections--heading">Professional Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
            <p className="text-md testimonial--author--name">Teko AI Canada</p>
              <p>2024 March 1th - present</p>
            </div>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
