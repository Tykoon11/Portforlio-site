import React from "react";
import "./About.css";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { TbPrompt } from "react-icons/tb";
import { FaNpm } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";

const About = () => {
  return (
    <div id="about-component">
      <div id="about-component2">
        <div id="about-me">
          <h4>About Me</h4>
          <code>
            Hello there, my name is Nobleman Unachukwu. I'm a software developer
            with experience in web development. I enjoy coding and solving code
            related problems. I create websites using programming languages and
            frameworks like: HTML/CSS, Javascript, ReactJS, NodeJS, Express and
            MongoDB. <br />
            <br />I also enjoy reading and learning from code related content
            and implementing new knowledge in my codes. I've completed several
            projects which can be found in the
            <code style={{ color: "#26ad5f" }}> Projects</code> section. I'm
            open to
            <code style={{ color: "#26ad5f" }}> Job</code> opportunities where I
            can learn and contribute to the growth and development of the
            organization.
          </code>
        </div>

        <div id="skill-container">
          <h4 className="my-skill">My Skills</h4>
          <div className="skill-set">
            <div className="skills">
              <SiHtml5 style={{ color: "#F25220" }} />
              <p>HTML</p>
            </div>
            <div className="skills">
              <SiCss3 style={{ color: "#028FD0" }} />
              <p>CSS</p>
            </div>
            <div className="skills">
              <SiJavascript style={{ color: "#EBD41B" }} />
              <p>Javascript</p>
            </div>
            <div className="skills">
              <RiReactjsLine style={{ color: "#5ED2F3" }} />
              <p>React.js</p>
            </div>
            <div className="skills">
              <IoLogoNodejs style={{ color: "#509640" }} />
              <p>Node.js</p>
            </div>
            <div className="skills">
              <SiExpress style={{ color: "white" }} />
              <p>Express</p>
            </div>
            <div className="skills">
              <SiMongodb style={{ color: "#51A543" }} />
              <p>MongoDB</p>
            </div>
            <div className="skills">
              <SiGit style={{ color: "#E44D31" }} />
              <p>Git</p>
            </div>
            <div className="skills">
              <SiGithub style={{ color: "#CCD6F6" }} />
              <p>Github</p>
            </div>
            <div className="skills">
              <TbPrompt style={{ color: "#CCD6F6" }} />
              <p>Command Line</p>
            </div>
            <div className="skills">
              <FaNpm style={{ color: "#C13534" }} />
              <p>npm</p>
            </div>
            <div className="skills">
              <SiVisualstudiocode style={{ color: "#0173C1" }} />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
