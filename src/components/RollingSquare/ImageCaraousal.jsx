import React, { useState, useRef, useEffect } from "react";
import "./RollingSquare.css";
// import {set} from'gsap';

const ImageCarousel = () => {
  // const trackRef = useRef(null);
  // const slider = useRef(null);
  // const sliderWrapper = useRef(null);
  // const markerWrapper = useRef(null);
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("img-transition");
  //       } else {
  //         entry.target.classList.remove("img-transition");
  //       }
  //     });
  //   },
  //   {
  //     threshold: "0.65",
  //   }
  // );

  // const imgBoxes = document.querySelectorAll(".imgBox");
  // imgBoxes.forEach((el) => {
  //   observer.observe(el);
  // });

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

  let target = 0;
  let current = 0;
  let ease = 0.075;

  useEffect(() => {
    // const slider = document.querySelector('.slider');

    // Calculate the total width of all slides
    // const totalWidth = document.querySelectorAll('.slide').length * window.innerWidth;

    // Use GSAP to create a horizontal scroll animation
    // gsap.to(slider, {
    //   scrollTrigger: {
    //     trigger: slider,
    //     start: 'top top',
    //     end: `+=${totalWidth}`, // Scroll duration based on the total width of slides
    //     scrub: 1, // Controls the speed of the scroll
    //   },
    //   x: `-${totalWidth}px`, // Move the slider horizontally
    //   ease: 'none', // Linear easing for a smooth scroll effect
    // });
    // gsap.registerPlugin(ScrollTrigger);

    // let sections = gsap.utils.toArray(".slide");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".slide-wrapper",
    //     pin: ".slider",
    //     pinSpacing: true,
    //     scrub: 1,
    //     end: "+=3000",
    //   },
    // });

    // gsap.to(".next-block", {
    //   backgroundColor: "tomato",
    //   scrollTrigger: {
    //     trigger: ".next-block",
    //     pinnedContainer: ".main",
    //     start: "top 50%",
    //     toggleActions: "play none reset none",
    //   },
    // });

    // gsap.registerPlugin(ScrollTrigger);
    // let sections = gsap.utils.toArray(".slide");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //   },
    // });
    const sliderWrapper = document.querySelector(".slide-wrapper");
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const markerWrapper = document.querySelector(".marker-wrapper");

    let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    // // function updateActiveSliderNumber() {}

    // gsap.to(".images-container", {
    //   scrollTrigger: {
    //     trigger: ".images-container",
    //     start: "top top", // When the top of the trigger element reaches the center of the viewport
    //     pin: true, // Pin the element
    //     scrub: 1, // Use scrubbing for a smoother effect
    //   },
    // });

    function update() {
      current = lerp(current, target, ease);
      gsap.set(".slide-wrapper", {
        x: -current,
      });
      let moveRatio = current / maxScroll;
      let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
      let markerMove = 70 + moveRatio * markerMaxMove;
      gsap.set(".marker-wrapper", {
        x: markerMove,
      });

      // console.log("Hello");
      // requestAnimationFrame(update);
    }

    window.addEventListener("resize", () => {
      maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
    });

    document.querySelector('.images-container').addEventListener("wheel", (e) => {
      target += e.deltaY;
      target = Math.max(0, target);
      target = Math.min(maxScroll, target);
      update();
    });

  }, []);

  return (
    <div className="images-container">
      <div className="marker-wrapper">
        <div className="marker">
          <div className="grab">
            {/* <img src="src/assets/images/temp/music.png" alt="" /> */}
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slide-wrapper">
          {imageSources.map((src, index) => (
            <div className="slide" key={index}>
              <img
                className="concert-image"
                src={src}
                alt={`Image ${index + 1}`}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
