import React from "react";
import "./Home.css";
import invertedImage from "../../../assets/images/Logo/planet.png"; 
import asteroidImage from "../../../assets/images/Logo/asteroid.png"; 
import astronautImage from "../../../assets/images/Logo/space.png";
import header from "../../../assets/images/Logo/header.png"

function Home() {
  return (
    <>
      <div className="image-container">
        {/* <img src={astronautImage} alt="Asteroid" className="astronaut-image" /> */}
        <div className="inverted-image-container">
          <img src={invertedImage} alt="Inverted Image" className="inverted-image" />
        </div>
        <img src={header} alt="Header" className="header-image"/>
        {/* <img src={asteroidImage} alt="Astronaut" className="asteroid-image" /> */}
      </div>
    </>
  );
}

export default Home;
