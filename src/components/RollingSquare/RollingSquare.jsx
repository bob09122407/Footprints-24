import React, { useEffect } from "react";
import "./RollingSquare.css";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import imageSources from '../../Data/RollingSquaresConcert.js';

export default function RollingSquare() {
  useEffect(() => {
    document.title = "Rolling Sqares | FootPrints'23";
  }, []);

  useEffect(() => {
    if (window.innerWidth < 619) {
      console.log("Hello");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting) {
              entry.target.classList.add("img-transition");
            } else {
              entry.target.classList.remove("img-transition");
            }
          });
        },
        {
          threshold: "0.98",
        }
      );

      const imgBoxes = document.querySelectorAll(".gallery img");
      imgBoxes.forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);

  return (
    <section>
      <div style={{ height: "100vh", width: "100%" }}>
        {/*remaining for heading*/}
      </div>
      <div className="rs_images-container">
        <div className="gallery">
          {imageSources.map((src, index) => (
            // <div className="slide" key={index}>
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              draggable="false"
              className={(function () {
                switch (index) {
                  case 0:
                  case 3:
                  case 5:
                    return "to-right";
                    break;
                  case 2:
                  case 4:
                  case 7:
                    return "to-left";
                  case 1:
                    return "to-down";
                  case 6:
                    return "to-up";
                    break;
                }
              })()}
            />
            // </div>
          ))}
        </div>
      </div>
      <Sponsors />
      <Footer />
    </section>
  );
}
