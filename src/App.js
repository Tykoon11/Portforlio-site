import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Biography from "./components/introbox/Biography";
import About from "./components/aboutme/About";
import Projects from "./components/MyProject/Projects";
import Contact from "./components/Contact/Contact";
import { SiInstagram, SiGithub, SiHashnode } from "react-icons/si";
import { RiTwitterLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

function App() {
  return (
    <div>
      <div id="social-logos">
        <div className="social">
          <SiInstagram />
        </div>
        <div className="social">
          <SiGithub />
        </div>
        <div className="social">
          <RiTwitterLine />
        </div>
        <div className="social">
          <FiLinkedin />
        </div>
        <div className="social">
          <SiHashnode />
        </div>
      </div>
      <div id="email-addy">
        <code>noblemanunachukwu@gmail.com</code>
      </div>
      <div id="all-body">
        <Navbar />
        <Biography />
        <About />
        <Projects />
        <Contact />
      </div>
      <div id="footer">
        <footer>
          <div id="social-logos2">
            <div className="social2">
              <SiInstagram />
            </div>
            <div className="social2">
              <SiGithub />
            </div>
            <div className="social2">
              <RiTwitterLine />
            </div>
            <div className="social2">
              <FiLinkedin />
            </div>
            <div className="social2">
              <SiHashnode />
            </div>
          </div>

          <div id="email-addy2">
            <code>noblemanunachukwu@gmail.com</code>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
