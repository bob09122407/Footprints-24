
import React, { useState, useRef, useEffect } from "react";
import "./RollingSquare.css";
// import {set} from'gsap';

const ImageCarousel = () => {
  // const trackRef = useRef(null);
  // const slider = useRef(null);
  // const sliderWrapper = useRef(null);
  // const markerWrapper = useRef(null);
  useEffect(()=>{
    if (window.innerWidth<619) {
      console.log("Hello");
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
          threshold: "0.98",
        }
      );
  
      const imgBoxes = document.querySelectorAll(".rs_images-container .gallery img");
      imgBoxes.forEach((el) => {
        observer.observe(el);
      });
    }
  },[])

  const imageSources = [
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705584701/concert/sm9c4glzssszuzkiy7wx.jpg",
    "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640244/Gallery/Jasleen_Royal_nlwvns_pjsgbn.jpg",
    "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640130/Gallery/Beat_Cracker_auqvjn_zy24er.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705584731/concert/zvlgxia6rfkdnqqsacny.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705584730/concert/gwsxdnrsh6kfuwkv1qth.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705584700/concert/zmmfk7oz5wuxohwxivfq.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705584701/concert/uk2w8qc2lqrbg3l0twhe.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705584701/concert/kqt6lua3pqa4lh65hdsy.jpg",
    // Add other image sources here
  ];

  let target = 0;
  let current = 0;
  let ease = 0.075;

  return (
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
  );
};

export default ImageCarousel;
