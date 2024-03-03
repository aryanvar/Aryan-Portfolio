import React, { useEffect } from "react";
import "./project.css";
import project1 from "../assets/Screenshot 2024-03-02 013942.png";
import project2 from "../assets/Screenshot 2024-03-02 105330.png";
import project3 from "../assets/Screenshot 2024-03-02 104913.png";
import project4 from "../assets/Screenshot 2024-03-02 112902.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="Project">
      <div
        className="ProjectInfo"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h1>PROJECTS</h1>
        <p>
          Here you will find some of the personal and clients projects that I
          created with each <br /> project containing its own case study
        </p>
      </div>
      <div
        className="ProjectDescription"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className="projectImage">
          <img src={project1} alt="Project 1" />
        </div>
        <div className="githubLink">
          <h2>Card Adder</h2>
          <p>
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <div className="githubButton">
            <a
              href="https://github.com/aryanvar/React-Project/tree/submission/my-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Github</button>
            </a>
            <a
              href="https://react-project-88co.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Preview</button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="ProjectDescription"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className="projectImage">
          <img src={project3} alt="Project 3" />
        </div>
        <div className="githubLink">
          <h2>Ecommerce Website</h2>
          <p>
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <div className="githubButton">
            <a
              href="https://github.com/aryanvar/ecommerce_website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Github</button>
            </a>
            <a
              href="https://aryanvar.github.io/ecommerce_website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Preview</button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="ProjectDescription"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className="projectImage">
          <img src={project2} alt="Project 2" />
        </div>
        <div className="githubLink">
          <h2>Github User Finder</h2>
          <p>
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <div className="githubButton">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Github</button>
            </a>
            <a
              href="https://aryanvar.github.io/GithubUserFinder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Preview</button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="ProjectDescription"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className="projectImage">
          <img src={project4} alt="Project 4" />
        </div>
        <div className="githubLink  ">
          <h2>Finance Ui</h2>
          <p>
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <div className="githubButton">
            <a
              href="https://github.com/aryanvar/finance-app-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
