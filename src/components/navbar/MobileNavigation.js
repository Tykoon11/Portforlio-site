import NavLinks from "./NavLinks";
import { CgMenu } from "react-icons/cg";
import "./Navbar.css";
// import {useState} from 'react'

const MobileNavigation = () => {
  return (
    <nav className="mobile-navigation">
      <div className="hammy-navigation">
        <CgMenu
          onClick={() => console.log("hammy clicked")}
          className=" menu-icon"
          size="40px"
          color="#26ad5f"
        />
      </div>
      <div className="remove-navigation">
        <NavLinks />
      </div>
    </nav>
  );
};

export default MobileNavigation;
