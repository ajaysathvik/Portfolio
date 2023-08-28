import React from "react";
import "./Connect.css";
import { useState } from "react";
import github from "./assests/github-mark-white.png";
import instagram from "./assests/instagram-logo.png"

const Connect = () => {
  const [isHoveredAnime, setisHoveredAnime] = useState(false);

  const handlemouseenteranime = () => {
    document.body.style.backgroundColor = "white";
  }
  
  var uibordercolorA = " #00DBDE" ;
  var uibordercolorJ = "#FCB69F" ;
  var uiborderwidth = "1px";
  var uiborderstyle = "solid";

  return (
    <d>
      <div className="partthree">
        <div className="whole-box" id="whole-box"></div>
        <div className="connect-box">I'm Always Interested About -&gt;</div>
        <div className="connect" data-aos="fade-right" dos-aos-duration="1000">
          Let's <br />
          Connect
        </div>
        <div className="interest ui" data-aos="fade-up" data-aos-delay="300" onMouseEnter={()=>{
          document.getElementById("whole-box").style.borderBlockStartColor =`${uibordercolorA}`;
          document.getElementById("text-name2").style.color=`${uibordercolorJ}`;}}
          onMouseLeave={()=>{
            document.getElementById("text-name1").style.color=`white`;
          document.getElementById("text-name2").style.color=`white`;}}
        >
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
        
        <a href="https://github.com/ajaysathvik"><img src={github} className="github" /></a>
        {/* <a href="https://www.linkedin.com/in/ajay-sathvik-200742172" ><img src={} className="linkedin"/></a> */}
        <a href="https://instagram.com/ajay_s.u?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" ><img src={instagram} className="instagram"/></a>
        <a href="https://open.spotify.com/user/p64kp5w8gcir361zp3ko9ten7?si=pr5Gk6W4SjWQDePhpRE7WQ" className="spotify"/>
        <a href="https://dribbble.com/unknown123123123123123" className="dribbble"/>
          
      </div>
    </d>
  );
};

export default Connect;
