import React, { useEffect } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="About">
      <div className="AboutMe" data-aos="fade-down">
        <h1>ABOUT ME</h1>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="AboutMeMainDiv">
        <div
          className="AboutMeInBrief"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>Get to know me!</h2>
          <p>
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I'm a Frontend Focused Web Developer building and managing
            the Front-end of Websites and Web Applications that leads to the
            success of the overall product. Check out some of my work in the
            Projects section. <br /> I am actively seeking job opportunities
            where I can contribute, learn, and grow. If you have a fitting
            opportunity that aligns with my skills and experience, please feel
            free to reach out to me.
          </p>
          <div className="ContactButton">
            <a
              href="https://docs.google.com/document/d/1NRW2faPTsGIzewoGYpprc1GHjMMASlmD/edit?usp=drive_link&ouid=115952694922252308106&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              download={"Resume_AryanVarma.docs"}
              className="downloadButton"
            >
              <button>Resume</button>
            </a>
          </div>
        </div>
        <div
          className="AboutMeSkills"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>My Skills</h2>
          <div className="AboutMeSkills_div">
            <div className="skills__skill">HTML5</div>
            <div className="skills__skill">CSS3</div>
            <div className="skills__skill">Bootstrap</div>
            <div className="skills__skill">Tailwind CSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">jQuery</div>
            <div className="skills__skill">React Js</div>
            <div className="skills__skill">Angular Js</div>
            <div className="skills__skill">Ionic</div>
            <div className="skills__skill">Node Js</div>
            <div className="skills__skill">Express</div>
            <div className="skills__skill">MongoDB</div>
            <div className="skills__skill">Git</div>
            <div className="skills__skill">GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
