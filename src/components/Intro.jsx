import React from "react";
import img1 from "../images/pictures/personal.png";
import Typewriter from "typewriter-effect";

export default function Intro({ handleClick, boolean }) {
  return (
    <div id="home" className="hero" onClick={() => {
        if (boolean === false) handleClick();
      }}>
      <div className="home-img-cont">
        <div class="outer-circle circle circle-1">
          <span class="sq sq-1"></span>
          <span class="inner-circle circle">
            <img className="home-img" src={img1} alt="personal" />
          </span>
          <span class="sq sq-2"></span>
        </div>
      </div>
      <div className="intro give-padding contain">
        <div className="txt-light-red twent">
          Hello<span className="wave">🙏</span>, my name is
        </div>
        <div id="user-detail-name" className="newname">
          Nafis Aamir.
        </div>
        <div className="bio what-i-do">
        <Typewriter  options={{
              loop: true,
            }}

onInit={(typewriter) => {
    typewriter
        .typeString("Front End Developer")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Back End Developer")
        .pauseFor(1000)
        .deleteAll()
        .typeString("FULL STACK MERN DEVELOPER")
        .pauseFor(1000)
        .deleteAll()
        .start();
}}
/>
        </div>
        <div>
          <div className="info">
          Highly passionate and user-focused Web-Developer👨‍💻 from INDIA adept in collaborating with teams or performing individually to plan the technical writing and execution of functional specifications for websites and applications.
          </div>
        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
