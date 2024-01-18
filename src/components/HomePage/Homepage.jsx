import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
import Achivements from "./Achivements/Achivements";
import Slider from "./Segment/Segmentnew";
import Glimpse from "./Glimpse/Glimpse";
import Home from "./Home/Home";
// Common CSS File //
import "../Common/CSS/MediaQuery.css";
import "../Common/CSS/Root.css";
import Testimonials24 from "./Testimonials/Testimonials24";
import Sponsors from "../Common/SponsorSlide/Sponsors";

function Homepage() {
  useEffect(() => {
    document.title = "Home | FootPrints'24";
  }, []);

  return (
    <>
     
      <Home />
      <Slider />
      <div id="stars"></div>
      <div id="stars2"></div>
      <Glimpse />
      <Testimonials24 />
      <Achivements />
      <Sponsors/>
      <Footer />
    </>
  );
}

export default Homepage;
