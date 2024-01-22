import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
import Achivements from "./Achivements/Achivements";
import Glimpse from "./Glimpse/Glimpse";
import Home from "./Home/Home";
// Common CSS File //
import "../Common/CSS/MediaQuery.css";
import "../Common/CSS/Root.css";
import Testimonials24 from "./Testimonials/Testimonials24";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Segments from "./Segment/Segments";

function Homepage() {
  useEffect(() => {
    document.title = "Home | FootPrints'24";
  }, []);

  return (
    <>
     
      <Home />
      <Segments />
      <div id="stars"></div>
      <div id="stars2"></div>
      <Glimpse />
      <Testimonials24 />
      <div id="stars"></div>
      <Achivements />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Sponsors/>
      <Footer />
    </>
  );
}

export default Homepage;
