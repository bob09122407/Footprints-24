// Technotron.js

import React, { useState, useRef } from "react";
import "../technotron.css"; // Make sure this path is correct
import icon1 from "../../../assets/images/Logo/space.png";
import icon2 from "../../../assets/images/Logo/space.png";
import icon3 from "../../../assets/images/Logo/space.png";
import icon4 from "../../../assets/images/Logo/space.png";
import icon5 from "../../../assets/images/Logo/space.png";
import icon6 from "../../../assets/images/Logo/space.png";
import Heading from "../../Common/Headings/Heading";
import { FaAmazon } from "react-icons/fa";
import Vid from "../../../assets/images/Logo/cita.mp4";
const Citadel = () => {
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
      name: "CivIQ",
      background: icon1,
      details: {
        info: [
          "Its Treasure hunt event based on immense concept and knowledge of  civil engineering.",
        ],
        rules: ["Knowledge pertaining to dept is required"],
        Members: [" Max 2"],
        Price: [" 120 Rs"],
      },
    },
    {
      name: "CAD",
      background: icon2,
      details: {
        info: [
          "In this Participants have to design a multipurpose building based on a given detailed problem statement.",
        ],
        rules:["Draw a wall thickness plan for a residential building of G+1 in the posh area in metropolitan city in residential society. Use building bye laws and follow vastu principles. Following are the required details regarding the land , location as well as family background. You have to assume number of components ( such as bedroom , kitchen ,living etc.) and size as well as orientation according to the principles of planning. PLOT SIZE : 12.5m X 18mPractising grandparents having profession of well known advocate ( Age 65 years ).Husband & wife having profession of medical field. ( Age 40-42years).One female child is in 11th std preparing for NEET. Son is State level Under19 cricketer You have all freedom of providing number of components.JUDGING CRITERIA 4 marks for size and dimensions of various components.4 marks for planning and arrangement of various components according to principles of planning.2 marks for overall drawings and planning skill."],
        Members: ["Max 4"],
        Price: ["200 Rs"],
      },
    },
    {
      name: "WWE",
      background: icon3,
      details: {
        info: [
          "It is a paper presentation event along with case study with a solution based approach.",
        ],
        rules: ["Will be declared during the event."],
        Members: ["Max 2"],
        Price: ["100 Rs"],
      },
    },
    {
      name: "Tremors Setu",
      background: icon4,
      details: {
        info: ["Participants have to make a model using  popsicle sticks"],
        Members: ["Max 4"],
        Price: ["200 Rs"],
        rules:["Dimensions of the Warren Truss • Clear Span of Truss = 65-70cm• Height of truss: 8 to 10cm. Base span should be max 2stick and other members should be 1 stick thick. Rules: • Each team should be of maximum 4 members• Materials to be used: Popsticle sticks and Fevicol of SH grade• Use of any other adhesive, etc is prohibited and participants using it will be disqualified from the event• Strings cannot be used to tie popsicle sticks• All the models must be taken for the dimension checking during the specified period of time (any entry after that won’t be accepted and would be disqualified)• No changes in the model after the dimension checking would be allowed and any team doing so without the permission of the Core Committee member would be disqualified• The decision of the judges and Core Committee will be final regarding any discrepancy on the spot or before the event Structure Specification: • Whole structure should be open-web (no bracings allowed)• No grooves allowed• Only SH grade Fevicol can be used as Glue• No type of coatings or paint are allowed on the popsicle structure Popsicle Stick:• The Popsicle sticks can be cut or trimmed to any shape or size."],
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
          title={"Technical Events for Civil and IWM Department"}
        />
        <div className="statement">
          <h4>
            The road to success is always under construction. Materials like
            bricks, cement, steel and stones are worthless when seen separately
            but when utilized to create majestic structures with firm
            foundations, reflect grandeur and awe. Citadel witnesses the most
            skilled civil engineers showcasing their technical know – how of the
            recent civil engineering discoveries.
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
                      onClick={() => toggleMenu("Members")}
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
                  {selectedMenu === "Members" && (
                    <ul>
                      {details.Members.map((spec, index) => (
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

export default Citadel;
