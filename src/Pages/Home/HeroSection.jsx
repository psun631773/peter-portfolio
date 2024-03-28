import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'antd';
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

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            {/* {typedText} */}
            Hey, I'm Peter Sun
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack  Developer</span>{" "}
            <br />

          </h1>

          <p className="hero--section-description">
            An innovative and solution-driven Full Stack Software Engineer, with over 5 years of experience working at IBM, TekoAI, Thousand Maple and Huayelian

            <br />
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownloadClick} >Download CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img_peter.png" alt="Hero Section" />
      </div>
    </section >
  );
}
