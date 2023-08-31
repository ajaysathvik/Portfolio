import React from "react";
import "./Connect.css";
import { useState } from "react";
import github from "./assests/github-mark-white.png";
import instagram from "./assests/v982-d3-04-removebg.png";
import spotify from "./assests/Spotify_icon.svg.png";
import dribble from "./assests/124037-removebg-preview (1).png";

const Connect = () => {
  const [isHoveredAnime, setisHoveredAnime] = useState(false);

  const handlemouseenteranime = () => {
    document.body.style.backgroundColor = "white";
  };

  var uicolorA = " #00DBDE";
  var uicolorJ = "#FCB69F";
  var frontcolorA = "#93A5CF";
  var frontcolorJ = "#E4EfE9";
  var blockchaincolorA = "#C33764";
  var blockchaincolorJ = "#1D2671";
  var gamingcolorA = "#EE9CA7";
  var gamingcolorJ = "#FFDDE1";
  var startupcolorA = "#C6EA8D";
  var startupcolorJ = "#FE90AF";
  var animecolorA = "#2E3192";
  var animecolorJ = "#1BFFFF";

  return (
    <d>
      <div className="partthree">
        <div className="whole-box" id="whole-box"></div>
        <div className="connect-box">I'm Always Interested About </div>
        <div
          className="connect"
          id="connect"
          data-aos="fade-right"
          dos-aos-duration="1000"
        >
          Let's <br />
          Connect
        </div>
        <div
          className="interest ui"
          data-aos="fade-up"
          data-aos-delay="300"
          onMouseEnter={() => {
            document.getElementById("text-name1").style.color = `${uicolorA}`;
            document.getElementById("text-name2").style.color = `${uicolorJ}`;
          }}
          onMouseLeave={() => {
            document.getElementById("text-name1").style.color = `white`;
            document.getElementById("text-name2").style.color = `white`;
          }}
        >
          UX/UI DESIGN
        </div>
        <div
          className="interest front"
          data-aos="fade-up"
          data-aos-delay="450"
          onMouseEnter={() => {
            document.getElementById(
              "text-name1"
            ).style.color = `${frontcolorA}`;
            document.getElementById(
              "text-name2"
            ).style.color = `${frontcolorJ}`;
          }}
          onMouseLeave={() => {
            document.getElementById("text-name1").style.color = `white`;
            document.getElementById("text-name2").style.color = `white`;
          }}
        >
          FRONTEND DEVELOPMENT{" "}
        </div>
        <div
          className="interest blockchain"
          data-aos="fade-up"
          data-aos-delay="600"
          onMouseEnter={() => {
            document.getElementById(
              "text-name1"
            ).style.color = `${blockchaincolorA}`;
            document.getElementById(
              "text-name2"
            ).style.color = `${blockchaincolorJ}`;
          }}
          onMouseLeave={() => {
            document.getElementById("text-name1").style.color = `white`;
            document.getElementById("text-name2").style.color = `white`;
          }}
        >
          BLOCKCHAIN DEVELOPMENT{" "}
        </div>
        <div
          className="interest gaming"
          data-aos="fade-up"
          data-aos-delay="1050"
          onMouseEnter={() => {
            document.getElementById(
              "text-name1"
            ).style.color = `${gamingcolorA}`;
            document.getElementById(
              "text-name2"
            ).style.color = `${gamingcolorJ}`;
          }}
          onMouseLeave={() => {
            document.getElementById("text-name1").style.color = `white`;
            document.getElementById("text-name2").style.color = `white`;
          }}
        >
          Gaming{" "}
        </div>
        <div
          className="interest startup"
          data-aos="fade-up"
          data-aos-delay="900"
          onMouseEnter={() => {
            document.getElementById(
              "text-name1"
            ).style.color = `${startupcolorA}`;
            document.getElementById(
              "text-name2"
            ).style.color = `${startupcolorJ}`;
          }}
          onMouseLeave={() => {
            document.getElementById("text-name1").style.color = `white`;
            document.getElementById("text-name2").style.color = `white`;
          }}
        >
          STARTUPS{" "}
        </div>
        <div
          className="interest anime"
          data-aos="fade-up"
          data-aos-delay="750"
          onMouseEnter={() => {
            document.getElementById(
              "text-name1"
            ).style.color = `${animecolorA}`;
            document.getElementById(
              "text-name2"
            ).style.color = `${animecolorJ}`;
          }}
          onMouseLeave={() => {
            document.getElementById("text-name1").style.color = `white`;
            document.getElementById("text-name2").style.color = `white`;
          }}
        >
          ANIME{" "}
        </div>

        <a href="https://github.com/ajaysathvik">
          <img
            src={github}
            className="github"
            id="github"
            onMouseEnter={() => {
              document.getElementById("instagram").style.opacity = `0.5`;
              document.getElementById("spotify").style.opacity = `0.5`;
              document.getElementById("dribble").style.opacity = `0.5`;
            }}
            onMouseLeave={() => {
              document.getElementById("instagram").style.opacity = `1`;
              document.getElementById("spotify").style.opacity = `1`;
              document.getElementById("dribble").style.opacity = `1`;
            }}
          />
        </a>
        {/* <a href="https://www.linkedin.com/in/ajay-sathvik-200742172" ><img src={} className="linkedin"/></a> */}
        <a href="https://instagram.com/ajay_s.u?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
          <img
            src={instagram}
            className="instagram"
            id="instagram"
            onMouseEnter={() => {
              document.getElementById("github").style.opacity = `0.5`;
              document.getElementById("spotify").style.opacity = `0.5`;
              document.getElementById("dribble").style.opacity = `0.5`;
            }}
            onMouseLeave={() => {
              document.getElementById("github").style.opacity = `1`;
              document.getElementById("spotify").style.opacity = `1`;
              document.getElementById("dribble").style.opacity = `1`;
            }}
          />
        </a>
        <a href="https://open.spotify.com/user/p64kp5w8gcir361zp3ko9ten7?si=pr5Gk6W4SjWQDePhpRE7WQ">
          <img
            src={spotify}
            className="spotify"
            id="spotify"
            onMouseEnter={() => {
              document.getElementById("instagram").style.opacity = `0.5`;
              document.getElementById("github").style.opacity = `0.5`;
              document.getElementById("dribble").style.opacity = `0.5`;
            }}
            onMouseLeave={() => {
              document.getElementById("instagram").style.opacity = `1`;
              document.getElementById("github").style.opacity = `1`;
              document.getElementById("dribble").style.opacity = `1`;
            }}
          />
        </a>
        <a href="https://dribbble.com/unknown123123123123123">
          <img
            src={dribble}
            className="dribble"
            id="dribble"
            onMouseEnter={() => {
              document.getElementById("instagram").style.opacity = `0.5`;
              document.getElementById("spotify").style.opacity = `0.5`;
              document.getElementById("github").style.opacity = `0.5`;
            }}
            onMouseLeave={() => {
              document.getElementById("instagram").style.opacity = `1`;
              document.getElementById("spotify").style.opacity = `1`;
              document.getElementById("github").style.opacity = `1`;
            }}
          />
        </a>
      </div>
    </d>
  );
};

export default Connect;
