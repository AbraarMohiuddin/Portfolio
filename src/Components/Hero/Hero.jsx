import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/main.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_pic} alt="Profile" />
      <h1>
        <span className="herospan">I'm Abraar Mohiuddin,</span> a full-stack
        developer based in Australia.
      </h1>
      <p>I am a developer developer developer developer developer developer </p>
      <div className="heroaction">
        <AnchorLink href="#contact" className="heroconnect">
          Connect With Me
        </AnchorLink>
        <a
          href="./resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="heroresume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
