import React from "react";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Projects.css";

const Projects = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init();
    
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 3; // Adjust this based on the number of cards
      setCurrentIndex(nextIndex);
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const cardContainerStyle = {
    transform: `translateX(-${currentIndex * 100}%)`
  };


  return (
    <div>
      <br />
      <div className="box" id="projects"></div>
      <div className="box" 
       data-aos="fade-up" dos-aos-duration="500"
      >
        Recent Projects
      </div>
      <div className="fullscreen-box projects" dos-aos="zoom-out" >
        <div className="container scroll">
          <div className="card">
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title normalIBMPlex">Coming Soon</span>
              <p className="card__describe normalIBMPlex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="card ">
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title normalIBMPlex">Nothing Here</span>
              <p className="card__describe normalIBMPlex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title normalIBMPlex">Nothing Here</span>
              <p className="card__describe normalIBMPlex">
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
