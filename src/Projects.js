import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <br />
      <div className="box" id="projects">
        Projects
      </div>
      <br />
      <br />
      <div className="fullscreen-box">
        <div className="container scroll-1">
          <div className="card">
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title">Coming Soon</span>
              <p className="card__describe">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title">Nothing Here</span>
              <p className="card__describe">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title">Nothing Here</span>
              <p className="card__describe">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
