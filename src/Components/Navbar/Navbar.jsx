import React, { useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        .Abraar <span>Mohiuddin</span>.
      </a>
      <img
        src={menu_open}
        onClick={openMenu}
        className="navmobopen"
        alt="Open Menu"
      />
      <ul className="navmenu" ref={menuRef}>
        <img
          src={menu_close}
          onClick={closeMenu}
          className="navmobclose"
          alt="Close Menu"
        />
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">About Me</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#experience">Work Experience</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
      <div className="navconnect">
        <AnchorLink href="#contact">Connect With Me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
