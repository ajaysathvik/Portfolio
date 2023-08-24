import React from "react";
import "./Landing.css";
import { useState } from "react";

const Landingpage = () => {
  const [isHovered, setisHovered] = useState(false);

  const handleMouseEnter = () => {
    setisHovered(true);
  };
  const handleMouseLeave = () => {
    setisHovered(false);
  };
  //   const handleMouseEnter = () => {

  //     for(let i=1;i<=11;i++){
  //       for(let j=1;i<=11;i++){
  //         document.querySelector(`.text-name${i}`).style.opacity = j/10;
  //     }
  //   }
  // }

  //   const handleMouseLeave = () => {
  //     for(let i=1;i<=11;i++){
  //       document.querySelector(`.text-name${i}`).style.opacity = 1;}
  //     }

  return (
    <div className="fullscreen-box">
      <div className="navbar">
        <div
          className={`text-name ${isHovered ? "glowing" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-name1">A</span>
          <span className="text-name2">j</span>
          <span className="text-name3">a</span>
          <span className="text-name4">y </span>
          <span className="text-name5">S</span>
          <span className="text-name6">a</span>
          <span className="text-name7">t</span>
          <span className="text-name8">h</span>
          <span className="text-name9">v</span>
          <span className="text-name10">i</span>
          <span className="text-name11">k</span>
        </div>
        <div className="text-navbar">
          <a href="#about" className="About">
            About
          </a>
          <a href="#projects" className="Projects">
            Projects
          </a>
          <a href="#contact" className="Contact">
            Archive
          </a>
        </div>
      </div>
      <div className="circle1 "></div>
      <div className="circle2 "></div>

      <div>
        <p className="text-intro">
          <span className="text-intro1">HI! </span>
          <br />
          <span className="text-intro3">I'm </span>
          <span className="text-intro4">Ajay </span>
          <span className="text-intro5">Sathvik &#128515;, </span>
          <br />
          <span className="text-intro15">A </span>
          <span className="text-intro15">FullStack </span>
          <span className="text-intro18">BlockChain </span>
          <span className="text-intro19">Developer. </span>
          <br />
          <span className="text-intro20">Feel </span>
          <span className="text-intro21">free </span>
          <span className="text-intro22">to </span>
          <span className="text-intro23">check </span>
          <span className="text-intro24">out </span>
          <span className="text-intro25">My </span>
          <span className="text-intro26">Projects </span>
          <span className="text-intro27">below </span>
        </p>
      </div>
    </div>
  );
};

export default Landingpage;
