import React from "react";
import "./Biography.css";


const Biography = () => {
  return (
    <div id="bio-container">
      <div id="bio-can">
        <h1 className="intro-text des des1"> hey, i'm nobleman,</h1>
        <h1 className="intro-text des des2">
          <span className="a-text des des1">a</span> software developer
        </h1>
        <p className="intro-text">
          <code className="intro-code">
            specializing in design of functional web <br /> applications that
            guarantee <br />
            the success of the overall product ...
          </code>
        </p>
        <button id="projects-btn">Projects</button>
      </div>
      <div className="photo1-bc"></div>
    </div>
  );
};

export default Biography;
