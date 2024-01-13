// Technotron.js

import React, { useState, useRef } from "react";
import "../technotron.css"; // Make sure this path is correct
import icon1 from "../../../assets/images/Logo/chemohustle.png";
import icon2 from "../../../assets/images/Logo/synopsis.png";
import icon3 from "../../../assets/images/Logo/chemaze.png";
import icon4 from "../../../assets/images/Logo/chemx.png";
import Heading from "../../Common/Headings/Heading";
import { FaAmazon } from "react-icons/fa";
import Vid from "../../../assets/images/Logo/rasa.mp4";
const Rasayanam = () => {
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
      name: "Chem-o-Hustle",
      background: icon1,
      details: {
        info: [
          "You have to design a Car which should be powered by a chemical reaction ",
          "For eg: Soda and vinegar",
        ],
        rules: [
          "- Dimensions: 50x40x30 cm",
          "Maximum 5 minutes would be given to the participant and the car must be autonomous and should not be remote controlled.",
        ],
        Member: ["- Announce before two days of event"],
        Price: ["Maximum participation: 3", "Price: ₹150"],
      },
    },
    {
      name: "Synopsis",
      background: icon2,
      details: {
        info: [
          "It is a paper presentation event in which you have to select a topic based on Chemical Engineering or Pharmacy field.",
        ],
        rules: [""],
        Member: ["- Announce few days befor event"],
        Price: ["Maximum Participation: 2", "Price: ₹120"],
      },
    },
    {
      name: "Chemaze",
      background: icon3,
      details: {
        info: ["It is a knowledge based event."],
        rules: [
          "- It is an online event",
          "- Dates:  24th Feb to 26th Feb",
          "- There will 3 rounds in the event",
          "- In the first round participants have to pitch their design",
          "- In the second round they have to present their progress",
          "- And in final round there will be submission and QnA based on the submission",
          "- Visit the link provided to go to the website of HackPrints 2.0",
        ],
        Member: ["- Announce few days befor event"],
        Price: ["Compulsory 2 participants should be there.", "Price:  ₹120"],
      },
    },

    {
      name: "ChemX",
      background: icon4,
      details: {
        info: [
          "Participant has to make a working or non working model based on the chemical field",
        ],
        rules: [""],
        Member: ["- Announce few days befor event"],
        Price: ["Maximum participants: 3", "Price: ₹150"],
      },
    },
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
          title={"Technical Events for Chemical and Pharmacy Department"}
        />
        <div className="statement">
          <h4>
            Were you the nerdy Dexter in your childhood, obsessed with the
            thought of chemicals and test tubes? Do your eyes light up every
            time you see a solution change its colour? If yes, then Rasayanam
            welcomes you to the world of the periodic tables and gives you the
            opportunity to solve their mind-boggling riddles and puzzles and
            various tasks which will leave you stumped in the mystery of
            chemistry!
          </h4>
        </div>
      </div>
      <div className="main-tech">
        <div className="tech" data-aos="zoom-in-up">
          {iconsRow1.map(({ name, background, details }, index) => (
            <div
              key={index}
              className="moon-icon"
              data-name={name}
              style={{
                backgroundImage: `url(${background})`,
                ...details.styles,
              }}
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
                      onClick={() => toggleMenu("Member")}
                    >
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Member</span>
                        </div>
                      </div>
                    </li>
                    <li style={{ "--i": 6 }} onClick={() => toggleMenu("Price")}>
                      <div className="a">
                        <div className="ripple-circle">
                          <span>Price</span>
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
                  {selectedMenu === "Member" && (
                    <ul>
                      {details.Member.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                  {selectedMenu === "Price" && (
                    <ul>
                      {details.Price.map((Price, index) => (
                        <li key={index}>{Price}</li>
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

export default Rasayanam;
