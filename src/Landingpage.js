import React from "react";
import "./Landing.css";
import "./Projects.css";
import { useState } from "react";

const Landingpage = () => {
  const [isHovered, setisHovered] = useState(false);

  const handleMouseEnter = () => {
    setisHovered(true);
  };
  const handleMouseLeave = () => {
    setisHovered(false);
  };

  const [isHoveredAbout, setisHoveredAbout] = useState(false);

  const handleMouseEnterAbout = () => {
    setisHoveredAbout(true);
  };
  const handleMouseLeaveAbout = () => {
    setisHoveredAbout(false);
  };

  const [isHoveredProjects, setisHoveredProjects] = useState(false);

  const handleMouseEnterProjects = () => {
    setisHoveredProjects(true);
  };
  const handleMouseLeaveProjects = () => {
    setisHoveredProjects(false);
  };

  const [isHoveredArchive, setisHoveredArchive] = useState(false);

  const handleMouseEnterArchive = () => {
    setisHoveredArchive(true);
  };
  const handleMouseLeaveArchive = () => {
    setisHoveredArchive(false);
  };

  return (
    <div className="fullscreen-box">
      <div className="navbar">
        <div
          className={`text-name  ${isHovered ? "glowing overline" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-name1">A</span>
          <span className="text-name2">J</span>
        </div>
        <div className="text-navbar">
          <a
            href="#about"
            className={`About ${isHoveredAbout ? "glowing overline" : ""}`}
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
          >
            About
          </a>
          <a
            href="#projects"
            className={`Projects ${isHoveredProjects ? "glowing overline" : ""}`}
            onMouseEnter={handleMouseEnterProjects}
            onMouseLeave={handleMouseLeaveProjects}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`Archive ${isHoveredArchive ? "glowing overline" : ""}`}
            onMouseEnter={handleMouseEnterArchive}
            onMouseLeave={handleMouseLeaveArchive}
          >
            Archive
          </a>
        </div>
      </div>
      <div className="circle1 "></div>
      <div className="circle2 "></div>

      <div>
      <span className="text-intro1">Hello; </span>
        <p className="text-intro">
          
          <br />
          <span className="text-intro3">I am </span>
          <span className="text-intro4">Ajay </span>
          <span className="text-intro5">Sathvik, </span>
          {/* <br />
          <span className="text-intro15">A </span>
          <span className="text-intro15">FullStack </span> */}
          <span className="text-intro18">BlockChain </span>
          <span className="text-intro17">and </span>
          <span className="text-intro16">Web </span>
          <span className="text-intro19">Developer. </span>
        </p>
      </div>
    </div>
  );
};

export default Landingpage;
