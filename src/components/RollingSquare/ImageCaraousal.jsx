import React, { useState, useRef, useEffect } from "react";
import "./RollingSquare.css";
import { InView, observe } from "react-intersection-observer";
const ImageCarousel = () => {
  const trackRef = useRef(null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("img-transition");
        } else {
          entry.target.classList.remove("img-transition");
        }
      });
    },
    {
      threshold: "0.9",
    }
  );

  const imgBoxes = document.querySelectorAll(".imgBox");
  imgBoxes.forEach((el) => {
    observer.observe(el);
  });

  const imageSources = [
    "src/assets/images/temp/1.jpg",
    "src/assets/images/temp/2.jpg",
    "src/assets/images/temp/3.jpg",
    "src/assets/images/temp/4.jpg",
    "src/assets/images/temp/1.jpg",
    "src/assets/images/temp/2.jpg",
    "src/assets/images/temp/3.jpg",
    "src/assets/images/temp/4.jpg",
    // Add other image sources here
  ];

  return (
    <div className="image-track" ref={trackRef}>
      {imageSources.map((src, index) => (
        // <div key={index} className="img-cont">
          <div className="imgBox" key={index}>
            <img
              className="concert-image"
              src={src}
              alt={`Image ${index + 1}`}
              draggable="false"
            />
            <img
              className="concert-image"
              src={src}
              alt={`Image ${index + 1}`}
              draggable="false"
            />
            <img
              className="concert-image"
              src={src}
              alt={`Image ${index + 1}`}
              draggable="false"
            />
            <img
              className="concert-image"
              src={src}
              alt={`Image ${index + 1}`}
              draggable="false"
            />
          </div>
        // </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
