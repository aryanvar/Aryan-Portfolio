import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="home">
      <div className="homePosition" data-aos="fade-up">
        <div className="name">
          <h1>HEY, I'M Aryan Varma</h1>
        </div>
        <div className="shortDescription">
          A focused Web Developer crafting and overseeing Websites and Web
          Applications,
          <br /> driving the success of the entire product.
        </div>
        <div className="projectButton">
          <button>PROJECTS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
