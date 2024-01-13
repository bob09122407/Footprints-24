import React, { useEffect } from 'react'
import "./Fse.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Revealing from '../Common/RevealingText/Revealing';
import Vid from "../../assets/images/Logo/fse.mp4"
function Fse() {

  useEffect(() => {

    document.title = "FSE | FootPrints'23"

  }, [])


  return (
    <>
     <div className="video_main">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          width="100%"
        >
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="reveal-text">
        <p className="reveal-soon-text">REVEALING SOON!</p>
      </div> */}
    
      <Revealing />

      <Sponsors />
      <Footer />
    </>
  );
}

export default Fse;
