import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css"; // Import the CSS file
import { FaLocationArrow } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSubtitleClick = () => {
    // Navigate to the "/home" route
    navigate("/home");
  };

  return (
    <>
      <div className="main-star">
        
        <div id="horizon">
          <div className="glow"></div>
        </div>
        <div id="earth"></div>
        <div id="title">FOOTPRINTS 24</div>
        <div id="subtitle">
          <span onClick={handleSubtitleClick}>
            Explore Now
            {/* <FaLocationArrow /> */}
            <FaLocationArrow className="icon" />
          </span>
          {/* <span onClick={handleSubtitleClick}>LET</span> */}
          {/* <span onClick={handleSubtitleClick}>GO</span> */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
