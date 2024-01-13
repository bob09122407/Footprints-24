import React, { useEffect } from 'react'
import "./Quest.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import Revealing from '../Common/RevealingText/Revealing';
import Vid from "../../assets/images/Logo/quest.mp4"
function Quest() {


  useEffect(() => {

    document.title = "Quest | FootPrints'23"

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

export default Quest;
