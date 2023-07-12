import React, { useEffect } from "react";
import resume from "../resume/MD_NAFIS_AAMIR.pdf"
import AOS from "aos";

export default function About() {

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1PuZcBPR99U0LXYEYhTPW1HEq2WBoyHqE/view?usp=sharing", '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          <p id="user-detail-intro">
          Step into my coding realm, where I harness the power of caffeine to transform it into elegant lines of code. <p style={{ display: 'inline-block' }} className="sauce">I'm Md Nafis Aamir</p>, a skilled and dedicated Full Stack Web Developer. I possess expertise in HTML5, CSS3, JavaScript, ReactJS, NodeJS, Express, and have a solid grasp of database technologies like MongoDB. My true passion lies in crafting captivating websites that seamlessly blend aesthetics and functionality. With an unwavering commitment to excellence and an eye for detail, I thrive on conquering intricate coding challenges. Beyond coding, I am a tech enthusiast, constantly exploring the latest trends and pushing the boundaries of what's possible in the digital realm.
            <br />
          </p>
          <br />
        </div>
        <a 
        onClick={handleDownload} 
        rel="noreferrer" href={resume} download={"MD_NAFIS_AAMIR_RESUME"} id="resume-button-2" className="contact-button resume-button second-btn">
          Resume</a>
      </div>
    </section>
  );
}
