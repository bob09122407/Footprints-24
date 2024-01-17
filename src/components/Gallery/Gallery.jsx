import React, { useEffect, useState } from "react";
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | FootPrints'23";
  }, []);

  // var [numLoaded, setLoaded] = useState(0);

  // function inrLoaded() {
  //   console.log(numLoaded);
  //   setLoaded((prevNum) => {
  //     return prevNum + 1;
  //   });
  // }

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.children);
          if (entry.isIntersecting) {
            entry.target.children[0].style.animation = "frontAnim 2s";
            entry.target.children[1].style.animation = "backAnim 2s";
            entry.target.children[1].classList.add("SheenAnimate");
            // entry.target.classList.add("img-transition");
          } 
        });
      },
      {
        threshold: "0.7",
      }
    );
  
    const imgBoxes = document.querySelectorAll(".img-card");
    imgBoxes.forEach((el) => {
      observer.observe(el);
    });
  },[]);
  

  // function animate() {
  //   // document.getElementById("img-loader").style.animation = "fadeLoader 2s";
  //   setTimeout(() => {
  //     data.forEach((item, idx) => {
  //       setTimeout(() => {
  //         document.querySelector(`#ImgCard${item.id} > .front`).style.animation = "frontAnim 2s";
  //         document.querySelector(`#ImgCard${item.id} > .back`).style.animation = "backAnim 2s";
  //         document.querySelector(`#ImgCard${item.id} > .back`).classList.add("SheenAnimate");
  //       }, 350 * idx);
  //     });
  //   }, 1000);
  // }

  let data = [
    {
      id: 1,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640244/Gallery/Jasleen_Royal_nlwvns_pjsgbn.jpg",
      title: "Rolling Squares",
      subtitle: "Concert",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 2,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640179/Gallery/Burnout_e6cqzt_nnjmbj.jpg",
      title: "Macheanema",
      subtitle: "Burnout",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 3,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640204/Gallery/Quest_mzgszb_ryo25v.jpg",
      title: "Quest",
      subtitle: "12th Battalion",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 4,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640206/Gallery/Pawan_Agarwal_shmmm4_nhx9sb.jpg",
      title: "Kaleidoscope",
      subtitle: "Guest Lecture",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },

    {
      id: 5,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640476/Gallery/FSR-gallery-changed_iokgbp.jpg",
      title: "FSR",
      subtitle: "FootPrints Social Responsibility",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },

    {
      id: 6,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640514/Gallery/Deco_hisrcz_wysauj.jpg",
      title: "College Decoration",
      subtitle: "During the Fest",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 7,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640502/Gallery/Smack_p59im9_ckixpk.jpg",
      title: "Sanganikee",
      subtitle: "SmackBotz",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 8,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640130/Gallery/Beat_Cracker_auqvjn_zy24er.jpg",
      title: "Rolling squares",
      subtitle: "Concert",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 9,
      imgSrc: "https://res.cloudinary.com/doxl5r7md/image/upload/v1666640187/Gallery/Jampad_f4edla_uyok1p.jpg",
      title: "Jampad",
      subtitle: "Open Mic",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
  ];
  return (
    <>
      <div className="gal_header_img" id="parent_div">
        <div className="text-on-image-gal">
          <Heading id="heading_gallerypage" title="GALLERY" />
        </div>
      </div>
      <section>
        <div className="card-gallery">
          {/* {numLoaded === data.length ? animate() : ""} */}
          {data.map((item) => {
            return (
              <div className="img-card" key={item.id} id={`ImgCard${item.id}`}>
                <div className="front" style={{ backgroundImage: `url(${item.cardImg})` }}>
                  {/* 
                  Either use different card url for each card or make fixed blank bg in css
                  and set text in item property
                */}
                  {/* <div className="cardText">{item.cardText}</div> */}
                </div>
                <div className="back">
                  <img src={item.imgSrc} alt=""/>
                  <div className="imgtext" style={{ textAlign: "center" }}>
                    <p className="imgtitle" style={{ fontSize: "1em" }}>
                      {item.title}
                    </p>
                    <hr />
                    <p className="imgsubtitle" style={{ fontSize: "1em" }}>
                      {item.subtitle}
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
};
export default Gallery;
