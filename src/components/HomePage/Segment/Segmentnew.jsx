import React, { useRef, useEffect } from "react";
import "./segmentnew.css"; // Replace with your CSS file
// import phoo from "../../../assets/images/Logo/center.png"
// import phoo from "../../../assets/images/Logo/segment.png"
import Heading from "../../Common/Headings/Heading";

const Slider = () => {
  const slideRef = useRef(null);
  const nextSlide = () => {
    const lists = slideRef.current.querySelectorAll(".item-seg");
    slideRef.current.appendChild(lists[0].cloneNode(true));
    slideRef.current.removeChild(lists[0]);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  };

  const prevSlide = () => {
    const lists = slideRef.current.querySelectorAll(".item-seg");
    slideRef.current.prepend(lists[lists.length - 1].cloneNode(true));
    slideRef.current.removeChild(lists[lists.length - 1]);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  };

  let intervalId;

  useEffect(() => {
    intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="main-segment">
      <div className="head">
        <Heading className="kaleido_heading" id="glheading" title="SEGMENTS" />
      </div>
      <div className="container-seg">
        <div id="slide" ref={slideRef}>
          <div
            className="item-seg"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/du1tas6pe/image/upload/v1705639940/segments/tihoc8phxiwacbl6wmcd.png)`,
            }}
          >
            <div className="content">
              <div className="name">Footprints Stock Exchange</div>
              {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
              <button>Inversion</button>
              <button>Pitcher's Project</button>
            </div>
          </div>
          <div
            className="item-seg"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/du1tas6pe/image/upload/v1705639941/segments/dxxo6qup3tjckntgkflt.png)`,
            }}
          >
            <div className="content">
              <div className="name">Technotron</div>
              {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
              <button>Cybernetics</button>
              <button>Macheanema</button>
              <button>Sanganikee</button>
              <button>Citadel</button>
              <button>Rasayanam</button>
              <button>Lycra</button>
              <button>TechX</button>
            </div>
          </div>
          <div
            className="item-seg"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/du1tas6pe/image/upload/v1705639940/segments/aafofhgqrw98mnsh4ixp.png)`,
            }}
          >
            <div className="content">
              <div className="name">Kaleidoscope</div>
              {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
              <button>Guest Lectures</button>
              <button>Workshops</button>
              <button>Techzibition</button>
              <button>Taleidoscope</button>
            </div>
          </div>
          <div
            className="item-seg"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/du1tas6pe/image/upload/v1705639941/segments/zypzsigjwnyfmmvoerkh.png)`,
            }}
          >
            <div className="content">
              <div className="name">Rolling Square</div>
              {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
              <button>Concert</button>
              <button>Informals</button>
              <button>Jampad</button>
            </div>
          </div>
          <div
            className="item-seg"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/du1tas6pe/image/upload/v1705638069/segments/wapb8ls74dje81z5zpmy.png)`,
            }}
          >
            <div className="content">
              <div className="name">Quest</div>
              {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
              <button>12th Batallian</button>
              <button>War of Words</button>
              <button>Squid Games</button>
              <button>Shooting Arcade</button>
              <button>Lost</button>
              <button>Air Balls</button>
            </div>
          </div>

          <div
            className="item-seg"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/du1tas6pe/image/upload/v1705639940/segments/hnzveh0zifwicjmtkyqi.png)`,
            }}
          >
            <div className="content">
              <div className="name">Virtuosity</div>
              {/* <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div> */}
              <button>BGMI</button>
              <button>Valorant</button>
            </div>
          </div>
          {/* ... Add other item-segs as needed */}
        </div>
        <div className="buttons-seg">
          <button id="prev" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left button1"></i>
          </button>
          <button id="next" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right button2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
