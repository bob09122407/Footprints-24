import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
// import Sponsors from "../Common/SponsorSlide/Sponsors";
import Testimonials from "./Testimonials/Testimonials";
import Achivements from "./Achivements/Achivements";
// import Segment from "./Segment/Segment";
import Slider from "./Segment/Segmentnew";
import Glimpse from "./Glimpse/Glimpse";
import Home from "./Home/Home";
import Scroll from "./scroll/scroll";
// Common CSS File //
import "../Common/CSS/MediaQuery.css";
import "../Common/CSS/Root.css";
import YourComponent from "./Testimonials/Testimonials24";

function Homepage() {
  useEffect(() => {
    document.title = "Home | FootPrints'24";
  }, []);

  return (
    <>
     
      <Home />
      {/* <Segment/> */}
      <Slider />
      <div id="stars"></div>
      <div id="stars2"></div>

      <Glimpse />
      <YourComponent />
      {/* <Testimonials /> */}
      <Achivements />
      {/* <Sponsors /> */}
      <Scroll />

      <Footer />
    </>
  );
}

export default Homepage;
