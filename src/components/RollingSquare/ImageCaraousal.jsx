import React, { useState, useRef, useEffect } from "react";
import "./RollingSquare.css";
const ImageCarousel = () => {
  const trackRef = useRef(null);
  let mouseDownAt = 0;
  let prevPercentage = 0;
  let percentage = 0;

  const handleOnDown = (e) => {
    mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    mouseDownAt = 0;
    prevPercentage = percentage;
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    // console.log(maxDelta);

    const nextPercentageUnconstrained =
      prevPercentage + (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    percentage = nextPercentage;

    trackRef.current.style.transform = `translate(${50 + nextPercentage}%, 0%)`;
    console.log("Hwll");

    const images = document.querySelectorAll(".concert-image");
    for (const image of images) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  useEffect(() => {
    const track = trackRef.current;

    track.addEventListener("mousedown", handleOnDown);
    track.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      track.removeEventListener("mousedown", handleOnDown);
      track.removeEventListener("touchstart", (e) =>
        handleOnDown(e.touches[0])
      );
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e) => handleOnUp(e.touches[0]));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, []);

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
        <img
          key={index}
          className="concert-image"
          src={src}
          alt={`Image ${index + 1}`}
          draggable="false"
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
