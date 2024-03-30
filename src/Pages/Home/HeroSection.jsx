import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'antd';
import { useAnimation } from '../../context/AnimationContext';
// import 'antd/dist/antd.css'; // 引入Ant Design样式

const handleDownloadClick = () => {
  Modal.confirm({
    title: 'Confirm Download',
    content: 'Are you sure you want to download the CV?',
    onOk() {
      // 确认操作
      const link = document.createElement('a');
      link.href = `${process.env.PUBLIC_URL}/doc/peter-cv.pdf`;
      link.download = 'Peter_Sun_CV.pdf'; // 设置下载的文件名
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    onCancel() {
      // 取消操作，这里不需要执行任何操作
    },
  });
};

export default function HeroSection() {


  const { playAnimation } = useAnimation();
  const [animationClass, setAnimationClass] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimationClass('fadeInAnimation');
            setTimeout(() => {
              setAnimationClass('');
            }, 2000); // 确保这里的时间与CSS中的动画时间相匹配
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
      setAnimationClass('fadeInAnimation');
      setTimeout(() => {
        setAnimationClass('');
      }, 2000); // 确保这里的时间与CSS中的动画时间相匹配
    }
  }, [playAnimation]);

  const fullText = "Hey, I'm Peter Sun.";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const typeText = () => {
      let index = 0;
      const intervalId = setInterval(() => {
        index++;
        setTypedText(fullText.slice(0, index));

        if (index > fullText.length) {
          index = 0;
          setTypedText(''); // 在重新开始之前清空文本
          clearInterval(intervalId);
          setTimeout(typeText, 1500); // 在开始新的循环前稍作延迟
        }
      }, 150);
    };

    typeText(); // 初始调用

    return () => {
      setTypedText(''); // 如果组件卸载，清空文本
    };
  }, [fullText]);

  return (
    <section className="hero--section" id="heroSection">
      {/* <section id="heroSection" className="hero--section"> */}
      {/* <div   ref={sectionRef} className="hero--section--content--box"> */}
      <div ref={sectionRef} className={`hero--section--content--box ${animationClass}`}>
        <br />
        <br />
        <div className="hero--section--content">
          <p className="section--title" style={{ minHeight: '1em' }}>
            &nbsp;{typedText}
          </p>

          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack  Developer</span>{" "}
            <br />

          </h1>

          <p className="hero--section-description">

            A solution-driven Full Stack Software Engineer with over 5 years of experience working at IBM, TekoAI, Thousand Maple, and Huayelian.
            <br />
            Holds a degree in Electrical and Computer Engineering from the University of Windsor, Canada.

            <br />
            <br />
            <br />
          </p>
        </div>
        <div class="btn-center-container">
          <button className="btn btn-primary" onClick={handleDownloadClick} >Download CV</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img_peter.png" alt="Hero Section" />
      </div>
    </section >
  );
}
