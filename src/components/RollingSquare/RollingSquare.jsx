import React, { useEffect } from "react";
import "./RollingSquare.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import ImageCarousel from "./ImageCaraousal";
import Heading from "../Common/Headings/Heading";
export default function RollingSquare() {
  useEffect(() => {
    document.title = "Rolling Sqares | FootPrints'23";
  }, []);

  // let windowInnerWidth;

  // useEffect(() => {
  //   (function () {
  //     windowInnerWidth = window.innerWidth;
  //     console.log(windowInnerWidth);
  //     const track = document.querySelector(".image-track");
  //     console.log(track.dataset.mouseDownAt);

  //     const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

  //     const handleOnUp = () => {
  //       track.dataset.mouseDownAt = "0";
  //       track.dataset.prevPercentage = track.dataset.percentage;
  //     };

  //     const handleOnMove = (e) => {
  //       if (track.dataset.mouseDownAt === "0") return;

  //       const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //         maxDelta = windowInnerWidth / 2;

  //       const percentage = (mouseDelta / maxDelta) * -100,
  //         nextPercentageUnconstrained =
  //           parseFloat(track.dataset.prevPercentage) + percentage,
  //         nextPercentage = Math.max(
  //           Math.min(nextPercentageUnconstrained, 0),
  //           -100
  //         );

  //       track.dataset.percentage = nextPercentage;

  //       track.animate(
  //         {
  //           transform: `translate(${nextPercentage}%, -50%)`,
  //         },
  //         { duration: 1200, fill: "forwards" }
  //       );

  //       for (const image of track.querySelectorAll(".concert-image")) {
  //         image.animate(
  //           {
  //             objectPosition: `${100 + nextPercentage}% center`,
  //           },
  //           { duration: 1200, fill: "forwards" }
  //         );
  //       }
  //     };

  //     /* -- Had to add extra lines for touch events -- */

  //     window.onmousedown = (e) => handleOnDown(e);

  //     window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  //     window.onmouseup = (e) => handleOnUp(e);

  //     window.ontouchend = (e) => handleOnUp(e.touches[0]);

  //     window.onmousemove = (e) => handleOnMove(e);

  //     window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  //   })();
  // }, []);


  return (
    <section>
      <Heading
              className="kaleido_heading"
              id="glheading"
              title={"Technical Events for Textile Department"}
            />
        <ImageCarousel />
      {/* <Sponsors />
      <Footer /> */}
      {/* <div className="next-block">

      </div> */}
    </section>
  );
}
