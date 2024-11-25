import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" class="logo">
        .Abraar <span> Mohiuddin</span>.
      </a>
      <ul className="navmenu">
        <li>Home</li>
        <li>About Me</li>
        <li>Work Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="navconnect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
