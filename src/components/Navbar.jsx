import { useState } from "react";
import Aryan from "../assets/Aryan.jpg";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbarLeft">
        <img src={Aryan} alt="Aryan Varma" />
        <h3>Aryan Varma</h3>
      </div>
      <div className="navbarRight">
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#project" onClick={() => setIsOpen(false)}>
            Project
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>

        {/* <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button> */}

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
