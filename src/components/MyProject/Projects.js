import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="project-overall">
      <div id="project-title">
        <h4>Projects</h4>
        <code>
          Here you will find some of the projects I have created and the
          description of each.
        </code>
      </div>
      <div id="projects-can">
        <div className="projects-grid">
          <div className="projects-shot">
            <img
              src={process.env.PUBLIC_URL + "images/project1.png"}
              alt="content1"
            />
          </div>
          <div className="projects-des">
            <p>description 1</p>
          </div>
        </div>
        <div className="projects-grid">
          <div className="projects-shot">
            <img
              src={process.env.PUBLIC_URL + "images/project2.png"}
              alt="content2"
            />
          </div>
          <div className="projects-des">
            <p>description 2</p>
          </div>
        </div>
        <div className="projects-grid">
          <div className="projects-shot">
            <img
              src={process.env.PUBLIC_URL + "images/project3.png"}
              alt="content3"
            />
          </div>
          <div className="projects-des">
            <p>description 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
