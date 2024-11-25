import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/main.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_pic} />
      <h1>
        <span className="herospan">I'm Abraar Mohiuddin,</span> a full-stack
        developer based in Australia.
      </h1>
      <p>I am a developer developer developer developer developer developer </p>
      <div className="heroaction">
        <div className="heroconnect">Connect With Me</div>
        <div className="heroresume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
