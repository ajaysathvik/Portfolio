import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import gsap from "gsap";

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
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  // useEffect(() => {
  //   gsap.from(".card", {
  //     opacity: 1,
  //     y: 50,
  //     stagger: 0.2,
  //     duration: 10,
  //   });
  // }, []);

  const [statemouseincard1, setStatemouseincard1] = useState(false);

  const handlemouseentercard1 = () => {
    setStatemouseincard1(true);
  };

  const handlemouseleavecard1 = () => {
    setStatemouseincard1(false);
  };

  // useEffect(() => {
  //   if (statemouseincard1) {
  //     let timeline = gsap.timeline();
  //     timeline.to(
  //       ".card1",
  //       {
  //         duration: 0.3,
  //         flex: "0 0 100%",
  //         width: "100vw",
  //       }
  //     );
  //   }
  // }, [statemouseincard1]);

  useEffect(() => {
    if (statemouseincard1) {
      let timeline = gsap.timeline();
      timeline.to(".card1", {
        duration: 0.3,
        flex: "0 0 60%",
        width: "100vw",
      });
    } else {
      let timeline = gsap.timeline();
      timeline.to(".card1", {
        duration: 0.3,
        flex: "0 0 33.33%", // Adjust based on your layout
        width: "initial",
      });
    }
  }, [statemouseincard1]);

  const [statemouseincard2, setStatemouseincard2] = useState(false);

  const handlemouseentercard2 = () => {
    setStatemouseincard2(true);
  };

  const handlemouseleavecard2 = () => {
    setStatemouseincard2(false);
  };

  useEffect(() => {
    if (statemouseincard2) {
      let timeline = gsap.timeline();
      timeline.to(".card2", {
        duration: 0.3,
        flex: "0 0 60%",
        width: "100vw",
      });
    } else {
      let timeline = gsap.timeline();
      timeline.to(".card2", {
        duration: 0.3,
        flex: "0 0 33.33%", // Adjust based on your layout
        width: "initial",
      });
    }
  }, [statemouseincard2]);

  const [statemouseincard3, setStatemouseincard3] = useState(false);

  const handlemouseentercard3 = () => {
    setStatemouseincard3(true);
  };

  const handlemouseleavecard3 = () => {
    setStatemouseincard3(false);
  };

  useEffect(() => {
    if (statemouseincard3) {
      let timeline = gsap.timeline();
      timeline.to(".card3", {
        duration: 0.3,
        flex: "0 0 60%",
        width: "100vw",
      });
    } else {
      let timeline = gsap.timeline();
      timeline.to(".card3", {
        duration: 0.3,
        flex: "0 0 33.33%", // Adjust based on your layout
        width: "initial",
      });
    }
  }, [statemouseincard3]);

  return (
    <div>
      <div className="box" data-aos="fade-up" dos-aos-duration="500">
        Recent Projects
      </div>
      <div dos-aos="zoom-out">
        <div className="container scroll ">
          <div
            className="card card1"
            onMouseEnter={handlemouseentercard1}
            onMouseLeave={handlemouseleavecard1}
          >
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title normalIBMPlex">Coming Soon</span>
              <p className="card__describe normalIBMPlex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div
            className="card card2"
            onMouseEnter={handlemouseentercard2}
            onMouseLeave={handlemouseleavecard2}
          >
            <div className="card__image"></div>
            <div className="card__content">
              <span className="card__title normalIBMPlex">Nothing Here</span>
              <p className="card__describe normalIBMPlex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div
            className="card card3"
            onMouseEnter={handlemouseentercard3}
            onMouseLeave={handlemouseleavecard3}
          >
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
              <span className="card__title normalIBMPlex">Wait </span>
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
