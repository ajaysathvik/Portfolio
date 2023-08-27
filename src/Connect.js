import React from "react";
import "./Connect.css";
import { useState } from "react";

const Connect = () => {
  const [isHoveredAnime, setisHoveredAnime] = useState(false);

  const handlemouseenteranime = () => {
    document.body.style.backgroundColor = "white";
  }
  
  return (
    <d>
      <div className="partthree">
        <div className="connect-box">I'm Always Interested About -&gt;</div>
        <div className="connect" data-aos="fade-right" dos-aos-duration="1000">
          Let's <br />
          Connect
        </div>
        <div className="interest ui" data-aos="fade-up" data-aos-delay="300">
          UX/UI DESIGN
        </div>
        <div className="interest front" data-aos="fade-up" data-aos-delay="450">
          FRONTEND DEVELOPMENT{" "}
        </div>
        <div
          className="interest blockchain"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          BLOCKCHAIN DEVELOPMENT{" "}
        </div>
        <div
          className="interest gaming"
          data-aos="fade-up"
          data-aos-delay="1050"
        >
          Gaming{" "}
        </div>
        <div
          className="interest startup"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          STARTUPS{" "}
        </div>
        <div className="interest anime" 
         data-aos="fade-up" data-aos-delay="750"
         >
          ANIME{" "}
        </div>
      </div>
    </d>
  );
};

export default Connect;
