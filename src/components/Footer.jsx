import React from "react";
import "./footer.css";
import linkdien from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";


const Footer = () => {

  return (
    <>
      <div className="footer">
        <div className="footerLeft">
          <h1>Aryan Varma</h1>
          <p>
            A Frontend-centric Web Developer constructing the visual interface
            of Websites and <br /> Web Applications to drive the success of the
            overall product
          </p>
        </div>
        <div className="footerRight">
          <div className="heading">
            <h2>Social</h2>
          </div>
          <div className="footerRightIcons">
            <a href="https://www.linkedin.com/in/aryan-varma-/">
              <img src={linkdien} alt="" />
            </a>
            <a href="https://github.com/aryanvar">
              <img src={github} alt="" />
            </a>
            <a href="https://www.instagram.com/aryanvarma/">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>&copy; CopyRight 2024. Made by Aryan Varma</p>
      </div>
    </>
  );
};

export default Footer;
