import React from "react";
import "./Navbar.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div>
        <img
          id="logo"
          src={process.env.PUBLIC_URL + "images/logo1.png"}
          alt="noble-logo"
        />
      </div>

      <div className="navbar-components">
        <div>
          <MobileNavigation />
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
