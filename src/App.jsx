import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import React, { useState, useEffect } from "react";
import "./components/navbar.css";
import "./App.css";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle("dark-mode");
  // };
  return (
    <Router>
      <div >
        <Navbar  />
        <LandingPage />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={ContactMe} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
