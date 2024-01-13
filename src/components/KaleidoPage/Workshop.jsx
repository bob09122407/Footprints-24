import React, { useEffect } from "react";
import { PrevWorkshopData, CurrentWorkshopData } from "../../Data/Workshop";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Workshop.css";
import Heading from "../Common/Headings/Heading";
import Vid from "../../assets/images/Logo/c.mp4"
function Workshop() {
  useEffect(() => {
    document.title = "Workshops | FootPrints'23";
  }, []);

  return (
    <>
      <section id="Workshop">
      <div className="video_main">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          width="100%"
        >
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        <div className="container">
          {/* <p id="reveling-heading"> REVEALING SOON! </p> */}
          <Heading
            className="workshop_heading"
            id="glheading"
            title="WORKSHOPS"
          />

          {CurrentWorkshopData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="workshop_lec content">
                    <div className="about_workshop about_workshop_para1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    // data-aos-delay="100"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
                        {" "}
                        {element.content}
                      </p>
                      <p className="clock-icon">
                        <i className="fa fa-light fa-calendar"></i> &nbsp;
                        {element.date}
                      </p>
                    </div>

                    <div
                      className="workshop_img workshop_img_style"
                      data-aos="GuestAnimRight"
                    >
                      <img
                        src={element.imgSrc}
                        className="Workshop-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_workshop about_workshop_para2">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
                        {" "}
                        {element.content}
                      </p>
                      <p className="clock-icon">
                        <i className="fa fa-light fa-calendar"></i> &nbsp;
                        {element.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="workshop_lec">
                  <div
                    className="workshop_img"
                    data-aos="GuestAnimLeft"
                  >
                    <img
                      src={element.imgSrc}
                      className="Workshop-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_workshop para1"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="100"
                  data-aos-offset="400"
                  data-aos-easing="ease-in-sine">
                    <div className="workshop_heading">
                      <h3 className="workshop_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-workshop">
                      {element.content}
                    </p>
                    <p className="clock-icon">
                      <i className="fa fa-light fa-calendar"></i> &nbsp;
                      {element.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <Heading
            className="workshop_heading"
            id="glheading"
            title="PREVIOUS WORKSHOPS"
          />

          {PrevWorkshopData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="workshop_lec content">
                    <div className="about_workshop about_workshop_para1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    // data-aos-delay="100"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
                        {" "}
                        {element.content}
                      </p>
                    </div>

                    <div
                      className="workshop_img workshop_img_style"
                      data-aos="GuestAnimRight"
                    >
                      <img
                        src={element.imgSrc}
                        className="Workshop-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_workshop about_workshop_para2">
                      <div className="workshop_heading">
                        <h3 className="workshop_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-workshop">
                        {" "}
                        {element.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="workshop_lec">
                  <div
                    className="workshop_img"
                    data-aos="GuestAnimLeft"
                  >
                    <img
                      src={element.imgSrc}
                      className="Workshop-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_workshop para1"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="100"
                  data-aos-offset="400"
                  data-aos-easing="ease-in-sine">
                    <div className="workshop_heading">
                      <h3 className="workshop_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-workshop">
                      {element.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Sponsors />
      <Footer />
    </>
  );
}

export default Workshop;
