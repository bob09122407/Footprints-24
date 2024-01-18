
import React, { useState, useRef, useEffect } from "react";
import "./RollingSquare.css";
// import {set} from'gsap';

const Jampad = () => {
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
  
      const imgBoxes = document.querySelectorAll(".gallery img");
      imgBoxes.forEach((el) => {
        observer.observe(el);
      });
    }
  },[])

  const imageSources = [
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705585124/jampad/khs3csir5vbtslfv6mj9.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705585124/jampad/nneqgku4asvxkpjefb2t.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705585121/jampad/k8mhe00ewoqlqddmpaba.jpg",
    "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705585114/jampad/fzkp0hnpxb6qfwuu1svr.jpg",
    "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640187/Gallery/Jampad_f4edla_uyok1p.jpg",
    "src/assets/images/temp/2.jpg",
    "src/assets/images/temp/3.jpg",
    "src/assets/images/temp/4.jpg",
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

export default Jampad;
