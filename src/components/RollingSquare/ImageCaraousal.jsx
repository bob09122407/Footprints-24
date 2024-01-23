
import React, { useEffect } from "react";
import "./RollingSquare.css";

const ImageCarousel = ({images}) => {

  useEffect(()=>{
    if (window.innerWidth<619) {
      // console.log("Hello");
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
  
      const imgBoxes = document.querySelectorAll(".rs_images-container .gallery img");
      imgBoxes.forEach((el) => {
        observer.observe(el);
      });
    }
  },[])

  return (
    <div className="rs_images-container">
      <div className="gallery">
        {images?.map((src, index) => (
          // <div className="slide" key={index}>
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            draggable="false"
            className={""}
          />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
