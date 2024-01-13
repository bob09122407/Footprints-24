import React from "react";
import "./Achivements.css";
import Heading from "../../Common/Headings/Heading";
import achivementsData from "./Achievements";

function Achivements() {
  return (
    <>
      <section id="achivements" className="acheivements section-bg container">
        <div className="container">
          <Heading id="heading_achivments" title="ACHIEVEMENTS" />

          {/* Cards */}

          <div className="deck row g-5" data-aos="fade-down">
            {achivementsData.map((element, idx) => {
              return (
                <>
                  {/* Padding for last element so that it is displayed in the center on tablets */}
                  {idx == achivementsData.length - 1 ? <div className="col-md-3 d-none d-md-block d-xl-none"></div> : <></>}
                  <div
                    key={element.id}
                    className="cardBlock col-xl-4 col-md-6 col-sm-12"
                    // prettier-ignore
                    data-aos={screen.width > 1024 ? 
                              (element.id % 3 === 1 ? "fade-left" : element.id % 3 === 2 ? "fade-down" : "fade-right") :
                              (element.id % 2 === 0 ? "fade-left" : "fade-right")
                            }
                    data-aos-duration="1000"
                    data-aos-delay="150"
                  >
                    <div className="achievements-item row">
                      <div className="row">
                        <img src={element.imgSrc} className="achievements-img" alt={element.alt} />
                      </div>
                      <div className="row descrip">
                        <Heading id="achieve-head" className="descriptopic" title={element.topic} />
                        <div>
                          <p id={`mycl${element.id}`} className="content-design" data-extend="false">
                            {element.description}
                          </p>

                          {/* 
                            Do not try to do e.target instead of button ID selector.
                            If user clicks the i tag, it takes that as e.target and messes up the UI
                        */}
                          <div className="btnDiv">
                            <button
                              id={`btnAchiev${element.id}`}
                              onClick={() => {
                                var x, y;
                                x = document.querySelector(`#mycl${element.id}`);
                                y = document.querySelector(`#btnAchiev${element.id}`);
                                if (x.dataset.extend === "true") {
                                  x.dataset.extend = "false";
                                  x.style.height = "2.5em";
                                  y.innerHTML = `Read More&nbsp;<i class="fa-regular fa-circle-down"/>`;
                                } else if (x.dataset.extend === "false") {
                                  x.dataset.extend = "true";
                                  x.style.height = "fit-content";
                                  y.innerHTML = `Show Less&nbsp;<i class="fa-regular fa-circle-up"/>`;
                                }
                              }}
                              className="readmorebtn"
                            >
                              Read More&nbsp;
                              <i className="fa-regular fa-circle-down" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Achivements;
