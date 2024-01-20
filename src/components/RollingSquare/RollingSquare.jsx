import React, { useEffect } from "react";
import "./RollingSquare.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import ImageCarousel from "./ImageCaraousal";
import Heading from "../Common/Headings/Heading";
import imageSources from "../../Data/RollingSquaresImages";

export default function RollingSquare() {
  useEffect(() => {
    document.title = "Rolling Sqares | FootPrints'24";
  }, []);

  return (
    <section>
      <div className="video_main">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          width="100%"
        >
          <source src={'https://res.cloudinary.com/dwevqwmg7/video/upload/v1705597475/vdos/pgr6s6xhnbxbamh8gpld.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Heading
        className="kaleido_heading"
        id="glheading"
        title={"Rolling Squares"}
      />
      <ImageCarousel images={imageSources.concert}/>

      <Heading className="kaleido_heading" id="glheading" title={"Informal"} />
      <ImageCarousel images={imageSources.informals} />

      <Heading className="kaleido_heading" id="glheading" title={"Jampad"} />
      <ImageCarousel images={imageSources.jampad} />

      <Sponsors />
      <Footer />
    </section>
  );
}
