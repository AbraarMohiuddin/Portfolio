import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/main.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_pic} alt="Profile" />
      <h1>
        <span className="herospan">I'm Abraar Mohiuddin,</span> a full-stack
        developer based in Australia.
      </h1>
      <p>
        Enthusiastic Bachelor of Computer Science graduate with a passion for
        problem-solving through code. Experienced in a range of programming
        languages and eager to leverage my technical skills to innovate and
        contribute to cutting-edge technology.{" "}
      </p>
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
