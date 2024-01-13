// Technotron.js

import React, { useState, useRef } from "react";
import "../EventPage/technotron.css"; // Make sure this path is correct
import icon1 from "/src/assets/images/Logo/space.png";
import icon2 from "/src/assets/images/Logo/space.png";
import icon3 from "/src/assets/images/Logo/space.png";
import icon4 from "/src/assets/images/Logo/space.png";
import icon5 from "/src/assets/images/Logo/space.png";
import icon6 from "/src/assets/images/Logo/space.png";
import Vid from "/src/assets/images/Logo/c.mp4";
import Heading from "../Common/Headings/Heading";

const Virtuosity = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(); // Set default tab
  const [selectedMenu, setSelectedMenu] = useState(null);
  const detailsRef = useRef(null);
  const [activeIcons, setActiveIcons] = useState({});
  // const sectionRef= useRef(null);

  const toggleMenu = (menu) => {
    if (selectedMenu === menu) {
      // If clicking on the same tab and menu, toggle isActive only
      setIsActive(!isActive);
    } else {
      // If clicking on a different tab or menu, update both selectedTab and selectedMenu
      setIsActive(true);
      // setSelectedTab(tab);
      setSelectedMenu(menu);
      // Scroll to details section
      // detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggle = (tabname) => {
    setSelectedTab(tabname);

    const sectionRef = document.getElementById(`${tabname.toLowerCase()}`);
    if (sectionRef) {
      const offset = 250; // You can adjust this value based on your layout
      const offsetTop =
        sectionRef.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const iconsRow1 = [
    {
      name: "BGMI",
      background: icon1,
      details: {
        info: [
          "This event tests your programming skills. The challenge is to code the real-life problems in the computer world using any programming language interviewing different stages of coding and scoring the most among them",
        ],
        rules: [
          "- No help from internet is allowed",
          "- Programming languages preferred C, C++, C#, python, java etc",
          "-	Criteria for qualification in round 2 and 3 will be filtered by the ranking given to each coder by team footprints",
          "-	Event will take place in the computer lab of the faculty, so no laptop is required from the participant",
          "-	Event will take place in the computer lab of the faculty, so no laptop is required from the participant",
        ],
        specs: ["- Announce before two days of event"],
        team: ["- Individual Participation (Compulsory)"],
      },
    },
    {
      name: "Valorent",
      background: icon2,
      details: {
        info: [
          "Participants will have to build a web/mobile application and incorporate the feature asked based on iOS/Windows or Android platform or any web technologies. Theme and design essentials for the website will be provided to them beforehand",
        ],
        rules: [
          "- Participants have to strictly design the web/mobile application based on the theme and design provided.",
          "- 36 hours will be given to complete the whole application",
          "-	Questions based on the designed application may be asked by the judges",
          "- Knowledge of frontend as well as backend is required",
          "- Use of any technology is allowed",
          "- Participants must bring their own laptops and internet, charging points will be provided",
          "- Final decision of judging criteria lies in the hands of team FootPrints",
        ],
        specs: ["- Announce few days befor event"],
        team: ["- Max 4"],
      },
    }
  ];

  const getSelectedDetails = () => {
    const selectedIcon = [...iconsRow1].find(
      (icon) => icon.name === selectedTab
    );
    return selectedIcon ? selectedIcon.details : null;
  };

  const selectedDetails = getSelectedDetails();

  return (
    <div className="events_main">
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
      <div className="text_info">
        <Heading
          className="kaleido_heading"
          id="glheading"
          title={"Technical Events for Computer and IT Department"}
        />
        <div className="statement">
          <h4>
            {" "}
            Walking on water and developing software from scratch is easy only
            if both are frozen. It's hard enough to find an error in your code
            when you're looking for it, but it's even harder when you've assumed
            your code is error-free. From testing coding and decoding abilities,
            to programming skills and technical buzzhow, Cybernetics is the
            ultimate showdown arena. The logarithms are set, codes are built,
            but the question is will you be the first one to match it?
          </h4>
        </div>
      </div>
      <div className="main-tech">
        <div className="tech">
          {iconsRow1.map(({ name, background, details }, index) => (
            <div
              key={index}
              className="moon-icon"
              data-name={name}
              style={{
                backgroundImage: `url(${background})`,
                ...details.styles,
              }}
              data-aos="zoom-in-up"
              onClick={() => toggle(name)}
            ></div>
          ))}
        </div>
      </div>
      <div className="main_section">
        {iconsRow1.map(({ name, details }, index) => (
          <div
            key={index}
            className={`details_each ${selectedTab === name ? "active" : ""}`}
            data-aos="zoom-in-up"
            id={`${name.toLowerCase()}`}
          >
            <Heading className="kaleido_heading" id="glheading" title={name} />

            <div className="details_each_" data-aos="zoom-in-up">
              <h4>Problem Statement</h4>
              <ul>
                {details.info.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>

            <div className={`containereve ${isActive ? "active" : ""}`}>
              <div
                className="toggle-menu"
                onClick={() => setIsActive(!isActive)}
              >
                <div className="ripple-circle">
                  <span></span>
                </div>
              </div>
              <ul className="menu" data-aos="zoom-in-up">
                {details && (
                  <>
                    <li
                      style={{ "--i": 1 }}
                      onClick={() => toggleMenu("rules")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Rules</span>
                        </div>
                      </div>
                    </li>
                    <li
                      style={{ "--i": 5 }}
                      onClick={() => toggleMenu("specs")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Specs</span>
                        </div>
                      </div>
                    </li>
                    <li style={{ "--i": 6 }} onClick={() => toggleMenu("team")}>
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Team</span>
                        </div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Additional Details */}
            <div
              ref={detailsRef}
              className={`additional-details ${isActive ? "visible" : ""}`}
            >
              {details && (
                <div className="details-content">
                  <h1>{selectedMenu}</h1>
                  {selectedMenu === "rules" && (
                    <ul>
                      {details.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "specs" && (
                    <ul>
                      {details.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "team" && (
                    <ul>
                      {details.team.map((team, index) => (
                        <li key={index}>{team}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Virtuosity;
