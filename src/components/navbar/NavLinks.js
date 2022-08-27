import React from "react";
import "./Navbar.css";

const NavLinks = () => {
  return (
    <div>
      <ul className="nav-hold">
        <li className="nav-list-items">
          <a href="#bio-container">Home</a>
        </li>
        <li className="nav-list-items">
          <a href="#about-component">About</a>
        </li>
        <li className="nav-list-items">
          <a href="#project-overall">Projects</a>
        </li>
        <li className="nav-list-items">
          <a href="#contact-container">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
