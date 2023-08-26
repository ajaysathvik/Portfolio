import React from "react";
import "./Landing.css";
import "./Projects.css";
import { useState } from "react";
import Archive from "./Archive";

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

  const [isHoveredHello, setisHoveredHello] = useState(false);

  const handleMouseEnterHello = () => {
    setisHoveredHello(true);
  }
  const handleMouseLeaveHello = () => {
    setisHoveredHello(false);
  }

  const [isInArchive, setIsInArchive] = useState(false);

  const handleArchiveClick = () => {
    setIsInArchive(true);
  };

  return (
    <div className="fullscreen-box">
      <div className="navbar">
        <a
          href=""
          className={`text-name ${isHovered ? "glowing overline" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-name1">A</span>
          <span className="text-name2">J</span>
        </a>
        <div className="text-navbar">
          <a
            href=""
            className={`About normalIBMPlex ${
              isHoveredAbout ? "glowing overline" : ""
            }`}
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
          >
            About
          </a>
          {/* <a
            href="#projects"
            className={`Projects normalIBMPlex ${
              isHoveredProjects ? "glowing overline" : ""
            }`}
            onMouseEnter={handleMouseEnterProjects}
            onMouseLeave={handleMouseLeaveProjects}
          >
            Recent Projects
          </a> */}
          {isInArchive && <Archive />}
          <a
          href=""
            onClick={handleArchiveClick}
            className={`Archive normalIBMPlex ${
              isHoveredArchive ? "glowing overline" : ""
            }`}
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
        <span className={`text-intro1 ${
              isHoveredHello ? "italic " : ""
            }`} onMouseEnter={handleMouseEnterHello} onMouseLeave={handleMouseLeaveHello}>Hello; </span>
        <p className="text-intro">
          <br />
          <span className="text-intro3 normalIBMPlex">I am </span>
          <span className="text-intro4">Ajay </span>
          <span className="text-intro5">Sathvik, </span>
          {/* <br />
          <span className="text-intro15">A </span>
          <span className="text-intro15">FullStack </span> */}
          <span className="text-intro18 normalIBMPlex">BlockChain </span>
          <span className="text-intro17 normalIBMPlex">and </span>
          <span className="text-intro16 normalIBMPlex">Web </span>
          <span className="text-intro19 normalIBMPlex">Developer. </span>
        </p>
      </div>
      {/* <SocialMedia /> */}
    </div>
  );
};

export default Landingpage;
