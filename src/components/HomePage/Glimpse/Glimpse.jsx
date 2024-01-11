import React from "react";
// import Img from "../../../assets/images/Insta-icon3.png";
import Heading from "../../Common/Headings/Heading";
import "./Glimpse.css";

const Glimpse = () => {
  return (
    <>
      <Heading id="heading_glimpse" title="CATCH THE GLIMPSE" />
      <div className="yt-videos">
        <div
          className="glimpse col-xl-4 col-sm-12 col-md-6"
          data-aos={screen.width >= 1150 ? "fade-up" : "slide-right"}
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/8WBh9tEzzeQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="glimpse col-xl-4 col-sm-12 col-md-6"
          data-aos={screen.width >= 1150 ? "fade-down" : "slide-left"}
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/6p5UVHeReA0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Padding for last element so that it is displayed in the center on tablets */}
        <div className="col-md-3 d-none d-md-inline-block d-xl-none"></div>
        <div
          className="glimpse col-xl-4 col-sm-12 col-md-6"
          data-aos={screen.width >= 536 ? "fade-up" : "slide-right"}
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <iframe
            width="373"
            height="210"
            src="https://www.youtube.com/embed/W-vxQZUhKDw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Heading id="heading_flashback" title="FLASHBACK FRIDAY" />
      <div className="flash-video">
        <div
          className="link col-sm-12 col-md-6 col-xl-4"
          data-aos="slide-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <a target="_blank" href="https://www.instagram.com/reel/ChuvQ05g7gI/?utm_source=ig_web_copy_link">
            <img
              src="https://res.cloudinary.com/dg894hntd/image/upload/v1703326648/Jasleen_Royal_thumbnail_xkevdc.jpg"
              className="imagef"
              alt=""
              width="300px"
            />
            <div className="ig-overlay">
              <img src="https://res.cloudinary.com/dtddbqymx/image/upload/v1674675468/Insta-icon3_z0wufu.png" alt="" />
            </div>
          </a>
        </div>
        <div
          className="link col-sm-12 col-md-6 col-xl-4"
          data-aos={screen.width > 1024 ? "slide-up" : "slide-left"}
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <a target="_blank" href="https://www.instagram.com/reel/Cg3PD3QKGj7/?utm_source=ig_web_copy_link">
            <img
              src="https://res.cloudinary.com/dg894hntd/image/upload/v1703326649/FSR_Thumbnail_wnk7nj.jpg"
              className="imagef"
              alt=""
              width="300px"
            />
            <div className="ig-overlay">
              <img src="https://res.cloudinary.com/dtddbqymx/image/upload/v1674675468/Insta-icon3_z0wufu.png" alt="" />
            </div>
          </a>
        </div>
        {/* Padding for last element so that it is displayed in the center on tablets */}
        <div className="col-md-3 d-none d-md-inline-block d-xl-none"></div>
        <div
          className="link col-sm-12 col-md-6 col-xl-4"
          data-aos={screen.width > 1024 ? "slide-left" : screen.width > 767 ? "slide-up" : "slide-right"}
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <a target="_blank" href="https://www.instagram.com/reel/CeVyZm6KR3S/?utm_source=ig_web_copy_link">
            <img
              src="https://res.cloudinary.com/dg894hntd/image/upload/v1703326761/Immortalise_memory_thumbnail_vbfkxq.jpg"
              className="imagef"
              alt=""
              width="300px"
            />
            <div className="ig-overlay">
              <img src="https://res.cloudinary.com/dtddbqymx/image/upload/v1674675468/Insta-icon3_z0wufu.png" alt="" />
            </div>
          </a>
        </div>
      </div>
      <img src="" alt="" />
    </>
  );
};

export default Glimpse;
