import React from "react";
import "./LandingPage.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <ContactMe />
    </div>
  );
};

export default LandingPage;
