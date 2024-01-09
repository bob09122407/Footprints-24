import React, { useEffect } from "react";
import HistoryData from "../../Data/HistoryData";
import Heading from "../Common/Headings/Heading";
import "./HistoryPage.css";

function HistoryPage() {
  useEffect(() => {
    document.title = "History | FootPrints'23";
  }, []);

  useEffect(() => {
    (function ($) {
      function doAnimation() {
        let prevScrollY = 0;
        let progressBar = $(".ag-timeline_line-progress");
        let branches = $(".branch");
        $(window).on("scroll", function () {
          //For Progress Bar
          let currentScrollY = $(this).scrollTop();

          progressBar.css(
            "height",
            (progressBar.height() + (currentScrollY - prevScrollY)/2 )+ "px"
          );
          

          prevScrollY = currentScrollY;

          // For Branch
          branches.each(function (index, branch) {
            // console.log(progressBar.offset().top+progressBar.height(), branch.offsetTop);
            if (
              progressBar.offset().top + progressBar.height() >=
              $(branch).offset().top
            ) {
              // $(branch).find("path").animate({
              //   strokeDasharray:250
              // },"fast");
              $(branch).find("path").addClass("path-animate");
            } else {
              $(branch).find("path").removeClass("path-animate");
            }
          });
        });
        // requestAnimationFrame(doAnimation);
      }
      
      doAnimation();
      // requestAnimationFrame(doAnimation);

    })(jQuery);
  }, []);

  return (
    <>
      <section id="history">
        <div className="history_header_img" id="parent_div">
          <div className="text-on-image-history">
            <Heading id="history_heading" title="HISTORY" />
          </div>
        </div>

        <div className="ag-timeline-block">
          <section className="ag-section">
            <div className="ag-format-container">
              <div className="js-timeline ag-timeline">
                <div className="js-timeline_line ag-timeline_line">
                  <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
                </div>

                <div className="timeline-list">
                  {HistoryData.map((element, index) => {
                    return (
                      <div className="timeline-item" key={index}>
                        <div>
                          <div className="main-content">
                            <div className="timeline-header">
                              <h3 className="timeline-heading">
                                {element.heading}
                              </h3>
                              <div className="timeline-year">
                                Footprints'{element.year}
                              </div>
                            </div>
                            <div className="timeline-content">
                              {element.description}
                            </div>
                          </div>
                          <div className="branch">
                            <svg
                              width="202"
                              height="133"
                              viewBox="0 0 202 133"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 128.946C144.205 131.963 58.4037 8.0224 201 4"
                                stroke="white"
                                stroke-width="3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default HistoryPage;

#history{
    overflow-x: hidden;
  
  }
  
  @font-face {
    font-family: 'ESL Legend';
    src: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Light.eot);
    src: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Light.eot#iefix) format("embedded-opentype"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Light.woff2) format("woff2"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Light.woff) format("woff"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Light.ttf) format("truetype"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Light.svg#eicon) format("svg");
    font-style: normal;
    font-weight: 300;
  }
  
  @font-face {
    font-family: 'ESL Legend';
    src: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Regular.eot);
    src: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Regular.eot#iefix) format("embedded-opentype"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Regular.woff2) format("woff2"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Regular.woff) format("woff"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Regular.ttf) format("truetype"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Regular.svg#eicon) format("svg");
    font-style: normal;
    font-weight: normal;
  }
  
  @font-face {
    font-family: 'ESL Legend';
    src: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Bold.eot);
    src: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Bold.eot#iefix) format("embedded-opentype"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Bold.woff2) format("woff2"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Bold.woff) format("woff"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Bold.ttf) format("truetype"),
      url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/fonts/legend/ESLLegend-Bold.svg#eicon) format("svg");
    font-style: normal;
    font-weight: bold;
  }
  
  .history_header_img{
      position: relative;
      width: 100%;
      height: 400px;
      background-color: #1b1b1b77;
  }
  .text-on-image-history{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 500px) {
      .history_header_img{
          height: 300px;
      }
  
  }
  
  #history_heading{
    border-bottom: none;
    font-weight: 600;
  }
  .ag-timeline-block img {
    max-width: 100%;
  }
  
  .ag-format-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  
    position: relative;
  }
  /*-----------------------------------------*/
  .timeline-list{
    display: flex;
    flex-direction: column;
    justify-content: center;  
    gap: 5em;
    margin-top: 10em;
  }
  
  .timeline-item{
    color: #FFF;
    display: flex;
    gap: 10em;
  }
  
  .timeline-header{
    display: flex;
    position: relative;
  }
  
  .timeline-heading{
    position: relative;
    min-width: 100%;
    z-index: 10;
    margin-top: 10px;
  }
  
  .timeline-header .timeline-year{
    height: 45px;
    display: inline-block;
    margin-left: auto;
    margin-right: 10%;
    position: relative;
    transform: translate(-105%,-50%);
    background-color: #0f0f0f;
    z-index: 1;
    padding: 0px 5px;
  }
  
  .timeline-item > div{
    width: 50%;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .main-content{
    padding: 10px 10px;
    max-width: calc(70%);
    border: 1px solid gray;
    z-index: 20;
    background-color: #0f0f0f;
    position: relative;
  }
  
  .branch{
    display: block;
    flex-grow: 1;
    /* border-top-left-radius: 100%; */
  }
  
  
  .branch{
    position: absolute;
    z-index: 1;
  }
  
  .timeline-item:nth-child(odd) > div .branch{
    transform: translateY(-50%) scale(1, 1);
    right: 0;
  }
  
  .timeline-item:nth-child(even) > div .branch{
    transform: translateY(-50%) scale(-1, 1);
    left: 0;
  }
  
  .timeline-item:nth-child(odd), .timeline-item:nth-child(odd) > div{
    flex-direction: row;
  }
  .timeline-item:nth-child(even), .timeline-item:nth-child(even) > div{
    flex-direction: row-reverse;
  }
  
  
  .timeline-item path{
    stroke: #8338ec;
    stroke-dashoffset: 500;
    stroke-dasharray: 500;
    transition: all 900ms ease-in;
  }
  
  .timeline-item path.path-animate{
    stroke-dasharray:252;
  }
  
  .branch{
    transform: scale(0.5,0.5);
  }
  
  
  /*-----------------------------------------*/
  
  .ag-timeline-block {
    padding: 50px 0 200px 0; /*important*/
  }
  
  .ag-timeline_title-box {
    padding: 0 0 30px;
  
    text-align: center;
  }
  
  .ag-timeline_tagline {
    font-size: 40px;
    color: rgb(84, 89, 95);
  }
  
  .ag-timeline_title {
    background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/bg.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    text-fill-color: transparent;
    color: transparent;
  
    font-size: 80px;
  }
  
  .ag-timeline_item {
    margin: 0 0 50px;
  
    position: relative;
  }
  
  .ag-timeline_item:nth-child(2n) {
    text-align: right;
  }
  
  .ag-timeline {
    display: inline-block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  
    position: relative;
  }
  
  .ag-timeline_line {
    width: 2px;
    /* background-color: #393935; */
  
  
    position: absolute;
    top: 2px;
    left: 50%;
    bottom: 0;
    background-color: #FFF;
    /* overflow-y: hidden; */
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  
  .ag-timeline_line-progress {
    width: 100%;
    height: 0px;
    max-height: calc(100%);
    position: absolute;
    background: #8338ec;
    border-radius: 100px;
    box-shadow: 0 0 30px 4px #7371fc;
    transform-origin: left;
    animation: animate 8s linear infinite;
    z-index: 100;
  }
  
  .ag-timeline-card_box {
    padding: 0 0 20px 50%;
  }
  
  .ag-timeline_item:nth-child(2n) .ag-timeline-card_box {
    padding: 0 50% 20px 0;
  }
  
  .ag-timeline-card_point-box {
    display: inline-block;
    margin: 0 14px 0 -28px;
  }
  
  .ag-timeline_item:nth-child(2n) .ag-timeline-card_point-box {
    margin: 0 -28px 0 14px;
  }
  
  .ag-timeline-card_point {
    height: 50px;
    line-height: 50px;
    width: 50px;
    border: 3px solid var(--footer-icon-color);
    background-color: #1d1d1b;
  
    text-align: center;
    font-family: 'ESL Legend', sans-serif;
    font-size: 20px;
    color: #FFF;
  
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  
  .js-ag-active .ag-timeline-card_point {
    color: #1d1d1b;
    background-color: var(--footer-icon-color);
  }
  
  .ag-timeline-card_meta-box {
    display: inline-block;
  }
  
  .ag-timeline-card_meta {
    margin: 10px 0 0;
  
    font-family: 'ESL Legend', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: var(--icon-color);
  }
  
  .ag-timeline-card_item {
    display: inline-block;
    width: 45%;
    margin: -77px 0 0;
    background-color: var(--card-history-background);
  
    opacity: 0;
  
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
    -moz-box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
    -o-box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
  
    -webkit-transition: -webkit-transform 1.5s, opacity 1s;
    -moz-transition: -moz-transform 1.5s, opacity 1s;
    -o-transition: -o-transform 1.5s, opacity 1s;
    transition: transform 1.5s, opacity 1s;
  
    position: relative;
  
    /* background: white; */
    border-radius: 5px;
    box-shadow:var(--card-shadow);
    border: var(--card-border);
  }
  
  .ag-timeline_item:nth-child(2n+1) .ag-timeline-card_item {
    -webkit-transform: translateX(-200%);
    -moz-transform: translateX(-200%);
    -ms-transform: translateX(-200%);
    -o-transform: translateX(-200%);
    transform: translateX(-200%);
  
    /* box-shadow: 4px -7px 4px #525252, inset 4px -4px 4px #524e4e; */
  
  }
  
  .ag-timeline_item:nth-child(2n) .ag-timeline-card_item {
    -webkit-transform: translateX(200%);
    -moz-transform: translateX(200%);
    -ms-transform: translateX(200%);
    -o-transform: translateX(200%);
    transform: translateX(200%);
  }
  
  .js-ag-active.ag-timeline_item:nth-child(2n+1) .ag-timeline-card_item,
  .js-ag-active.ag-timeline_item:nth-child(2n) .ag-timeline-card_item {
    opacity: 1;
  
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  
  .ag-timeline-card_arrow {
    height: 18px;
    width: 18px;
    margin-top: 20px;
    background-color: var(--card-history-background);
  
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
  
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  
    /* background: white; */
  }
  
  .ag-timeline_item:nth-child(2n+1) .ag-timeline-card_arrow {
    margin-left: calc(-18px / 2);
    margin-right: calc(-18px / 2);
  
    border-top: 1px solid #282828;
    border-right: 1px solid  #282828;
    
  }
  
  .ag-timeline_item:nth-child(2n) .ag-timeline-card_arrow {
    margin-left: -10px;
  
    right: auto;
    left: 0;
  
    border-bottom: 1px solid #282828;
    border-left: 1px solid  #282828;
  }
  
  .ag-timeline-card_img {
    width: 100%;
  }
  
  .ag-timeline-card_info {
    padding: 20px 30px;
  }
  
  .ag-timeline-card_title {
    display: none;
    margin: 10px 0 0;
  
    font-family: 'ESL Legend', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: var(--yellow-to-white);
  }
  
  .ag-timeline-card_desc {
    line-height: 1.45;
  
    font-size: 16px;
    color: var(--white);
  }
  .ag-timeline-card_desc p{
    text-transform: none;
  }
  
  @media only screen and (max-width: 979px) {
    /* .ag-timeline_line {
      left: 30px;
    } */
  
    .ag-timeline_item:nth-child(2n) {
      text-align: left;
    }
  
    .ag-timeline-card_box,
    .ag-timeline_item:nth-child(2n) .ag-timeline-card_box {
      padding: 0 0 20px;
    }
  
    .ag-timeline-card_meta-box {
      display: none;
    }
  
    .ag-timeline-card_point-box,
    .ag-timeline_item:nth-child(2n) .ag-timeline-card_point-box {
      margin: 0 0 0 8px;
    }
  
    .ag-timeline-card_point {
      height: 40px;
      line-height: 40px;
      width: 40px;
    }
  
    .ag-timeline-card_item {
      width: auto;
      margin: -65px 0 0 75px
    }
  
    .ag-timeline_item:nth-child(2n+1) .ag-timeline-card_item,
    .ag-timeline_item:nth-child(2n) .ag-timeline-card_item {
      -webkit-transform: translateX(200%);
      -moz-transform: translateX(200%);
      -ms-transform: translateX(200%);
      -o-transform: translateX(200%);
      transform: translateX(200%);
    }
  
    .ag-timeline_item:nth-child(2n+1) .ag-timeline-card_arrow {
      right: auto;
      left: 0;
    }
  
    .ag-timeline-card_title {
      display: block;
    }
  
    .ag-timeline-card_arrow {
      margin-top: 12px;
    }
  }
  
  @media only screen and (max-width: 767px) {
    .ag-format-container {
      /* width: 96%; */
    }
  
    .ag-timeline-card_img {
      height: auto;
      width: auto;
    }
  }
  
  @media only screen and (max-width: 639px) {
    .ag-timeline_title {
      font-size: 60px;
    }
  
    .ag-timeline-card_info {
      padding: 10px 15px;
    }
  
    .ag-timeline-card_desc {
      font-size: 14px;
    }
  }
  
  @media only screen and (max-width: 479px) {}
  
  @media (min-width: 768px) and (max-width: 979px) {
  
  
  }
  
  @media (min-width: 980px) and (max-width: 1161px) {
  
  
  }
  
  @media (max-width:1000px) {
      .branch{
        display: none;
      }
  
  
      .timeline-item > div{
        width: 100%;
        justify-content: center;
      }
  
  
  
      .main-content{
        max-width: calc(100%);
      }
  
    
  }
  
  @media (min-width:1500px){
      .js-timeline{
        max-width: 1500px;
      }
  }
  
  /* added by abdeali */
  