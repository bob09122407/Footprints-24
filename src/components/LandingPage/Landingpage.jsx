import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css'; // Import the CSS file

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSubtitleClick = () => {
    // Navigate to the "/home" route
    navigate('/home');
  };

  return (
    <div className='main-star'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='horizon'>
        <div className='glow'></div>
      </div>
      <div id='earth'></div>
      <div id='title'>FOOTPRINTS 24</div>
      <div id='subtitle'>
        <span onClick={handleSubtitleClick}> </span>
        <span onClick={handleSubtitleClick}> </span>
        <span onClick={handleSubtitleClick}></span>
      </div>
    </div>
  );
};

export default LandingPage;
